import { Link } from 'react-router-dom';
import { Facebook, Instagram, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Studio': [
      { path: '/about', label: 'Our Story' },
      { path: '/classes', label: 'Class Types' },
      { path: '/pricing', label: 'Memberships' },
      { path: '/contact', label: 'Locations' },
    ],
    'Community': [
      { path: '/events', label: 'Workshops' },
      { path: '/blog', label: 'Journal' },
      { path: '/careers', label: 'Teacher Training' },
      { path: '/faq', label: 'FAQs' },
    ],
  };

  return (
    <footer className="bg-[#F9F8F6] text-stone-600 border-t border-stone-200">

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">


          <div className="lg:col-span-5">
            <Link to="/" className="inline-block mb-3">
              <span className="text-xl font-light tracking-[0.2em] uppercase text-stone-800">
                Nirva <span className="font-bold text-[#C5B1A9]">Studio</span>
              </span>
            </Link>
            <p className="text-stone-500 max-w-sm mb-5 text-[13px] leading-relaxed font-light italic">
              Join our community in the pursuit of mindful movement.
            </p>

            <div className="max-w-sm">
              <label className="text-[9px] uppercase tracking-[0.2em] font-bold text-stone-400 mb-2 block">
                Newsletter
              </label>
              <form className="relative flex items-center" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-white border border-stone-200 rounded-full py-2.5 pl-5 pr-24 text-[13px] focus:border-[#C5B1A9] outline-none transition-all placeholder:text-stone-300 shadow-sm"
                />
                <button
                  type="submit"
                  className="absolute right-1 px-4 py-1.5 bg-stone-900 text-white text-[9px] font-bold uppercase tracking-widest rounded-full hover:bg-[#C5B1A9] transition-all"
                >
                  Join
                </button>
              </form>
            </div>
          </div>


          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-stone-900 font-bold text-[10px] uppercase tracking-[0.2em] mb-3">
                  {title}
                </h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.path}
                        className="text-[13px] text-stone-500 hover:text-[#C5B1A9] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>


          <div className="lg:col-span-3">
            <h3 className="text-stone-900 font-bold text-[10px] uppercase tracking-[0.2em] mb-3">
              Connect
            </h3>
            <div className="flex space-x-3 mb-4">
              <SocialBtn icon={<Facebook size={16} />} />
              <SocialBtn icon={<Instagram size={16} />} />
              <SocialBtn icon={<Globe size={16} />} />
            </div>
            <p className="text-[13px] text-stone-500 font-light tracking-wide leading-tight">
              hello@pranastudio.com <br />
              +1 (555) 000-YOGA
            </p>
          </div>
        </div>


        <div className="mt-10 pt-4 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 text-[9px] uppercase tracking-[0.2em] text-stone-400">
          <p>&copy; {currentYear} Nirva Yoga Collective</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-stone-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-stone-600 transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};


const SocialBtn = ({ icon }) => (
  <a href="#" className="p-2 bg-white border border-stone-200 rounded-full text-stone-600 hover:text-[#C5B1A9] hover:border-[#C5B1A9] transition-all shadow-sm">
    {icon}
  </a>
);

export default Footer;