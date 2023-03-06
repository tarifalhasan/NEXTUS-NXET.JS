import Image from 'next/image';
import React from 'react';

const Launchpad = () => {
  return (
    <div id="launchpad">
      <div className="main-container px-5 md:px-16 lg:px-20">
        <h2 className="text-2xl py-10 text-center md:text-[2.2em]  lg:block font-medium text-[#fcfcfc] leading-[1.1]">
          AI Nexus s Multichain LaunchPad
        </h2>
        <div className="grid relative pb-14 place-items-center space-x-4 grid-cols-1 lg:grid-cols-2">
          <div className="space-y-5">
            <p className="text-md   font-medium text-[#fcfcfc]">
              Our Multichain LaunchPad is here to support projects on {''}
              <span className="text-[#99FFFF]">
                Ethereum, Binance Smart Chain,
              </span>
              and {''}
              <span className="text-[#99FFFF]">Arbitrum</span> at launch, with
              plans to expand to other EVM chains like {''}
              <span className="text-[#99FFFF]">
                Optimism, Fantom, Avalanche, Polygon,
              </span>
              and {''} <span className="text-[#99FFFF]">Harmony.</span>
            </p>
            <p className="text-md   font-normal text-[#fcfcfc]">
              Our mission is to provide seamless interoperability and
              accessibility in the SynthAI ecosystem. As the decentralized
              landscape continues to evolve, our technical team is dedicated to
              staying ahead of the curve and providing our users with the latest
              and most innovative technologies.
            </p>
            <div className=" lg:hidden ">
              <Image
                src={'/img/staking.png'}
                width={550}
                className="bloxk mx-auto"
                height={50}
                alt="staking nextus"
              />
              <div className="absolute top-[60%] bg-[] left-[41%]">
                <Image
                  src={'/img/staking-btn.png'}
                  width={340}
                  height={50}
                  className="block "
                  alt="staking nextus"
                />
              </div>
            </div>
            <div className="text-left md:text-center lg:text-left pt-[2rem] md:mt-[5rem] ">
              <button className="border-2 block md:mx-auto lg:mx-0 transform text-white translate-1s hover:bg-white hover:text-skin-pink w-auto transition duration-500 ease-in-out border-skin-pink bg-skin-pink font-IBM font-medium px-4 py-2 ">
                Experience Seamless Interoperability
              </button>
              <span className="text-base block mt-4 font-IBM font-normal text-[#C4BCD5]">
                Join us in our pursuit of advancing the decentralized space.
              </span>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <Image
              src={'/img/staking.png'}
              width={550}
              height={50}
              alt="staking nextus"
            />
            <div className="absolute top-[74%] right-[1%]">
              <Image
                src={'/img/staking-btn.png'}
                width={340}
                height={50}
                className="block "
                alt="staking nextus"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Launchpad;
