import React, { useState, useEffect } from 'react';

import { navLink } from '@/constant';
import { MdMenu } from 'react-icons/md';
import Link from 'next/link';
import { ImTelegram, ImTwitter } from 'react-icons/im';
import { SiGitbook, SiMedium } from 'react-icons/si';
import { BsDiscord } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import Image from 'next/image';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handler = () => {
    setIsOpen(!isOpen);
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full py-3 lg:hidden  z-[999999] transition-colors duration-300 ${
        isScrolled ? 'bg-[#F2F5F5]' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center px-5 space-x-16 md:space-x-[8rem]">
        <button onClick={handler} className="humbaga-menu ">
          {!isOpen ? (
            <MdMenu className="text-[#6F6781]" size={30} />
          ) : (
            <IoMdClose className="text-[#6F6781]" size={30} />
          )}
        </button>
        <div className="logo">
          <Link href="/">
            <Image src="/img/Logo.svg" alt="nexus" width={90} height={60} />
          </Link>
        </div>
      </div>
      <nav
        className={`bg-[#fcfcfc] transition duration-300 ease-in ${
          isOpen ? 'left-0' : 'left-full'
        }  h-screen fixed w-full`}
      >
        <ul className="flex  flex-col pt-14 p-10 md:p-16  space-y-6 md:space-y-10">
          {navLink.map((link, i) => (
            <li
              onClick={handler}
              className="transition duration-300 ease-in text-[#B1A8C6] hover:text-skin-purple"
              key={i}
            >
              <Link href={`#${link.href}`}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div className="pt-14 p-10 md:p-16 space-y-8">
          <a href="https://t.me/XcelPadCommunity" target="_blank">
            <button
              onClick={handler}
              className="bg-skin-purple font-IBM font-medium px-4 py-2 text-white"
            >
              Join the revolution
            </button>
          </a>
          <ul className="icons flex gap-7 items-center">
            <li className=" transition duration-300 ease-in text-[#B1A8C6] hover:text-skin-purple">
              <a target="_blank" href={'https://t.me/XcelPadCommunity'}>
                <ImTelegram size={22} />
              </a>
            </li>
            <li className=" transition duration-300 ease-in text-[#B1A8C6] hover:text-skin-purple">
              <a target="_blank" href={'https://discord.com/invite/mFRQ3UuVm2'}>
                <BsDiscord size={24} />
              </a>
            </li>
            <li className=" transition duration-300 ease-in text-[#B1A8C6] hover:text-skin-purple">
              <a target="_blank" href={'https://twitter.com/XcelPad'}>
                <ImTwitter size={24} />
              </a>
            </li>
            <li className="transition duration-300 ease-in text-[#B1A8C6] hover:text-skin-purple ">
              <a target="_blank" href={'https://medium.com/@XcelPad'}>
                <SiMedium size={26} />
              </a>
            </li>
            <li className=" transition duration-300 ease-in text-[#B1A8C6] hover:text-skin-purple">
              <a target="_blank" href={'https://docs.xcelpad.com/'}>
                <SiGitbook size={26} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default MobileMenu;
