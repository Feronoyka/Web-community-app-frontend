import Link from 'next/link';
import { signUpForm } from './actions';
import { OutlineIcon } from '@/assets/icons';

function SignUp() {
  const inputStyle =
    'block text-[18px] my-4 mx-auto border border-[#808080] focus:outline-none rounded-[10px] py-2 pr-30 pl-4';

  return (
    <form action={signUpForm}>
      <Link href='/'>
        <OutlineIcon className='ml-5 mt-5' />
      </Link>
      <h1 className=' text-[36px] font-bold text-center'>Sign up</h1>
      <input
        name='domainName'
        type='text'
        placeholder='Domain name'
        className={inputStyle}
      />
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
        className='block text-white font-bold mx-auto bg-[#6C938A] rounded-[10px] py-2 px-[95px] cursor-pointer'
      >
        Create an account
      </button>
      <p className='my-4 text-center mb-4'>
        <span>Already have an account?</span>{' '}
        <span className='text-[#0379FF]'>
          <Link href='/sign-in'>Sign in</Link>
        </span>
      </p>
    </form>
  );
}

export default SignUp;
