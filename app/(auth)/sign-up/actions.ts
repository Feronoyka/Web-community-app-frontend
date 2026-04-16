'use server';

import { z } from 'zod';
import axios from 'axios';
import { signUpSchema } from '@/utils/signUpSchema';
import { redirect } from 'next/navigation';

export const signUpForm = async (prevState: unknown, formData: FormData) => {
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

  const url = 'http://localhost:3000/auth/register';

  try {
    await axios.post(url, result.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        errors: { server: error.response?.data?.message ?? error.message },
      };
    }

    return { erros: { server: 'Somthing went wrong' } };
  }

  redirect('/sign-in');
};
