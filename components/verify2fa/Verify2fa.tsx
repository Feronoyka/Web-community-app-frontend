import { SecurityIcon } from '@/assets/icons';
import Verify2faForm from './Verify2faForm';

function Verify2fa() {
  return (
    <div className='px-8 py-12'>
      <div className='text-center'>
        <div>
          <h3 className='text-4xl font-bold mb-8'>2-Step Verification</h3>
          <SecurityIcon className='mx-auto mt-8' />
          <p className='font-semibold text-[#808080] mt-4'>
            Enter the 6-digit code we sent to your email{' '}
          </p>
        </div>
        <Verify2faForm />
      </div>
    </div>
  );
}

export default Verify2fa;
