import { Logo, UserLogo } from '@/assets/icons';
import styles from './header.module.css';
import Search from './Search';

function Header() {
  return (
    <div className='bg-[#F28482] w-screen h-[85px] drop-shadow-lg'>
      <ul className={styles.topNavbar}>
        <li className='text-xl'>
          <Logo />
        </li>
        <ul className='flex items-center'>
          <li>
            <Search
              name='Search people'
              className='pr-[128px] mr-[32px] text-xl py-[11px] pl-[16px] bg-[#F8CD86] outline-none rounded-[10px]'
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
