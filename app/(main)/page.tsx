import Community from '@/components/Community';
import { getCommunities } from '@/lib/getCommunities';
import { CommunityFromApi } from '@/utils/normalizeCommunities';
import { use } from 'react';

interface User {
  id?: string;
  avatarUrl: string;
  nickname: string;
  username: string;
  email: string;
  communities?: CommunityFromApi[];
}

export default function Home({ user }: { user?: User }) {
  const communities = use(getCommunities());

  return (
    <>
      {communities.length !== 0 ? (
        <div className='grid grid-cols-12 gap-8'>
          <div className='grid grid-cols-3 gap-8'>
            <div>
              {communities.map((community) => (
                <Community
                  key={community.id}
                  ownerId={community.ownerId}
                  name={community.name}
                  followerCount={community.followerCount}
                  backgroundUrl={community.backgroundUrl}
                  discription={community.description}
                  user={user}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className='flex justify-center'>
          <p>There is no communities yet</p>
        </div>
      )}
    </>
  );
}
