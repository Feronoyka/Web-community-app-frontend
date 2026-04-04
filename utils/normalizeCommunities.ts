export interface CommunityFromApi {
  id: string;
  name: string;
  backgroundUrl?: string;
  description?: string;
  followerCount: number;
}

interface PaginatedCommunities {
  data: CommunityFromApi[];
  meta?: { total: number; offset?: number; limit?: number };
}

export function normalizeCommunities(payload: unknown): CommunityFromApi[] {
  if (Array.isArray(payload)) {
    return payload;
  }
  if (
    payload &&
    typeof payload === 'object' &&
    'data' in payload &&
    Array.isArray((payload as PaginatedCommunities).data)
  ) {
    return (payload as PaginatedCommunities).data;
  }
  return [];
}
