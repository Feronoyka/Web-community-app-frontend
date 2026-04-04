import Community from '@/components/Community';
import {
  normalizeCommunities,
  CommunityFromApi,
} from '@/utils/normalizeCommunities';
import { use } from 'react';

export default function Home() {
  const url = 'http://localhost:3000/community';

  const getCommunities = async (): Promise<CommunityFromApi[]> => {
    const response = await fetch(url);

    if (!response.ok) return [];

    const data: unknown = await response.json();
    return normalizeCommunities(data);
  };

  const communities = use(getCommunities());

  return (
    <div className='grid grid-flow-col justify-items-center gap-8'>
      {communities.length !== 0 ? (
        communities.map((community) => (
          <Community
            key={community.id}
            name={community.name}
            followerCount={community.followerCount}
            backgroundUrl={community.backgroundUrl}
            discription={community.description}
          />
        ))
      ) : (
        <p className='col-start-20 w-45'>There is no communities</p>
      )}
    </div>
  );
}
