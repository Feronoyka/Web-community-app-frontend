import Link from 'next/link';
import { signInForm } from './actions';
import { OutlineIcon } from '@/assets/icons';

function SignIn() {
  const inputStyle =
    'block text-[18px] my-4 mx-auto border border-[#808080] focus:outline-none rounded-[10px] py-2 pr-30 pl-4';

  return (
    <form action={signInForm}>
      <Link href='/'>
        <OutlineIcon className='ml-5 mt-5' />
      </Link>
      <h1 className=' text-[36px] font-bold text-center'>Sign in</h1>
      <input
        name='email'
        type='email'
        placeholder='Email'
        className={inputStyle}
      />
      <input
        name='password'
        type='password'
        placeholder='Password'
        className={inputStyle}
      />
      <button
        type='submit'
        className='block text-white font-bold mx-auto bg-[#6C938A] rounded-[10px] py-2 px-[137px] cursor-pointer'
      >
        Sign in
      </button>
      <p className='my-4 text-center mb-4'>
        <span>Do not have an account?</span>{' '}
        <span className='text-[#0379FF]'>
          <Link href='/sign-up'>Sign up</Link>
        </span>
      </p>
    </form>
  );
}

export default SignIn;
