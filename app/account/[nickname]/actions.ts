'use server';

import { getMe } from '@/lib/auth';
import { fetchWithRefresh } from '@/lib/fetchWithRefresh';
import { editUserProfileSchema } from '@/utils/editUserPofileSchema';
import { redirect } from 'next/navigation';
import z from 'zod';

export const accountAction = async (prev: unknown, formData: FormData) => {
  const user = await getMe();

  if (!user) {
    redirect('/sign-in');
  }

  const result = editUserProfileSchema.safeParse({
    nickname: formData.get('nickname'),
  });

  if (!result.success) {
    const errors = z.treeifyError(result.error);
    return {
      errors: {
        username: errors.properties?.nickname?.errors,
      },
    };
  }

  try {
    await fetchWithRefresh(`/users/${user.id}`, {
      method: 'patch',
      data: result.data.nickname,
    });
  } catch {
    return { errors: { server: 'something went wrong' } };
  }

  redirect(`/profile${user.id}`);
};
