import { NextResponse } from 'next/server';
import { getDb, initDb } from '../../../lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await initDb();
    const sql = getDb();
    const result = await sql`SELECT COUNT(*)::int AS count FROM contact_inquiries;`;
    return NextResponse.json({
      status: 'connected',
      message: 'PostgreSQL database connection verified successfully',
      inquiriesCount: result[0]?.count ?? 0,
    });
  } catch (error) {
    console.error('Database connection error:', error, error?.cause);
    return NextResponse.json(
      {
        status: 'error',
        message: error.message || 'Failed to connect to database',
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, interest, message } = body;

    // Field validations
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Please enter your full name (minimum 2 characters).' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const sql = getDb();
    const inserted = await sql`
      INSERT INTO contact_inquiries (name, email, phone, interest, message)
      VALUES (
        ${name.trim()},
        ${email.trim().toLowerCase()},
        ${phone?.trim() || null},
        ${interest?.trim() || null},
        ${message?.trim() || null}
      )
      RETURNING id, name, email, interest, created_at;
    `;

    return NextResponse.json(
      {
        success: true,
        message: 'Your inquiry has been successfully received and saved to the database. Thank you for connecting with Mind Engineer!',
        inquiry: inserted[0],
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Failed to submit contact inquiry:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Internal server error while saving inquiry.',
      },
      { status: 500 }
    );
  }
}
