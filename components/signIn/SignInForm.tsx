import Link from 'next/link';
import { useActionState, useState } from 'react';
import { signInAction } from '@/app/(auth)/sign-in/actions';
import { SeeIcon, UnSeeIcon } from '@/assets/icons';
import Input from '../UI/Input';
import Button from '../UI/Button';

function SignInForm() {
  const [state, action, isPending] = useActionState(signInAction, null);
  const [type, setType] = useState('password');

  const toggleHideAndSHow = () => {
    setType((type) => (type === 'password' ? 'text' : 'password'));
  };

  const errorStyle = 'text-red-500 text-sm';

  return (
    <>
      <form action={action}>
        <p className='font-bold mt-2'>Email</p>
        <Input type='text' placeholder='Enter an email' name='email' />
        <p className='font-bold mt-2'>Password</p>
        <div className='relative'>
          <Input type={type} name='password' placeholder='Enter a password' />
          {type === 'password' ? (
            <UnSeeIcon
              className='absolute top-3.75 left-72'
              onClick={toggleHideAndSHow}
            />
          ) : (
            <SeeIcon
              className='absolute top-3.75 left-72'
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
        <div className='mt-4 text-center mb-4'>
          <Button
            type='submit'
            buttonType='primaryAction'
            buttonColor='bg-(--steel-blue-50)'
            disabled={isPending}
            className='w-81 text-[18px]'
          >
            {isPending ? <p>Signing in...</p> : <p>Sign in</p>}
          </Button>
          <div className='mt-4'>
            <div>
              Forgot password?{' '}
              <Link className='text-blue-500' href='/reset-password'>
                Reset
              </Link>
            </div>
            <div>
              Do not have an account?{' '}
              <Link className='text-blue-500' href='/sign-up'>
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default SignInForm;
