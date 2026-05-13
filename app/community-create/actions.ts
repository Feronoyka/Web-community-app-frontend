'use server';

import { z } from 'zod';
import { createCommunitySchema } from '@/utils/createCommunitySchema';
import { createAxiosInstance } from '@/lib/axiosInstance';
import axios from 'axios';
import { redirect } from 'next/navigation';

export const createCommunityAction = async (
  prevState: unknown,
  formData: FormData,
) => {
  const result = createCommunitySchema.safeParse({
    name: formData.get('communityName'),
    description: formData.get('communityDescription'),
  });

  if (!result.success) {
    const errors = z.treeifyError(result.error);
    return {
      errors: {
        name: errors.properties?.name?.errors,
        description: errors.properties?.description?.errors,
      },
    };
  }

  try {
    const axiosInstance = await createAxiosInstance();
    const response = await axiosInstance.post(`/communities/create`, {
      name: result.data.name,
      description: result.data.description,
    });

    console.log(response.data);
  } catch (error) {
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
        errors: { server: error.response?.data.message ?? error.message },
      };
    }

    return { errors: { server: 'something went wrong' } };
  }

  redirect('/owned-communities');
};
