import ClassList from '../../sections/classes/ClassList';

const PracticeSection = () => {
    return (
        <section className="py-16 bg-[#E6DDD8] relative">

            <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#6B5E59]/10"></div>

            <div className="container-custom">

                <div className="max-w-3xl mx-auto text-center mb-12">
                    <div className="flex justify-center items-center gap-3 mb-3">
                        <div className="w-6 h-px bg-[#6B5E59]/30"></div>
                        <span className="text-[#6B5E59] font-bold text-[10px] uppercase tracking-[0.3em]">
                            Elevate Your Soul
                        </span>
                        <div className="w-6 h-px bg-[#6B5E59]/30"></div>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-serif text-[#2D2A28] mb-4 italic">
                        Transform Your <span className="font-sans not-italic font-bold block md:inline">Practice</span>
                    </h2>

                    <p className="text-[#6B5E59]/80 text-base max-w-xl mx-auto leading-relaxed font-light">
                        Discover a diverse range of yoga styles tailored to all levels, from calming restorative sessions to dynamic power flows.
                    </p>
                </div>


                <div className="relative">
                    <ClassList />
                </div>


                <div className="text-center mt-12">
                    <a href="/classes" className="inline-block relative group">

                        <div className="absolute -inset-1 bg-[#6B5E59]/20 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-300"></div>

                        <button className="relative px-10 py-3.5 bg-[#6B5E59] text-[#F1E4C3] rounded-full font-bold text-[10px] uppercase tracking-widest transition-all duration-500 hover:bg-[#2D2A28] shadow-lg active:scale-95">
                            Explore All Classes
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PracticeSection;