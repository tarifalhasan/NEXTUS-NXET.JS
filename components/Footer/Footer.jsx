import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ImTelegram, ImTwitter } from 'react-icons/im';
import { SiGitbook } from 'react-icons/si';
import { BsDiscord } from 'react-icons/bs';
import { navLink } from '@/constant';
const Footer = () => {
  return (
    <footer className="main-container py-7 hidden lg:flex items-center justify-between space-x-4">
      <div className="logo">
        <Link href="/">
          <Image src="/img/Logo.svg" alt="nexus" width={90} height={60} />
        </Link>
      </div>
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
      <ul className="icons flex gap-3 items-center">
        <li className=" transition duration-300 ease-in text-[#B1A8C6] hover:text-skin-purple">
          <Link href={'/'}>
            <ImTelegram size={20} />
          </Link>
        </li>
        <li className=" transition duration-300 ease-in text-[#B1A8C6] hover:text-skin-purple">
          <Link href={'/'}>
            <ImTwitter size={24} />
          </Link>
        </li>
        <li className=" ">
          <Link href={'/'}>
            <svg
              width="30"
              height="16"
              className="transition duration-300 ease-in text-[#B1A8C6] hover:text-skin-purple"
              viewBox="0 0 22 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.4092 6.99987C12.4092 10.4501 9.63132 13.2471 6.2046 13.2471C2.77789 13.2471 0 10.4501 0 6.99987C0 3.54965 2.77789 0.752686 6.2046 0.752686C9.63127 0.752686 12.4092 3.54965 12.4092 6.99987Z"
                fill="#B1A8C6"
              />
              <path
                d="M19.2158 6.99976C19.2158 10.2476 17.8268 12.8804 16.1135 12.8804C14.4001 12.8804 13.0112 10.2476 13.0112 6.99976C13.0112 3.75197 14.4001 1.11914 16.1135 1.11914C17.8268 1.11914 19.2158 3.75197 19.2158 6.99976Z"
                fill="#B1A8C6"
              />
              <path
                d="M22 6.99999C22 9.90987 21.5115 12.2688 20.9089 12.2688C20.3062 12.2688 19.8178 9.90987 19.8178 6.99999C19.8178 4.0901 20.3062 1.7312 20.9089 1.7312C21.5115 1.7312 22 4.0901 22 6.99999Z"
                fill="#B1A8C6"
              />
            </svg>
          </Link>
        </li>
        <li className=" transition duration-300 ease-in text-[#B1A8C6] hover:text-skin-purple">
          <Link href={'/'}>
            <SiGitbook size={26} />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
