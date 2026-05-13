import { getMe } from '@/lib/auth';

async function OwnedCommunities() {
  const user = await getMe();

  return (
    <>
      {user ? (
        user.communities ? (
          <div>{user.communities}</div>
        ) : (
          <p className='col-start-6 w-60'>You do not have any communities</p>
        )
      ) : (
        <p className='col-start-6 w-60'>Sign up to create community</p>
      )}
    </>
  );
}

export default OwnedCommunities;
