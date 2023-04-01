import Image from 'next/image';
import React from 'react';
import img1 from '../../img/1.png';
import img2 from '../../img/2.png';
const Incubator = () => {
  return (
    <section
      id="incubator"
      className="grid container gap-2 lg:gap-28 grid-cols-1 lg:grid-cols-2"
    >
      <div className="relative  ">
        <Image className="block   mx-auto" src={img2} alt="tarif" />
        <div className=" pb-24 lg:shadow-lg text-center space-y-5">
          <span className="text-lg text-[#6F6781]">With</span>
          <h2 className="text-4xl text-skin-purple font-IBM  font-medium">
            Xcel Pad Incubator Fund
          </h2>
          <p className="text-xl text-[#44414C] font-PLUS font-medium ">
            A portion of platform fees supports new projects in the DeFi space,
            providing crucial resources including financial support, technical
            expertise, and community engagement.
          </p>
          <p className="text-[#6F6781] text-base mx-8">
            Join the XL community and be a part of the next wave of
            decentralized innovation. Invest in the future with Xcel Pad DeFi
            Incubator Fund
          </p>
          <button className="btn-primary">
            Join the Next Wave of Innovation
          </button>
        </div>
      </div>
      <div className="relative  order-first  ">
        <Image className="block  mx-auto" src={img1} alt="tarif" />
        <div className="pb-14 text-center lg:shadow-lg space-y-5">
          <span className="text-lg text-[#6F6781]">With</span>
          <h2 className="text-4xl text-skin-purple font-IBM  font-medium">
            XL Staking Vaults
          </h2>
          <p className="text-xl text-[#44414C] font-PLUS font-medium ">
            Join our innovative staking solution to earn revenue through
            platform fees. Each launch creates a vault, with rewards distributed
            to native token stakers. Low barriers to entry and a simple staking
            process make it easy to participate.{' '}
          </p>
          <p className="text-[#6F6781] text-base mx-8">
            Maximize your earning potential and join the decentralized future.
            Stake now with Xcel Pad
          </p>
          <button className="btn-primary">
            Maximize Earnings with Xcel Pad
          </button>
        </div>
      </div>
    </section>
  );
};

export default Incubator;
