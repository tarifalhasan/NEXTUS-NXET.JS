import React from 'react';
import { StakingData } from '@/constant';
import Image from 'next/image';
const Staking = () => {
  return (
    <div className="grid main-container gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {StakingData.map((item: any, index: any) => (
        <div
          className="card-shadow bg-[#F9FAFA] py-4 lg:py-1 p-2 lg:p-5"
          key={index}
        >
          <Image src={item.icon} alt={item.title} width={65} height={65} />
          <div className="ml-5 space-y-2">
            <h2 className="text-[1.4em] leading-[1em] rounded font-medium text-skin-purple">
              {item.heading}
            </h2>
            <div>
              <p className="text-base block font-PLUS font-bold text-[#44414C]">
                {item.title}
                <span className="text-[14px] leading-[16px] block font-IBM font-normal text-[#6F6781]">
                  {item.subHeading}
                </span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Staking;
