'use server';

import { fetchWithRefresh } from './fetchWithRefresh';

export const followCommunity = async (communityId: string) => {
  return fetchWithRefresh(`/communities/${communityId}/join`, {
    method: 'post',
  });
};

export const unfollowCommunity = async (communityId: string) => {
  return fetchWithRefresh(`/communities/${communityId}/leave`, {
    method: 'delete',
  });
};
