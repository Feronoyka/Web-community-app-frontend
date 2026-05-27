import Header from '@/components/Header';
import Article from '@/components/Article';
import Main from '@/components/Main';
// import { getMe } from '@/lib/auth';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const user = await getMe();

  return (
    <>
      <Header />
      <div className='grid grid-cols-12 gap-8 mx-16'>
        <Article />
        <Main />
      </div>
      <div>{children}</div>
    </>
  );
}
