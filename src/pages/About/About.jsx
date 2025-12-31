import AboutHero from '../../pages/About/Abouthero';
import StorySection from '../../pages/About/Storysection';
import ValueCards from '../../pages/About/Valuecard';
import ContactInfo from '../../pages/About/Contactinfor';

const About = () => {
  return (
    <div className="min-h-screen">
      <AboutHero />
      
      <section className="py-24 bg-gradient-to-b from-white to-stone-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <StorySection />
            <ValueCards />
            <ContactInfo />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;