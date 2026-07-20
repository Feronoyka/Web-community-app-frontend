import Account from '@/components/account/Account';
import { getMe } from '@/lib/auth';
import { redirect } from 'next/navigation';

async function page() {
  const user = await getMe();

  if (!user) {
    redirect('/sign-in');
  }

  return <Account user={user} />;
}

export default page;
