import { Logo, UserLogo } from '@/assets/icons';
import styles from './header.module.css';
import Search from './reuseable/Search';

function Header() {
  return (
    <div className='bg-[#F28482] w-screen h-[85px] drop-shadow-lg'>
      <ul className={styles.topNavbar}>
        <li className='text-xl'>
          <Logo />
        </li>
        <ul className={styles.topNavbar}>
          <li>
            <Search name='Search people' />
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
