'use client';

import { DefaultUserIcon, ArrowLeft, SendIcon, XMark } from '@/assets/icons';
import { usePrivateChat } from '@/hooks/usePrivateChat';
import { User } from '@/types';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import UserAvatar from '../UI/UserAvatar';
import { useRouter } from 'next/navigation';

type Props = {
  receiverId: string;
  currentUser: User;
  receiver: User;
  accessToken: string;
};

function PrivateChat({
  receiverId,
  currentUser,
  receiver,
  accessToken,
}: Props) {
  const { messages, isConnected, sendMessage, deleteMessage } = usePrivateChat(
    receiverId,
    accessToken,
  );

  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const router = useRouter();

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

  const handleDelete = (isOwn: boolean, messageId: string) => {
    if (isOwn) {
      deleteMessage(messageId);
    }
  };

  return (
    <div className={`${messages.length > 8 ? 'h-full' : 'h-screen'}`}>
      <div
        className={`fixed top-0 ${messages.length > 8 ? 'w-289' : 'w-292'} bg-(--golden-pollen-100) py-4 shadow-md`}
      >
        <div className='flex items-center mx-8'>
          <button onClick={() => router.back()}>
            <ArrowLeft className='mr-4' />
          </button>
          {receiver.avatarUrl ? (
            <Image src={receiver.avatarUrl} alt='' width={100} height={100} />
          ) : (
            <DefaultUserIcon width={65} height={65} />
          )}
          <h2 className='text-2xl ml-3 text-(--steel-blue-50) font-bold'>
            {receiver.username}
          </h2>
        </div>
      </div>
      <div className='pt-30 pb-20 px-15'>
        {messages.length === 0 && (
          <p className='text-center'>
            Start your first conversation {receiver.username} :3
          </p>
        )}
        {messages.map((message) => {
          const isOwnMessage = message.senderId === currentUser.id;

          return (
            <div
              key={message.id}
              className={`flex mt-4 items-end ${isOwnMessage && 'justify-end'}`}
            >
              {/* {message.sender?.avatarUrl ? (
                <Image
                  src={message.sender.avatarUrl}
                  alt=''
                  width={55}
                  height={55}
                  className='rounded-full'
                />
              ) : (
                <DefaultUser width={55} height={55} />
              )} */}
              {!isOwnMessage && (
                <UserAvatar
                  avatarUrl={message.sender?.avatarUrl}
                  width={55}
                  height={55}
                />
              )}
              <div className='group bg-(--golden-pollen-50) rounded-[10px] px-3 py-2 mx-3 break-all max-w-100 shadow-(--cartoon-shadow) border'>
                <div className='flex items-center'>
                  <p className='text-(--steel-blue-100)'>
                    {message.sender?.username}
                  </p>
                  <p className='text-sm text-gray-500 ml-auto pl-2'>
                    {new Date(message.createdAt).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                  {isOwnMessage && (
                    <button
                      className='hidden group-hover:flex transition-all ml-1'
                      onClick={() => handleDelete(isOwnMessage, message.id)}
                    >
                      <XMark
                        width={20}
                        height={20}
                        className='bg-(--golden-pollen-50)'
                      />
                    </button>
                  )}
                  {/*hover Icon to delete the message */}
                </div>
                <p className='text-[#333333]'>{message.content}</p>
              </div>
              {isOwnMessage && (
                <UserAvatar
                  avatarUrl={message.sender?.avatarUrl}
                  width={55}
                  height={55}
                />
              )}
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>
      <div className='fixed flex items-center top-172 left-56 bg-white pb-5'>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder='Type a message...'
          className='w-270 py-2 px-4 rounded-[10px] border-2 border-gray-400'
        />
        <button
          onClick={handleSend}
          disabled={!input.trim() || !isConnected}
          className='cursor-pointer absolute top-1.5 left-[96%] disabled:opacity-50'
        >
          <SendIcon />
        </button>
      </div>
    </div>
  );
}

export default PrivateChat;
