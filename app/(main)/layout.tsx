import { CommunityProvider } from '@/provider/community-provider';
import Header from '@/components/Header';
import Article from '@/components/Article';
import Navigation from '@/components/Navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CommunityProvider>
      <Header />
      <div className='grid grid-cols-12 gap-8 mx-16'>
        <Article />
        <Navigation />
      </div>
      <div>{children}</div>
    </CommunityProvider>
  );
}
