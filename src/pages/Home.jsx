import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import NewsPreview from '../components/NewsPreview';

const Home = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <NewsPreview />
      <Services />
    </div>
  );
};

export default Home;



