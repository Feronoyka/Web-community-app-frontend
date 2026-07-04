'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, ChatsIcon } from '@/assets/icons';
// import Link from 'next/link';
import NavLink from '@/components/NavLink';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  return (
    <div className='grid grid-cols-12 gap-8 mx-16'>
      <div className='bg-white col-start-2 col-end-12 h-screen'>
        <div className='flex items-center my-5 ml-8'>
          <ChatsIcon width={55} height={55} />
          <h1 className='text-4xl'>Chats</h1>
        </div>
        <div className='bg-(--golden-pollen-100) py-4 w-full shadow-md'>
          <div className='flex justify-between items-center mx-8'>
            <button onClick={() => router.push('/')}>
              <ArrowLeft className='mr-4' />
            </button>
            <div className='flex justify-between'>
              <div className='mr-40 text-2xl font-bold hover:bg-yellow-500 px-2 py-1 rounded-[10px]'>
                <NavLink href={'/chats/conversations'}>Conversations</NavLink>
              </div>
              <div className='ml-40 text-2xl font-bold hover:bg-yellow-500 px-2 py-1 rounded-[10px]'>
                <NavLink href={'/chats/communities'}>
                  Joined communities
                </NavLink>
              </div>
            </div>
            <div />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
