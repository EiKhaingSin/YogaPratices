import FeatureOrb from '../Home/FeatureOrb';
import YogaPoseImg from '../../assets/images/choice/choice2.png';

const WhyChooseUs = () => {
  return (
    <section className="py-12 md:py-16 bg-[#FCFAFA] overflow-hidden">
      <div className="container-custom max-w-7xl mx-auto px-6 text-center">
        <div className="mb-8 md:mb-6 space-y-2">
          <p className="text-[#6B5E59] uppercase tracking-[0.4em] text-[10px] font-bold">Our Specialties</p>
          <h2 className="text-3xl md:text-5xl font-serif text-[#2D2A28] italic leading-tight">Why Choose Us</h2>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0 min-h-auto lg:min-h-[550px]">
    
          <div className="flex flex-col gap-6 w-full lg:w-auto lg:static order-2 lg:order-1">
            <div className="lg:absolute lg:left-[15%] lg:top-[18%] lg:-translate-y-1/2"><FeatureOrb title="Vinyasa Yoga" desc="Flow with breath." align="right" /></div>
            <div className="lg:absolute lg:left-[8%] lg:top-[40%] lg:-translate-y-1/2"><FeatureOrb title="Slow Yoga" desc="Mindful relaxation." align="right" /></div>
            <div className="lg:absolute lg:left-[8%] lg:bottom-[40%] lg:translate-y-1/2"><FeatureOrb title="Intuitive Yoga" desc="Natural movements." align="right" /></div>
            <div className="lg:absolute lg:left-[15%] lg:bottom-[18%] lg:translate-y-1/2"><FeatureOrb title="Aroma Yoga" desc="Essential oils." align="right" /></div>
          </div>

         
          <div className="relative z-10 order-1 lg:order-2">
            <div className="w-[180px] sm:w-[280px] md:w-[380px] aspect-square rounded-full overflow-hidden border-[4px] md:border-[7px] border-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <img src={YogaPoseImg} alt="Yoga Practice" className="w-full h-full object-cover" />
            </div>
            <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-[#7D5A94]/5 rounded-full -z-10"></div>
          </div>

      
          <div className="flex flex-col gap-6 w-full lg:w-auto lg:static order-3">
            <div className="lg:absolute lg:right-[15%] lg:top-[18%] lg:-translate-y-1/2"><FeatureOrb title="Kundalini Yoga" desc="Awaken energy." align="left" /></div>
            <div className="lg:absolute lg:right-[8%] lg:top-[40%] lg:-translate-y-1/2"><FeatureOrb title="Bikram Yoga" desc="Heated environment." align="left" /></div>
            <div className="lg:absolute lg:right-[8%] lg:bottom-[40%] lg:translate-y-1/2"><FeatureOrb title="Mindfulness" desc="Mental peace." align="left" /></div>
            <div className="lg:absolute lg:right-[15%] lg:bottom-[18%] lg:translate-y-1/2"><FeatureOrb title="Workout" desc="Core strength." align="left" /></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;