'use server';

import axios from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const API = process.env.API_URL;

export const resend2faAction = async () => {
  const cookieStore = await cookies();
  const email = cookieStore.get('tempEmail')?.value;

  if (!email) redirect('/sign-in');

  await axios.post(`${API}/auth/resend-2fa`, { email });

  const expiryAt = 10 * 60 * 1000;

  const response = await axios.post(`${API}/auth/resend-2fa`, { email });
  cookieStore.set('tempToken', response.data.tempToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: expiryAt,
  });
};
