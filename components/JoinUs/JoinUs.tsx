import React from 'react';
import gradient from '../../img/Gradient 3.png';
import gradient2 from '../../img/Gradient 4.png';
import Image from 'next/image';
const JoinUs = () => {
  return (
    <div
      id="join_us"
      className="my-5 overflow-hidden relative text-white  h-full"
    >
      <div className="content relative py-[10rem]  text-center z-50 ">
        <div className=" flex justify-center items-center">
          <div className="space-y-2 md:space-y-6">
            <h2 className="text-large">
              Become a Part of the Xcel Pad Community
            </h2>
            <p className="text-2xl font-normal font-IBM text-[#F2F5F5] text-center">
              Join the Xcel Pad community and experience the full potential of
              your project.
            </p>
            <div className="flex justify-center">
              <button className="btn-secondary">
                Unleash Your Project&apos;s Potential
              </button>
            </div>
            <p className="text-lg text-[#C4BCD5] font-PLUS w-full md:w-[50%] mx-auto font-light text-center pt-2 md:pt-11">
              Unleash the power of decentralized innovation with our advanced
              launchpad tools.
            </p>
          </div>
        </div>
        <div className="absolute -z-10 left-0 top-[5%]">
          <Image src={gradient} alt="Xel" />
        </div>
        <div className="absolute -z-10 right-0 top-[5%]">
          <Image src={gradient2} alt="Xel" />
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
