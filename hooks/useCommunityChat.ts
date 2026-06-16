'use client';

import { Message } from '@/types';
import { useRef, useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';

const API = process.env.NEXT_PUBLIC_API_URL;

export const useCommunityChat = (communityId: string, accessToken: string) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef<Socket | null>(null);
  const accessTokenRef = useRef(accessToken);

  useEffect(() => {
    const connect = () => {
      const socket = io(API!, {
        auth: { token: `Bearer ${accessTokenRef.current}` },
        reconnection: true,
        reconnectionAttempts: 5,
        reconnectionDelay: 2000,
      });
      socketRef.current = socket;

      socket.on('connect_error', async (error) => {
        console.log('Socket connect error:', error.message);

        if (
          error.message.includes('jwt expired') ||
          error.message.includes('Unauthorized')
        ) {
          const res = await fetch('/api/refresh-token');

          if (res.ok) {
            const { accessToken: newToken } = await res.json();
            accessTokenRef.current = newToken;

            socket.auth = { token: `Bearer ${newToken}` };
            socket.connect();
          }
        }
      });

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
    };

    connect();

    return () => {
      socketRef.current?.disconnect();
    };
  }, [communityId]);

  const sendMessage = (content: string) => {
    if (!socketRef.current?.connected || !content.trim()) return;

    socketRef.current.emit('messageToCommunity', {
      communityId,
      content,
    });
  };

  return { messages, isConnected, sendMessage };
};
