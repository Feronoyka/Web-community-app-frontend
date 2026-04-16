import { fetchWithRefresh } from '@/lib/fetchWithRefresh';

export async function getMe() {
  try {
    return await fetchWithRefresh('/auth/profile', {
      method: 'get',
    });
  } catch {
    return null;
  }
}
