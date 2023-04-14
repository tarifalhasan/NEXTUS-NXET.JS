import Image from 'next/image';
import React from 'react';
import img1 from '../../img/1.png';
import img2 from '../../img/2.png';
const Disruption = () => {
  return (
    <section
      id="disruption"
      className="grid pt-3  container gap-14 lg:gap-12 grid-cols-1 lg:grid-cols-2"
    >
      <div className="relative   ">
        <Image
          className="block lg:min-h-[560px] lg:max-h-[560px]  mx-auto"
          src={img2}
          alt="tarif"
        />
        <div className="  lg:px-5 h-auto min-h-[440px] lg:max-h-[440px]    shadow_card text-center space-y-5">
          <span className="text-lg text-[#6F6781]">With</span>
          <h2 className="text-4xl text-skin-purple font-IBM  font-medium">
            Xcel Pad Incubator Fund
          </h2>
          <p className="text-xl text-[#44414C] font-PLUS 2xl:py-2 font-medium ">
            A portion of platform fees supports new projects in the Web3 space,
            providing crucial resources including financial support, technical
            expertise, and community engagement.
          </p>
          <p className="text-[#6F6781] text-base mx-8">
            Join the XL community and be a part of the next wave of
            decentralized innovation. Invest in the future with Xcel Pad Web3
            Incubator Fund
          </p>
          <a
            href="https://t.me/XcelPadCommunity"
            target="_blank"
            rel="noopener noreferrer"
            className="block  xl:absolute transform xl:translate-x-1/2  bottom-0 pb-10"
          >
            <button className="btn-primary">
              Join the Next Wave of Innovation
            </button>
          </a>
        </div>
      </div>
      <div className="relative  order-first  ">
        <Image
          className="block  lg:min-h-[560px] lg:max-h-[560px]   mx-auto"
          src={img1}
          alt="tarif"
        />
        <div className="text-center relative min-h-[440px] lg:max-h-[440px] pb-10 px-5 h-auto  shadow_card space-y-5">
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
          <a
            href="https://t.me/XcelPadCommunity"
            target="_blank"
            rel="noopener noreferrer"
            className="block xl:absolute transform xl:translate-x-1/2  bottom-0 pb-10"
          >
            <button className="btn-primary">
              Maximize Earnings with Xcel Pad
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Disruption;
