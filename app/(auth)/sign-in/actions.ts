'use server';

import z from 'zod';
import axios from 'axios';
import { signInSchema } from '@/utils/signInSchema';
import { redirect } from 'next/navigation';
import { storeAuthTokens } from '@/utils/cookies';
import { cookies } from 'next/headers';

export const signInForm = async (prevState: unknown, formData: FormData) => {
  const API = process.env.API_URL;

  const result = signInSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!result.success) {
    const errors = z.treeifyError(result.error);
    return {
      errors: {
        email: errors.properties?.email?.errors,
        password: errors.properties?.password?.errors,
      },
    };
  }

  try {
    const cookieStore = await cookies();
    const deviceToken = cookieStore.get('deviceToken')?.value;

    const response = await axios.post(
      `${API}/auth/login`,
      result.data,
      deviceToken ? { headers: { Cookie: `deviceToken=${deviceToken}` } } : {},
    );

    const data = response.data;
    if (data.requires2FA) {
      cookieStore.set('tempToken', data.tempToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        maxAge: 10 * 60,
      });

      redirect('');
    }

    await storeAuthTokens(data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        errors: { server: error.response?.data?.message ?? error.message },
      };
    }

    return { errors: 'Something went wrong' };
  }

  redirect('/');
};
