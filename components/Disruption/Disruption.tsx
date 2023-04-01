import React from 'react';

import img2 from '../../img/img3.svg';

import img1 from '../../img/aiImg1.svg';
import Image from 'next/image';
const Disruption = () => {
  return (
    <div className="container  py-10" id="disruption">
      <div className="flex flex-col gap-7 md:flex-row items-center ">
        <div
          className={`basis-1/2 order-last  md:order-first space-y-3 lg:text-justify`}
        >
          <div className="lg:pl-10 space-y-5 ">
            <h2 className="heading">
              The Xcel Pad Vision of DeFi Powered Innovation
            </h2>
            <h4 className="sub-heading ">
              At Xcel Pad, we believe that DeFi and innovation merge to present
              immense potential to disrupt various industries. We are dedicated
              to supporting innovative projects that explore the benefits of
              blockchain&apos;s decentralization and advanced capabilities for
              secure and efficient systems.
            </h4>

            <div className="ml-0 lg:ml-[55px] space-y-4 lg:mt-[1.6rem]">
              <button className="btn-primary">
                Join the AI Nexus Revolution
              </button>
              <span className="text-small block">
                Our goal is to advance decentralized autonomous systems and
                create a more efficient, secure, and equitable world.
              </span>
            </div>
          </div>
        </div>
        <div className="basis-1/2 relative ">
          <div>
            <Image src={img1} className="" alt="logo" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center ">
        <div className="basis-1/2 relative">
          <div>
            <Image src={img2} className=" " alt="logo" />
          </div>
        </div>
        <div className={`basis-1/2 space-y-3 lg:text-justify`}>
          <div className="lg:pl-10  space-y-5 ">
            <h2 className="heading">AI Nexus&rsquo;s LaunchPad</h2>
            <h4 className="sub-heading ">
              At AI Nexus, our aim is to provide a launchpad for innovative
              AI-focused crypto projects. We aim to support the development and
              growth of these projects, leveraging the potential of both
              cryptocurrency and AI tech.
            </h4>

            <div className="ml-0 lg:ml-[55px] lg:mt-[1.6rem]">
              <span className="text-small">
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
