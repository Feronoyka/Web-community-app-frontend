import { getMe } from '@/lib/auth';
import EditProfile from '@/components/you/EditProfile';
import { redirect } from 'next/navigation';

async function page() {
  const user = await getMe();
  if (!user) redirect('/sign-in');

  return (
    <>
      <EditProfile user={user} />
    </>
  );
}

export default page;
