import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown, FiGlobe, FiArrowRight } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';

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
  const isSolutionActive = ['/it-system', '/marketing'].includes(location.pathname);

  const isHome = location.pathname === '/';

  return (
    <nav 
      className={`fixed z-[100] transition-all duration-500 ease-out ${
        scrolled || !isHome
          ? 'w-full top-0 py-3 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm' 
          : 'w-full top-0 py-5 md:py-6 bg-transparent'
      } lg:flex items-center`}
    >
      {/* Mobile Floating Bar Layout */}
      <div className={`lg:hidden fixed top-5 left-5 right-5 z-[110] transition-all duration-500 ${scrolled ? 'translate-y-0' : 'translate-y-0'}`}>
        <div className={`flex items-center justify-between px-6 py-3.5 rounded-[20px] border transition-all duration-500 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-2xl border-gray-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.08)]' 
            : 'bg-black/20 backdrop-blur-xl border-white/10 shadow-2xl'
        }`}>
          <Link to="/" className="flex flex-col" onClick={() => setMobileMenuOpen(false)}>
            <span className={`text-xl font-black tracking-tight leading-none transition-colors duration-300 ${scrolled ? 'text-japan-system-primary' : 'text-white'}`}>
              MOS <span className="font-light">Japan</span>
            </span>
            <span className={`text-[9px] font-black tracking-[0.25em] uppercase mt-1 transition-colors duration-300 ${scrolled ? 'text-japan-system-secondary' : 'text-blue-400'}`}>
              {t('systemAndSolutions')}
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            <button 
              className={`p-2.5 rounded-2xl transition-all duration-300 active:scale-90 ${scrolled ? 'bg-japan-system-primary/5 text-japan-system-primary' : 'bg-white/10 text-white'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full hidden lg:block">
        {/* Desktop Navbar content remains unchanged */}
        <div className="flex justify-between items-center">
          <Magnetic strength={0.1}>
            <Link to="/" className="group relative z-10 flex items-center space-x-2">
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col"
              >
                <span className={`text-2xl font-black tracking-tight leading-none transition-colors duration-300 ${(!isHome || scrolled) ? 'text-japan-system-primary' : 'text-white'}`}>
                  MOS <span className="font-light">Japan</span>
                </span>
                <span className={`text-[10px] font-bold tracking-[0.2em] uppercase mt-1 transition-colors duration-300 ${(!isHome || scrolled) ? 'text-japan-system-secondary' : 'text-blue-400'}`}>
                  {t('systemAndSolutions')}
                </span>
              </motion.div>
            </Link>
          </Magnetic>

          <div className="hidden lg:flex items-center space-x-10">
            <div className="flex items-center space-x-8">
              <Magnetic strength={0.2}>
                <Link 
                  to="/new-release" 
                  className={`relative text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:opacity-100 ${(!isHome || scrolled) ? 'text-japan-system-text' : 'text-white/90'} ${isActive('/new-release') ? 'text-japan-system-secondary opacity-100' : 'opacity-70'}`}
                >
                  {t('newRelease')}
                  <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-japan-system-secondary transition-all duration-300 ${isActive('/new-release') ? 'w-full' : 'w-0 hover:w-full'}`}></span>
                </Link>
              </Magnetic>

              <div className="relative group py-2">
                <Magnetic strength={0.2}>
                  <button className={`flex items-center space-x-1.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 group-hover:opacity-100 ${(!isHome || scrolled) ? 'text-japan-system-text' : 'text-white/90'} ${isSolutionActive ? 'text-japan-system-secondary opacity-100' : 'opacity-70'}`}>
                    <span>{t('solution')}</span>
                    <FiChevronDown className={`w-3 h-3 transition-transform duration-300 group-hover:rotate-180`} />
                    <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-japan-system-secondary transition-all duration-300 ${isSolutionActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </button>
                </Magnetic>
                
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white rounded-2xl shadow-2xl p-2 border border-gray-100 overflow-hidden">
                    <Link to="/it-system" className={`flex items-center px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all hover:bg-gray-50 hover:text-japan-system-secondary ${isActive('/it-system') ? 'bg-gray-50 text-japan-system-secondary' : 'text-japan-system-text'}`}>
                      {t('itSystem')}
                    </Link>
                    <Link to="/marketing" className={`flex items-center px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all hover:bg-gray-50 hover:text-japan-system-secondary ${isActive('/marketing') ? 'bg-gray-50 text-japan-system-secondary' : 'text-japan-system-text'}`}>
                      {t('webMarketing')}
                    </Link>
                  </div>
                </div>
              </div>

              <Magnetic strength={0.2}>
                <Link 
                  to="/company" 
                  className={`relative text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:opacity-100 ${(!isHome || scrolled) ? 'text-japan-system-text' : 'text-white/90'} ${isActive('/company') ? 'text-japan-system-secondary opacity-100' : 'opacity-70'}`}
                >
                  {t('company')}
                  <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-japan-system-secondary transition-all duration-300 ${isActive('/company') ? 'w-full' : 'w-0 hover:w-full'}`}></span>
                </Link>
              </Magnetic>

              <Magnetic strength={0.2}>
                <Link 
                  to="/contact" 
                  className={`relative text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:opacity-100 ${(!isHome || scrolled) ? 'text-japan-system-text' : 'text-white/90'} ${isActive('/contact') ? 'text-japan-system-secondary opacity-100' : 'opacity-70'}`}
                >
                  {t('contact')}
                  <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-japan-system-secondary transition-all duration-300 ${isActive('/contact') ? 'w-full' : 'w-0 hover:w-full'}`}></span>
                </Link>
              </Magnetic>
            </div>

            <div className="flex items-center bg-gray-100/50 backdrop-blur rounded-xl p-1 border border-gray-200/50">
              {['en', 'th', 'ja'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-all duration-300 ${
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
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-white z-[105] lg:hidden overflow-hidden flex flex-col"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
              <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] bg-japan-system-primary rounded-full blur-[100px]"></div>
              <div className="absolute bottom-[10%] left-[-10%] w-[250px] h-[250px] bg-japan-system-secondary rounded-full blur-[80px]"></div>
            </div>

            <div className="flex flex-col h-full pt-32 px-10 relative z-10">
              <div className="flex flex-col space-y-7">
                {[
                  { to: '/', label: t('navHome') },
                  { to: '/new-release', label: t('newRelease') },
                  { to: '/it-system', label: t('itSystem') },
                  { to: '/marketing', label: t('webMarketing') },
                  { to: '/company', label: t('company') },
                  { to: '/contact', label: t('contact') }
                ].map((link, idx) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + idx * 0.05 }}
                  >
                    <Link 
                      to={link.to} 
                      onClick={() => setMobileMenuOpen(false)} 
                      className={`text-3xl font-black uppercase tracking-tight flex items-center justify-between group transition-colors duration-300 ${isActive(link.to) ? 'text-japan-system-secondary' : 'text-japan-system-primary'}`}
                    >
                      <span>{link.label}</span>
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: isActive(link.to) ? 40 : 0 }}
                        className="h-1.5 bg-japan-system-secondary rounded-full"
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-auto pb-12"
              >
                <div className="flex flex-col space-y-8">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-4 px-1">Switch Language</span>
                      <div className="flex gap-2">
                        {['en', 'th', 'ja'].map((l) => (
                          <button
                            key={l}
                            onClick={() => setLang(l)}
                            className={`px-4 py-2 rounded-xl text-[11px] font-black uppercase transition-all duration-300 ${
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
                  </div>

                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="w-full luxury-button py-5 flex items-center justify-center space-x-3 shadow-2xl rounded-2xl group">
                    <span className="text-sm uppercase font-black tracking-widest">{t('getInTouch')}</span>
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
