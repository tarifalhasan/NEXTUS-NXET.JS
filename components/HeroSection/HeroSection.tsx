import Image from 'next/image';

const HeroSection = () => {
  return (
    <div
      id="innovate"
      className="grid z-10  gap-4 place-items-center  main-container grid-cols-1 lg:grid-cols-2"
    >
      <div className="hero">
        <Image
          src="/img/hero.png"
          className="w-full h-full object-cover"
          alt="logo"
          width={600}
          height={800}
        />
      </div>
      <div className="text-center space-y-3 lg:text-justify">
        <h2 className="text-2xl md:text-[2.2em] md:hidden lg:block font-medium text-[#44414C] leading-[1.1]">
          The launchpad for the future of AI crypto projects
        </h2>
        <div className="lg:pl-10 flex flex-col space-y-3 ">
          <p className="text-md  font-light text-[#6F6781]">
            Invest in innovation today and shape the future of AI. Expert-driven
            ecosystem providing opportunities and resources for success.
          </p>
          <div>
            <button className="border-2 transform translate-1s hover:bg-skin-pink hover:text-white w-auto transition duration-500 ease-in-out border-skin-pink bg-white font-IBM font-bold px-4 py-2 text-skin-pink">
              Join the revolution
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
