export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='grid grid-cols-12 gap-8 mx-16'>
      <div className='bg-white col-start-2 col-end-12'>{children}</div>
    </div>
  );
}
