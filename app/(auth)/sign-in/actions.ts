'use server';

import z from 'zod';
import axios from 'axios';
import { signInSchema } from '@/utils/signInSchema';
import { redirect } from 'next/navigation';
import { storeAuthTokens } from '@/utils/cookies';
import { cookies } from 'next/headers';

export const signInAction = async (prevState: unknown, formData: FormData) => {
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

    console.log(response.data);

    const data = response.data;
    if (data.requires2FA) {
      // When login is called from a Next.js server action, the backend's Set-Cookie
      // won't automatically reach the browser, so we persist tempToken ourselves.
      if (data.tempToken) {
        cookieStore.set('tempToken', data.tempToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          path: '/',
          maxAge: 10 * 60, // 10 minutes
        });
      }
      redirect('/sign-in/verify-2fa');
    }

    await storeAuthTokens(data);
  } catch (error) {
    // `redirect()` in Next.js works by throwing a special error.
    // If we catch it here, the redirect will never happen.
    if (
      typeof error === 'object' &&
      error !== null &&
      'digest' in error &&
      typeof (error as { digest?: unknown }).digest === 'string' &&
      (error as { digest: string }).digest.startsWith('NEXT_REDIRECT')
    ) {
      throw error;
    }

    if (axios.isAxiosError(error)) {
      console.log(error);
      return {
        errors: { server: error.response?.data?.message ?? error.message },
      };
    }

    return { errors: 'Something went wrong' };
  }

  redirect('/');
};
