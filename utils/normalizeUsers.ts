import { User } from '@/types';

interface PaginatedUsers {
  data: User[];
  meta: { total: number };
}

export function normalizeUsers(payload: PaginatedUsers): User[] {
  if (payload) {
    console.log(payload.data);
    return payload.data;
  }

  return [];
}
