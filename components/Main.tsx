import NavLink from './NavLink';
import Search from './Search';

function Main() {
  return (
    <>
      <Search
        name='Search communities'
        className='text-xl bg-[#F8CD86] outline-none col-span-4 rounded-[10px] py-4 pl-6'
      />
      <div className='flex text-xl bg-[#F8CD86] col-start-9 col-end-13 self-center justify-around p-4 rounded-[10px]'>
        <NavLink href='/'>Communities</NavLink>
        <NavLink href='/owned-communities'>Owned Communities</NavLink>
      </div>
    </>
  );
}

export default Main;
