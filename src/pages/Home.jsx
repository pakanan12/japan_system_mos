import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Clients from '../components/Clients';

const Home = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <Clients />
      <Services />
    </div>
  );
};

export default Home;

