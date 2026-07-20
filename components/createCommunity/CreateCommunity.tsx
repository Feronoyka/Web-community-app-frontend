'use client';

import { ArrowLeft } from '@/assets/icons';
import CreateCommunityForm from './CreateCommunityForm';
import { useRouter } from 'next/navigation';

function CreateCommunity() {
  const router = useRouter();

  return (
    <div className='bg-white col-start-2 col-end-12 rounded-[10px] pt-9 px-9 shadow-(--cartoon-shadow) border-2 max-[767px]:px-0 max-[767px]:border-none max-[767px]:shadow-none max-[1024px]:col-span-12'>
      <div className='flex justify-between'>
        <div>
          <h1 className='text-4xl font-bold'>Create community</h1>
          <h3 className='text-2xl text-[#808080] w-50 mt-4'>
            Create your own community
          </h3>
        </div>
        <div>
          <button onClick={() => router.back()}>
            <ArrowLeft />
          </button>
        </div>
      </div>
      <div>
        <CreateCommunityForm />
      </div>
    </div>
  );
}

export default CreateCommunity;
