import { getMe } from '@/lib/auth';

async function OwnedCommunities() {
  const user = await getMe();

  return (
    <>
      {user ? (
        <div>Owned communities</div>
      ) : (
        <h1>You do not have any communities</h1>
      )}
    </>
  );
}

export default OwnedCommunities;
