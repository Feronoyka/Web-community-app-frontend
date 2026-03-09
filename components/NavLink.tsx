'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkTypes = {
  href: string;
  children?: React.ReactNode;
  className?: string;
};

export default function NavLink({ href, children, className }: NavLinkTypes) {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link
      href={href}
      className={isActive ? className : 'text-[#333333] opacity-75'}
    >
      {children}
    </Link>
  );
}
