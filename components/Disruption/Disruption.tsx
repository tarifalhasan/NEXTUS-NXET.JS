import React from 'react';
import { DisruptionData } from '@/constant';
import img1 from '../../public/img/Disruption/img1.png';
import img2 from '../../public/img/Disruption/img2.png';
import Image from 'next/image';
const Disruption = () => {
  return (
    <div className="main-container " id="disruption">
      <div className="flex flex-col gap-7 md:flex-row items-center ">
        <div className={`basis-1/2 space-y-3 lg:text-justify`}>
          <div className="lg:pl-10  space-y-5 ">
            <h2 className="text-2xl md:text-[2.2em] md:hidden lg:block font-medium text-[#44414C] leading-[1.1]">
              The AI Nexus Vision of AI-Powered Decentralization
            </h2>
            <h4 className="text-md  font-medium font-IBM text-[#6F6781]">
              Crypto & AI merge presents immense potential to disrupt various
              industries. AI Nexus supports
              <span className="text-skin-purple font-medium">
                innovative projects exploring
              </span>
              the benefits of blockchain&rsquo;s decentralization & AI&rsquo;s
              advanced capabilities for secure & efficient systems.
            </h4>

            <div className="ml-0 lg:ml-[55px] lg:mt-[1.6rem]">
              <button className="border-2 text-sm transform translate-1s hover:bg-skin-pink hover:text-white w-auto transition duration-500 ease-in-out border-skin-pink bg-white font-IBM font-bold px-4 py-2 text-skin-pink">
                Join the AI Nexus Revolution
              </button>
              <span className="text-sm mt-4 text-center  lg:text-left block w-full md:w-[90%] font-PLUS font-normal text-[#6F6781]">
                Our goal: advancing decentralized autonomous systems & creating
                a more efficient, secure, & equitable world.
              </span>
            </div>
          </div>
        </div>
        <div className="basis-1/2 relative ">
          <Image src={img1} className="object-cover w-full" alt="logo" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center ">
        <div className="basis-1/2 relative">
          <Image
            src={img2}
            className="object-cover w-fit max-w-[450px]"
            alt="logo"
          />
        </div>
        <div className={`basis-1/2 space-y-3 lg:text-justify`}>
          <div className="lg:pl-10  space-y-5 ">
            <h2 className="text-2xl md:text-[2.2em] md:hidden lg:block font-medium text-[#44414C] leading-[1.1]">
              AI Nexus&rsquo;s LaunchPad
            </h2>
            <h4 className="text-md  font-medium font-IBM text-[#6F6781]">
              At AI Nexus, our aim is to provide a launchpad for innovative
              AI-focused crypto projects. We aim to support the development and
              growth of these projects, leveraging the potential of both
              cryptocurrency and AI tech.
            </h4>

            <div className="ml-0 lg:ml-[55px] lg:mt-[1.6rem]">
              <span className="text-sm mt-4 text-center  lg:text-left block w-full md:w-[90%] font-PLUS font-normal text-[#6F6781]">
                Our goal is to facilitate the creation of secure, efficient, and
                decentralized systems powered by advanced AI capabilities,
                leading to a more democratic and transparent approach to
                problem-solving.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disruption;
