'use server';

import { verifyResetOtpSchema } from '@/utils/verify2faSchema';
import axios from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import z from 'zod';

export const verifyResetOtpAction = async (
  prevState: unknown,
  formData: FormData,
) => {
  const API = process.env.API_URL;

  const result = verifyResetOtpSchema.safeParse({
    otp: formData.get('otp'),
  });

  if (!result.success) {
    const errors = z.treeifyError(result.error);
    return {
      errors: {
        otp: errors.properties?.otp?.errors,
      },
    };
  }

  try {
    const cookieStore = await cookies();
    const email = cookieStore.get('resetEmail')?.value;

    if (!email) redirect('/reset-password');

    const response = await axios.post(`${API}/auth/verify-reset-otp`, {
      email,
      otp: result.data.otp,
    });

    cookieStore.set('resetToken', response.data.resetToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 15 * 60,
    });

    cookieStore.delete('resetEmail');
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        errors: { server: error.response?.data.message ?? error.message },
      };
    }

    return { errors: { server: 'Something went wrong' } };
  }

  redirect('/reset-password/reset');
};
