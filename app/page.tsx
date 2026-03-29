import Header from '@/components/Header';
import Article from '@/components/Article';
import Main from '@/components/Main';
import Home from './(main)/page';

function page() {
  return (
    <>
      <Header />
      <div className='grid grid-cols-12 gap-8 mx-[64px]'>
        <Article />
        <Main />
        <Home />
      </div>
    </>
  );
}

export default page;
