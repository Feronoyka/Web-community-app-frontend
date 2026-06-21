// import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from '@/assets/icons';
import { Pronouns } from '@/utils/enums';
import { Button } from '../UI';
import { User } from '@/types';
import UserAvatar from '../UI/UserAvatar';

export default async function You({ user }: { user: User }) {
  // const avatarStyle = 'mx-auto rounded-[100%] border-[#D9D9D9] border';

  return (
    <div className='col-start-3 col-end-11 bg-white rounded-[10px] shadow-(--cartoon-shadow) border-2 pb-4'>
      <div className='flex justify-between mx-8 my-8'>
        <h1 className='font-bold text-4xl'>
          {user.username}
          {`'s`} Profile
        </h1>
        <Link href='/'>
          <ArrowLeft />
        </Link>
      </div>
      <div className='relative text-center'>
        {/* <label>
          {user.avatarUrl ? (
            <Image
              src={user.avatarUrl}
              alt=''
              className={avatarStyle}
              width={163}
              height={163}
            />
          ) : (
            <DefaultUser width={163} height={163} className='mx-auto' />
          )}
        </label> */}
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
        <Button buttonType='secondaryTwo' className='mt-8 w-20'>
          <Link href={`/you/edit/${user.nickname}`}>Edit</Link>
        </Button>
      </div>
    </div>
  );
}
