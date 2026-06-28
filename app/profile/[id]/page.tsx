import UserProfile from '@/components/profile/UserProfile';
import { getMe } from '@/lib/auth';
import { getUser } from '@/lib/getUser';
import { User } from '@/types';

async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const user: User | null = await getUser(id);
  const currentUser: User | null = await getMe();

  return (
    <>
      {user ? (
        <div className='grid grid-cols-12 gap-8 mx-16 my-20'>
          <UserProfile user={user} currentUser={currentUser} />
        </div>
      ) : (
        <div className='flex justify-center'>
          <p>User not found</p>
        </div>
      )}
    </>
  );
}

export default page;
