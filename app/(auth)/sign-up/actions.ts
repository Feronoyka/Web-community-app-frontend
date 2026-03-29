import { validateFormSignUp } from '@/utils/validateFormSignUp';
import { redirect } from 'next/navigation';

export const signUpForm = async (formData: FormData) => {
  'use server';

  const domainName = formData.get('domainName') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const isValid = validateFormSignUp({ domainName, email, password });

  if (isValid) {
    const JsonData = JSON.stringify({ domainName, email, password });

    const url = 'http://localhost:3000/auth/register';

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JsonData,
    });

    const data = await response.json();

    if (!response.ok) {
      return data.message;
    }

    redirect('/sign-in');
  }
};
