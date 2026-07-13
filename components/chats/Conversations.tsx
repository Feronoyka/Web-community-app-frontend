'use client';

import { DefaultUserIcon } from '@/assets/icons';
import { User } from '@/types';
import { Button } from '../UI';
import Link from 'next/link';
import UserAvatar from '../UI/UserAvatar';

function Conversations({ chattedUsers }: { chattedUsers: User[] }) {
  return (
    <>
      {chattedUsers.length > 0 ? (
        chattedUsers?.map((chattedUser) => (
          <div key={chattedUser.id}>
            <div className='flex items-end justify-between bg-gray-300 col-span-6 px-4 py-3 rounded-[10px] shadow-(--cartoon-shadow) border-2 mt-8'>
              <div className='flex items-center'>
                {chattedUser.avatarUrl ? (
                  <UserAvatar
                    avatarUrl={chattedUser.avatarUrl}
                    width={90}
                    height={90}
                  />
                ) : (
                  <DefaultUserIcon
                    className='shrink-0'
                    width={90}
                    height={90}
                  />
                )}
                <div className='ml-2'>
                  <p className='text-2xl font-bold'>{chattedUser.username}</p>
                  <p className='text-gray-500'>@{chattedUser.nickname}</p>
                </div>
              </div>
              <Link href={`/chat/private/${chattedUser.id}`}>
                <Button buttonType='secondaryOne'>Chat</Button>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p className='flex justify-center mt-8 text-xl font-semibold text-gray-400 max-[767px]:text-lg'>
          There is no conversation
        </p>
      )}
    </>
  );
}

export default Conversations;
