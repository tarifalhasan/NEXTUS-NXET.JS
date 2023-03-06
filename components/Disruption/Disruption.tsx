import React from 'react';
import { DisruptionData } from '@/constant';
import img1 from '../../public/img/Disruption/01.png';
import img2 from '../../public/img/Disruption/002.png';
import Image from 'next/image';
const Disruption = () => {
  return (
    <div className="main-container " id="disruption">
      {DisruptionData.map((data, index) => (
        <div key={index} className="flex flex-col md:flex-row items-center ">
          <div
            className={`text-center ${
              index === 1 ? 'order-last' : 'order-last md:order-first'
            } basis-1/2 space-y-3 lg:text-justify`}
          >
            <div className="lg:pl-10 flex flex-col space-y-3 ">
              <h2 className="text-2xl md:text-[2.2em] md:hidden lg:block font-medium text-[#44414C] leading-[1.1]">
                {data.title}
              </h2>
              <h4
                className="text-md  font-light text-[#6F6781]"
                dangerouslySetInnerHTML={{ __html: data.subTitle }}
              ></h4>

              <div>
                <button className="border-2 text-sm transform translate-1s hover:bg-skin-pink hover:text-white w-auto transition duration-500 ease-in-out border-skin-pink bg-white font-IBM font-bold px-4 py-2 text-skin-pink">
                  Join the revolution
                </button>
                <span className="text-sm mt-4 text-center  lg:text-left block w-full md:w-[70%] font-PLUS font-normal text-[#6F6781]">
                  Our goal: advancing decentralized autonomous systems &
                  creating a more efficient, secure, & equitable world.
                </span>
              </div>
            </div>
          </div>

          <div className="basis-1/2 relative order-first">
            <Image
              src={data.image}
              className="object-cover"
              alt="logo"
              // width={450}
              // height={200}
            />
            <div className={`absolute top-[47%] left-[26%]`}>
              <Image
                src={index === 1 ? img1 : img2}
                alt="nextus"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Disruption;
