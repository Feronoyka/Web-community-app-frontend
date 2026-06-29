import Communities from '@/components/chats/Communities';
import { getMe } from '@/lib/auth';
import { redirect } from 'next/navigation';

async function page() {
  const user = await getMe();

  if (!user) {
    redirect('/sign-in');
  }

  const joinedCommunities = user?.joinedCommunities;

  return <Communities joinedCommunities={joinedCommunities} />; // chats/communities
}

export default page;
