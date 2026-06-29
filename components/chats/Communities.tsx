'use client';

import { MembersFilled } from '@/assets/icons';
import { CommunityFromApi } from '@/types';
import { Button } from '../UI';
import Link from 'next/link';
import UserAvatar from '../UI/UserAvatar';

function Communities({
  joinedCommunities,
}: {
  joinedCommunities?: CommunityFromApi[] | [];
}) {
  return (
    <>
      {joinedCommunities?.length !== 0 ? (
        joinedCommunities?.map((joinedCommunity) => (
          <div
            key={joinedCommunity.id}
            className='flex items-end justify-between bg-gray-300 col-span-6 px-4 py-3 rounded-[10px] shadow-(--cartoon-shadow) border-2 mt-8'
          >
            <div className='flex items-center'>
              {joinedCommunity.avatarUrl ? (
                <UserAvatar
                  avatarUrl={joinedCommunity.avatarUrl}
                  width={90}
                  height={90}
                />
              ) : (
                <MembersFilled className='shrink-0' width={90} height={90} />
              )}
              <div className='ml-2'>
                <p className='text-2xl font-bold'>{joinedCommunity.name}</p>
              </div>
            </div>
            <Button buttonType='secondaryOne'>
              <Link href={`/chats/communities/${joinedCommunity.id}`}>
                Chat
              </Link>
            </Button>
          </div>
        ))
      ) : (
        <p className='text-center mt-8 text-2xl font-semibold text-gray-400'>
          There is no joined communities
        </p>
      )}
    </>
  );
}

export default Communities;
