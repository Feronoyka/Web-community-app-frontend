import CreateCommunity from '@/components/community/CreateCommunity';
import { getMe } from '@/lib/auth';
import { redirect } from 'next/navigation';

async function page() {
  const user = await getMe();
  if (!user) redirect('/sign-in');

  return (
    <div className='grid grid-cols-12 gap-8 mx-16 my-20'>
      <CreateCommunity />
    </div>
  );
}

export default page;
