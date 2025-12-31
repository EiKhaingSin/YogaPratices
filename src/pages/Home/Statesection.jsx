const StatsSection = () => {
  const stats = [
    { n: "50k+", l: "Yoga Classes" },
    { n: "250+", l: "Course & Challenges" },
    { n: "500+", l: "In-Depth Articles" }
  ];

  return (
    <section className="bg-[#6B5E59] py-8 border-b border-white/5">
      <div className="container-custom flex flex-col lg:flex-row items-center justify-between gap-5">
        <div className="flex flex-col md:flex-row items-center gap-10 lg:ml-20">
          {stats.map((s, i) => (
            <div key={i} className="flex items-center gap-10">
              <div className="text-center md:text-left">
                <h3 className="text-[#E9C46A] text-4xl font-bold">{s.n}</h3>
                <p className="text-gray-300 text-xs font-medium uppercase">{s.l}</p>
              </div>
              {i !== stats.length - 1 && (
                <div className="hidden md:block h-10 w-px bg-white/20"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="max-w-xs text-center lg:text-right">
          <p className="text-gray-300 text-xs mb-3 opacity-70">
            Explore our collection of articles, guides and tips.
          </p>
          <button className="bg-[#F1F3EE] text-[#2D3E24] px-5 py-1.5 rounded-full text-[11px] font-bold uppercase transition-transform active:scale-95">
            Join The Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;