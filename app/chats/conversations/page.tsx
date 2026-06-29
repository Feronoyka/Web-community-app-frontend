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

  return (
    <div className='grid grid-cols-12 gap-5 mx-16'>
      <Conversations chattedUsers={chattedUsers} />
    </div>
  );
}

export default page;
