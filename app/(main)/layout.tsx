import Header from '@/components/Header';
import Article from '@/components/Article';
import Main from '@/components/Main';
import { getMe } from '@/lib/auth';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getMe();

  return (
    <>
      <Header user={user} />
      <div className='grid grid-cols-12 gap-8 mx-[64px]'>
        <Article />
        <Main />
      </div>
      <div className='grid grid-cols-12 gap-8 mx-[64px] mt-9'>{children}</div>
    </>
  );
}
