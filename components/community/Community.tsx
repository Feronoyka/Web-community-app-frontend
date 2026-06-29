'use client';

import Members from '@/assets/icons/Members';
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

    router.push(`/chats/communities/${id}`);

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
    router.push(`/chats/communities/${id}`);
  };

  console.log('isOwner:', isOwner);
  console.log('isMember:', isMember);

  return (
    <div className='shadow-(--cartoon-shadow) rounded-[10px] border-2'>
      <div className='flex bg-[#F8CD86] w-full h-39 rounded-t-[10px] justify-center'>
        {avatarUrl ? (
          <div className='flex bg-[#F8CD86] w-89 h-39 rounded-t-[10px] justify-center'>
            <div className='relative w-25 h-25 mt-25'>
              <Image
                src={avatarUrl}
                alt=''
                fill
                className='absolute top-30 object-cover z-0 rounded-[10px]'
              />
            </div>
          </div>
        ) : (
          <DefaultMembers className='my-25' />
        )}
      </div>
      <div className='rounded-b-[10px] bg-(--golden-pollen-100) w-full h-90'>
        <div className='pb-7 pt-15 text-center'>
          <h3 className='text-2xl font-bold'>{name}</h3>
          <p className='w-82.75 mx-auto mt-3 text-gray-700 border-box break-normal'>
            {description}
          </p>
          <div className='flex justify-center items-center mt-3'>
            <Members width={27} height={27} />
            {membersCount > 0 ? (
              <p className='text-gray-700 ml-1'>{membersCount + 1} members</p>
            ) : (
              <p className='text-gray-700 ml-1'>1 member</p>
            )}
          </div>
          <div className='mt-30'>
            {isOwner || isMember ? (
              <Button
                className='text-xl hover:shadow-(--cartoon-shadow-50)'
                buttonType='secondaryOne'
                onClick={handleChat}
              >
                Chat
              </Button>
            ) : (
              <Button
                className='text-xl hover:shadow-(--cartoon-shadow-50)'
                buttonType='secondaryOne'
                onClick={handleFollow}
                disabled={isPending}
              >
                {isPending ? 'Joining..' : 'Join'}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
