'use client';

import SignUpForm from './SignUpForm';
import { ArrowLeft } from '@/assets/icons';
import { useRouter } from 'next/navigation';

function SignUp() {
  const router = useRouter();

  return (
    <div className='px-8 py-8'>
      <div className='flex justify-start'>
        <button onClick={() => router.push('/')}>
          <ArrowLeft />
        </button>
      </div>
      <h1 className='text-[36px] mb-2 font-bold text-center'>Sign up</h1>
      <div className='flex justify-center'>
        <SignUpForm />
      </div>
    </div>
  );
}

export default SignUp;
