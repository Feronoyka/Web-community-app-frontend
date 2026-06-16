import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import CommunityChat from '@/components/community/CommunityChat';
import { getMe } from '@/lib/auth';
import { getCommunity } from '@/lib/getCommunity';

async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const user = await getMe();
  if (!user) redirect('/sign-in');

  const community = await getCommunity(id);

  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value ?? '';

  return (
    <div className='grid grid-cols-12 gap-8 mx-16'>
      <CommunityChat
        user={user}
        community={community}
        communityId={id}
        owner={community?.owner}
        accessToken={accessToken}
      />
    </div>
  );
}

export default page;
