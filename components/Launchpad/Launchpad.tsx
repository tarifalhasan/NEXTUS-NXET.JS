import Image from 'next/image';
import React from 'react';
import bg from '../../img/launchpad.png';
const Launchpad = () => {
  return (
    <div id="launchpad">
      <div className="container px-5 md:px-16 lg:px-20">
        <h2 className="text-large pt-6">
          Xcel Pad Multichain: Unlocking Interoperability
        </h2>
        <div className="grid relative pb-14 place-items-center space-x-4 grid-cols-1 lg:grid-cols-2">
          <div className="space-y-5">
            <p className="text-medium">
              Our Multichain LaunchPad supports projects on Ethereum, Binance
              Smart Chain, zkSync, and Arbitrum at launch, with plans to expand
              to other EVM chains like Optimism, Fantom, Avalanche, Polygon, and
              Harmony.
            </p>
            <p className="sub-heading text-slate-100">
              We are committed to providing seamless interoperability and
              accessibility within the Xcel ecosystem. As the decentralized
              landscape continues to evolve, our technical team is dedicated to
              staying ahead of the curve and providing our users with the latest
              and most innovative technologies.
            </p>
            <div className=" lg:hidden ">
              <Image src={bg} alt="staking nextus" />
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
            <Image src={bg} alt="staking nextus" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Launchpad;
