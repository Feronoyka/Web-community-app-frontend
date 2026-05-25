export interface CommunityFromApi {
  id: string;
  name: string;
  backgroundUrl?: string;
  avatarUrl?: string;
  description?: string;
  isFollowed: boolean;
  followerCount: number;
  ownerId: string;
}

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
