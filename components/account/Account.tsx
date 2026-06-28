'use client';

import { ArrowLeft } from '@/assets/icons';
import { Button, Input } from '@/components/UI';
import { User } from '@/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function Account({ user }: { user: User | null }) {
  {
    /*form action */
  }

  const router = useRouter();

  return (
    <form
      action={''}
      className='bg-white col-start-3 col-end-11 px-9 py-9 rounded-[10px] shadow-(--cartoon-shadow) border-2'
    >
      <div className='flex justify-between'>
        <h1 className='text-[32px] font-bold'>Account</h1>
        <button onClick={() => router.back()}>
          <ArrowLeft />
        </button>
      </div>
      <h2 className='text-2xl text-gray-500 opacity-70'>
        Set your account preference
      </h2>
      <div className='px-10 mt-7'>
        <div className='border-gray-500 border rounded-[10px] px-3 py-4'>
          <h3 className='text-xl font-bold'>Nickname</h3>
          <p className='text-gray-500 opacity-70'>
            If you change your nickname all the existing links to your profile
            will be 404
          </p>
          <Input
            placeholder={user?.nickname}
            defaultValue={user?.nickname}
            className='mt-4'
          />
        </div>
        <div className='border-gray-500 border rounded-[10px] px-3 py-4 mt-4'>
          <h3 className='text-xl font-bold'>Change password</h3>
          <Link href='/reset-password' className='text-(--steel-blue-100)'>
            Forgot password?
          </Link>
        </div>
      </div>
      <div className='flex justify-end'>
        <Button buttonType='secondaryTwo' className='mt-4'>
          Save
        </Button>
      </div>
    </form>
  );
}

export default Account;
