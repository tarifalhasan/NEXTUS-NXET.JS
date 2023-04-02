import Image from 'next/image';

import heroImg from '../../img/hero.png';
import { ArrowDown } from '../Icon';
const HeroSection = () => {
  return (
    <section className="relative ">
      <div
        id="innovate"
        className="grid  z-10 gap-4 place-items-center  container grid-cols-1 lg:grid-cols-2"
      >
        <div className="hero  ">
          <Image src={heroImg} className=" " alt="logo" />
        </div>
        <div className="text-center space-y-3 lg:text-justify">
          <h2 className="heading">
            The launchpad for the future of innovative DeFi crypto projects
          </h2>
          <div className="lg:pl-10 flex flex-col space-y-3 ">
            <p className="text-md  font-light text-[#6F6781]">
              Invest in innovation today and shape the future of DeFi with our
              expert-driven ecosystem, providing opportunities and resources for
              success.
            </p>
            <div>
              <button className="border-2 transform translate-1s  hover:bg-skin-pink hover:text-white lg:w-auto transition duration-500 w-full ease-in border-skin-pink bg-white font-IBM font-medium px-4 py-2 text-skin-pink">
                Invest Now in AI&rsquo;s Future
              </button>
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
