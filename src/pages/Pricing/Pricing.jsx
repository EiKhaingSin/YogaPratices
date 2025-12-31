import PricingHero from '../../pages/Pricing/pricinghero';
import FAQItem from '../../pages/Pricing/FAQ';
import FAQSection from '../../pages/Pricing/FAQsection';
import Testimonials from '../../sections/testimonials/Testimonials';

const PricingPage = () => {
    return (
        <div className="min-h-screen">
            <PricingHero />
            <FAQItem />
            <FAQSection />
            <Testimonials />
        </div>
    );
};

export default PricingPage;