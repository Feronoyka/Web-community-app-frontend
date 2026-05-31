import Header from '@/components/Header';
import Article from '@/components/Article';
import Navbar from '@/components/Main';
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
        <Navbar />
      </div>
      <div>
        <Main />
      </div>
    </>
  );
}

export default page;
