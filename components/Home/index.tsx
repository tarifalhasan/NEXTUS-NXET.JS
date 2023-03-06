import Disruption from '../Disruption/Disruption';
import Header from '../Header/Header';
import HeroSection from '../HeroSection/HeroSection';
import Incubator from '../Incubator/Incubator';

import Staking from '../Staking/Staking';

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Disruption />
      <Staking />
      <Incubator />
    </>
  );
};
export default HomePage;
