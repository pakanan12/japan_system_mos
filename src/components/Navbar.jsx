import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

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

  const navLinks = [
    { to: '/new-release', label: t('newRelease') },
    { 
      label: t('solution'), 
      isDropdown: true,
      items: [
        { to: '/it-system', label: t('itSystem') },
        { to: '/marketing', label: t('webMarketing') }
      ]
    },
    { to: '/company', label: t('company') },
    { to: '/contact', label: t('contact') }
  ];

  const textColor = scrolled ? 'text-japan-system-primary' : 'text-white';
  const logoColor = scrolled ? 'text-japan-system-primary' : 'text-white';

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className={`text-2xl font-bold tracking-tight ${logoColor} transition-colors`}>
              MOS <span className={scrolled ? 'text-japan-system-secondary' : 'text-white/80'}>Japan</span>
            </span>
            <span className={`text-[9px] font-bold tracking-[0.2em] uppercase ${scrolled ? 'text-gray-400' : 'text-white/60'} transition-colors mt-0.5`}>
              {t('systemAndSolutions')}
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link, idx) => (
              <div key={idx} className="relative group">
                {link.isDropdown ? (
                  <div className="relative py-2">
                    <button className={`flex items-center space-x-1.5 text-xs font-bold uppercase tracking-widest transition-colors ${textColor} hover:opacity-70`}>
                      <span>{link.label}</span>
                      <FiChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                    </button>
                    <div className="absolute top-full right-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                      <div className="bg-white shadow-2xl border border-gray-100 rounded-lg overflow-hidden py-2">
                        {link.items.map((item, i) => (
                          <Link 
                            key={i} 
                            to={item.to} 
                            className="block px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-japan-system-primary hover:bg-gray-50 hover:text-japan-system-secondary transition-colors"
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
                    className={`text-xs font-bold uppercase tracking-widest transition-colors ${textColor} hover:opacity-70 ${isActive(link.to) ? 'opacity-100' : 'opacity-80'}`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Language Switcher Pill */}
            <div className={`flex items-center rounded-full p-1 border transition-colors ${scrolled ? 'bg-gray-100 border-gray-200' : 'bg-white/10 border-white/20'}`}>
              {['en', 'th', 'ja'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase transition-all ${
                    lang.startsWith(l) 
                      ? (scrolled ? 'bg-white text-japan-system-primary shadow-sm' : 'bg-white text-japan-system-primary')
                      : (scrolled ? 'text-gray-500 hover:text-japan-system-primary' : 'text-white/60 hover:text-white')
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`lg:hidden p-2 ${textColor}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute top-full left-0 w-full shadow-2xl p-8">
          <div className="flex flex-col space-y-8">
            {navLinks.map((link, idx) => (
              <div key={idx}>
                {link.isDropdown ? (
                  <div className="space-y-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">{link.label}</span>
                    <div className="grid grid-cols-1 gap-4 pl-4">
                      {link.items.map((item, i) => (
                        <Link 
                          key={i} 
                          to={item.to} 
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-lg font-bold text-japan-system-primary"
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
                    className="block text-lg font-bold text-japan-system-primary"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="flex items-center space-x-3 pt-8 border-t border-gray-100">
              {['en', 'th', 'ja'].map((l) => (
                <button
                  key={l}
                  onClick={() => { setLang(l); setMobileMenuOpen(false); }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase ${
                    lang.startsWith(l) ? 'bg-japan-system-primary text-white shadow-lg' : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


