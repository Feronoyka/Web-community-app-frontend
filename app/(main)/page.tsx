import Communities from '@/components/Communities';
import { getMe } from '@/lib/auth';
import { getCommunities } from '@/lib/getCommunities';
import { User } from '@/types';

// Server Component: fetch data here. Zustand hooks belong in client children (Communities).
export default async function Home() {
  const communities = await getCommunities();
  const user: User | null = await getMe();

  return <Communities user={user} communities={communities} />;
}
