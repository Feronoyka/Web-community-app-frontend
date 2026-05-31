import { getMe } from '@/lib/auth';
import OwnedCommunities from '@/components/OwnedCommunities';
import { User } from '@/types';

async function page() {
  const user: User | null = await getMe();

  return <OwnedCommunities user={user} />;
}

export default page;
