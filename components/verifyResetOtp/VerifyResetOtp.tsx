import { KeyIcon } from '@/assets/icons';
import VerifyResetOtpForm from './VerifyResetOtpForm';

function VerifyResetOtp() {
  return (
    <div className='px-8 py-12'>
      <div className='text-center'>
        <div>
          <h3 className='text-4xl font-bold mb-4'>Verify email</h3>
          <KeyIcon className='mx-auto mt-8' />
          <p className='font-semibold text-[#808080] mt-4'>
            Verify email address
          </p>
        </div>
        <VerifyResetOtpForm />
      </div>
    </div>
  );
}

export default VerifyResetOtp;
