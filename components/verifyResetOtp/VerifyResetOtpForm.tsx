'use client';

import { useActionState, useState, useTransition } from 'react';
import OTPInput from 'react-otp-input';
import './otp.module.css';
import { verifyResetOtpAction } from '@/app/(auth)/reset-password/verify/actions';
import { Button } from '../UI';
import { useResendCooldown } from '@/hooks/useResendCooldown';
import { resendResetOtpAction } from '@/app/(auth)/reset-password/verify/resendResetOtpAction';

function VerifyResetOtpForm() {
  const [otp, setOtp] = useState('');
  const [state, action, isPending] = useActionState(verifyResetOtpAction, null);
  const [isPendingResend, startTransition] = useTransition();
  const { isOnCooldown, formatted, startCooldown, isMaxReached } =
    useResendCooldown();

  const handleResend = () => {
    startTransition(async () => {
      await resendResetOtpAction();
      startCooldown();
      setOtp('');
    });
  };

  return (
    <div className='mt-8'>
      <form action={action}>
        <div className='place-items-center'>
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderInput={(props) => (
              <input
                {...props}
                type='number'
                inputMode='numeric'
                pattern='[0-9]*'
              />
            )}
            containerStyle={{
              display: 'flex',
              gap: '10px',
              justifyContent: 'center',
            }}
            inputStyle={{
              fontSize: '1.5rem',
              width: '1.5em',
              height: '2em',
              border: '1px solid #808080',
              outline: 'none',
              borderRadius: '5px',
            }}
          />
          {state?.errors?.otp && (
            <p className='text-red-500'>{state.errors.otp[0]}</p>
          )}
        </div>
        <input type='hidden' name='otp' value={otp} />
        <div className='mt-4 mb-4'>
          <Button
            className='px-19 text-[18px]'
            buttonType='primaryAction'
            buttonColor='bg-(--steel-blue-50)'
            type='submit'
            disabled={isPending}
          >
            Confirm code
          </Button>
        </div>
      </form>
      <button
        className='text-blue-500 cursor-pointer'
        disabled={isOnCooldown || isPendingResend}
        onClick={handleResend}
      >
        {isPendingResend
          ? 'Sending...'
          : isMaxReached
            ? 'Too many resend attempts'
            : isOnCooldown
              ? `Resend code in ${formatted}`
              : 'Resend code'}
      </button>
    </div>
  );
}

export default VerifyResetOtpForm;
