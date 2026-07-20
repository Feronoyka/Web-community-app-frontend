export type Message = {
  id: string;
  content: string;
  senderId: string;
  createdAt: string;
  sender?: {
    username: string;
    avatarUrl: string;
  };
};
