import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiFacebook, FiInstagram, FiMail, FiPhone, FiMapPin, FiYoutube, FiGlobe } from 'react-icons/fi';
import { FaLine } from 'react-icons/fa';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const footerLinks = [
    { 
      title: t('company'), 
      links: [
        { label: t('navHome'), to: '/' },
        { label: t('company'), to: '/company' },
        { label: t('newRelease'), to: '/new-release' },
        { label: t('contact'), to: '/contact' }
      ] 
    },
    { 
      title: t('solutions'), 
      links: [
        { label: t('itSystem'), to: '/it-system' },
        { label: t('webMarketing'), to: '/marketing' },
        { label: 'e-Tax Invoice', to: '/new-release' },
        { label: 'MYLOGSTAR', to: '/new-release' }
      ] 
    }
  ];

  const socialLinks = [
    { icon: FiFacebook, url: 'https://www.facebook.com/mosjapan', label: 'Facebook' },
    { icon: FaLine, url: 'https://line.me/ti/p/@mosjapan', label: 'Line' },
    { icon: FiInstagram, url: 'https://www.instagram.com/mosjapan', label: 'Instagram' },
    { icon: FiYoutube, url: 'https://youtube.com/', label: 'YouTube' },
  ];

  const languages = ['en', 'th', 'ja'];

  return (
    <footer className="bg-white border-t border-gray-100 relative z-10 pt-12 md:pt-20 pb-8 md:pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
          
          <div className="lg:col-span-1 text-center sm:text-left">
            <Link to="/" className="inline-block mb-6">
              <span className="text-xl md:text-2xl font-black text-japan-system-primary tracking-tighter">
                MOS <span className="font-light">Japan</span>
              </span>
              <span className="block text-[8px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-japan-system-secondary mt-0.5">
                {t('systemAndSolutions')}
              </span>
            </Link>
            <p className="text-gray-500 text-[12px] md:text-sm leading-relaxed mb-8 max-w-xs mx-auto sm:mx-0 px-4 sm:px-0">
              {t('footerDesc')}
            </p>
            <div className="flex justify-center sm:justify-start space-x-3">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={social.label}
                  className="w-9 h-9 md:w-10 md:h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-japan-system-primary transition-all duration-300 hover:scale-110 hover:shadow-md"
                >
                  <social.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((column, i) => (
            <div key={i} className="text-center sm:text-left">
              <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-japan-system-primary mb-5 md:mb-8">{column.title}</h4>
              <ul className="space-y-3 md:space-y-4">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <Link to={link.to} className="text-gray-500 hover:text-japan-system-secondary text-[12px] md:text-sm transition-colors duration-300 hover:translate-x-1 inline-block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="text-center sm:text-left">
            <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-japan-system-primary mb-5 md:mb-8">{t('contact')}</h4>
            <ul className="space-y-5">
              <li className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-3 text-[12px] md:text-sm text-gray-500 leading-relaxed group">
                <FiMapPin className="text-japan-system-secondary mt-0.5 shrink-0 w-3.5 h-3.5 md:w-4 md:h-4" />
                <a 
                  href="https://maps.google.com/?q=253+Asoke+Building+Sukhumvit+21+Bangkok" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group-hover:text-japan-system-secondary transition-colors leading-relaxed px-4 sm:px-0"
                >
                  28th Fl, 253 Asoke Building,<br />
                  Sukhumvit 21 Rd., Wattana,<br />
                  Bangkok 10110
                </a>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-3 text-[12px] md:text-sm text-gray-500 group">
                <FiPhone className="text-japan-system-secondary shrink-0 w-3.5 h-3.5 md:w-4 md:h-4" />
                <a href="tel:+6626641674" className="group-hover:text-japan-system-secondary transition-colors">(02) 664-1674</a>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-3 text-[12px] md:text-sm text-gray-500 group">
                <FiMail className="text-japan-system-secondary shrink-0 w-3.5 h-3.5 md:w-4 md:h-4" />
                <a href="mailto:info@jpsys-th.com" className="group-hover:text-japan-system-secondary transition-colors">info@jpsys-th.com</a>
              </li>
            </ul>

            <div className="mt-8">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
                <FiGlobe className="text-gray-400 w-3 h-3" />
                <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-gray-400">Language</span>
              </div>
              <div className="flex justify-center sm:justify-start gap-2">
                {languages.map((l) => (
                  <button
                    key={l}
                    onClick={() => i18n.changeLanguage(l)}
                    className={`px-3 py-1.5 rounded-lg text-[8px] md:text-[9px] font-black uppercase tracking-wider transition-all duration-300 ${
                      lang.startsWith(l)
                        ? 'bg-japan-system-primary text-white shadow-sm'
                        : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-50 pt-8 md:pt-10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <div className="text-gray-400 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-center md:text-left leading-relaxed">
            <p>&copy; {new Date().getFullYear()} Japan System Co., Ltd. &amp; Japan System (Thailand) Co., Ltd.</p>
            <p className="mt-1 opacity-60 uppercase">{t('allRightsReserved')}</p>
          </div>
          <div className="flex gap-4 md:gap-8">
            <Link to="/company" className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-japan-system-secondary transition-colors">{t('privacyPolicy')}</Link>
            <Link to="/contact" className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-japan-system-secondary transition-colors">{t('termsOfService')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
