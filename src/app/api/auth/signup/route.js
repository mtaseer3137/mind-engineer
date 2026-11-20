import { NextResponse } from 'next/server';
import { getDb, initDb } from '../../../../lib/db';
import { hashPassword, signToken } from '../../../../lib/auth';

export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    // Validate inputs
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Please enter a valid full name (at least 2 characters).' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (!password || typeof password !== 'string' || password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters long.' },
        { status: 400 }
      );
    }

    await initDb();
    const sql = getDb();
    const cleanEmail = email.trim().toLowerCase();
    const cleanName = name.trim();

    // Check if user already exists
    const existing = await sql`
      SELECT id FROM users WHERE email = ${cleanEmail} LIMIT 1;
    `;

    if (existing.length > 0) {
      return NextResponse.json(
        { error: 'An account with this email address already exists. Please log in instead.' },
        { status: 409 }
      );
    }

    // Hash the password securely
    const passwordHash = await hashPassword(password);

    // Insert user into PostgreSQL database
    const result = await sql`
      INSERT INTO users (name, email, password_hash, role)
      VALUES (${cleanName}, ${cleanEmail}, ${passwordHash}, 'student')
      RETURNING id, name, email, role, created_at;
    `;

    const newUser = result[0];

    // Create session token
    const token = signToken({
      userId: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    });

    const response = NextResponse.json(
      {
        success: true,
        message: 'Account created successfully! Welcome to Mind Engineer.',
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
        },
      },
      { status: 201 }
    );

    // Set HTTP-Only session cookie
    response.cookies.set({
      name: 'me_session',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    return response;
  } catch (error) {
    console.error('Sign-up error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error while creating account.' },
      { status: 500 }
    );
  }
}
