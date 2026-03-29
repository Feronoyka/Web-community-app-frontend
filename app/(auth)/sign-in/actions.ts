import validateFormSignIn from '@/utils/validateFormSignIn';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const signInForm = async (formData: FormData) => {
  'use server';

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const JsonData = JSON.stringify({ email, password });

  const isValid = validateFormSignIn({ email, password });

  const url = 'http://localhost:3000/auth/login';

  if (isValid) {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JsonData,
    });

    const data = await response.json();

    if (!response.ok) {
      return data.message;
    }

    const cookieStore = await cookies();
    cookieStore.set('token', data.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
    });

    redirect('/');
  }
};
