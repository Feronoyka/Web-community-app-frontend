'use server';

import z from 'zod';
import axios from 'axios';
import { signInSchema } from '@/utils/signInSchema';
import { redirect } from 'next/navigation';
import { cookiesStore } from '@/utils/cookies';

type ResponseType = {
  data: {
    accessToken: string;
    refreshToken: string;
  };
};

export const signInForm = async (prevState: unknown, formData: FormData) => {
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

  const url = 'http://localhost:3000/auth/login';

  try {
    const response: ResponseType = await axios.post(url, result.data);
    await cookiesStore(response);
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
