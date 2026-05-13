import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const setLang = (l) => i18n.changeLanguage(l);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { to: '/', label: t('navHome') },
    { to: '/company', label: t('company') },
    { 
      label: t('solution'), 
      isDropdown: true,
      items: [
        { to: '/it-system', label: t('itSystem') },
        { to: '/marketing', label: t('webMarketing') }
      ]
    },
    { to: '/contact', label: t('contact') }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
        scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-gray-100 py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="group flex flex-col">
            <span className={`text-2xl font-bold tracking-tighter transition-colors duration-500 ${scrolled ? 'text-japan-system-primary' : 'text-japan-system-primary'}`}>
              MOS <span className="text-japan-system-secondary">Japan</span>
            </span>
            <span className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-colors duration-500 ${scrolled ? 'text-gray-400' : 'text-gray-500'}`}>
              {t('systemAndSolutions')}
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link, idx) => (
              <div key={idx} className="relative group">
                {link.isDropdown ? (
                  <div className="relative py-2">
                    <button className="flex items-center space-x-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-japan-system-primary hover:text-japan-system-secondary transition-colors">
                      <span>{link.label}</span>
                      <FiChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                    </button>
                    <div className="absolute top-full right-0 mt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <div className="glass-card p-3 border-gray-100">
                        {link.items.map((item, i) => (
                          <Link 
                            key={i} 
                            to={item.to} 
                            className="flex items-center px-4 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest text-japan-system-primary hover:bg-gray-50 hover:text-japan-system-secondary transition-all"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link 
                    to={link.to} 
                    className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all relative ${isActive(link.to) ? 'text-japan-system-secondary' : 'text-japan-system-primary hover:text-japan-system-secondary'}`}
                  >
                    {link.label}
                    <span className={`absolute -bottom-2 left-0 h-[2px] bg-japan-system-secondary transition-all duration-500 ${isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </Link>
                )}
              </div>
            ))}

            {/* Luxury Language Switcher */}
            <div className="flex items-center bg-gray-50 border border-gray-100 rounded-full p-1.5">
              {['en', 'th', 'ja'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase transition-all ${
                    lang.startsWith(l) 
                      ? 'bg-japan-system-primary text-white shadow-lg' 
                      : 'text-gray-400 hover:text-japan-system-primary'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-japan-system-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX className="w-7 h-7" /> : <FiMenu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-2xl border-t border-gray-100 overflow-hidden"
          >
            <div className="px-8 py-12 flex flex-col space-y-10">
              {navLinks.map((link, idx) => (
                <div key={idx}>
                  {link.isDropdown ? (
                    <div className="space-y-6">
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">{link.label}</span>
                      <div className="flex flex-col space-y-6 pl-4 border-l border-gray-100">
                        {link.items.map((item, i) => (
                          <Link 
                            key={i} 
                            to={item.to} 
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-2xl font-bold text-japan-system-primary"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link 
                      to={link.to} 
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-2xl font-bold text-japan-system-primary"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="flex items-center space-x-3 pt-10 border-t border-gray-100">
                {['en', 'th', 'ja'].map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setMobileMenuOpen(false); }}
                    className={`px-5 py-2.5 rounded-2xl text-[11px] font-bold uppercase tracking-wider ${
                      lang.startsWith(l) ? 'bg-japan-system-primary text-white shadow-xl' : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;



