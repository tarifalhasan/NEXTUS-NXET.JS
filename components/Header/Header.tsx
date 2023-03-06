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
          <ul className="flex transition duration-300 ease-in items-center space-x-3">
            {navLink.map((link, i) => (
              <li
                className="text-lg font-PLUS font-normal text-[#6F6781] hover:text-[#7533FF]"
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
