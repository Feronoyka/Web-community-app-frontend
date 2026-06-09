'use server';

import { fetchWithRefresh } from './fetchWithRefresh';

export const followCommunity = async (communityId: string) => {
  return fetchWithRefresh(`/communities/${communityId}/follow`, {
    method: 'post',
  });
};

export const unfollowCommunity = async (communityId: string) => {
  return fetchWithRefresh(`/communities/${communityId}/unfollow`, {
    method: 'delete',
  });
};
