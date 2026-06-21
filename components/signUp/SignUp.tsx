'use client';

import Link from 'next/link';
import SignUpForm from './SignUpForm';
import { ArrowLeft } from '@/assets/icons';

function SignUp() {
  return (
    <div className='px-8 py-8'>
      <button>
        <Link href='/' className='flex justify-end'>
          <ArrowLeft />
        </Link>
      </button>
      <h1 className='text-[36px] mb-2 font-bold text-center'>Sign up</h1>
      <div className='flex justify-center'>
        <SignUpForm />
      </div>
    </div>
  );
}

export default SignUp;
