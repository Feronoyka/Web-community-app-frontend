import { useActionState, useState } from 'react';
import OTPInput from 'react-otp-input';
import { verify2faAction } from '@/app/(auth)/verify-2fa/action';
import { CheckBoxIcon, UnCheckBoxIcon } from '@/assets/icons/';
import './otp.module.css';

function Verify2faForm() {
  const [otp, setOtp] = useState('');
  const [check, setCheck] = useState('off');
  const [state, action, isPending] = useActionState(verify2faAction, null);

  const toggleCheck = () => {
    setCheck((state) => (state === 'off' ? 'on' : 'off'));
  };

  return (
    <div className='my-4'>
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
          {state?.errors.otp && (
            <p className='text-red-500'>{state.errors.otp[0]}</p>
          )}
        </div>
        <input type='hidden' name='otp' value={otp} />
        <div className='mt-4 mb-4'>
          <button
            className='bg-[#6C938A] px-19 py-2 text-white text-xl rounded-[10px] cursor-pointer'
            type='submit'
            disabled={isPending}
          >
            Verify
          </button>
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
          <p className='ml-1'>Trust this device for 30 days</p>
        </div>
      </form>
      <button className='hover:text-gray-700 cursor-pointer'>
        Recend code
      </button>
    </div>
  );
}

export default Verify2faForm;
