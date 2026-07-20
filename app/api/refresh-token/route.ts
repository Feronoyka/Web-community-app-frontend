import axios from 'axios';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const API = process.env.API_URL;

export const GET = async () => {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get('refreshToken')?.value;

  if (!refreshToken) {
    return NextResponse.json({ error: 'No refresh token' }, { status: 401 });
  }

  try {
    const response = await axios.post(
      `${API}/auth/refresh`,
      {},
      {
        headers: { Cookie: `refreshToken=${refreshToken}` },
      },
    );

    const { accessToken, refreshToken: newRefreshToken } = response.data;

    cookieStore.set('accessToken', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
    });

    cookieStore.set('refreshToken', newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
    });

    return NextResponse.json({ accessToken });
  } catch {
    return NextResponse.json({ error: 'Refresh failed' }, { status: 401 });
  }
};
