import { getMe } from '@/lib/auth';
import UserProfile from '@/components/profile/UserProfile';

export default async function page() {
  const user = await getMe();
  return (
    <>
      <UserProfile user={user} />
    </>
  );
}
