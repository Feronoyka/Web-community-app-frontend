'use client';

import Link from 'next/link';
import { useActionState } from 'react';
import { signInForm } from './actions';
import { OutlineIcon } from '@/assets/icons';

function SignIn() {
  const [state, action, isPending] = useActionState(signInForm, null);

  const inputStyle =
    'block text-[18px] my-4 mx-auto border border-[#808080] focus:outline-none rounded-[10px] py-2 pl-4 w-[325px]';

  const errorStyle = 'block text-[18px] my-4';

  return (
    <form action={action}>
      <Link href='/'>
        <OutlineIcon className='ml-5 mt-5' />
      </Link>
      <h1 className='text-[36px] font-bold text-center'>Sign in</h1>
      <input
        name='email'
        type='email'
        placeholder='Email'
        className={inputStyle}
      />
      {state &&
        typeof state === 'object' &&
        'errors' in state &&
        typeof state.errors !== 'string' &&
        state.errors.email && (
          <p className={errorStyle}>{state.errors.email[0]}</p>
        )}
      <input
        name='password'
        type='password'
        placeholder='Password'
        className={inputStyle}
      />
      {state &&
        typeof state === 'object' &&
        'errors' in state &&
        typeof state.errors !== 'string' &&
        state.errors.password && (
          <p className={errorStyle}>{state.errors.password[0]}</p>
        )}
      <button
        type='submit'
        disabled={isPending}
        className='block text-white font-bold mx-auto bg-[#6C938A] rounded-[10px] py-2 px-34.25 cursor-pointer'
      >
        Sign in
      </button>
      <p className='my-4 text-center mb-4'>
        <span>Do not have an account?</span>{' '}
        <span className='text-[#0379FF]'>
          <Link href='/sign-up'>Sign up</Link>
        </span>
      </p>
    </form>
  );
}

export default SignIn;
