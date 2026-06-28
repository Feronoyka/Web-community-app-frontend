import Header from '@/components/Header';
import Article from '@/components/Article';
import Navigation from '@/components/Navigation';
import Main from './(main)/page';
// import { getMe } from '@/lib/auth';
// import { User } from '@/types';

function page() {
  // const user: User | null = await getMe();

  return (
    <>
      <Header />
      <div className='grid grid-cols-12 gap-8 mx-16'>
        <Article />
        <Navigation />
      </div>
      <div>
        <Main />
      </div>
    </>
  );
}

export default page;
