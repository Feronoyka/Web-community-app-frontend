function AuthLayout({ children }: { children: React.ReactNode }) {
  return <div className='grid grid-cols-12 gap-8 mx-16'>{children}</div>;
}

export default AuthLayout;
