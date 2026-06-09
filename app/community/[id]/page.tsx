import CommunityChat from '@/components/community/CommunityChat';
import { getMe } from '@/lib/auth';
import { getCommunity } from '@/lib/getCommunity';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const user = await getMe();
  if (!user) redirect('/sign-in');

  const community = await getCommunity(id);
  // const community = await getCommunities()

  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value ?? '';

  return (
    <div className='grid grid-cols-12 gap-8 mx-16'>
      <CommunityChat
        community={community}
        communityId={id}
        currentUser={user}
        accessToken={accessToken}
      />
    </div>
  );
}

export default page;
