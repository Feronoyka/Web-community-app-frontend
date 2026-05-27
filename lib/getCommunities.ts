'use server';

import { normalizeCommunities } from '@/utils/normalizeCommunities';

const API = process.env.API_URL;

interface CommunityFromApi {
  id: string;
  name: string;
  backgroundUrl?: string;
  avatarUrl?: string;
  description?: string;
  isFollowed: boolean;
  followerCount: number;
  ownerId: string;
}

export const getCommunities = async (): Promise<CommunityFromApi[]> => {
  try {
    const response = await fetch(`${API}/communities`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) return [];

    const data = await response.json();
    const communities = normalizeCommunities(data);

    return communities;
  } catch (error) {
    console.error('Error fetching communities:', error);
    return [];
  }
};
