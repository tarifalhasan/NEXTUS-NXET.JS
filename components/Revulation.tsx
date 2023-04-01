import React from 'react';
import Image from 'next/image';
import revulation from '../img/revulation.png';
const Revulation = () => {
  return (
    <div
      id="innovate"
      className="grid gap-6 z-10  place-items-center  container grid-cols-1 lg:grid-cols-2"
    >
      <div className="hero  ">
        <Image src={revulation} className=" " alt="logo" />
      </div>
      <div className="text-center p-8 space-y-3 lg:text-justify">
        <h2 className="heading">Join the Xcel Pad revolution</h2>
        <div className=" flex flex-col space-y-3 ">
          <p className="text-md  font-light text-[#6F6781]">
            and be a part of the future of DeFi innovation. Together, we can
            shape the decentralized landscape and create a more efficient,
            secure, and equitable world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Revulation;
