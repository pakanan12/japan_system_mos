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
      <section className="py-20 md:py-32 bg-japan-system-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-16 md:mb-24"
          >
            <span className="text-japan-system-secondary text-xs md:text-sm font-black uppercase tracking-[0.3em] mb-4 block">
              {t('solutions')}
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-japan-system-primary mb-6 tracking-tight">
              {t('ourService')}
            </h2>
            <div className="w-16 md:w-24 h-1 md:h-1.5 bg-japan-system-secondary mx-auto rounded-full"></div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-6 items-stretch"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.id} variants={itemVariants} className="h-full">
                  <Link to={service.path} className="block h-full group">
                    <TiltCard tiltMaxAngleX={4} tiltMaxAngleY={4} perspective={1000} className="h-full">
                      <div className="glass-card shine-effect p-5 md:p-8 h-full flex flex-col md:flex-col group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 md:hover:-translate-y-2 hover:border-japan-system-secondary/30 bg-white/80 backdrop-blur-sm">
                        <div className="flex items-center md:block mb-4 md:mb-8">
                          <div className="w-10 h-10 md:w-14 md:h-14 bg-gray-50 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-japan-system-primary group-hover:scale-110 transition-all duration-500 shadow-sm group-hover:shadow-blue-200 shrink-0">
                            <Icon className="w-4 h-4 md:w-6 md:h-6 text-japan-system-primary group-hover:text-white transition-colors duration-500" />
                          </div>
                          <h3 className="ml-4 md:ml-0 text-base md:text-xl font-black text-japan-system-primary group-hover:text-japan-system-secondary transition-colors duration-300">
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 text-[12px] md:text-sm leading-relaxed mb-4 md:mb-6 flex-grow line-clamp-3 md:line-clamp-none">
                          {service.desc}
                        </p>
                        <div className="flex items-center text-[8px] md:text-[10px] font-black uppercase tracking-widest text-japan-system-secondary opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-0 md:translate-x-[-10px] md:group-hover:translate-x-0">
                          <span>{t('explore')}</span>
                          <FiArrowRight className="ml-2" />
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

      <section className="py-16 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-24"
          >
            <span className="text-japan-system-secondary text-[10px] md:text-sm font-black uppercase tracking-[0.3em] mb-4 block">
              {t('whyChooseUs')}
            </span>
            <h2 className="text-2xl md:text-5xl font-black text-japan-system-primary mb-6 tracking-tight px-4 md:px-0">
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
                  <div className="glass-card p-6 md:p-10 h-full flex items-start md:flex-col group hover:border-japan-system-secondary/30 hover:shadow-xl transition-all duration-500">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-blue-50 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-japan-system-primary transition-all duration-500 shadow-sm shrink-0">
                      <item.icon className="w-4 h-4 md:w-6 md:h-6 text-japan-system-primary group-hover:text-white transition-colors" />
                    </div>
                    <div className="ml-5 md:ml-0 md:mt-8">
                      <h4 className="text-base md:text-xl font-black text-japan-system-primary mb-2 md:mb-4 group-hover:text-japan-system-secondary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 text-[12px] md:text-sm leading-relaxed line-clamp-3 md:line-clamp-none">{item.desc}</p>
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
            className="glass-card p-8 md:p-10 bg-japan-system-primary text-white shadow-2xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
              {[
                { count: '200+', label: t('clients') },
                { count: '9+', label: t('yearsExp') },
                { count: '3', label: t('countries') },
                { count: '1000+', label: t('deployments') },
              ].map((stat, i) => (
                <div key={i} className="group">
                  <div className="text-2xl md:text-4xl font-black text-japan-system-secondary mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.count}
                  </div>
                  <div className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/60">
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
