import { ArrowLeft } from '@/assets/icons';
import Link from 'next/link';
import EditCommunityForm from './EditCommunityForm';
import { CommunityFromApi } from '@/types';

function EditCommunity({
  communityId,
  community,
}: {
  communityId: string;
  community: CommunityFromApi;
}) {
  return (
    <div className='bg-white col-start-3 col-end-11 rounded-[10px] pt-9 px-9 shadow-(--cartoon-shadow) border-2'>
      <div className='flex justify-between'>
        <div>
          <h1 className='text-4xl font-bold'>Set community</h1>
          <h3 className='text-2xl text-[#808080] w-50 mt-4'>
            Set changes to yout community
          </h3>
        </div>
        <div>
          <Link href='/'>
            <ArrowLeft />
          </Link>
        </div>
      </div>
      <div>
        <EditCommunityForm id={communityId} community={community} />
      </div>
    </div>
  );
}

export default EditCommunity;
