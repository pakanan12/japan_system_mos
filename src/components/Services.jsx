import { Link } from 'react-router-dom';
import { FiMonitor, FiGlobe, FiBell, FiInfo, FiMessageCircle, FiArrowRight, FiStar, FiMessageSquare, FiLayers, FiMapPin } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';
import Magnetic from './Magnetic';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    { 
      id: 1, 
      title: t('newRelease'), 
      desc: t('newsDesc1'), 
      icon: FiBell,
      path: '/new-release',
    },
    { 
      id: 2, 
      title: t('webMarketing'), 
      desc: t('webMarketingDesc'), 
      icon: FiGlobe,
      path: '/marketing',
    },
    { 
      id: 3, 
      title: t('itSystem'), 
      desc: t('itSystemDesc'), 
      icon: FiMonitor,
      path: '/it-system',
    },
    { 
      id: 4, 
      title: t('company'), 
      desc: t('companyIntroDesc'), 
      icon: FiInfo,
      path: '/company',
    },
    { 
      id: 5, 
      title: t('contact'), 
      desc: t('contactUs'), 
      icon: FiMessageCircle,
      path: '/contact',
    },
  ];

  const whyUs = [
    { icon: FiStar, title: t('whyJapaneseStandard'), desc: t('whyJapaneseStandardDesc') },
    { icon: FiMessageSquare, title: t('whyBilingual'), desc: t('whyBilingualDesc') },
    { icon: FiLayers, title: t('whyFullService'), desc: t('whyFullServiceDesc') },
    { icon: FiMapPin, title: t('whyLocalExpert'), desc: t('whyLocalExpertDesc') },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <>
      <section className="py-16 md:py-32 bg-japan-system-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-5 lg:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-12 md:mb-24"
          >
            <span className="text-japan-system-secondary text-[10px] md:text-sm font-black uppercase tracking-[0.4em] mb-4 block">
              {t('solutions')}
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-japan-system-primary mb-6 tracking-tight px-4">
              {t('ourService')}
            </h2>
            <div className="w-12 md:w-24 h-1 md:h-1.5 bg-japan-system-secondary mx-auto rounded-full"></div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 items-stretch"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.id} variants={itemVariants} className="h-full">
                  <Link to={service.path} className="block h-full group">
                    <TiltCard tiltMaxAngleX={4} tiltMaxAngleY={4} perspective={1000} className="h-full">
                      <div className="glass-card shine-effect p-6 md:p-8 h-full flex flex-col group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 md:hover:-translate-y-2 hover:border-japan-system-secondary/30 bg-white/90 backdrop-blur-md border border-gray-100">
                        <div className="flex flex-row md:flex-col items-center md:items-start mb-5 md:mb-8">
                          <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-japan-system-primary group-hover:scale-110 transition-all duration-500 shadow-sm group-hover:shadow-blue-200 shrink-0">
                            <Icon className="w-5 h-5 md:w-6 md:h-6 text-japan-system-primary group-hover:text-white transition-colors duration-500" />
                          </div>
                          <h3 className="ml-5 md:ml-0 md:mt-6 text-lg md:text-xl font-black text-japan-system-primary group-hover:text-japan-system-secondary transition-colors duration-300">
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 text-[13px] md:text-sm leading-relaxed mb-6 md:mb-6 flex-grow line-clamp-3 md:line-clamp-none">
                          {service.desc}
                        </p>
                        <div className="flex items-center text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-japan-system-secondary opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-0 md:translate-x-[-10px] md:group-hover:translate-x-0 mt-auto">
                          <span>{t('explore')}</span>
                          <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </TiltCard>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-5 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-24"
          >
            <span className="text-japan-system-secondary text-[10px] md:text-sm font-black uppercase tracking-[0.4em] mb-4 block">
              {t('whyChooseUs')}
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-japan-system-primary mb-6 tracking-tight px-4">
              {t('whyChooseUsDesc')}
            </h2>
            <div className="w-12 md:w-24 h-1 md:h-1.5 bg-japan-system-secondary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-16 md:mb-24">
            {whyUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <TiltCard tiltMaxAngleX={3} tiltMaxAngleY={3} className="h-full">
                  <div className="glass-card p-7 md:p-10 h-full flex flex-col group hover:border-japan-system-secondary/30 hover:shadow-2xl transition-all duration-500 bg-gray-50/30">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center group-hover:bg-japan-system-primary transition-all duration-500 shadow-sm border border-gray-100 shrink-0 mb-6 md:mb-8">
                      <item.icon className="w-5 h-5 md:w-6 md:h-6 text-japan-system-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-black text-japan-system-primary mb-3 md:mb-4 group-hover:text-japan-system-secondary transition-colors leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 text-[13px] md:text-sm leading-relaxed line-clamp-4 md:line-clamp-none">{item.desc}</p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 md:p-12 bg-japan-system-primary text-white shadow-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl transition-all duration-700 group-hover:bg-white/10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-japan-system-secondary/5 rounded-full -ml-32 -mb-32 blur-3xl transition-all duration-700 group-hover:bg-japan-system-secondary/10"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center relative z-10">
              {[
                { count: '200+', label: t('clients') },
                { count: '9+', label: t('yearsExp') },
                { count: '3', label: t('countries') },
                { count: '1000+', label: t('deployments') },
              ].map((stat, i) => (
                <div key={i} className="group/stat">
                  <div className="text-3xl md:text-5xl font-black text-japan-system-secondary mb-2 md:mb-3 group-hover/stat:scale-110 transition-transform duration-500">
                    {stat.count}
                  </div>
                  <div className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] md:tracking-[0.4em] text-white/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
