import Contact from '../Contact';
import Disruption from '../Disruption/Disruption';
import Header from '../Header/Header';
import HeroSection from '../HeroSection/HeroSection';
import Incubator from '../Incubator/Incubator';
import JoinUs from '../JoinUs/JoinUs';
import Launchpad from '../Launchpad/Launchpad';
import Revulation from '../Revulation';

import Staking from '../Staking/Staking';
import Subscribe from '../subscribe/Subscribe';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Disruption />
      <Launchpad />
      <Staking />
      <JoinUs />
      <Incubator />
      <Subscribe />
      <Contact />
      <Revulation />
    </>
  );
};
export default HomePage;
