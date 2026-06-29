import { Community } from './community';
import { Conversation } from './conversation';

export type User = {
  id?: string;
  avatarUrl?: string;
  nickname: string;
  username: string;
  pronouns?: string;
  description?: string;
  email?: string;
  joinedCommunities?: Community[];
  ownedCommunities?: Community[];
  conversations?: Conversation[];
};
