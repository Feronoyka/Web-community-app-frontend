import { getMe } from '@/lib/auth';
import UserProfile from '@/components/profile/UserProfile';
import { redirect } from 'next/navigation';

export default async function page() {
  const user = await getMe();
  if (!user) {
    redirect('/sign-in');
  }

  return (
    <>
      <UserProfile user={user} />
    </>
  );
}
