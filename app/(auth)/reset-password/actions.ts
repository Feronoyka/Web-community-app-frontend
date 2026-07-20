'use server';

import { resetPasswordSchema } from '@/utils/resetPasswordSchema';
import axios from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import z from 'zod';

export const ResetPasswordAction = async (
  prevState: unknown,
  formData: FormData,
) => {
  const API = process.env.API_URL;

  const result = resetPasswordSchema.safeParse({
    email: formData.get('email'),
  });

  if (!result.success) {
    const errors = z.treeifyError(result.error);
    return {
      errors: {
        email: errors.properties?.email?.errors,
      },
    };
  }

  try {
    await axios.post(`${API}/auth/reset-password`, {
      email: result.data.email,
    });

    const cookieStore = await cookies();
    cookieStore.set('resetEmail', result.data.email, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 15 * 60, // 15 minutes
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        errors: { server: error.response?.data.message ?? error.message },
      };
    }

    return { errors: { server: 'Something went wrong' } };
  }

  redirect('/reset-password/verify');
};
