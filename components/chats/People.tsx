'use client';

import { ArrowLeft } from '@/assets/icons';
import { useRouter } from 'next/navigation';

function PrivateChat() {
  const router = useRouter();

  return (
    <div className='h-screen'>
      <div className='fixed top-0 w-289 bg-(--golden-pollen-100) py-4 shadow-md'>
        <div className='flex items-center mx-8'>
          <button onClick={() => router.back()}>
            <ArrowLeft className='mr-4' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PrivateChat;
