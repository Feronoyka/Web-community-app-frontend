import Community from '@/components/Community';
import { getCommunities } from '@/lib/getCommunities';
import { User } from '@/types';

export default async function Communities({ user }: { user?: User | null }) {
  const communities = await getCommunities();

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
                  description={community.description}
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
