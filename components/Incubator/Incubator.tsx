import React from 'react';
import Image from 'next/image';
import { IncubatorData } from '@/constant';
const Incubator = () => {
  return (
    <div
      id="incubator"
      className="main-container py-12 grid grid-cols-1 gap-16 lg:grid-cols-2"
    >
      {IncubatorData.map((data, index) => (
        <div className="" key={index}>
          <div className="md:flex gap-7 items-center lg:flex-col">
            <div
              className={` ${
                index === 1 ? 'md:order-last ' : 'md:order-first '
              } lg:order-first basis-1/2`}
            >
              <div className="relative">
                <Image
                  src={data.Image}
                  alt="tarif"
                  className="block mx-auto"
                  width={300}
                  height={200}
                />
                <div className="absolute md:hidden lg:block top-[54%] left-[14%]">
                  {index === 1 ? (
                    <Image
                      src={'/img/btn-sta.png'}
                      alt="tarif"
                      className=" mx-auto"
                      width={340}
                      height={100}
                    />
                  ) : (
                    <Image
                      src={'/img/Incubator/btn-2.svg'}
                      alt="tarif"
                      className=" mx-auto"
                      width={340}
                      height={100}
                    />
                  )}
                  {/* <span>With</span> */}
                </div>
              </div>
            </div>
            <div className="text-center md:text-left lg:text-center basis-1/2 space-y-3">
              <div className="hidden md:block lg:hidden">
                <img src={'/btn.png'} alt="tarif" className="block mx-auto" />
              </div>
              <h2 className="text-xl lg:text-3xl my-4 font-medium text-skin-purple">
                {data.heading}
              </h2>
              <p className="text-md md:text-base font-medium text-[#44414C]">
                {data.title}
              </p>
              <div className="text-center md:text-left lg:text-center mt-3 space-y-2">
                <span className="block w-full md:w-[80%] lg:w-full text-[14px] text-[#6F6781] font-normal leading-tight">
                  {data.subTitle}
                </span>
                <button className="border-2 text-sm transform translate-1s hover:bg-skin-pink hover:text-white w-auto transition duration-500 ease-in-out border-skin-pink bg-white font-IBM font-bold px-8 py-1.5 text-skin-pink">
                  {data.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Incubator;
