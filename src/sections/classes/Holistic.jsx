const HolisticSection = () => {
  const features = [
    {
      title: "Expert Guidance",
      description: "Learn from certified instructors with 10+ years of experience. We focus on alignment and breathwork for a safe practice."
    },
    {
      title: "Supportive Community",
      description: "Join a welcoming family where every member supports each other. Our studio is a sanctuary for connection."
    },
    {
      title: "Flexible Schedule",
      description: "With over 20 classes per week ranging from sunrise to evening, we make it easy to prioritize your well-being."
    }
  ];

  return (

    <section className="py-16 bg-[#FCFBFA]">
      <div className="max-w-7xl mx-auto px-6">


        <div className="mb-16">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-[1px] bg-[#C5B1A9]"></div>
            <span className="text-[#C5B1A9] font-bold text-[11px] uppercase tracking-[0.4em]">
              Our Philosophy
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-[#2D2A28] leading-[1.2]">
            More Than <span className="italic text-[#C5B1A9]">Just Yoga</span>
          </h2>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}

              className="py-10 lg:py-6 lg:pl-12 lg:pr-8 border-l border-stone-200 first:pl-0 first:border-l-0 lg:first:border-l-0 relative"
            >

              <div className="absolute top-0 left-[-1px] w-[2px] h-12 bg-[#C5B1A9]"></div>

              <div className="flex flex-col h-full">

                <span className="text-[12px] font-mono text-stone-400 mb-6 block">
                  (0{index + 1})
                </span>

                <h3 className="text-2xl font-serif text-[#2D2A28] mb-4 tracking-tight">
                  {feature.title}
                </h3>

                <p className="text-stone-500 text-[15px] leading-relaxed font-light">
                  {feature.description}
                </p>

                <div className="mt-8">
                  <div className="w-3 h-3 rounded-full border border-[#C5B1A9]/30"></div>
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="mt-10 pt-6 border-t border-stone-100 flex justify-end">
          <p className="max-w-sm text-right text-stone-400 text-xs italic">
            "A holistic approach to wellness that nurtures mind, body, and spirit."
          </p>
        </div>
      </div>
    </section>
  );
};

export default HolisticSection;