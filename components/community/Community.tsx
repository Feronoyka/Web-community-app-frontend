'use client';

import MembersIcon from '@/assets/icons/MembersIcon';
import { Button } from '../UI';
import { CommunityFromApi, User } from '@/types';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { followCommunity } from '@/lib/communityActions';
import { DefaultMembers } from '@/assets/icons';
import Image from 'next/image';

function Community({
  id,
  ownerId,
  avatarUrl,
  name,
  description,
  membersCount,
  members,
  user,
}: CommunityFromApi & { user?: User | null }) {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  const isOwner = user?.id === ownerId;
  const isMember = members?.some((member) => member.id === user?.id);

  const handleFollow = async () => {
    if (!user) {
      router.push('/sign-in');
      return;
    }

    router.push(`/community/${id}`);

    setIsPending(true);
    try {
      await followCommunity(id);
    } catch (error) {
      console.error('Error to follow community', error);
    } finally {
      setIsPending(false);
    }
  };

  const handleChat = () => {
    router.push(`/chat/community/${id}`);
  };

  console.log('isOwner:', isOwner);
  console.log('isMember:', isMember);

  return (
    <div className='rounded-[10px] bg-(--golden-pollen-100) w-full h-125 shadow-(--cartoon-shadow) border-2 border-black)'>
      <div className='flex bg-[#F8CD86] w-109.75 h-39 rounded-t-[10px] justify-center'>
        {avatarUrl ? (
          <div className='flex bg-[#F8CD86] w-89 h-39 rounded-t-[10px] justify-center'>
            <div className='relative w-25 h-25 mt-25'>
              <Image
                src={avatarUrl}
                alt=''
                fill
                className='absolute top-30 object-cover z-0 rounded-[5px]'
              />
            </div>
          </div>
        ) : (
          <DefaultMembers className='my-25' />
        )}
      </div>
      <div className='my-15 text-center'>
        <h3 className='text-2xl font-bold'>{name}</h3>
        <p className='w-82.75 mx-auto h-30 text-gray-700 mt-3 border-box px-10 break-normal'>
          {description}
        </p>
        <div className='flex mb-4 justify-center items-center'>
          <MembersIcon width={27} height={27} />
          {membersCount > 0 ? (
            <p className='text-gray-700 ml-1'>{membersCount + 1} members</p>
          ) : (
            <p className='text-gray-700 ml-1'>1 member</p>
          )}
        </div>
        {isOwner || isMember ? (
          <Button
            className='px-8 py-1 text-xl hover:shadow-(--cartoon-shadow-50)'
            buttonType='secondaryOne'
            onClick={handleChat}
          >
            Chat
          </Button>
        ) : (
          <Button
            className='px-8 py-1 text-xl hover:shadow-(--cartoon-shadow-50)'
            buttonType='secondaryOne'
            onClick={handleFollow}
            disabled={isPending}
          >
            {isPending ? 'Joining' : 'Join'}
          </Button>
        )}
      </div>
    </div>
  );
}

export default Community;
