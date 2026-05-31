'use client';

import Community from '@/components/Community';
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
            <div className='grid grid-cols-3 gap-8'>
              {list?.map((community) => (
                <Community
                  key={community.id}
                  ownerId={community.ownerId}
                  name={community.name}
                  followerCount={community.followerCount}
                  backgroundUrl={community.backgroundUrl}
                  description={community.description}
                  user={user}
                />
              ))}
            </div>
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
