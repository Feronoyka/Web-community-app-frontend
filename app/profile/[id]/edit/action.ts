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

  const avatarFile = formData.get('avatarUrl');

  const result = editUserProfileSchema.safeParse({
    username: formData.get('username'),
    pronouns: formData.get('pronouns'),
    description: formData.get('description'),
    avatarUrl:
      avatarFile instanceof File && avatarFile.size > 0
        ? avatarFile
        : undefined,
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
    const uploadData = new FormData();
    if (result.data.username)
      uploadData.append('username', result.data.username);
    if (result.data.description)
      uploadData.append('description', result.data.description);
    if (result.data.pronouns)
      uploadData.append('pronouns', result.data.pronouns);
    if (result.data.avatarUrl)
      uploadData.append('avatarUrl', result.data.avatarUrl);

    await fetchWithRefresh(`/users/${user.id}`, {
      method: 'patch',
      data: uploadData,
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  } catch {
    return { errors: { server: 'Something went wrong' } };
  }

  redirect(`/profile/${user.id}`);
};
