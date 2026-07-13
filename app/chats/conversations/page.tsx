import Conversations from '@/components/chats/Conversations';
import { getMe } from '@/lib/auth';
import { getChattedUsers } from '@/lib/getChattedUsers';
import { redirect } from 'next/navigation';

async function page() {
  const user = await getMe();

  if (!user) {
    redirect('/sign-in');
  }

  const chattedUsers = await getChattedUsers(user);

  return <Conversations chattedUsers={chattedUsers} />;
}

export default page;
