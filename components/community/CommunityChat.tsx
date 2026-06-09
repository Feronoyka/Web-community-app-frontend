'use client';

// import Image from 'next/image';

import {
  DefaultUserIcon,
  MembersIconFilled,
  OutlineIcon,
  SendIcon,
} from '@/assets/icons';
import EllipsisVertical from '@/assets/icons/EllipsisVertical';
import { useCommunityChat } from '@/hooks/useCommunityChat';
import { CommunityFromApi, User } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type Props = {
  communityId: string;
  currentUser?: User;
  accessToken: string;
  community: CommunityFromApi | null;
};

export default function CommunityChat({
  communityId,
  accessToken,
  community,
}: Props) {
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  const { messages, isConnected, sendMessage } = useCommunityChat(
    communityId,
    accessToken,
  );

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

  return (
    <div className='bg-white col-start-2 col-end-12 h-screen'>
      <div className='bg-(--golden-pollen-100) py-4'>
        <div className='flex justify-between items-center mx-8'>
          <Link href={'/'}>
            <OutlineIcon />
          </Link>
          {community?.avatarUrl ? (
            <Image src={community.avatarUrl} alt='' />
          ) : (
            <div>Image</div>
          )}
          <h2>{community?.name}</h2>
          <div className='flex justify-between'>
            <MembersIconFilled />
            <EllipsisVertical />
          </div>
        </div>
      </div>
      <div>
        {messages.length === 0 && (
          <p className='text-center'>No messages yet, Say hello :3</p>
        )}

        {messages.map((message) => {
          // const isOwn = message.senderId === currentUser?.id;

          return (
            <div key={message.id} className='flex items-end ml-9 mt-4'>
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
              <div className='bg-(--golden-pollen-50) rounded-[10px] px-3 py-2 ml-3 max-w-100 shadow-(--cartoon-shadow) border'>
                <div className='flex items-center'>
                  <p className='text-(--steel-blue-100)'>
                    {message.sender?.username}
                  </p>
                  <p className='text-sm text-gray-500 ml-2'>
                    {new Date(message.createdAt).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
                <p className='text-[#333333]'>{message.content}</p>
              </div>
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>
      <div className='fixed flex items-center top-172 left-56'>
        <input
          type='text'
          value={input}
          placeholder='Type a message'
          onKeyDown={handleKeyDown}
          onChange={(e) => setInput(e.target.value)}
          className='w-270 py-2 px-4 rounded-[10px] border-2 border-gray-400'
        />
        <button
          className='absolute top-1.5 left-[96%]'
          onClick={handleSend}
          disabled={!input.trim() || !isConnected}
        >
          <SendIcon />
        </button>
      </div>
    </div>
  );
}
