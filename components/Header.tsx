// import { useState } from 'react';
// import Link from 'next/link';
// import {
//   SignUpIcon,
//   UserIcon,
//   DefaultUserIcon,
//   Logo,
//   MembersIcon,
//   AccountIcon,
//   Logout,
// } from '@/assets/icons';
// import SearchUser from './UI/SearchUser';
// import Image from 'next/image';
// import { logout } from '@/lib/logout';
import { User } from '@/types';
import Navbar from './Navbar';
import { getMe } from '@/lib/auth';

async function Header() {
  const user: User | null = await getMe();
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar user={user} />
    </>
    // <div className='bg-(--vibrant-coral-150) w-screen h-21.25 drop-shadow-lg'>
    //   <ul className='flex items-center h-full justify-between mx-8'>
    //     <Logo />
    //     <ul className='flex items-center'>
    //       <li className='flex flex-row items-center'>
    //         <SearchUser
    //           name='Search people'
    //           className='pr-32 mr-8 text-xl py-2.75 pl-4 bg-(--golden-pollen-100) outline-none rounded-[10px]'
    //         />
    //       </li>
    //       {user ? (
    //         <li className='inline-block text-xl'>
    //           {user.avatarUrl ? (
    //             <Image
    //               src={user.avatarUrl}
    //               alt=''
    //               onClick={() => setIsOpen(!isOpen)}
    //             />
    //           ) : (
    //             <DefaultUserIcon onClick={() => setIsOpen(!isOpen)} />
    //           )}
    //         </li>
    //       ) : (
    //         <li className='inline-block text-xl'>
    //           <DefaultUserIcon onClick={() => setIsOpen(!isOpen)} />
    //         </li>
    //       )}
    //       <li className='group'>
    //         {isOpen &&
    //           (user !== null ? (
    //             <ul className='items-center absolute bg-white py-2 px-4 top-21.5 left-[83%] rounded-[10px] border-2 shadow-(--cartoon-shadow)'>
    //               <li className='my-3 items-center justify-center cursor-pointer'>
    //                 <Link
    //                   href={`/profile/${user?.nickname}`}
    //                   className='flex flex-row items-center py-1 px-2 hover:bg-gray-200 rounded-xl'
    //                 >
    //                   <UserIcon />
    //                   <p className='text-[18px]'>Profile</p>
    //                 </Link>
    //                 <Link
    //                   href={`/account/${user?.nickname}`}
    //                   className='flex flex-row items-center py-1 px-2 hover:bg-gray-200 rounded-xl'
    //                 >
    //                   <AccountIcon />
    //                   <p className='text-[18px]'>Account</p>
    //                 </Link>
    //                 <Link
    //                   href={'/community-create'}
    //                   className='flex flex-row items-center py-1 px-2 hover:bg-gray-200 rounded-xl'
    //                 >
    //                   <MembersIcon stroke='#000000' strokeWidth={1.5} />
    //                   <p className='text-[18px]'>Create community</p>
    //                 </Link>
    //                 <button
    //                   className='flex flex-row items-center py-1 px-2 text-[18px] hover:bg-gray-200 rounded-xl cursor-pointer w-full'
    //                   onClick={logout}
    //                 >
    //                   <Logout />
    //                   Log out
    //                 </button>
    //               </li>
    //             </ul>
    //           ) : (
    //             <ul className='items-center absolute bg-white py-2 px-4 top-21 left-[89%] rounded-[10px] border-2 shadow-(--cartoon-shadow)'>
    //               <li className='cursor-pointer'>
    //                 <Link
    //                   href='/sign-up'
    //                   className='flex flex-row items-center'
    //                 >
    //                   <SignUpIcon className='mr-2' /> <p>Sign up</p>
    //                 </Link>
    //               </li>
    //             </ul>
    //           ))}
    //       </li>
    //     </ul>
    //   </ul>
    // </div>
  );
}

export default Header;
