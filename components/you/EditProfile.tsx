import { ArrowLeft } from '@/assets/icons';
import EditProfileForm from './EditProfileForm';
import { User } from '@/types';
import { useRouter } from 'next/navigation';

// type User = {
//   user: {
//     id?: string;
//     avatarUrl?: string;
//     nickname: string;
//     username: string;
//     pronouns?: string;
//     description?: string;
//   };
// };

export default function EditProfile({ user }: { user: User }) {
  const router = useRouter();

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
          <button onClick={() => router.back()}>
            <ArrowLeft />
          </button>
        </div>
        <div className='px-7'>
          <EditProfileForm user={user} />
        </div>
      </div>
    </div>
  );
}
