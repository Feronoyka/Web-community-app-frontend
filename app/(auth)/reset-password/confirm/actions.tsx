'use server';

import { storeAuthTokens } from '@/utils/cookies';
import { resetConfirmSchema } from '@/utils/resetConfirmSchema';
import axios from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import z from 'zod';

export const resetConfirmAction = async (
  prevState: unknown,
  formData: FormData,
) => {
  const API = process.env.API_URL;

  const result = resetConfirmSchema.safeParse({
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
  });

  if (!result.success) {
    const errors = z.treeifyError(result.error);
    return {
      errors: {
        password: errors.properties?.password?.errors,
        confirmPassword: errors.properties?.confirmPassword?.errors,
      },
    };
  }

  try {
    const cookieStore = await cookies();
    const resetToken = cookieStore.get('resetToken')?.value;

    if (!resetToken) redirect('/reset-password');

    const response = await axios.post(
      `${API}/auth/reset-confirm`,
      {
        password: result.data.password,
        confirmPassword: result.data.confirmPassword,
      },
      {
        headers: { Cookie: `resetToken=${resetToken}` },
      },
    );

    await storeAuthTokens(response.data);

    cookieStore.delete('resetToken');
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        errors: { server: error.response?.data.message ?? error.message },
      };
    }
    return { errors: { server: 'Something went wrong' } };
  }

  redirect('/');
};
