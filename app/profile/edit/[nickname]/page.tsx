import { getMe } from '@/lib/auth';
import EditUserProfile from '@/components/profile/EditUserProfile';

async function page() {
  const user = await getMe();
  return (
    <>
      <EditUserProfile user={user} />
    </>
  );
}

export default page;
