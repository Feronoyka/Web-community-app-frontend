import { getMe } from '@/lib/auth';
import EditUserProfile from '@/components/profile/EditUserProfile';
import { redirect } from 'next/navigation';

async function page() {
  const user = await getMe();
  if (!user) redirect('/sign-in');

  return (
    <>
      <EditUserProfile user={user} />
    </>
  );
}

export default page;
