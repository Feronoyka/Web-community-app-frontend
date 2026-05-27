import Community from '@/components/Community';
import { getMe } from '@/lib/auth';
import { getCommunities } from '@/lib/getCommunities';
import { CommunityFromApi, User } from '@/types';

export default async function Communities({
  // user,
  queryCommunities,
  isLoading,
}: {
  // user?: User | null;
  queryCommunities?: CommunityFromApi[];
  isLoading?: boolean;
}) {
  const communities = await getCommunities();
  const user: User | null = await getMe();

  return (
    <>
      {communities.length !== 0 || queryCommunities ? (
        <div className='grid grid-cols-12 gap-8 mx-16 mt-8'>
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
