import { neon } from '@neondatabase/serverless';
import dns from 'dns';

try {
  dns.setDefaultResultOrder('ipv4first');
} catch (e) {
  // Ignore in environments where dns is not available
}

let cachedSql = null;
let isInitialized = false;

/**
 * Returns a Neon serverless SQL query tag connected to the database.
 */
export function getDb() {
  if (cachedSql) {
    return cachedSql;
  }

  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error('DATABASE_URL environment variable is not set. Please check your .env or .env.local file.');
  }
  
  cachedSql = neon(connectionString);
  return cachedSql;
}

/**
 * Automatically creates necessary tables if they do not exist yet.
 */
export async function initDb() {
  if (isInitialized) {
    return true;
  }

  const sql = getDb();
  
  // 1. Inquiries table
  await sql`
    CREATE TABLE IF NOT EXISTS contact_inquiries (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(100),
      interest VARCHAR(255),
      message TEXT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `;

  // 2. Users authentication table
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      role VARCHAR(50) DEFAULT 'student',
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `;

  isInitialized = true;
  return true;
}
