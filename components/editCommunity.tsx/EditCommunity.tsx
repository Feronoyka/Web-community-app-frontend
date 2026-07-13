'use client';

import { ArrowLeft } from '@/assets/icons';
import EditCommunityForm from './EditCommunityForm';
import { CommunityFromApi } from '@/types';
import { useRouter } from 'next/navigation';

function EditCommunity({
  communityId,
  community,
}: {
  communityId: string;
  community: CommunityFromApi;
}) {
  const router = useRouter();

  return (
    <div className='bg-white col-start-2 col-end-12 rounded-[10px] pt-9 px-9 shadow-(--cartoon-shadow) border-2 max-[767px]:px-0 max-[767px]:border-none max-[767px]:shadow-none'>
      <div className='flex justify-between'>
        <div>
          <h1 className='text-4xl font-bold'>Set community</h1>
          <h3 className='text-2xl text-[#808080] w-50 mt-4'>
            Set changes to yout community
          </h3>
        </div>
        <div>
          <button onClick={() => router.forward()}>
            <ArrowLeft />
          </button>
        </div>
      </div>
      <div>
        <EditCommunityForm id={communityId} community={community} />
      </div>
    </div>
  );
}

export default EditCommunity;
