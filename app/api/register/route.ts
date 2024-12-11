import { NextResponse } from 'next/server';
import { addRegistration } from '@/lib/google-sheets';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    await addRegistration(data);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 });
  }
}
