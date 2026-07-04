'use client';

import { KeyIcon, ArrowLeft } from '@/assets/icons';
import ResetPasswordForm from './ResetPasswordForm';
import { useRouter } from 'next/navigation';

function ResetPassword() {
  const router = useRouter();

  return (
    <div className='py-8 px-8'>
      <div className=''>
        <button onClick={() => router.back()} className='flex justify-end'>
          <ArrowLeft />
        </button>
        <div className='text-center mt-4'>
          <h1 className='text-4xl font-bold'>Forgot password</h1>
          <div className='flex justify-center mt-4'>
            <KeyIcon />
          </div>
          <p className='font-semibold mt-4 text-[#808080] mx-auto w-70'>
            Please write your email address to receive confirmation code
          </p>
        </div>
        <div className='flex justify-center mt-4'>
          <ResetPasswordForm />
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
