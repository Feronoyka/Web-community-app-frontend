'use client';

import { Message } from '@/types';
import { useEffect, useRef, useState } from 'react';
import { Socket, io } from 'socket.io-client';

const API = process.env.NEXT_PUBLIC_API_URL;

export const usePrivateChat = (receiverId: string, accessToken: string) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    const socket = io(API!, {
      auth: { token: `Bearer ${accessToken}` },
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 2000,
    });

    socketRef.current = socket;

    socket.on('connect', () => {
      setIsConnected(true);

      socket.emit('getPrivateMessages', receiverId);
    });

    socket.on('disconnect', () => setIsConnected(false));

    socket.on('newPrivateMessage', (message: Message) => {
      setMessages((prev) => [...prev, message]);
    });

    socket.on(
      'privateMessageDeleted',
      ({ messageId }: { messageId: string }) => {
        setMessages((prev) =>
          prev.filter((message) => message.id !== messageId),
        );
      },
    );

    return () => {
      socket.disconnect();
    };
  }, [accessToken, receiverId]);

  const sendMessage = (content: string) => {
    if (!socketRef.current?.connected || !content.trim()) return;
    socketRef.current.emit('messageToPrivate', { receiverId, content });
  };

  const deleteMessage = (messageId: string) => {
    if (!socketRef.current?.connected) return;
    socketRef.current.emit('deletePrivateMessage', { messageId, receiverId });
  };

  return { messages, isConnected, sendMessage, deleteMessage };
};
