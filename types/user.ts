import { CommunityFromApi } from './communityFromApi';

export type User = {
  id?: string;
  avatarUrl?: string;
  nickname: string;
  username: string;
  pronouns?: string;
  description?: string;
  email?: string;
  communities?: CommunityFromApi[];
  ownedCommunities?: CommunityFromApi[];
};
