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
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm py-4' : 'bg-white/80 backdrop-blur-md py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className="text-2xl font-bold tracking-tight text-japan-system-primary">
              MOS <span className="text-japan-system-secondary">Japan</span>
            </span>
            <span className="text-[10px] font-medium tracking-widest uppercase text-gray-500">
              {t('systemAndSolutions')}
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, idx) => (
              <div key={idx} className="relative group">
                {link.isDropdown ? (
                  <div className="relative py-2">
                    <button className="flex items-center space-x-1 text-sm font-bold text-japan-system-primary hover:text-japan-system-secondary transition-colors">
                      <span>{link.label}</span>
                      <FiChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                      <div className="bg-white shadow-xl border border-gray-100 rounded-lg overflow-hidden py-2">
                        {link.items.map((item, i) => (
                          <Link 
                            key={i} 
                            to={item.to} 
                            className="block px-4 py-2 text-sm font-bold text-japan-system-primary hover:bg-gray-50 hover:text-japan-system-secondary transition-colors"
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
                    className={`text-sm font-bold transition-colors ${isActive(link.to) ? 'text-japan-system-secondary' : 'text-japan-system-primary hover:text-japan-system-secondary'}`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center border border-gray-200 rounded-full px-2 py-1">
              {['en', 'th', 'ja'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                    lang.startsWith(l) 
                      ? 'bg-japan-system-primary text-white' 
                      : 'text-gray-400 hover:text-japan-system-primary'
                  }`}
                >
                  {l.toUpperCase()}
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
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute top-full left-0 w-full shadow-xl p-6">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link, idx) => (
              <div key={idx}>
                {link.isDropdown ? (
                  <div className="space-y-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{link.label}</span>
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
            <div className="flex items-center space-x-4 pt-6 border-t border-gray-100">
              {['en', 'th', 'ja'].map((l) => (
                <button
                  key={l}
                  onClick={() => { setLang(l); setMobileMenuOpen(false); }}
                  className={`px-4 py-2 rounded-lg text-xs font-bold ${
                    lang.startsWith(l) ? 'bg-japan-system-primary text-white' : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {l.toUpperCase()}
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

