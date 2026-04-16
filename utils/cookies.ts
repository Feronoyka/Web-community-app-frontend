'use server';

import { cookies } from 'next/headers';

type ResponseType = {
  data: {
    accessToken: string;
    refreshToken: string;
  };
};

export const cookiesStore = async (response: ResponseType) => {
  const cookieStore = await cookies();

  cookieStore.set('accessToken', response.data.accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
  });

  cookieStore.set('refreshToken', response.data.refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
  });
};
