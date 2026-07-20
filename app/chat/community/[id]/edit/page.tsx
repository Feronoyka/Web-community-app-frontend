import EditCommunity from '@/components/editCommunity.tsx/EditCommunity';
import { getMe } from '@/lib/auth';
import { getCommunity } from '@/lib/getCommunity';
import { redirect } from 'next/navigation';

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const community = await getCommunity(id);
  const user = await getMe();

  if (!community) {
    redirect('/');
  }

  if (user?.id !== community.ownerId) {
    redirect('/');
  }

  return (
    <div className='my-20 max-[830px]:mx-10'>
      <EditCommunity communityId={id} community={community} />
    </div>
  );
}
