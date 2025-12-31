import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import yogaLogo from '../../assets/images/yoga1.png'

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      setIsOpen(false);
    };
  }, []);


  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/classes', label: 'Classes' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 transition-all duration-300">
      <nav
        className={`mx-auto max-w-6xl transition-all duration-500 rounded-2xl border ${isScrolled || isOpen
          ? 'bg-white/90 backdrop-blur-xl border-stone-200 shadow-lg py-2'
          : 'bg-transparent border-transparent py-4'
          }`}
      >
        <div className="px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <img
              src={yogaLogo}
              alt="NirvaYoga Logo"
              className="w-14 h-14 rounded-full object-cover"
            />
            <span className="text-2xl font-light tracking-[0.2em] uppercase text-orange-700 group-hover:text-emerald-700 transition-colors font-serif">
              Nirva <span className="font-bold">Yoga</span>
            </span>

          </Link>



          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm tracking-wide transition-colors duration-300 ${isActive(link.path) ? 'text-emerald-800 font-semibold' : 'text-stone-500 hover:text-stone-900'
                  }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-500 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden md:block px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white bg-stone-900 rounded-full hover:bg-emerald-800 transition-all active:scale-95">
              Book a Mat
            </button>


            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-stone-700 flex flex-col justify-center items-center gap-1.5 w-10 h-10"
            >
              <div className={`w-6 h-0.5 bg-stone-800 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-stone-800 transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-stone-800 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </button>
          </div>
        </div>


        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 py-6 flex flex-col space-y-4 border-t border-stone-100 mt-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-[0.1em] uppercase transition-colors ${isActive(link.path) ? 'text-emerald-800 font-bold' : 'text-stone-500'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <button className="w-full py-3 text-xs font-bold uppercase tracking-widest text-white bg-stone-900 rounded-xl">
              Book a Mat
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;