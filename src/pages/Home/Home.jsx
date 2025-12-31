import Hero from '../../sections/hero/Hero';
import HolisticSection from '../../sections/classes/Holistic';
import Testimonials from '../../sections/testimonials/Testimonials';
import Instructors from '../../sections/instructors/Instructors';
import TASection from '../../sections/classes/CTAsection';
import StatsSection from '../Home/Statesection';
import AboutSection from '../Home/Aboutsection';
import WhyChooseUs from '../Home/Whychoiceus';
import PracticeSection from '../Home/PracticeSection';


const Home = () => {
    return (
        <div className="overflow-hidden">
            <Hero />
            <StatsSection />
            <PracticeSection/>
            <AboutSection />
            <WhyChooseUs />
            <Instructors />
            <HolisticSection />
            <Testimonials />
            <TASection />
        </div>
    );
};

export default Home;