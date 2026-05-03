'use server';

import { verify2faSchema } from '@/utils/verify2faSchema';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import z from 'zod';
import axios from 'axios';
import { storeAuthTokens } from '@/utils/cookies';

const API = process.env.API_URL;

export const verify2faAction = async (
  prevState: unknown,
  formData: FormData,
) => {
  const result = verify2faSchema.safeParse({
    otp: formData.get('otp'),
    trustDevice: formData.get('trustDevice') === 'on',
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
    const tempToken = cookieStore.get('tempToken')?.value;

    if (!tempToken) redirect('/sign-in');

    const response = await axios.post(
      `${API}/auth/verify-2fa`,
      {
        otp: result.data.otp,
        trustDevice: result.data.trustDevice ?? false,
      },
      {
        headers: { Cookie: `tempToken=${tempToken}` },
      },
    );

    const data = response.data;
    await storeAuthTokens(data);

    if (data.deviceToken) {
      cookieStore.set('deviceToken', data.deviceToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        maxAge: 30 * 24 * 60 * 60, // 30 days
      });
    }

    cookieStore.delete('tempToken');
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        errors: { server: error.response?.data?.message ?? error.message },
      };
    }
    return { errors: { server: 'Something went wrong' } };
  }

  redirect('/');
};
