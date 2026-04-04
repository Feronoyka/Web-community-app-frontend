import { cookies } from 'next/headers';

type Data = {
  accessToken: string;
};

export const cookiesStore = async (data: Data) => {
  'use server';

  const cookieStore = await cookies();
  cookieStore.set('token', data.accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
  });
};
