import Contact from '../Contact';

import HeroSection from '../HeroSection/HeroSection';

import Innovation from '../Innovation/Innovation';
import JoinUs from '../JoinUs/JoinUs';

import Revulation from '../Revulation';

import Vision from '../Vision/Vision';
import Subscribe from '../subscribe/Subscribe';
import Interoperability from '../Interoperability/Interoperability';
import Infrastructure from '../Infrastructure/Infrastructure';
import Disruption from '../Disruption/Disruption';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Vision />
      <Innovation />
      <Interoperability />
      <Infrastructure />

      <JoinUs />
      <Disruption />
      <Subscribe />
      <Contact />
      <Revulation />
    </>
  );
};
export default HomePage;
