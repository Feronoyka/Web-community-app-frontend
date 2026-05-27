import Communities from '@/components/Communities';
import { User } from '@/types';

export default async function Home({ user }: { user?: User | null }) {
  return (
    <>
      <Communities user={user} />
    </>
  );
}
