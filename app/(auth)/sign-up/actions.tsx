import { redirect } from 'next/navigation';

export const signUpForm = async (formData: FormData) => {
  'use server';

  const domainName = formData.get('domainName');
  const email = formData.get('email');
  const password = formData.get('password');

  const JsonData = JSON.stringify({ domainName, email, password });

  const response = await fetch('', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JsonData,
  });

  const data = await response.json();

  if (!response.ok) {
    return data.message;
  }

  redirect('/sign-in');
};
