import { KeyIcon } from '@/assets/icons';
import ResetConfirmForm from './ResetConfirmForm';

function ResetConfirm() {
  return (
    <div className='py-2 px-8'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold my-8'>New password</h1>
        <KeyIcon className='mx-auto' />
        <p className='font-semibold text-[#808080] mt-4'>
          Please set your a new password
        </p>
      </div>
      <div className='flex justify-center'>
        <ResetConfirmForm />
      </div>
    </div>
  );
}

export default ResetConfirm;
