import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../../public/img/Logo.svg';
import { navLink } from '@/constant';
const Header = () => {
  return (
    <header className="   fixed top-0  bg-[#F2F5F5] hidden lg:block z-[99999] w-full">
      <div className="flex justify-between   py-7  container px-6 mx-auto ">
        <div className="logo">
          <Link href="/">
            <Image src={Logo} alt="nexus" />
          </Link>
        </div>
        <nav>
          <ul className="flex transition duration-300 ease-in items-center gap-x-14">
            {navLink.map((link, i) => (
              <li
                className="text-lg font-PLUS font-normal text-[#6F6781] hover:text-[#7533FF] hover:underline"
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
