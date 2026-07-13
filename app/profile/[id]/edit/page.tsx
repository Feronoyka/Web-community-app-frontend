import { getMe } from '@/lib/auth';
import EditUserProfile from '@/components/profile/EditUserProfile';
import { redirect } from 'next/navigation';
import { getUser } from '@/lib/getUser';

async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const currentUser = await getMe();
  if (!currentUser) redirect('/sign-in');

  const user = await getUser(id);

  return <EditUserProfile currentUser={currentUser} user={user} />;
}

export default page;
