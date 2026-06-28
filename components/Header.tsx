import { User } from '@/types';
import Navbar from './Navbar';
import { getMe } from '@/lib/auth';

async function Header() {
  const user: User | null = await getMe();

  return <Navbar user={user} />;
}

export default Header;
