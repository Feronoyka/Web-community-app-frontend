import PrivateChat from '@/components/chat/PrivateChat';
import { getMe } from '@/lib/auth';
import { getUser } from '@/lib/getUser';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const user = await getMe();
  if (!user) redirect('/sign-in');

  const receiver = await getUser(id);
  if (!receiver) redirect('/');

  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value ?? '';

  return (
    <PrivateChat
      receiverId={id}
      currentUser={user}
      receiver={receiver}
      accessToken={accessToken}
    />
  );
}

export default page;
