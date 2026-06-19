'use client';

// import Image from 'next/image';

import {
  DefaultMembers,
  DefaultUserIcon,
  Logout,
  MembersIconFilled,
  MembersSetting,
  OutlineIcon,
  SendIcon,
} from '@/assets/icons';
import EllipsisVertical from '@/assets/icons/EllipsisVertical';
import { useCommunityChat } from '@/hooks/useCommunityChat';
import { CommunityFromApi, User } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { unfollowCommunity } from '@/lib/communityActions';
import { useRouter } from 'next/navigation';

type Props = {
  communityId: string;
  accessToken: string;
  community: CommunityFromApi | null;
  owner?: User;
  currentUser: User;
};

export default function CommunityChat({
  communityId,
  accessToken,
  community,
  owner,
  currentUser,
}: Props) {
  const [input, setInput] = useState('');
  const [isOpenEllipsis, setIsOpenEllipsis] = useState(false);
  const [isOpenMembers, setIsOpenMembers] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [count, setCount] = useState(community!.membersCount);
  const bottomRef = useRef<HTMLDivElement>(null);
  const { messages, isConnected, sendMessage, deleteMessage } =
    useCommunityChat(communityId, accessToken);

  const router = useRouter();

  const isOwner = currentUser.id === community?.ownerId;
  const isMember = community?.members?.some(
    (member) => member.id === currentUser.id,
  );

  console.log('is member:', isMember);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    sendMessage(input);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleIsOpenEllipsis = () => {
    setIsOpenEllipsis(!isOpenEllipsis);
    if (isOpenMembers) {
      setIsOpenMembers(!isOpenMembers);
    }
  };

  const handleIsOpenMembers = () => {
    setIsOpenMembers(!isOpenMembers);
    if (isOpenEllipsis) {
      setIsOpenEllipsis(!isOpenEllipsis);
    }
  };

  const handleUnfollow = async () => {
    setIsPending(true);
    try {
      await unfollowCommunity(communityId);
      setCount(count - 1);
      router.push('/');
    } catch (error) {
      console.error('Error to unfollow community', error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className={`${messages.length > 8 ? 'h-full' : 'h-screen'}`}>
      <div
        className={`fixed top-0 ${messages.length > 8 ? 'w-289' : 'w-292'} bg-(--golden-pollen-100) py-4 shadow-md`}
      >
        <div className='flex justify-between items-center mx-8'>
          <div className='flex items-center'>
            <Link href={'/'}>
              <OutlineIcon />
            </Link>
            {community?.avatarUrl ? (
              <div className='relative w-20 h-20'>
                <Image
                  src={community.avatarUrl}
                  alt=''
                  className='ml-11 object-cover z-0 rounded-[5px]'
                  fill
                />
              </div>
            ) : (
              <>
                <DefaultMembers width={80} height={80} className='ml-11' />
              </>
            )}
            <h2 className='text-2xl font-bold ml-17'>{community?.name}</h2>
          </div>
          <div className='flex justify-between'>
            <MembersIconFilled onClick={handleIsOpenMembers} />
            {isOpenMembers && !isOpenEllipsis && (
              <div
                className={`absolute ${community?.members?.length !== 0 ? 'top-20 left-237' : 'top-20 left-241'} overflow-y-auto max-h-60 bg-white px-2 py-2 rounded-[10px] border-2 shadow-(--cartoon-shadow)`}
              >
                <ul>
                  <li>
                    <div className='flex items-center cursor-pointer hover:bg-gray-200 rounded-[10px] px-2 py-2'>
                      {owner?.avatarUrl ? (
                        <Image src={owner.avatarUrl} alt='' />
                      ) : (
                        <DefaultUserIcon width={40} height={40} />
                      )}
                      <div className='ml-2'>
                        <p>{owner?.username}</p>
                        <p className='text-sm text-gray-400'>Owner</p>
                      </div>
                    </div>
                  </li>
                  {community?.members?.length !== 0 &&
                    community?.members?.map((member) => (
                      <li key={member.id}>
                        <Link href={`/profile/${member.id}`}>
                          <div className='flex items-center cursor-pointer hover:bg-gray-200 rounded-[10px] px-2 py-2'>
                            {member.avatarUrl ? (
                              <Image src={member.avatarUrl} alt='' />
                            ) : (
                              <DefaultUserIcon width={40} height={40} />
                            )}
                            <p className='ml-2'>{member.username}</p>
                          </div>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            )}
            <EllipsisVertical onClick={handleIsOpenEllipsis} />
            {isOpenEllipsis && !isOpenMembers && (
              <div
                className={`absolute bg-white px-3 py-2 rounded-[10px] ${isOwner ? 'top-20 left-227' : 'top-20 left-246'} border-2 shadow-(--cartoon-shadow)`}
              >
                <ul>
                  {isOwner && (
                    <Link href={`/community/${community?.id}/edit`}>
                      <li className='cursor-pointer flex items-center hover:bg-gray-200 px-2 py-1 rounded-[10px]'>
                        <p className='mr-2 w-30'>Edit community</p>
                        <MembersSetting />
                      </li>
                    </Link>
                  )}
                  <li className='cursor-pointer hover:bg-gray-200 px-2 py-1 rounded-[10px]'>
                    <button
                      onClick={handleUnfollow}
                      disabled={isPending || isOwner}
                      className='flex items-center cursor-pointer'
                    >
                      Leave
                      <Logout width={25} height={25} className='ml-1' />
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/*Chat */}
      <div className='pt-30 pb-20 pl-10'>
        {messages.length === 0 && (
          <p className='text-center'>No messages yet, Say hello :3</p>
        )}
        {messages.map((message) => {
          return (
            <div key={message.id} className='flex items-end mt-4'>
              {message.sender?.avatarUrl ? (
                <Image
                  src={message.sender.avatarUrl}
                  alt=''
                  width={55}
                  height={55}
                  className='rounded-full'
                />
              ) : (
                <DefaultUserIcon width={55} height={55} />
              )}
              <div className='bg-(--golden-pollen-50) rounded-[10px] px-3 py-2 ml-3 break-all max-w-100 shadow-(--cartoon-shadow) border'>
                <div className='flex items-center'>
                  <p className='text-(--steel-blue-100)'>
                    {message.sender?.username}
                  </p>
                  {message.senderId === currentUser.id && (
                    <p className='ml-1 text-(--steel-blue-150) text-sm'>
                      (You)
                    </p>
                  )}
                  <p className='text-sm text-gray-500 ml-2'>
                    {new Date(message.createdAt).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                  {/*hover Icon to delete message */}
                </div>
                <p className='text-[#333333]'>{message.content}</p>
              </div>
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>

      {/*Input */}
      <div className='fixed flex items-center top-172 left-54 bg-white pb-5'>
        <input
          type='text'
          value={input}
          placeholder='Type a message...'
          onKeyDown={handleKeyDown}
          onChange={(e) => setInput(e.target.value)}
          className='w-270 py-2 px-4 rounded-[10px] border-2 border-gray-400'
        />
        <button
          onClick={handleSend}
          disabled={!input.trim() || !isConnected}
          className='absolute top-1.5 left-[96%] disabled:opacity-50'
        >
          <SendIcon />
        </button>
      </div>
    </div>
  );
}
