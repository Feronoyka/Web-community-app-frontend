'use server';

import Community from '@/components/Community';
import { getMe } from '@/lib/auth';
import { User } from '@/types';

async function OwnedCommunities() {
  const user: User | null = await getMe();

  return (
    <>
      {user ? (
        user.ownedCommunities?.length !== 0 ? (
          <div className='grid grid-cols-12 gap-8 mx-16 mt-8'>
            <div className='grid grid-cols-3 gap-8'>
              {user.ownedCommunities?.map((community) => (
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
