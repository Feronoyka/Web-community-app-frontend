import Community from '@/components/Community';
import { use } from 'react';

interface Community {
  albumId?: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl?: string;
}

export default function Home() {
  const url = 'https://jsonplaceholder.typicode.com/photos?_limit=3';

  const getCommunities = async (url: string): Promise<Community[]> => {
    const response = await fetch(url);

    if (!response) throw new Error('Failed to fetch');

    const data = await response.json();
    return Array.isArray(data) ? data : [data];
  };

  const communities = use(getCommunities(url));

  return (
    <>
      {communities ? (
        <div className='grid grid-flow-col justify-items-center gap-8'>
          {communities.map((community) => (
            <Community key={community.id} {...community} />
          ))}
        </div>
      ) : (
        <p>Failed to load communities</p>
      )}
    </>
  );
}
