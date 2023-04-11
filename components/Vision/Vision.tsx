import React from 'react';

import img1 from '../../img/aiImg1.svg';
import Image from 'next/image';
import { ArrowDown } from '../Icon';
const Vision = () => {
  return (
    <div className="container  py-10" id="vision">
      <div className="flex p-5 card_shadow_sm flex-col gap-7 md:flex-row items-center ">
        <div
          className={`basis-1/2  order-last  md:order-first space-y-3 lg:text-justify`}
        >
          <div className="lg:pl-10 space-y-8 ">
            <h2 className="heading">
              The Xcel Pad Vision of Web3 Powered Innovation
            </h2>
            <h4 className="sub-heading ">
              At Xcel Pad, we believe that Web3 and innovation merge to present
              immense potential to disrupt various industries. We are dedicated
              to supporting innovative projects that explore the benefits of
              blockchain&apos;s decentralization and advanced capabilities for
              secure and efficient systems.
            </h4>

            <div className="ml-0 lg:ml-[55px] hidden lg:block space-y-8 lg:mt-[1.6rem]">
              <a
                href="https://t.me/XcelPadCommunity"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <button className="btn-primary">
                  Join the Xcel Pad Revolution
                </button>
              </a>
              <span className="text-small font-normal block">
                Our goal is to advance decentralized autonomous systems and
                create a more efficient, secure, and equitable world.
              </span>
            </div>
          </div>
        </div>
        <div className=" order-last lg:order-first basis-1/2 p-1 lg:p-10 relative ">
          <div>
            <Image src={img1} className="" alt="logo" />

            <div className="ml-0 pb-10   lg:hidden space-y-4 lg:mt-[1.6rem]">
              <a
                href="https://t.me/XcelPadCommunity"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <button className="btn-primary w-full">
                  Join the Xcel Pad Revolution
                </button>
              </a>
              <span className="text-small block">
                Our goal is to advance decentralized autonomous systems and
                create a more efficient, secure, and equitable world.
              </span>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() =>
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
          })
        }
        className="my-16 block mx-auto"
      >
        <ArrowDown />
      </button>
    </div>
  );
};

export default Vision;
