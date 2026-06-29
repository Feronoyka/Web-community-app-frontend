'use client';

import Community from '@/components/community/Community';
import { useCommunityStore } from '@/provider/community-provider';
import { User } from '@/types';

function OwnedCommunities({ user }: { user: User | null }) {
  const queryCommunities = useCommunityStore((state) => state.communities);
  const searchCommunity = useCommunityStore((state) => state.searchCommunity);
  const isLoading = useCommunityStore((state) => state.isLoading);

  const showSearchResults = Boolean(searchCommunity.trim()) || isLoading;
  const list = showSearchResults ? queryCommunities : user?.ownedCommunities;

  return (
    <>
      {user ? (
        user.ownedCommunities?.length !== 0 ? (
          <div className='grid grid-cols-12 gap-8 mx-16 mt-8'>
            {list?.map((community) => (
              <div key={community.id} className='grid col-span-4'>
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
            <p>You do not have any communities</p>
          </div>
        )
      ) : (
        <div className='flex justify-center'>
          <p>Sign up to create community</p>
        </div>
      )}
    </>
  );
}

export default OwnedCommunities;
