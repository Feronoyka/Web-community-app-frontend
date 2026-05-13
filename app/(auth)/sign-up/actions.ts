'use server';

import { z } from 'zod';
import axios from 'axios';
import { signUpSchema } from '@/utils/signUpSchema';
import { redirect } from 'next/navigation';
import { storeAuthTokens } from '@/utils/cookies';

export const signUpAction = async (prevState: unknown, formData: FormData) => {
  const API = process.env.API_URL;

  const result = signUpSchema.safeParse({
    nickname: formData.get('nickname'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!result.success) {
    const errors = z.treeifyError(result.error);
    return {
      errors: {
        nickname: errors.properties?.nickname?.errors,
        email: errors.properties?.email?.errors,
        password: errors.properties?.password?.errors,
      },
    };
  }

  try {
    const response = await axios.post(`${API}/auth/register`, result.data);

    if (!response) {
      redirect('/sign-up');
    }

    await storeAuthTokens(response.data);
  } catch (error) {
    // `redirect()` works by throwing a special Next.js error.
    // If we catch it here, navigation will never happen.
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
      return {
        errors: { server: error.response?.data?.message ?? error.message },
      };
    }

    return { errors: { server: 'Something went wrong' } };
  }

  redirect('/');
};
