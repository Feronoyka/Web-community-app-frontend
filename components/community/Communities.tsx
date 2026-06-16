'use client';

import Community from '@/components/community/Community';
import { useCommunityStore } from '@/provider/community-provider';
import { CommunityFromApi, User } from '@/types';

type CommunitiesProps = {
  user?: User | null;
  communities: CommunityFromApi[];
};

export default function Communities({ communities, user }: CommunitiesProps) {
  const queryCommunities = useCommunityStore((state) => state.communities);
  const searchCommunity = useCommunityStore((state) => state.searchCommunity);
  const isLoading = useCommunityStore((state) => state.isLoading);

  const showSearchResults = Boolean(searchCommunity.trim()) || isLoading;
  const list = showSearchResults ? queryCommunities : communities;

  return (
    <>
      {list.length !== 0 ? (
        <div className='grid grid-cols-12 gap-8 mx-16 mt-8'>
          {list.map((community) => (
            <div key={community.id} className='col-span-4 mb-10'>
              <Community
                id={community.id}
                ownerId={community.ownerId}
                avatarUrl={community.avatarUrl}
                name={community.name}
                membersCount={community.membersCount}
                members={community.members}
                description={community.description}
                isMember={community.isMember}
                user={user}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className='flex justify-center'>
          <p>There is no communities yet</p>
        </div>
      )}
    </>
  );
}
