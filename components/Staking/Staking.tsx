import React from 'react';
import { StakingData } from '@/constant';
import Image from 'next/image';
const Staking = () => {
  return (
    <div id="staking">
      <div className="lg:max-w-[60%] space-y-4 mx-auto px-5 py-10 md:text-center">
        <h2 className="heading text-center ">
          Empower Your Project <br className="hidden lg:block" /> with Xcel Pad
        </h2>
        <p className="sub-heading lg:w-[66%] mx-auto text-center ">
          Invest in innovation today and shape the future of DeFi with our
          expert-driven ecosystem, providing opportunities and resources for
          success.
        </p>
      </div>
      <div className="grid container place-items-center gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {StakingData.map((item: any, index: any) => (
          <div className="card-shadow bg-[#F9FAFA] p-8" key={index}>
            <Image className="max-w-[72px]" src={item.icon} alt={item.title} />
            <div className=" space-y-2">
              <h2 className="text-[1.25em] pt-4  md:text-[1.5em] font-IBM leading-[110%] rounded font-medium text-skin-purple">
                {item.heading}
              </h2>
              <div>
                <p className="text-[0.875em] leading-[150%] lg:text-[1em] font-PLUS font-medium text-[#44414C]">
                  {item.title}
                </p>
                <span className="text-[13px] pt-2 leading-[150%] block font-IBM font-normal text-[#6F6781]">
                  {item.subHeading}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staking;
