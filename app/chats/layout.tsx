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
    <div className='grid grid-cols-12 gap-8 mx-16 max-[1024px]:mx-0'>
      <div className='bg-white col-start-2 col-end-12 h-screen max-[1024px]:col-span-12'>
        {/*bg-white start */}
        <div className='flex items-center my-5 ml-8'>
          <ChatsIcon width={55} height={55} />
          <h1 className='text-4xl'>Chats</h1>
        </div>
        <div className='bg-(--golden-pollen-100) py-4 w-full shadow-md'>
          {/*bg-yellow start */}
          <div className='flex justify-between items-center mx-8'>
            <button onClick={() => router.push('/')}>
              <ArrowLeft className='mr-4' />
            </button>
            <div className='flex justify-between'>
              <div className='mr-30 ml-auto hover:bg-yellow-500 px-2 py-1 rounded-[10px] max-[767px]:mr-7'>
                <NavLink href={'/chats/conversations'}>
                  <p className='text-2xl font-bold max-[767px]:text-xl'>
                    Conversations
                  </p>
                </NavLink>
              </div>
              <div className='ml-30 mr-auto hover:bg-yellow-500 px-2 py-1 rounded-[10px] max-[767px]:ml-7'>
                <NavLink href={'/chats/communities'}>
                  <p className='whitespace-nowrap text-2xl font-bold max-[767px]:text-xl'>
                    Joined communities
                  </p>
                </NavLink>
              </div>
            </div>
            <div />
          </div>
          {/*bg-yellow end */}
        </div>
        {children}
        {/*bg-white end */}
      </div>
    </div>
  );
}
