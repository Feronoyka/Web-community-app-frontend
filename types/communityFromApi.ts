import { User } from '.';

export type CommunityFromApi = {
  id: string;
  name: string;
  backgroundUrl?: string;
  avatarUrl?: string;
  description?: string;
  isFollowing: boolean;
  members?: User[];
  followerCount: number;
  ownerId: string;
};
