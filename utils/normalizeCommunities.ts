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

export function normalizeCommunities(
  payload: PaginatedCommunities,
): CommunityFromApi[] {
  if (Array.isArray(payload)) {
    return payload;
  }
  return [];
}
