import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { navLink } from '@/constant';
const Header = () => {
  return (
    <header className="fixed hidden lg:block z-[99999] w-full">
      <div className="flex justify-between max-w-[1440px] px-6 mx-auto py-3">
        <div className="logo">
          <Link href="/">
            <Image src="/img/Logo.svg" alt="nexus" width={90} height={60} />
          </Link>
        </div>
        <nav>
          <ul className="flex items-center space-x-3">
            {navLink.map((link, i) => (
              <li
                className="text-base font-PLUS font-normal text-[#44414C]"
                key={i}
              >
                <Link href={`#${link.href}`}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <button className="bg-skin-purple font-IBM font-medium px-4 py-2 text-white">
            Join the revolution
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
