import { KeyIcon, OutlineIcon } from '@/assets/icons';
import Link from 'next/link';
import ResetPasswordForm from './ResetPasswordForm';

function ResetPassword() {
  return (
    <div className='py-8 px-8'>
      <div className=''>
        <Link href='/' className='flex justify-end'>
          <OutlineIcon />
        </Link>
        <div className='text-center mt-4'>
          <h1 className='text-4xl font-bold'>Forgot password</h1>
          <div className='flex justify-center mt-4'>
            <KeyIcon />
          </div>
          <p className='font-semibold mt-4 text-[#808080]'>
            Please write your email address to receive confirmation code
          </p>
        </div>
        <div className='flex justify-center mt-4'>
          <ResetPasswordForm />
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
