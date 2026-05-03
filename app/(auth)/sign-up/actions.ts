'use server';

import { z } from 'zod';
import axios from 'axios';
import { signUpSchema } from '@/utils/signUpSchema';
import { redirect } from 'next/navigation';

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
    await axios.post(`${API}/auth/register`, result.data);
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
