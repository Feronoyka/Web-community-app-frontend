'use server';

import { getMe } from '@/lib/auth';
import { fetchWithRefresh } from '@/lib/fetchWithRefresh';
import { redirect } from 'next/navigation';
import { editUserProfileSchema } from '@/utils/editUserPofileSchema';
import z from 'zod';

export const updateUserProfileAction = async (
  prevState: unknown,
  formData: FormData,
) => {
  const user = await getMe();

  if (!user) {
    redirect('/sign-in');
  }

  const result = editUserProfileSchema.safeParse({
    username: formData.get('username'),
    pronouns: formData.get('pronouns'),
    description: formData.get('description'),
    avatarUrl: formData.get('avatarUrl'),
  });

  if (!result.success) {
    const errors = z.treeifyError(result.error);
    return {
      errors: {
        username: errors?.properties?.username?.errors,
        pronouns: errors?.properties?.pronouns?.errors,
        description: errors?.properties?.description?.errors,
        avatarUrl: errors.properties?.avatarUrl?.errors,
      },
    };
  }

  try {
    await fetchWithRefresh(`/users/${user.id}`, {
      method: 'patch',
      data: result.data,
    });
  } catch {
    return { errors: { server: 'Something went wrong' } };
  }

  redirect(`/you/${user.nickname}`);
};
