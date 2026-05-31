import Image from 'next/image';
import Link from 'next/link';
import { DefaultUserIcon, OutlineIcon } from '@/assets/icons';
import { Pronouns } from '@/utils/enums';
import { Button } from '../UI';
import { User } from '@/types';

// type UserType = {
//   user: {
//     avatarUrl?: string;
//     nickname: string;
//     username: string;
//     pronouns: string;
//     description?: string;
//   };
// };

export default async function UserProfile({ user }: { user: User }) {
  const avatarStyle = 'mx-auto rounded-[100%] border-[#D9D9D9] border';

  return (
    <div className='col-start-3 col-end-11 bg-white rounded-[10px] shadow-(--cartoon-shadow) border-2'>
      <div className='flex justify-between mx-8 my-8'>
        <h1 className='font-bold text-4xl'>
          {user.username}
          {`'s`} Profile
        </h1>
        <Link href='/'>
          <OutlineIcon />
        </Link>
      </div>
      <div className='relative text-center'>
        {user.avatarUrl ? (
          <Image
            src={user.avatarUrl}
            alt=''
            className={avatarStyle}
            width={163}
            height={163}
          />
        ) : (
          <DefaultUserIcon width={163} height={163} className='mx-auto' />
        )}
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
        <Link href={`/profile/edit/${user.nickname}`}>
          <Button
            buttonType='primary'
            buttonColor='bg-linear-50 from-(--vibrant-coral-100) to-(--steel-blue-100)'
            className='mt-8 mb-4'
          >
            Edit
          </Button>
        </Link>
      </div>
    </div>
  );
}
