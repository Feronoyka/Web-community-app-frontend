import axios from 'axios';
import Community from '@/components/Community';
import { CommunityFromApi } from '@/utils/normalizeCommunities';
import { use } from 'react';

export default function Home() {
  const API = process.env.API_URL;

  const getCommunities = async (): Promise<CommunityFromApi[]> => {
    const response = await axios.get(`${API}/communities`);
    if (!response.data) return [];

    return response.data.data;
  };

  const communities = use(getCommunities());

  return (
    <div className='grid grid-cols-3 gap-8'>
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
        <div className='col-start-6'>
          <p>There is no communities yet</p>
        </div>
      )}
    </div>
  );
}
