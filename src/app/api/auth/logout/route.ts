import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // Clear the token (using cookies is recommended for production)
  // Example using localStorage (client-side, for demonstration):
  // localStorage.removeItem('token');

  // For production, use HttpOnly cookies:
  const response = NextResponse.json({ message: 'Logged out successfully' });
  response.cookies.delete('token'); // Delete the 'token' cookie

  return response;
}