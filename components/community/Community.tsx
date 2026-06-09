'use client';

import MembersIcon from '@/assets/icons/MembersIcon';
import { Button } from '../UI';
import { User } from '@/types';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { followCommunity } from '@/lib/communityActions';
import { DefaultMembers } from '@/assets/icons';
import Image from 'next/image';

interface CommunityType {
  id: string;
  ownerId: string;
  avatarUrl: string;
  name: string;
  description?: string;
  followerCount: number;
  isFollowing: boolean;
}

function Community({
  id,
  ownerId,
  avatarUrl,
  name,
  description,
  followerCount = 1,
  user,
  isFollowing: initialIsFollowing = false,
}: CommunityType & { user?: User | null }) {
  const router = useRouter();
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const [count, setCount] = useState(followerCount);
  const [isPending, setIsPending] = useState(false);

  const isOwner = user?.id === ownerId;
  const isMember = isFollowing;

  const handleFollow = async () => {
    if (!user) {
      router.push('/sign-in');
      return;
    }
    setIsPending(true);
    try {
      await followCommunity(id);

      setIsFollowing(true);

      setCount((prev) => prev + 1);
    } catch (error) {
      console.error('Error to follow community', error);
    } finally {
      setIsPending(false);
    }
  };

  // const handleUnfollow = async () => {
  //   setIsPending(true);
  //   try {
  //     await unfollowCommunity(id);
  //     setCount((prev) => prev - 1);
  //   } catch (error) {
  //     console.error('Error to unfollow community', error);
  //   } finally {
  //     setIsPending(false);
  //   }
  // };

  const handleChat = () => {
    router.push(`/community/${id}`);
  };

  return (
    <div className='rounded-[10px] bg-(--golden-pollen-100) w-full w-max-110.5 h-120.5 shadow-(--cartoon-shadow) border-2 border-black)'>
      <div className='flex bg-[#F8CD86] w-109.75 h-39 rounded-t-[10px] justify-center'>
        {avatarUrl ? (
          <div className='flex bg-[#F8CD86] w-89 h-39 rounded-t-[10px] justify-center'>
            <Image src={avatarUrl} alt='' />
          </div>
        ) : (
          <DefaultMembers className='my-25' />
        )}
      </div>
      <div className='my-15 text-center'>
        <h3 className='text-2xl font-bold'>{name}</h3>
        <p className='w-82.75 mx-auto text-gray-700 mt-3 border-box px-10 break-normal'>
          {description}
        </p>
        <div className='flex mt-3 justify-center items-center'>
          <MembersIcon width={27} height={27} />
          <p className='text-gray-700 ml-1'>{count} Members</p>
        </div>
        {isOwner && (
          <Button
            className='mt-22 px-8 py-1 text-xl hover:shadow-(--cartoon-shadow-50)'
            buttonType='primary'
            buttonColor='bg-(--steel-blue-50)'
            onClick={handleChat}
          >
            Chat
          </Button>
        )}
        {!isOwner && !isMember && (
          <Button
            className='mt-22 px-8 py-1 text-xl hover:shadow-(--cartoon-shadow-50)'
            buttonType='primary'
            buttonColor='bg-(--steel-blue-50)'
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
