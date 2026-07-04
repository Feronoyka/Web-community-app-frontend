function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='grid grid-cols-12 gap-8 mx-16'>
      <div className='col-start-5 col-end-9 mx-auto bg-white rounded-[10px] shadow-(--cartoon-shadow) border-2 my-20 max-[767px]:col-span-12 max-[1024px]:col-start-4'>
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
