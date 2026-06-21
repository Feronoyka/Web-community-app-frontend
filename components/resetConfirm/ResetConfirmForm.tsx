'use client';

import { resetConfirmAction } from '@/app/(auth)/reset-password/confirm/actions';
import { Eye, EyeSlash } from '@/assets/icons';
import { useActionState, useState } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';

function ResetConfirmForm() {
  const [state, action, isPending] = useActionState(resetConfirmAction, null);
  const [type, setType] = useState('password');

  const toggleHideAndSHow = () => {
    setType((type) => (type === 'password' ? 'text' : 'password'));
  };

  const errorStyle = 'text-red-500 text-sm';

  return (
    <>
      <form action={action}>
        <p className='font-bold mt-4'>Password</p>
        <div className='relative'>
          <Input type={type} name='password' placeholder='Password' />
          {type === 'password' ? (
            <EyeSlash
              onClick={toggleHideAndSHow}
              className='absolute top-[15px] left-72'
            />
          ) : (
            <Eye
              onClick={toggleHideAndSHow}
              className='absolute top-[15px] left-72'
            />
          )}
          {state?.errors.password && (
            <p className={errorStyle}>{state.errors.password}</p>
          )}
        </div>
        <p className='font-bold mt-2'>Confirm</p>
        <div className='relative'>
          <Input
            type='password'
            name='confirmPassword'
            placeholder='Confirm password'
          />
        </div>
        {state?.errors.confirmPassword && (
          <p className={errorStyle}>{state.errors.confirmPassword}</p>
        )}
        <Button
          type='submit'
          buttonType='primary'
          disabled={isPending}
          className='w-80 mt-4 mb-8 text-[18px]'
        >
          {isPending ? <p>Confirming...</p> : <p>Confirm password</p>}
        </Button>
      </form>
    </>
  );
}

export default ResetConfirmForm;
