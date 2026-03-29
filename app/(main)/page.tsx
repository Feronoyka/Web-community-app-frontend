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
  // This endpoint returns an array (safe to .map over)
  const url = 'https://jsonplaceholder.typicode.com/photos?_limit=6';

  const getCommunities = async (url: string): Promise<Community[]> => {
    const response = await fetch(url);
    const data = await response.json();
    return Array.isArray(data) ? data : [data];
  };

  const communities = use(getCommunities(url));

  return (
    <div>
      {communities.map((community) => (
        <Community key={community.id} {...community} />
      ))}
    </div>
  );
}
