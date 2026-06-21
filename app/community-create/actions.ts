'use server';

import { z } from 'zod';
import { createAndEditCommunitySchema } from '@/utils/createAndEditCommunitySchema';
import { createAxiosInstance } from '@/lib/axiosInstance';
import axios from 'axios';
import { redirect } from 'next/navigation';

export const createCommunityAction = async (
  prevState: unknown,
  formData: FormData,
) => {
  const avatarFile = formData.get('avatarUrl');

  const result = createAndEditCommunitySchema.safeParse({
    name: formData.get('communityName'),
    description: formData.get('communityDescription'),
    avatarUrl:
      avatarFile instanceof File && avatarFile.size > 0
        ? avatarFile
        : undefined,
  });

  if (!result.success) {
    const errors = z.treeifyError(result.error);
    return {
      errors: {
        name: errors.properties?.name?.errors,
        description: errors.properties?.description?.errors,
        avatarUrl: errors.properties?.avatarUrl?.errors,
      },
    };
  }

  try {
    const axiosInstance = await createAxiosInstance();

    const uploadData = new FormData();
    uploadData.append('name', result.data.name);
    if (result.data.description) {
      uploadData.append('description', result.data.description);
    }
    if (result.data.avatarUrl) {
      uploadData.append('avatarUrl', result.data.avatarUrl);
    }

    const response = await axiosInstance.post(
      `/communities/create`,
      uploadData,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      },
    );

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
