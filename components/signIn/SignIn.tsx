'use client';

import SignInForm from './SignInForm';
import { ArrowLeft } from '@/assets/icons';
import { useRouter } from 'next/navigation';

function SignIn() {
  const router = useRouter();

  return (
    <div className='py-8 px-8'>
      <div className='flex justify-end'>
        <button onClick={() => router.push('/')}>
          <ArrowLeft />
        </button>
      </div>
      <div className='text-center'>
        <h1 className='text-[36px] font-bold'>Sign in</h1>
      </div>
      <div className='flex justify-center'>
        <SignInForm />
      </div>
    </div>
  );
}

export default SignIn;
