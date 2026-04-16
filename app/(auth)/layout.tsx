function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='grid grid-cols-12 gap-8 mx-16'>
      <div className='bg-white col-start-5 col-end-9 rounded-[10px] my-40'>
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
