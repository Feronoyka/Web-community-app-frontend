import Link from 'next/link';
import Search from './Search';

function Main() {
  return (
    <>
      <Search
        name='Search communities'
        className='text-xl bg-[#F8CD86] outline-none col-span-4 rounded-[10px] py-4 pl-6'
      />
      <div className='text-xl bg-[#F8CD86] col-start-9 col-end-13 self-center text-center p-4 rounded-[10px]'>
        <Link href='/'>Communities</Link>
        <Link href='/owned-communities'>Own Communities</Link>
      </div>
    </>
  );
}

export default Main;
