const FeatureOrb = ({ title, desc, align }) => {
    const isRight = align === "right";
    return (
        <div className={`flex items-center gap-5 group w-full lg:max-w-[280px] ${isRight ? 'lg:flex-row-reverse lg:text-right' : 'text-left'}`}>
            <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#C5B1A9] shadow-md flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
            </div>
            <div className="flex flex-col">
                <h4 className="text-[#2D2A28] font-serif text-lg md:text-xl font-bold leading-tight">{title}</h4>
                <p className="text-[#6B5E59] text-sm font-light leading-relaxed opacity-80">{desc}</p>
            </div>
        </div>
    );
};

export default FeatureOrb;