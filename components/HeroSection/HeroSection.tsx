import Image from 'next/image';

import heroImg from '../../img/hero.png';
import { ArrowDown } from '../Icon';
const HeroSection = () => {
  return (
    <section className="relative container ">
      <div
        id="innovate"
        className="grid  z-10 gap-4 place-items-center px-5   grid-cols-1 lg:grid-cols-2"
      >
        <div className="hero  ">
          <Image src={heroImg} className=" " alt="logo" />
        </div>
        <div className="text-center space-y-6 lg:text-justify">
          <h2 className="heading">
            The launchpad for the future of innovative Web3 crypto projects
          </h2>
          <div className="lg:pl-10 flex flex-col space-y-6 ">
            <p className="text-md font-medium lg:text-base   text-[#6F6781]">
              Invest in innovation today and shape the future of Web3 with our
              expert-driven ecosystem, providing opportunities and resources for
              success.
            </p>
            <div>
              <a
                href="https://t.me/XcelPadCommunity"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <button className="border-2 transform translate-1s  hover:bg-skin-pink hover:text-white lg:w-auto transition duration-500 w-full ease-in border-skin-pink bg-white font-IBM font-medium px-4 py-2 min-h-[54px] text-skin-pink">
                  Invest Now in the Future of Web3
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() =>
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
          })
        }
        className="block mt-10 lg:mt-0 mx-auto"
      >
        <ArrowDown />
      </button>
    </section>
  );
};

export default HeroSection;
