'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  SignUp,
  UserIcon,
  DefaultUserIcon,
  Logo,
  Members,
  Account,
  Logout,
  ChatsIcon,
} from '@/assets/icons';
import SearchUser from './UI/SearchUser';
import Image from 'next/image';
import { logout } from '@/lib/logout';
import { User } from '@/types';

function Navbar({ user }: { user: User | null }) {
  const [isOpen, setIsOpen] = useState(false);

  const hoverList = 'hover:bg-gray-200 rounded-xl';

  return (
    <div className='bg-(--vibrant-coral-150) w-screen h-21.25 drop-shadow-lg'>
      <ul className='flex items-center h-full justify-between mx-8'>
        <Logo />
        <ul className='flex items-center'>
          <li className='flex flex-row items-center'>
            <SearchUser
              name='Search people'
              className='px-20 mr-8 text-xl py-2 pl-4 bg-(--golden-pollen-100) outline-none rounded-[10px] max-[767px]:mr-5'
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
            {isOpen &&
              (user !== null ? (
                <ul className='items-center absolute bg-white py-2 px-4 top-21 right-8 rounded-[10px] border-2 shadow-(--cartoon-shadow)'>
                  <li className='my-3 items-center justify-center'>
                    <div>
                      <p className='font-semibold'>{user.nickname}</p>
                      <p className='text-gray-500'>{user.email}</p>
                    </div>
                    <hr className='text-gray-300 my-4' />
                    <Link
                      href={`/profile/${user?.id}`}
                      className={`flex flex-row items-center py-1 px-2 ${hoverList}`}
                    >
                      <UserIcon />
                      <p className='text-[18px]'>Profile</p>
                    </Link>
                    <Link
                      href={`/account/${user?.id}`}
                      className={`flex flex-row items-center py-1 px-2 ${hoverList}`}
                    >
                      <Account />
                      <p className='text-[18px]'>Account</p>
                    </Link>
                    <Link
                      href={'/community-create'}
                      className={`flex flex-row items-center py-1 px-2 ${hoverList}`}
                    >
                      <Members stroke='#000000' strokeWidth={1.5} />
                      <p className='text-[18px]'>Create community</p>
                    </Link>
                    <Link
                      href='/chats/conversations'
                      className={`flex flex-row items-center py-1 px-2 ${hoverList}`}
                    >
                      <ChatsIcon />
                      <p className='text-[18px]'>Chats</p>
                    </Link>
                    <button
                      className={`flex flex-row items-center py-1 px-2 text-[18px] w-full cursor-pointer ${hoverList}`}
                      onClick={logout}
                    >
                      <Logout />
                      Log out
                    </button>
                  </li>
                </ul>
              ) : (
                <ul className='items-center absolute bg-white py-2 px-4 top-21 right-8 rounded-[10px] border-2 shadow-(--cartoon-shadow)'>
                  <li className='cursor-pointer'>
                    <Link
                      href='/sign-up'
                      className={`flex flex-row items-center py-1 px-2 ${hoverList}`}
                    >
                      <SignUp /> <p className='whitespace-nowrap'>Sign up</p>
                    </Link>
                  </li>
                </ul>
              ))}
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default Navbar;
