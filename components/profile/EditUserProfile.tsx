import Link from 'next/link';
import { OutlineIcon } from '@/assets/icons';
import EditUserProfileForm from './EditUserProfileForm';

type User = {
  user: {
    id?: string;
    avatarUrl?: string;
    nickname: string;
    username: string;
    pronouns?: string;
    description?: string;
  };
};

export default function EditUserProfile({ user }: User) {
  return (
    <div className='bg-white col-start-3 col-end-11 rounded-[10px] shadow-(--cartoon-shadow) border-2'>
      <div className='px-9 py-9'>
        <div className='flex justify-between mb-10'>
          <div>
            <h1 className='text-4xl font-bold mb-4'>Profile</h1>
            <h3 className='text-2xl text-[#808080] mt-4'>
              Update your profile
            </h3>
          </div>
          <Link href={`/profile/${user.nickname}`}>
            <OutlineIcon />
          </Link>
        </div>
        <div className='px-7'>
          <EditUserProfileForm user={user} />
        </div>
      </div>
    </div>
  );
}
