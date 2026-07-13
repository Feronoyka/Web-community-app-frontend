export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='grid grid-cols-12 gap-8 mx-16 my-20 max-[767px]:mx-4'>
      <div className='col-start-3 col-end-11 bg-white rounded-[10px] shadow-(--cartoon-shadow) border-2 max-[767px]:col-span-12 max-[767px]:shadow-none max-[767px]:border-none max-[1052px]:col-span-12'>
        {children}
      </div>
    </div>
  );
}
