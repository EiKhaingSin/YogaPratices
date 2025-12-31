import Button from '../../components/ui/Button';
import AboutPhoto from '../../assets/images/about/aboutyoga.jpg';
const AboutSection = () => {
    return (
        <section className="py-16 bg-[#F2ECE9] overflow-hidden">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16 max-w-6xl mx-auto">
                    <div className="lg:w-1/2 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-t-full overflow-hidden shadow-xl border-[12px] border-white/40 lg:mr-12">
                            <img
                                src={AboutPhoto}
                                alt="About Us Inner Peace"
                                className="w-full h-full object-cover grayscale-[5%] hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>
                    <div className="lg:w-full space-y-6 text-left lg:pl-20">
                        <h2 className="text-4xl md:text-5xl lg:text-5xl font-serif italic text-[#2D2A28] leading-tight block w-full">
                            About Our Yoga Journey
                        </h2>
                        <div className="space-y-4 text-[#6B5E59] leading-relaxed text-sm md:text-base font-light">
                            <p className="font-bold text-[#2D2A28] uppercase tracking-widest text-[13px] mb-4">
                                Elevate Your Practice, Enrich Your Soul
                            </p>
                            <div className="max-w-2xl text-justify space-y-4">
                                <p>
                                    Yoga is more than just physical movement; it is a journey of self-discovery and mindfulness.
                                    Through intentional breathwork and balanced asanas, we invite you to find strength in
                                    stillness and flexibility in both body and mind.
                                </p>
                                <p>
                                    Whether you are a beginner or a seasoned practitioner, our sanctuary offers a space to
                                    disconnect from the noise of daily life. Join our community to restore your energy,
                                    align your spirit, and cultivate lasting inner tranquility.
                                </p>
                            </div>
                        </div>
                        <div className="pt-2">
                            <Button variant="brown" className="px-10 py-3 rounded-full text-[10px] font-bold tracking-[0.2em]">
                                JOIN CLASSES
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
export default AboutSection;