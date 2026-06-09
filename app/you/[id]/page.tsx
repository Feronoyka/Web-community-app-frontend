import { getMe } from '@/lib/auth';
import You from '@/components/you/You';
import { redirect } from 'next/navigation';

export default async function page() {
  const user = await getMe();
  if (!user) {
    redirect('/sign-in');
  }

  return <You user={user} />;
}
