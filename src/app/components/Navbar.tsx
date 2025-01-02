"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '../lib/auth';

export default function Navbar() {
  const router = useRouter();
  const handleLogout = async () => {
    const res = await fetch('/api/auth/logout', { method: 'POST' });
    if (res.ok) {
        localStorage.removeItem('token');
        router.push('/login');
    }
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', backgroundColor:"#f0f0f0" }}>
      <Link href="/">Home</Link>
      <Link href="/create">Create Post</Link>
        {isAuthenticated() ? (
            <button onClick={handleLogout}>Logout</button>
        ):(
            <>
                <Link href="/login">Login</Link>
                <Link href="/register">Register</Link>
            </>
        )}
    </nav>
  );
}