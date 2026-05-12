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
    <footer className="bg-white border-t border-gray-100 relative z-10 pt-16 md:pt-24 pb-8 md:pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-20">
          
          <div className="lg:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" className="inline-block mb-8">
              <span className="text-2xl md:text-3xl font-black text-japan-system-primary tracking-tighter">
                MOS <span className="font-light">Japan</span>
              </span>
              <span className="block text-[9px] md:text-[10px] font-black tracking-[0.3em] uppercase text-japan-system-secondary mt-1">
                {t('systemAndSolutions')}
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xs md:max-w-none px-2 md:px-0 opacity-80">
              {t('footerDesc')}
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-japan-system-primary transition-all duration-500 hover:scale-110 hover:shadow-xl border border-gray-100"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            {footerLinks.map((column, i) => (
              <div key={i} className="text-left">
                <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-japan-system-primary mb-6 md:mb-8 border-l-2 border-japan-system-secondary pl-3">
                  {column.title}
                </h4>
                <ul className="space-y-4 md:space-y-5">
                  {column.links.map((link, j) => (
                    <li key={j}>
                      <Link to={link.to} className="text-gray-500 hover:text-japan-system-secondary text-[13px] md:text-sm transition-all duration-300 hover:translate-x-1 inline-block font-medium">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-japan-system-primary mb-6 md:mb-8 border-l-2 border-japan-system-secondary pl-3 self-start ml-[calc(50%-60px)] md:ml-0">
              {t('contact')}
            </h4>
            <ul className="space-y-6 w-full">
              <li className="flex flex-col md:flex-row items-center md:items-start space-y-3 md:space-y-0 md:space-x-4 text-sm text-gray-500 leading-relaxed group">
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-japan-system-secondary transition-colors duration-300">
                  <FiMapPin className="text-japan-system-primary group-hover:text-white w-4 h-4" />
                </div>
                <a 
                  href="https://maps.google.com/?q=253+Asoke+Building+Sukhumvit+21+Bangkok" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-japan-system-secondary transition-colors leading-relaxed px-4 md:px-0 font-medium"
                >
                  28th Fl, 253 Asoke Building,<br />
                  Sukhumvit 21 Rd., Wattana,<br />
                  Bangkok 10110
                </a>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-4 text-sm text-gray-500 group">
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-japan-system-secondary transition-colors duration-300">
                  <FiPhone className="text-japan-system-primary group-hover:text-white w-4 h-4" />
                </div>
                <a href="tel:+6626641674" className="hover:text-japan-system-secondary transition-colors font-medium">(02) 664-1674</a>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-4 text-sm text-gray-500 group">
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-japan-system-secondary transition-colors duration-300">
                  <FiMail className="text-japan-system-primary group-hover:text-white w-4 h-4" />
                </div>
                <a href="mailto:info@jpsys-th.com" className="hover:text-japan-system-secondary transition-colors font-medium">info@jpsys-th.com</a>
              </li>
            </ul>

            <div className="mt-10 w-full flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2 mb-4">
                <FiGlobe className="text-gray-400 w-3.5 h-3.5" />
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Regional Language</span>
              </div>
              <div className="flex gap-2">
                {languages.map((l) => (
                  <button
                    key={l}
                    onClick={() => i18n.changeLanguage(l)}
                    className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all duration-500 ${
                      lang.startsWith(l)
                        ? 'bg-japan-system-primary text-white shadow-lg scale-105'
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

        <div className="border-t border-gray-100 pt-10 md:pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-gray-400 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] text-center md:text-left leading-loose opacity-70">
            <p>&copy; {new Date().getFullYear()} Japan System Co., Ltd. &amp; Japan System (Thailand) Co., Ltd.</p>
            <p className="mt-1 uppercase tracking-[0.3em] text-[9px]">{t('allRightsReserved')}</p>
          </div>
          <div className="flex gap-6 md:gap-10">
            <Link to="/company" className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-gray-400 hover:text-japan-system-secondary transition-all duration-300">{t('privacyPolicy')}</Link>
            <Link to="/contact" className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-gray-400 hover:text-japan-system-secondary transition-all duration-300">{t('termsOfService')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
