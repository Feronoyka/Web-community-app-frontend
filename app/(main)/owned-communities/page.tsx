import Community from '@/components/Community';
import { getMe } from '@/lib/auth';
import { CommunityFromApi } from '@/utils/normalizeCommunities';

interface User {
  id?: string;
  avatarUrl: string;
  nickname: string;
  username: string;
  email: string;
  ownedCommunities?: CommunityFromApi[];
}

async function OwnedCommunities() {
  const user: User = await getMe();

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
                  discription={community.description}
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
