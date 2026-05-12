import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaLine, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FiMonitor, FiBarChart2, FiSearch, FiMail, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TiltCard from '../components/TiltCard';

const Marketing = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: FiMonitor,
      title: t('webDev'),
      desc: t('websiteDesc'),
      tags: ['Corporate', 'E-commerce', 'Portfolio']
    },
    {
      icon: FiBarChart2,
      title: t('digitalStrategy'),
      desc: t('digitalStrategyDesc'),
      tags: ['Analysis', 'Growth', 'Planning']
    },
    {
      icon: FiSearch,
      title: t('seoContent'),
      desc: t('seoContentDesc'),
      tags: ['Keywords', 'Ranking', 'Content']
    },
    {
      icon: FiMail,
      title: t('emailMarketing'),
      desc: t('emailMarketingDesc'),
      tags: ['CRM', 'Automation', 'Direct']
    }
  ];

  const socialChannels = [
    { icon: FaFacebookF, label: 'Facebook', url: 'https://www.facebook.com/mosjapan', color: '#1877F2', desc: t('facebookDesc') },
    { icon: FaInstagram, label: 'Instagram', url: 'https://instagram.com', color: '#E4405F', desc: t('instagramDesc') },
    { icon: FaLine, label: 'LINE', url: 'https://line.me', color: '#06C755', desc: t('lineDesc') },
    { icon: FaTwitter, label: 'Twitter / X', url: 'https://twitter.com', color: '#1DA1F2', desc: t('twitterDesc') },
  ];

  const socialLinks = [
    { icon: FaFacebookF, url: 'https://www.facebook.com/mosjapan', color: '#1877F2' },
    { icon: FaLine, url: 'https://line.me', color: '#06C755' },
    { icon: FaTwitter, url: 'https://twitter.com', color: '#1DA1F2' },
    { icon: FaInstagram, url: 'https://instagram.com', color: '#E4405F' },
  ];

  return (
    <div className="relative min-h-screen bg-japan-system-bg overflow-hidden pt-24 md:pt-32 pb-20 md:pb-32">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-[0.08] md:opacity-[0.12] scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-japan-system-bg/90 via-japan-system-bg/70 to-japan-system-bg/95"></div>
        <div className="absolute inset-0 bg-radial-vignette opacity-50"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.1] md:opacity-[0.2]"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-24"
        >
          <span className="text-japan-system-secondary text-[10px] md:text-sm font-black uppercase tracking-[0.3em] md:tracking-[0.4em] mb-4 block">
            {t('digitalPresence')}
          </span>
          <h1 className="text-2xl md:text-6xl font-black text-japan-system-primary mb-6 tracking-tight px-4 md:px-0 leading-[1.2]">
            Marketing <span className="text-gradient">{t('solutionsSuffix')}</span>
          </h1>
          <div className="w-12 md:w-24 h-1 md:h-1.5 bg-japan-system-secondary mx-auto rounded-full mb-6 md:mb-10"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-sm md:text-xl leading-relaxed px-4 md:px-2">
            {t('webMarketingDesc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-16 md:mb-24 px-2 md:px-0">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <TiltCard tiltMaxAngleX={3} tiltMaxAngleY={3} className="h-full">
                <Link to="/contact" className="block h-full cursor-pointer">
                  <div className="glass-card p-6 md:p-10 h-full flex items-start md:flex-col group hover:border-japan-system-secondary/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-gray-50 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-japan-system-primary transition-all duration-500 shadow-sm shrink-0">
                      <service.icon className="w-4 h-4 md:w-7 md:h-7 text-japan-system-primary group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div className="ml-5 md:ml-0 md:mt-8 flex-grow">
                      <h3 className="text-base md:text-2xl font-black text-japan-system-primary mb-2 md:mb-4 group-hover:text-japan-system-secondary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-[12px] md:text-base leading-relaxed mb-4 md:mb-6 line-clamp-3 md:line-clamp-none">
                        {service.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag, i) => (
                          <span key={i} className="px-2.5 py-1 bg-gray-50 text-gray-400 text-[8px] md:text-[10px] font-bold uppercase tracking-widest rounded-lg group-hover:bg-blue-50 group-hover:text-japan-system-secondary transition-colors">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 px-2 md:px-0"
        >
          <div className="text-center mb-10 md:mb-16">
            <span className="text-japan-system-secondary text-[9px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.4em] mb-4 block">{t('followSocial')}</span>
            <h2 className="text-xl md:text-3xl font-black text-japan-system-primary tracking-tight uppercase italic px-4 md:px-0">
              {t('socialGrowth')} <span className="text-japan-system-secondary">{t('socialGrowthSuffix')}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {socialChannels.map((ch, i) => (
              <a key={i} href={ch.url} target="_blank" rel="noopener noreferrer">
                <TiltCard tiltMaxAngleX={4} tiltMaxAngleY={4} className="h-full">
                  <div className="glass-card p-6 md:p-8 h-full flex items-center md:flex-col text-left md:text-center group hover:border-japan-system-secondary/30 transition-all duration-500 cursor-pointer">
                    <div
                      className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-500 shadow-sm shrink-0"
                      style={{ backgroundColor: ch.color + '18' }}
                    >
                      <ch.icon className="w-4 h-4 md:w-7 md:h-7" style={{ color: ch.color }} />
                    </div>
                    <div className="ml-5 md:ml-0 md:mt-6">
                      <h4 className="text-base font-black text-japan-system-primary mb-1 md:mb-3">{ch.label}</h4>
                      <p className="text-gray-500 text-[11px] md:text-sm leading-relaxed line-clamp-2 md:line-clamp-none">{ch.desc}</p>
                    </div>
                  </div>
                </TiltCard>
              </a>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center px-2 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-xl md:text-3xl font-black text-japan-system-primary mb-5 md:mb-6 tracking-tight uppercase italic px-4 md:px-0">
              {t('socialGrowth')} <span className="text-japan-system-secondary">{t('socialGrowthSuffix')}</span>
            </h2>
            <p className="text-gray-600 text-[13px] md:text-lg leading-relaxed mb-8 md:mb-10 px-4 md:px-0">
              {t('socialGrowthDesc')}
            </p>
            <div className="flex gap-3 justify-center lg:justify-start">
              {socialLinks.map((social, i) => (
                <a 
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-14 md:h-14 bg-white border border-gray-100 rounded-xl md:rounded-2xl flex items-center justify-center text-japan-system-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg shrink-0"
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = social.color}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                >
                  <social.icon className="w-4 h-4 md:w-6 md:h-6" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="glass-card p-8 md:p-12 bg-gradient-to-br from-japan-system-primary to-japan-system-primary/90 text-white shadow-2xl relative overflow-hidden text-center lg:text-left">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
              <h3 className="text-lg md:text-2xl font-black mb-4 md:mb-6 tracking-tight uppercase">{t('readyToGrow')}</h3>
              <p className="text-white/70 text-[12px] md:text-base mb-8 md:mb-10 leading-relaxed px-2 md:px-0">
                {t('readyToGrowDesc')}
              </p>
              <Link to="/contact" className="w-full bg-white text-japan-system-primary font-black py-4 md:py-5 rounded-xl md:rounded-2xl hover:bg-japan-system-secondary hover:text-white transition-all duration-300 shadow-xl flex items-center justify-center group text-xs uppercase tracking-widest">
                <span>{t('startProject')}</span>
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
