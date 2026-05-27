import { User } from '.';

export type CommunityFromApi = {
  id: string;
  name: string;
  backgroundUrl?: string;
  avatarUrl?: string;
  description?: string;
  isFollowed: boolean;
  members?: User[];
  followerCount: number;
  ownerId: string;
};
