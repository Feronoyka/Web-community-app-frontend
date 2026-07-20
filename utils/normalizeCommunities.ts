import { CommunityFromApi } from '@/types';

interface PaginatedCommunities {
  data: CommunityFromApi[];
  meta?: { total: number; offset?: number; limit?: number };
}

export function normalizeCommunities(
  payload: PaginatedCommunities,
): CommunityFromApi[] {
  if (payload) {
    return payload.data;
  }
  return [];
}
