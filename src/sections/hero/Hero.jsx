import HeroContent from './HeroContent';
import heroImage from '../../assets/images/hero/yoga.webp';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Yoga Background"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-transparent"></div>
      </div>
      <div className="container mx-auto px-6 md:px-16 lg:px-24 relative z-10">
        <HeroContent />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;