import NavLink from './NavLink';
import SearchCommunity from './UI/SearchCommunity';

function Navbar() {
  return (
    <>
      <SearchCommunity
        name='Search communities'
        className='text-xl bg-(--golden-pollen-100) outline-none col-span-4 rounded-[10px] py-4 pl-6'
      />
      <div className='inline-flex text-xl bg-(--golden-pollen-100) shadow-(--cartoon-shadow) border-2 col-start-9 col-end-13 self-center justify-around p-3 rounded-[10px]'>
        <div className='hover:bg-yellow-500 px-2 py-1 rounded-md'>
          <NavLink href='/'>Communities</NavLink>
        </div>
        <div className='hover:bg-yellow-500 px-2 py-1 rounded-md'>
          <NavLink href='/owned-communities'>Owned Communities</NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
