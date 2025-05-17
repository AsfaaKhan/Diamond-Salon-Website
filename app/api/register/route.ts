
import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import { users } from '@/app/api/auth/[...nextauth]/route';

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return NextResponse.json({ error: 'User already exists' }, { status: 400 });
  }

  const hashedPassword = await hash(password, 10);
  users.push({
    id: Date.now().toString(),
    name,
    email,
    password: hashedPassword,
  });

  return NextResponse.json({ success: true });
}
