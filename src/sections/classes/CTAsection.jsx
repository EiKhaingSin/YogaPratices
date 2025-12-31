const CTASection = () => {
    return (
        <section className="relative py-14 bg-white">
            <div className="max-w-6xl mx-auto px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-24">
                    <div className="text-center md:text-left flex-1">
                        <span className="text-[#C5B1A9] text-[10px] font-bold uppercase tracking-[0.4em] mb-2 block">
                            Join the Collective
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif text-[#2D2A28] leading-tight">
                            Your first class is <span className="italic text-[#C5B1A9]">on us</span>
                        </h2>
                    </div>
                    <div className="flex-shrink-0">
                        <a
                            href="/classes"
                            className="inline-flex items-center justify-center px-10 py-4 bg-[#2D2A28] text-white rounded-full text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#C5B1A9] hover:-translate-y-1 shadow-md active:scale-95"
                        >
                            Book Free Class
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;