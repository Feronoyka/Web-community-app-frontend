import UserProfile from '@/components/profile/UserProfile';
import { getMe } from '@/lib/auth';
import { getUser } from '@/lib/getUser';

async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const user = await getUser(id);
  const currentUser = await getMe();

  return (
    <>
      {user ? (
        <UserProfile user={user} currentUser={currentUser} />
      ) : (
        <div className='flex justify-center'>
          <p>User not found</p>
        </div>
      )}
    </>
  );
}

export default page;
