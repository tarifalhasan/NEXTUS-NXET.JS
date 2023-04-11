import React from 'react';
import Image from 'next/image';
import img2 from '../../img/hero3.png';
const Innovation = () => {
  return (
    <section
      id="innovation"
      className="flex container p-5 card_shadow_md flex-col md:flex-row items-center "
    >
      <div className="basis-1/2 order-last lg:order-first  relative">
        <div>
          <Image src={img2} className=" " alt="logo" />
        </div>
        <div className="ml-0  lg:hidden lg:ml-[55px] lg:mt-[1.6rem]">
          <span className="text-small">
            Our goal is to facilitate the creation of secure, efficient, and
            decentralized systems powered by advanced AI capabilities, leading
            to a more democratic and transparent approach to problem-solving.
          </span>
        </div>
      </div>
      <div className={`basis-1/2 space-y-3 lg:text-justify`}>
        <div className="lg:pl-10  space-y-5 ">
          <h2 className="heading font-medium text-[#44414C]">
            Empowering Innovation
          </h2>
          <h2 className="sub-heading font-medium ">
            Our aim is to provide a launchpad for innovative Web3-focused
            projects, supporting their development and growth while leveraging
            the potential of both Web3 and innovative tech.
          </h2>

          <div className="ml-0 hidden lg:block lg:ml-[55px] lg:mt-[1.6rem]">
            <span className="text-small">
              We strive to make it easier for people to build secure, efficient,
              and decentralized systems powered by new technologies, leading to
              a more democratic and open way of solving problems.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
