'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SignUpIcon, UserIcon, DefaultUserIcon, Logo } from '@/assets/icons';
import Search from './UI/Search';
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
    <div className='bg-(--vibrant-coral-150) w-screen h-21.25 drop-shadow-lg'>
      <ul className='flex items-center h-full justify-between mx-8'>
        <Logo />
        <ul className='flex items-center'>
          <li>
            <Search
              name='Search people'
              className='pr-32 mr-8 text-xl py-2.75 pl-4 bg-(--golden-pollen-100) outline-none rounded-[10px]'
            />
          </li>
          {user ? (
            <li className='inline-block text-xl'>
              {user.avatarUrl ? (
                <Image
                  src={user.avatarUrl}
                  alt=''
                  onClick={() => setIsOpen(!isOpen)}
                />
              ) : (
                <DefaultUserIcon onClick={() => setIsOpen(!isOpen)} />
              )}
            </li>
          ) : (
            <li className='inline-block text-xl'>
              <DefaultUserIcon onClick={() => setIsOpen(!isOpen)} />
            </li>
          )}
          <li className='group'>
            {isOpen && (
              <ul className='text-[18px] items-center absolute bg-white py-4 px-5 top-21.5 left-[86%] rounded-[10px]'>
                {user !== null ? (
                  <li className='my-3 items-center justify-center cursor-pointer'>
                    <Link
                      href={`/profile/${user?.nickname}`}
                      className='flex flex-row'
                    >
                      <UserIcon className='mr-2' />
                      <p>Profile</p>
                    </Link>
                    <Link href={'/community-create'}>
                      <p>Create community</p>
                    </Link>
                  </li>
                ) : (
                  <li className='cursor-pointer'>
                    <Link
                      href='/sign-up'
                      className='flex flex-row items-center'
                    >
                      <SignUpIcon className='mr-2' /> <p>Sign up</p>
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
