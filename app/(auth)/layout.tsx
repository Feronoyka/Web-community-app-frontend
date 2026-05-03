function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='grid grid-cols-12 gap-8 mx-16'>
      <div className='col-start-5 col-end-9 bg-white rounded-[10px] my-20'>
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
