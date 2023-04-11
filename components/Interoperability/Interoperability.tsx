import Image from 'next/image';
import React from 'react';
import bg from '../../img/launchpad.png';
const Interoperability = () => {
  return (
    <div id="interoperability">
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
            <p className="sub-heading hidden lg:block text-white">
              We are committed to providing seamless interoperability and
              accessibility within the Xcel ecosystem. As the decentralized
              landscape continues to evolve, our technical team is dedicated to
              staying ahead of the curve and providing our users with the latest
              and most innovative technologies.
            </p>
            <div className=" lg:hidden ">
              <Image src={bg} alt="staking nextus" />
            </div>
            <p className="sub-heading  font-normal font-PLUS lg:hidden text-white">
              We are committed to providing seamless interoperability and
              accessibility within the Xcel ecosystem. As the decentralized
              landscape continues to evolve, our technical team is dedicated to
              staying ahead of the curve and providing our users with the latest
              and most innovative technologies.
            </p>
            <div className="text-left md:text-center lg:text-left  ">
              <a
                href="https://t.me/XcelPadCommunity"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <button className="btn-secondary w-full lg:w-auto">
                  Experience Seamless Interoperability
                </button>
              </a>
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

export default Interoperability;
