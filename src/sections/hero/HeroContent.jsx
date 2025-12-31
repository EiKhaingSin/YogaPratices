import { Link } from 'react-router-dom';

const HeroContent = () => {
  return (
    <div className="max-w-4xl mt-28">
      <div className="flex items-center gap-4 mb-6">
        <span className="text-yellow-300 font-bold tracking-[0.3em] uppercase text-lg md:text-lg">
          Practice Positive Energy
        </span>
        <div className="w-12 h-[2px] bg-[#e9c46a]"></div>
      </div>
      <h1 className="text-white text-2xl md:text-3xl lg:text-6xl font-bold leading-[1.1] mb-8 tracking-tight">
        Empower Yourself Through <br />
        <span className="text-white/95">Mindful Movement</span>
      </h1>
      <p className="text-gray-200 text-lg md:text-xl max-w-xl mb-12 font-light leading-relaxed opacity-90">
        Experience the perfect harmony of physical strength and mental clarity through our professional yoga sessions.
      </p>
      <div className="flex items-center gap-8">
        <Link to="/classes">
          <button className="bg-red-300 hover:bg-white text-black font-extrabold px-12 py-5 uppercase tracking-widest
           text-[10px] md:text-xs transition-all duration-300 shadow-lg active:scale-95 rounded-xl">
            Get Started
          </button>
        </Link>
      </div>

    </div>
  );
};

export default HeroContent;