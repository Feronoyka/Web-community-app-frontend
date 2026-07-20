export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='grid grid-cols-12 gap-8 mx-16 my-20 max-[767px]:mx-9'>
      {children}
    </div>
  );
}
