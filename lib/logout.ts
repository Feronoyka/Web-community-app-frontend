'use server';

import { redirect } from 'next/navigation';
import axios from 'axios';
import { cookies } from 'next/headers';

const API = process.env.API_URL;

export const logout = async () => {
  const cookieStore = await cookies();

  try {
    const accessToken = cookieStore.get('accessToken')?.value;

    await axios.post(
      `${API}/auth/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
  } catch (error) {
    console.error('Error fetching logout:', error);
  } finally {
    cookieStore.delete('accessToken');
    cookieStore.delete('refreshToken');
  }
  redirect('/sign-in');
};
