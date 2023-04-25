import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ImTelegram, ImTwitter } from 'react-icons/im';
import { SiGitbook } from 'react-icons/si';
import { BsDiscord } from 'react-icons/bs';
import { SiMedium } from 'react-icons/si';
import { navLink } from '@/constant';
const Footer = () => {
  return (
    <div className="bg-[#ECF0F0]">
      <footer className="container  py-7 hidden lg:flex items-center justify-between space-x-4">
        <div className="logo">
          <Link href="/">
            <Image src="/img/Logo.svg" alt="nexus" width={90} height={60} />
          </Link>
        </div>
        <ul className="flex transition duration-300 ease-in items-center gap-x-16">
          {navLink.map((link, i) => (
            <li
              className="text-lg hover:underline font-PLUS font-normal text-[#6F6781] hover:text-[#7533FF]"
              key={i}
            >
              <Link href={`#${link.href}`}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <ul className="icons flex gap-7 items-center">
          <li className=" transition duration-300 ease-in text-[#B1A8C6] hover:text-skin-purple">
            <a target="_blank" href={'https://t.me/XcelPadCommunity'}>
              <ImTelegram size={22} />
            </a>
          </li>
          <li className=" transition duration-300 ease-in text-[#B1A8C6] hover:text-skin-purple">
            <a target="_blank" href={'https://discord.com/invite/EqYPBZBaRJ'}>
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
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
