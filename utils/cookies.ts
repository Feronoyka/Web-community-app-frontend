'use server';

import { cookies } from 'next/headers';

type TokenResponse = {
  accessToken: string;
  refreshToken: string;
};

export const storeAuthTokens = async (data: TokenResponse) => {
  const cookieStore = await cookies();

  cookieStore.set('accessToken', data.accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
  });

  cookieStore.set('refreshToken', data.refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
  });
};
