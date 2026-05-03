'use client';

import Link from 'next/link';
import SignInForm from './SignInForm';
import { OutlineIcon } from '@/assets/icons';

function SignIn() {
  return (
    <div className='py-8 px-8'>
      <Link href='/' className='flex justify-end'>
        <OutlineIcon />
      </Link>
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
