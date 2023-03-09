import Image from 'next/image';
import React from 'react';

const Launchpad = () => {
  return (
    <div id="launchpad">
      <div className="container px-5 md:px-16 lg:px-20">
        <h2 className="text-large pt-6">AI Nexus s Multichain LaunchPad</h2>
        <div className="grid relative pb-14 place-items-center space-x-4 grid-cols-1 lg:grid-cols-2">
          <div className="space-y-5">
            <p className="text-medium">
              Our Multichain LaunchPad is here to support projects on
              <span className="text-[#99FFFF]">
                Ethereum, Binance Smart Chain,
              </span>
              and
              <span className="text-[#99FFFF]">Arbitrum</span> at launch, with
              plans to expand to other EVM chains like
              <span className="text-[#99FFFF]">
                Optimism, Fantom, Avalanche, Polygon,
              </span>
              and <span className="text-[#99FFFF]">Harmony.</span>
            </p>
            <p className="sub-heading text-slate-100">
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
            <div className="text-left md:text-center lg:text-left  ">
              <button className="btn-secondary">
                Experience Seamless Interoperability
              </button>
              <span className="text-small mt-5">
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
