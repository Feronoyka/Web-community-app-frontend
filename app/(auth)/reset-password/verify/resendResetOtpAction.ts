'use server';

import axios from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const API = process.env.API_URL;

export const resendResetOtpAction = async () => {
  const cookieStore = await cookies();
  const email = cookieStore.get('resetEmail')?.value;

  if (!email) redirect('/reset-password');

  await axios.post(`${API}/auth/reset-password`, { email });
};
