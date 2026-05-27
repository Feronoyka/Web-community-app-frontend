import Header from '@/components/Header';
import Article from '@/components/Article';
import Main from '@/components/Main';
import Home from './(main)/page';
import { getMe } from '@/lib/auth';
import { User } from '@/types';

async function page() {
  const user: User | null = await getMe();

  return (
    <>
      <Header user={user} />
      <div className='grid grid-cols-12 gap-8 mx-16'>
        <Article />
        <Main />
      </div>
      <div>
        <Home user={user} />
      </div>
    </>
  );
}

export default page;
