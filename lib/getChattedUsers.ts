import { User } from '@/types';

export const getChattedUsers = async (currentUser: User): Promise<User[]> => {
  if (!currentUser.conversations) return [];

  const allParticipants = currentUser.conversations.flatMap((conversation) => {
    return conversation.participants.filter(
      (participant) => participant.id !== currentUser.id,
    );
  });

  const unique = new Map(allParticipants.map((u) => [u.id, u]));
  return Array.from(unique.values());
};
