'use client';

import Link from 'next/link';
import { useActionState, useState } from 'react';
import { signInForm } from '@/app/(auth)/sign-in/actions';
import { OutlineIcon, SeeIcon, UnSeeIcon } from '@/assets/icons';

function SignIn() {
  const [state, action, isPending] = useActionState(signInForm, null);
  const [type, setType] = useState('password');

  const toggleHideAndSHow = () => {
    setType((type) => (type === 'password' ? 'text' : 'password'));
  };

  const inputStyle =
    'block text-[18px] my-4 mx-auto border border-[#808080] focus:outline-none rounded-[10px] py-2 pl-4 w-[325px]';

  const errorStyle = 'text-red-500 text-sm';

  return (
    <div className='col-start-5 col-end-9 bg-white rounded-[10px] my-40'>
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
        <div className='relative'>
          <input
            name='password'
            type={type}
            placeholder='Password'
            className={inputStyle}
          />
          {type === 'password' ? (
            <UnSeeIcon
              className='absolute top-[11px] left-85 cursor-pointer'
              onClick={toggleHideAndSHow}
            />
          ) : (
            <SeeIcon
              className='absolute top-[11px] left-85 cursor-pointer'
              onClick={toggleHideAndSHow}
            />
          )}
          {state &&
            typeof state === 'object' &&
            'errors' in state &&
            typeof state.errors !== 'string' &&
            state?.errors?.password && (
              <p className={errorStyle}>{state.errors.password[0]}</p>
            )}
        </div>
        <button
          type='submit'
          disabled={isPending}
          className='block text-white font-bold mx-auto bg-[#6C938A] rounded-[10px] py-2 px-34.25 cursor-pointer'
        >
          Sign in
        </button>
        <div className='my-4 text-center mb-4'>
          <div>
            <span>
              Forgot password?{' '}
              <Link className='text-blue-500' href=''>
                Reset
              </Link>
            </span>
          </div>
          <div>
            <span>
              Do not have an account?{' '}
              <Link className='text-blue-500' href='/sign-up'>
                Sign up
              </Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
