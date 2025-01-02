"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Register.module.css'; // Import local CSS module



type ErrorWithMessage = { message: string | string[] | undefined };

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error
  );
}



export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Improved error handling (consider adding specific feedback based on API response)
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Registration failed'); // Throw a generic error initially
      }

      // Successful registration (redirect to login or other action)
      router.push('/login');
    } catch (error) {
      if (isErrorWithMessage(error)) {
        if (typeof error.message === 'string'){
          alert(error.message);
        } else if (Array.isArray(error.message)){
          alert(error.message.join('\n')); // Display array of messages
        } else {
          alert("An error occurred but no message was provided.");
        }
      } else {
        alert('An unexpected error occurred.');
        console.error("Unexpected error:", error);
      }
    }
  };

  return (
    <div className={styles.registerContainer}>
      <h1 className={styles.registerTitle}>Register</h1>
      <form onSubmit={handleSubmit} className={styles.registerForm}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.registerInput}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.registerInput}
        />
        <button type="submit" className={styles.registerButton}>
          Register
        </button>
      </form>
    </div>
  );
}