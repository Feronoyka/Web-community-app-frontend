import { User } from '.';

export type CommunityFromApi = {
  id: string;
  name: string;
  backgroundUrl?: string;
  avatarUrl?: string;
  description?: string;
  isMember?: boolean;
  members?: User[];
  membersCount: number;
  owner?: User;
  ownerId: string;
};
