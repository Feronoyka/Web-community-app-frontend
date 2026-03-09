import Header from '@/components/Header';
import Article from '@/components/Article';
import Main from '@/components/Main';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className='grid grid-cols-12 gap-8 mx-[64px]'>
        <Article />
        <Main />
      </div>
      <div className='grid grid-cols-12 gap-8 mx-[64px] mt-9'>{children}</div>
    </>
  );
}
