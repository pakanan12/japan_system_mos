import { useTranslation } from 'react-i18next';
import { FiMonitor, FiArrowRight, FiCheck, FiCompass, FiSearch, FiLayers, FiMessageSquare } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaTwitter, FaLine } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Marketing = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: FiMonitor,
      title: t('webDev'),
      desc: t('webDevDesc'),
      bullets: ['Custom UI/UX Design', 'Responsive Development', 'SEO Optimization']
    },
    {
      icon: FiCompass,
      title: t('digitalStrategy'),
      desc: t('digitalStrategyDesc'),
      bullets: ['Data-Driven Planning', 'Market Analysis', 'Campaign Management']
    },
    {
      icon: FiSearch,
      title: t('seoContent'),
      desc: t('seoContentDesc'),
      bullets: ['Keyword Strategy', 'Technical SEO', 'Quality Content Creation']
    },
    {
      icon: FiLayers,
      title: t('emailMarketing'),
      desc: t('emailMarketingDesc'),
      bullets: ['Automated Campaigns', 'Customer Retention', 'Personalized Content']
    }
  ];

  const socialMedia = [
    { name: 'Facebook', icon: FaFacebookF, color: '#1877F2', desc: t('facebookDesc') },
    { name: 'Instagram', icon: FaInstagram, color: '#E4405F', desc: t('instagramDesc') },
    { name: 'LINE Official', icon: FaLine, color: '#06C755', desc: t('lineDesc') },
    { name: 'Twitter / X', icon: FaTwitter, color: '#1DA1F2', desc: t('twitterDesc') }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <div className="relative min-h-screen bg-japan-system-bg overflow-hidden pt-36 pb-32">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-japan-system-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-japan-system-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-24 relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-japan-system-secondary text-sm font-bold uppercase tracking-[0.4em] mb-4 block"
        >
          {t('digitalPresence')}
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-japan-system-primary mb-6 tracking-tight leading-none"
        >
          Your Partner for <br/><span className="text-gradient">Website & Online Marketing</span>
        </motion.h1>
        <div className="w-24 h-1.5 bg-japan-system-secondary mx-auto rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Core Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div key={idx} variants={itemVariants} className="group">
                <div className="bg-white border border-gray-100/80 rounded-3xl p-10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-japan-system-secondary transition-all duration-300">
                      <Icon className="w-8 h-8 text-japan-system-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-japan-system-primary">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 mb-8 leading-relaxed font-light flex-grow">
                    {service.desc}
                  </p>
                  <ul className="space-y-3 border-t border-gray-50 pt-6 mt-auto">
                    {service.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600 font-medium">
                        <FiCheck className="text-japan-system-secondary mr-3 w-5 h-5 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Social Media Growth Hub */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white border border-gray-100 rounded-3xl p-10 md:p-16 mb-24 shadow-sm"
        >
          <div className="text-center mb-16">
            <span className="text-japan-system-secondary text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              {t('socialGrowth') || 'Social Media Growth'}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-japan-system-primary tracking-tight">
              {t('followSocial')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {socialMedia.map((social, idx) => {
              const Icon = social.icon;
              return (
                <div key={idx} className="group flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100">
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-all duration-300 shadow-sm"
                    style={{ backgroundColor: `${social.color}15` }}
                  >
                    <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" style={{ color: social.color }} />
                  </div>
                  <h4 className="text-lg font-bold text-japan-system-primary mb-3">
                    {social.name}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">
                    {social.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Marketing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-16 bg-gradient-to-br from-japan-system-primary to-blue-900 text-white text-center rounded-3xl relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-japan-system-secondary/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-japan-system-secondary/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <h2 className="text-white mb-6 relative z-10 font-extrabold text-3xl md:text-5xl">{t('readyToGrow')}</h2>
          <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto relative z-10 font-light">
            {t('readyToGrowDesc')}
          </p>
          <div className="flex justify-center relative z-10">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-12 py-5 bg-japan-system-secondary text-white font-bold rounded-xl hover:bg-blue-400 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span>{t('startProject')}</span>
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Marketing;
