import Image from 'next/image';
import Link from 'next/link';
import { OutlineIcon } from '@/assets/icons';
import defaultUser from '@/assets/pictures/default-user.jpg';

type UserType = {
  user: {
    avatarUrl?: string;
    nickname: string;
    username: string;
    description?: string;
  };
};

export default async function UserProfile({ user }: UserType) {
  const avatarStyle = 'mx-auto rounded-[100%] border-[#D9D9D9] border';

  return (
    <div className='col-start-3 col-end-11 bg-white rounded-[10px]'>
      <div className='flex justify-between mx-8 my-8'>
        <h1 className='font-bold text-4xl'>
          {user.username}
          {`'s`} Profile
        </h1>
        <Link href='/'>
          <OutlineIcon />
        </Link>
      </div>
      <div className='text-center'>
        {user.avatarUrl ? (
          <Image
            src={user.avatarUrl}
            alt=''
            className={avatarStyle}
            width={150}
            height={150}
          />
        ) : (
          <Image
            src={defaultUser}
            alt=''
            className={avatarStyle}
            width={150}
            height={150}
          />
        )}
        <p className='text-5 text-[#808080] my-1'>
          {`@`}
          {user.nickname}
        </p>
        <p className='text-3xl font-bold mb-8'>{user.username}</p>
        {!user.description ? (
          <p className='text-[#808080]'>No description</p>
        ) : (
          <p>{user.description}</p>
        )}
        <Link href={`/profile/edit/${user.nickname}`}>
          <button className='my-8 bg-[#F28482] px-[17px] py-1 rounded-2xl text-white cursor-pointer'>
            Edit
          </button>
        </Link>
      </div>
    </div>
  );
}
