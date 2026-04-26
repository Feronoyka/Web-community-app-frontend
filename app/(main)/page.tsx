import axios from 'axios';
import Community from '@/components/Community';
import {
  normalizeCommunities,
  CommunityFromApi,
} from '@/utils/normalizeCommunities';
import { use } from 'react';
import { AddIcon } from '@/assets/icons';

export default function Home() {
  const API = process.env.API_URL;

  const getCommunities = async (): Promise<CommunityFromApi[]> => {
    const response = await axios.get(`${API}/communities`);
    if (!response.data) return [];

    return normalizeCommunities(response.data);
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
        <div className='col-span-45 mt-20 cursor-pointer'>
          <AddIcon />
        </div>
      )}
    </div>
  );
}
