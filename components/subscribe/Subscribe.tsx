import React from 'react';
import Image from 'next/image';
import gradient from '../../img/Gradient 3.png';
import gradientMobile from '../../img/Gradient 3 (3).png';
import gradient2 from '../../img/Gradient 3 (1).png';
const Subscribe = () => {
  return (
    <div
      id="join_us"
      className="my-5 overflow-hidden relative text-white  h-full"
    >
      <div className=" px-5 relative py-[7rem] lg:py-[10rem]  text-center z-50 ">
        <div className="Subscribe flex justify-center items-center">
          <div className="space-y-2 md:space-y-6">
            <h2 className="text-large">Stay Connected with Xcel Pad</h2>
            <p className="lg:text-2xl text-base  font-normal font-IBM w-full md:w-[50%] mx-auto text-[#F2F5F5] text-center">
              Keep up-to-date with the latest news, developments, and
              opportunities at Xcel Pad. Join our vibrant community and connect
              with like-minded individuals who share your passion for Web3
              innovation.
            </p>
            <form className="flex flex-col lg:flex-row gap-y-2 justify-center">
              <input
                type="email"
                placeholder="enter your email"
                required
                className="text-slate-800 py-2 w-full lg:w-[320px] px-6 text-lg focus:outline-none "
              />
              <button type="submit" className="btn-secondary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="absolute top-[10%] lg:top-1/2 -z-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full lg:w-auto  ">
          <Image className="w-full" src={gradient} alt="Xel" />
        </div>
        <div className="absolute hidden lg:block -z-10 left-0 top-[30%] lg:bottom-0">
          <Image src={gradient2} alt="Xel" />
        </div>
        <div className="absolute lg:hidden -z-10 left-0 w-full top-[25%] lg:bottom-0">
          <Image src={gradientMobile} alt="Xel" />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
