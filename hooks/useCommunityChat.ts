'use client';

import { Message } from '@/types';
import { useRef, useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';

const API = process.env.NEXT_PUBLIC_API_URL;

export const useCommunityChat = (communityId: string, accessToken: string) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    const socket = io(API!, {
      auth: { token: `Bearer ${accessToken}` },
    });

    socketRef.current = socket;

    socket.on('connect', () => {
      setIsConnected(true);
      socket.emit('joinCommunity', communityId);
      socket.emit('getMessages', communityId);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('loadMessages', (existingMessages: Message[]) => {
      setMessages(existingMessages);
    });

    socket.on('newMessage', (message: Message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, [communityId, accessToken]);

  const sendMessage = (content: string) => {
    if (!socketRef.current || !content.trim()) return;

    socketRef.current.emit('messageToCommunity', {
      communityId,
      content,
    });
  };

  return { messages, isConnected, sendMessage };
};
