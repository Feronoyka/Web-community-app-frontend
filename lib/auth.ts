import { fetchWithRefresh } from '@/lib/fetchWithRefresh';
import type { User } from '@/types';

export async function getMe(): Promise<User | null> {
  try {
    const me = await fetchWithRefresh('/auth/profile', {
      method: 'get',
    });

    return me ?? null;
  } catch {
    return null;
  }
}
