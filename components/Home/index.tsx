import Disruption from '../Disruption/Disruption';
import Header from '../Header/Header';
import HeroSection from '../HeroSection/HeroSection';
import Incubator from '../Incubator/Incubator';
import JoinUs from '../JoinUs/JoinUs';
import Launchpad from '../Launchpad/Launchpad';

import Staking from '../Staking/Staking';

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Disruption />
      <Launchpad />
      <Staking />
      <JoinUs />
      <Incubator />
    </>
  );
};
export default HomePage;
