import { getMe } from '@/lib/auth';
import { redirect } from 'next/navigation';

async function page() {
  const user = await getMe();
  if (!user) {
    redirect('/sign-in');
  }

  return <>page</>;
}

export default page;
