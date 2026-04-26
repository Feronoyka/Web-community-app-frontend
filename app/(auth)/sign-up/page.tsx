'use client';

import Link from 'next/link';
import { useActionState, useState } from 'react';
import { signUpForm } from './actions';
import { OutlineIcon, SeeIcon, UnSeeIcon } from '@/assets/icons';

function SignUp() {
  const [state, action, isPending] = useActionState(signUpForm, null);
  const [type, setType] = useState('password');

  const toggleHideAndSHow = () => {
    setType((type) => (type === 'password' ? 'text' : 'password'));
  };

  const inputStyle =
    'block text-[18px] my-4 mx-auto border border-[#808080] focus:outline-none rounded-[10px] py-2 pl-4 w-[325px]';

  const errorStyle = 'block text-red-500 text-sm';

  return (
    <div className='col-start-5 col-end-9 bg-white rounded-[10px] my-40'>
      <form action={action}>
        <Link href='/'>
          <OutlineIcon className='ml-5 mt-5' />
        </Link>
        <h1 className=' text-[36px] font-bold text-center'>Sign up</h1>
        <input
          name='nickname'
          type='text'
          placeholder='Domain name'
          className={inputStyle}
        />
        {state?.errors?.nickname && (
          <p className={errorStyle}>{state.errors.nickname[0]}</p>
        )}
        <input
          name='email'
          type='email'
          placeholder='Email'
          className={inputStyle}
        />
        {state?.errors?.email && (
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
          {state?.errors?.password && (
            <p className={errorStyle}>{state.errors.password[0]}</p>
          )}
        </div>
        <button
          type='submit'
          disabled={isPending}
          className='block text-white font-bold mx-auto bg-[#6C938A] rounded-[10px] py-2 px-23.75 cursor-pointer'
        >
          Create an account
        </button>
        <p className='my-4 text-center mb-4'>
          <span>Already have an account?</span>{' '}
          <span className='text-[#0379FF]'>
            <Link href='/sign-in'>Sign in</Link>
          </span>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
