'use client';

import { useActionState, useState, useTransition } from 'react';
import OTPInput from 'react-otp-input';
import { verify2faAction } from '@/app/(auth)/sign-in/verify-2fa/actions';
import { CheckBoxIcon, UnCheckBoxIcon } from '@/assets/icons/';
import './otp.module.css';
import { Button } from '../UI';
import { useResendCooldown } from '@/hooks/useResendCooldown';
import { resend2faAction } from '@/app/(auth)/sign-in/verify-2fa/resend2faAction';

function Verify2faForm() {
  const [otp, setOtp] = useState('');
  const [check, setCheck] = useState('');
  const [state, action, isPending] = useActionState(verify2faAction, null);
  const [isPendingResend, startTransition] = useTransition();
  const { isOnCooldown, formatted, startCooldown, isMaxReached } =
    useResendCooldown();

  const toggleCheck = () => {
    setCheck((state) => (state === '' ? 'on' : ''));
  };

  const handleResend = () => {
    startTransition(async () => {
      await resend2faAction();
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
                // Don't use `type="number"`: it can strip leading zeros and break OTP verification.
                type='text'
                inputMode='numeric'
                pattern='[0-9]*'
                autoComplete='one-time-code'
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
          {state?.errors.otp && (
            <p className='text-red-500'>{state.errors.otp[0]}</p>
          )}
          {state?.errors?.server && (
            <p className='text-red-500 mt-2'>{state.errors.server}</p>
          )}
        </div>
        <input type='hidden' name='otp' value={otp} />
        <div className='mt-4 mb-4'>
          <Button
            type='submit'
            buttonType='primary'
            disabled={isPending}
            className='px-27.25 text-[18px]'
          >
            Verify
          </Button>
        </div>
        <div className='flex justify-center items-center'>
          {check === 'on' ? (
            <CheckBoxIcon
              className='cursor-pointer transition-all transition-discrete'
              onClick={toggleCheck}
            />
          ) : (
            <UnCheckBoxIcon
              className='cursor-pointer transition-all transition-discrete'
              onClick={toggleCheck}
            />
          )}
          <input type='hidden' name='trustDevice' value={check} />
          <p className='ml-1 font-semibold'>Trust this device for 30 days</p>
        </div>
      </form>
      <button
        className='text-blue-500 cursor-pointer'
        onClick={handleResend}
        disabled={isOnCooldown || isPendingResend}
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

export default Verify2faForm;
