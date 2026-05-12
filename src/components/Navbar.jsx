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
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;
  const isServicesActive = ['/it-system', '/marketing'].includes(location.pathname);

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
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex flex-col group">
            <span className="text-xl md:text-2xl font-black tracking-tight text-japan-system-primary leading-none">
              MOS <span className="font-light">Japan</span>
            </span>
            <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-japan-system-secondary mt-1">
              {t('systemAndSolutions')}
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link, idx) => (
              <div key={idx} className="relative group">
                {link.isDropdown ? (
                  <div className="relative py-2">
                    <button className={`flex items-center space-x-1.5 text-xs font-bold uppercase tracking-widest transition-colors ${isServicesActive ? 'text-japan-system-secondary' : 'text-japan-system-text hover:text-japan-system-secondary'}`}>
                      <span>{link.label}</span>
                      <FiChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
                    </button>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="bg-white rounded-xl shadow-xl p-2 border border-gray-100">
                        {link.items.map((item, i) => (
                          <Link 
                            key={i} 
                            to={item.to} 
                            className={`flex items-center px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-widest transition-all hover:bg-gray-50 hover:text-japan-system-secondary ${isActive(item.to) ? 'bg-gray-50 text-japan-system-secondary' : 'text-japan-system-text'}`}
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
                    className={`text-xs font-bold uppercase tracking-widest transition-colors ${isActive(link.to) ? 'text-japan-system-secondary' : 'text-japan-system-text hover:text-japan-system-secondary'}`}
                  >
                    {link.label}
                    <span className={`block h-0.5 bg-japan-system-secondary transition-all duration-300 ${isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'} mt-1`}></span>
                  </Link>
                )}
              </div>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              {['en', 'th', 'ja'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1.5 rounded-md text-[10px] font-bold uppercase transition-all ${
                    lang.startsWith(l) 
                      ? 'bg-white text-japan-system-primary shadow-sm' 
                      : 'text-gray-500 hover:text-japan-system-primary'
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
            {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
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
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link, idx) => (
                <div key={idx}>
                  {link.isDropdown ? (
                    <div className="space-y-4">
                      <span className="text-xs font-black uppercase tracking-widest text-gray-400 block mb-2">{link.label}</span>
                      {link.items.map((item, i) => (
                        <Link 
                          key={i} 
                          to={item.to} 
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block text-lg font-bold ${isActive(item.to) ? 'text-japan-system-secondary' : 'text-japan-system-primary'}`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link 
                      to={link.to} 
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block text-lg font-bold ${isActive(link.to) ? 'text-japan-system-secondary' : 'text-japan-system-primary'}`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-6 border-t border-gray-100 flex items-center space-x-4">
                {['en', 'th', 'ja'].map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setMobileMenuOpen(false); }}
                    className={`px-4 py-2 rounded-xl text-[11px] font-black uppercase transition-all ${
                      lang.startsWith(l) 
                        ? 'bg-japan-system-primary text-white shadow-lg' 
                        : 'bg-gray-100 text-gray-400'
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
