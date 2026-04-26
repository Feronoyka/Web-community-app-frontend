import { OutlineIcon, SecurityIcon } from '@/assets/icons';
import Link from 'next/link';
import Verify2faForm from './Verify2faForm';

function Verify2fa() {
  return (
    <div className='col-start-4 col-end-10 bg-white rounded-[10px] my-30 pt-8'>
      <div className='ml-[624]'>
        <Link href='/sign-in'>
          <OutlineIcon className='cursor-pointer' />
        </Link>
      </div>
      <div className='text-center'>
        <div>
          <h3 className='text-4xl font-semibold mb-8'>2-Step Verification</h3>
          <SecurityIcon className='mx-auto mt-4' />
          <p>Enter the 6-digit code we sent to your email </p>
        </div>
        <Verify2faForm />
      </div>
    </div>
  );
}

export default Verify2fa;
