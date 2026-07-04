import NavLink from './NavLink';
import SearchCommunity from './UI/SearchCommunity';

function Navigation() {
  return (
    <>
      <SearchCommunity
        name='Search communities'
        className='text-xl bg-(--golden-pollen-100) outline-none col-start-1 col-end-5 max-[1024px]:col-end-6'
      />
      <div className='flex text-xl bg-(--golden-pollen-100) shadow-(--cartoon-shadow) border-2 col-start-9 col-end-13 self-center justify-around p-3 rounded-[10px] max-[1024px]:col-start-7'>
        <div className='hover:bg-yellow-500 px-2 py-1 rounded-md'>
          <NavLink href='/'>
            <p className='whitespace-nowrap'>All Forums</p>
          </NavLink>
        </div>
        <div className='hover:bg-yellow-500 px-2 py-1 rounded-md'>
          <NavLink href='/owned-communities'>
            <p className='whitespace-nowrap'>Your forums</p>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navigation;
