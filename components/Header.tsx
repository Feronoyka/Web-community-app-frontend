'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Logo, AccountIcon, SignUpIcon } from '@/assets/icons';
import Search from './Search';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
          <li className='group'>
            <AccountIcon
              onClick={() => setIsOpen(!isOpen)}
              className='cursor-pointer'
            />
            {isOpen && (
              <ul className='text-[18px] items-center text-center absolute bg-white py-4 px-3 top-[85px] left-[90%] rounded-[10px]'>
                {/* <li className='flex my-3 cursor-pointer'>
                  <UserIcon className='mr-2' /> Profile
                </li> */}
                <li className='flex cursor-pointer'>
                  <Link href='/sign-up'>
                    <SignUpIcon className='mr-2' /> Sign up
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default Header;
