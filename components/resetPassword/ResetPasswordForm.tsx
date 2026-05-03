'use client';

import { ResetPasswordAction } from '@/app/(auth)/reset-password/actions';
import { useActionState } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';

function ResetPasswordForm() {
  const [state, action, isPending] = useActionState(ResetPasswordAction, null);
  const errorStyle = 'text-red-500 text-sm';

  return (
    <>
      <form action={action}>
        <p className='font-bold'>Email</p>
        <Input type='email' name='email' placeholder='Email' />
        {state?.errors.email && (
          <p className={errorStyle}>{state.errors.email[0]}</p>
        )}
        {state?.errors.server && (
          <p className={errorStyle}>{state.errors.server[0]}</p>
        )}
        <div className='mt-4 mb-8'>
          <Button type='submit' disabled={isPending} className='px-26'>
            Confirm email
          </Button>
        </div>
      </form>
    </>
  );
}

export default ResetPasswordForm;
