'use client';

// import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from '@/assets/icons';
import { Pronouns } from '@/utils/enums';
import { User } from '@/types';
import { Button } from '../UI';
import UserAvatar from '../UI/UserAvatar';
import { useRouter } from 'next/navigation';

export default function UserProfile({
  user,
  currentUser,
}: {
  user: User;
  currentUser?: User | null;
}) {
  // const avatarStyle = 'mx-auto rounded-[100%] border-[#D9D9D9] border';

  const router = useRouter();

  const isOwn = user.id === currentUser?.id;

  return (
    <div className='col-start-3 col-end-11 bg-white rounded-[10px] shadow-(--cartoon-shadow) border-2 pb-4'>
      <div className='flex justify-between mx-8 my-8'>
        <h1 className='font-bold text-4xl'>
          {user.username}
          {`'s`} Profile
        </h1>
        <button onClick={() => router.back()}>
          <ArrowLeft />
        </button>
      </div>
      <div className='relative text-center'>
        <UserAvatar avatarUrl={user.avatarUrl} className='mx-auto' />
        <p className='text-5 text-[#808080] my-1 opacity-50'>
          {`@`}
          {user.nickname} |
          {user.pronouns === Pronouns.NONE ? null : user.pronouns}
        </p>
        <p className='text-3xl font-bold mb-8'>{user.username}</p>
        {!user.description ? (
          <p className='text-[#808080]'>No description</p>
        ) : (
          <p>{user.description}</p>
        )}
        {!isOwn && (
          <Link href={`/chat/private/${user.id}`}>
            <Button buttonType='secondaryOne' className='mt-6'>
              Chat
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
