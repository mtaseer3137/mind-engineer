import { NextResponse } from 'next/server';
import { verifyToken } from '../../../../lib/auth';

export async function GET(request) {
  try {
    const token = request.cookies.get('me_session')?.value;
    if (!token) {
      return NextResponse.json({ authenticated: false, user: null });
    }

    const payload = verifyToken(token);
    if (!payload) {
      return NextResponse.json({ authenticated: false, user: null });
    }

    return NextResponse.json({
      authenticated: true,
      user: {
        id: payload.userId,
        name: payload.name,
        email: payload.email,
        role: payload.role,
      },
    });
  } catch (error) {
    return NextResponse.json({ authenticated: false, user: null });
  }
}
