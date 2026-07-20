'use client';

import { ArrowLeft } from '@/assets/icons';
import EditUserProfileForm from './EditUserProfileForm';
import { User } from '@/types';
import { redirect, useRouter } from 'next/navigation';

export default function EditUserProfile({
  currentUser,
  user,
}: {
  currentUser: User;
  user?: User | null;
}) {
  const router = useRouter();

  const isOwn = user?.id === currentUser?.id;

  if (!isOwn) {
    redirect('/sign-in');
  }

  return (
    <div className='px-9 py-9'>
      <div className='flex justify-between mb-10'>
        <div>
          <h1 className='text-4xl font-bold mb-4'>Profile</h1>
          <h3 className='text-2xl text-[#808080] mt-4'>Update your profile</h3>
        </div>
        <button onClick={() => router.back()}>
          <ArrowLeft />
        </button>
      </div>
      <div className='px-5'>
        <EditUserProfileForm currentUser={currentUser} />
      </div>
    </div>
  );
}
