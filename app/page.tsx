import Header from '@/components/Header';
import Article from '@/components/Article';
import Main from '@/components/Main';
import Home from './(main)/page';
import { getMe } from '@/lib/auth';

async function page() {
  const user = await getMe();

  return (
    <>
      <Header user={user} />
      <div className='grid grid-cols-12 gap-8 mx-16'>
        <Article />
        <Main />
        <Home />
      </div>
    </>
  );
}

export default page;
