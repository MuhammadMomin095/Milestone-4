import { NextResponse } from 'next/server';
import { users } from '@/app/lib/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(request: Request) {
    const { email, password } = await request.json();
    const user = users.find(u => u.email === email);

    if (!user || !await bcrypt.compare(password, user.password!)) {
        return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
    return NextResponse.json({ token });
}