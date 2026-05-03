'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SignUpIcon, UserIcon, DefaultUserIcon, Logo } from '@/assets/icons';
import Search from './Search';
import Image from 'next/image';

interface User {
  id?: string;
  avatarUrl: string;
  nickname: string;
  username: string;
  email: string;
}

function Header({ user }: { user?: User }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-[#EE605D] w-screen h-[85px] drop-shadow-lg'>
      <ul className='flex items-center h-full justify-between mx-8'>
        <Logo />
        <ul className='flex items-center'>
          <li>
            <Search
              name='Search people'
              className='pr-[128px] mr-8 text-xl py-[11px] pl-4 bg-[#F6BD60] outline-none rounded-[10px]'
            />
          </li>
          {user ? (
            <li className='inline-block text-xl'>
              {user.avatarUrl ? (
                <Image src={user.avatarUrl} alt='' />
              ) : (
                <DefaultUserIcon onClick={() => setIsOpen(isOpen)} />
              )}
            </li>
          ) : (
            <li className='inline-block text-xl'>
              <DefaultUserIcon onClick={() => setIsOpen(!isOpen)} />
            </li>
          )}
          <li className='group'>
            {isOpen && (
              <ul className='text-[18px] items-center text-center absolute bg-white py-4 px-5 top-21.5 left-[89%] rounded-[10px]'>
                {user !== null ? (
                  <>
                    <li className='flex my-3 cursor-pointer'>
                      <Link href={`/profile/${user?.nickname}`}>
                        <UserIcon className='mr-2' /> Profile
                      </Link>
                    </li>
                  </>
                ) : (
                  <li className='cursor-pointer'>
                    <Link href='/sign-up' className='inline-flex items-center'>
                      <SignUpIcon className='mr-2' /> Sign up
                    </Link>
                  </li>
                )}
              </ul>
            )}
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default Header;
