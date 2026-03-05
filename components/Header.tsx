import { Logo, UserLogo } from '@/assets/icons';
import Search from './Search';

function Header() {
  return (
    <div className='bg-[#F28482] w-screen h-[85px] drop-shadow-lg'>
      <ul className='flex items-center h-full justify-between mx-8'>
        <li className='inline-block text-xl'>
          <Logo />
        </li>
        <ul className='flex items-center'>
          <li>
            <Search
              name='Search people'
              className='pr-[128px] mr-8 text-xl py-[11px] pl-4 bg-[#F8CD86] outline-none rounded-[10px]'
            />
          </li>
          <li>
            <UserLogo />
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default Header;
