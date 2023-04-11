import Contact from '../Contact';

import Header from '../Header/Header';
import HeroSection from '../HeroSection/HeroSection';
import Incubator from '../Disruption/Disruption';
import Innovation from '../Innovation/Innovation';
import JoinUs from '../JoinUs/JoinUs';
import Launchpad from '../Interoperability/Interoperability';
import Revulation from '../Revulation';

import Staking from '../Infrastructure/Infrastructure';
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
