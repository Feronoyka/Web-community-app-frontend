import { useActionState, useState } from 'react';
import Link from 'next/link';
import { signUpAction } from '@/app/(auth)/sign-up/actions';
import { Button, Input } from '../UI';
import { SeeIcon, UnSeeIcon } from '@/assets/icons';

function SignUpForm() {
  const [state, action, isPending] = useActionState(signUpAction, null);
  const [type, setType] = useState('password');

  const toggleHideAndSHow = () => {
    setType((type) => (type === 'password' ? 'text' : 'password'));
  };

  const errorStyle = 'block text-red-500 text-sm';

  return (
    <>
      <form action={action}>
        <p className='font-bold mt-2'>Nickname</p>
        <Input type='text' name='nickname' placeholder='Nickname' />
        {state?.errors?.nickname && (
          <p className={errorStyle}>{state.errors.nickname[0]}</p>
        )}
        <p className='font-bold mt-2'>Email</p>
        <Input type='email' name='email' placeholder='Email' />
        {state?.errors?.email && (
          <p className={errorStyle}>{state.errors.email[0]}</p>
        )}
        <p className='font-bold mt-2'>Password</p>
        <div className='relative'>
          <Input type={type} name='password' placeholder='Password' />
          {type === 'password' ? (
            <UnSeeIcon
              className='absolute top-[15px] left-71 cursor-pointer'
              onClick={toggleHideAndSHow}
            />
          ) : (
            <SeeIcon
              className='absolute top-[15px] left-71 cursor-pointer'
              onClick={toggleHideAndSHow}
            />
          )}
          {state?.errors?.password && (
            <p className={errorStyle}>{state.errors.password[0]}</p>
          )}
        </div>
        <div className='text-center mt-4'>
          <Button type='submit' disabled={isPending} className='px-33'>
            Sign up
          </Button>
          <p className='mt-2 mb-4'>
            <span>Already have an account?</span>{' '}
            <span className='text-[#0379FF]'>
              <Link href='/sign-in'>Sign in</Link>
            </span>
          </p>
        </div>
      </form>
    </>
  );
}

export default SignUpForm;
