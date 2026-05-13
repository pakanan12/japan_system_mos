import { Link } from 'react-router-dom';
import { FiMonitor, FiGlobe, FiBell, FiArrowRight, FiStar, FiShield, FiZap, FiUsers } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';
import Magnetic from './Magnetic';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    { 
      id: 1, 
      title: t('itSystem'), 
      desc: t('itSystemDesc'), 
      icon: FiMonitor,
      path: '/it-system',
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
      title: t('newRelease'), 
      desc: t('newsDesc1'), 
      icon: FiBell,
      path: '/new-release',
    },
  ];

  const whyUs = [
    { icon: FiStar, title: t('whyJapaneseStandard'), desc: t('whyJapaneseStandardDesc') },
    { icon: FiShield, title: t('whyBilingual'), desc: t('whyBilingualDesc') },
    { icon: FiZap, title: t('whyFullService'), desc: t('whyFullServiceDesc') },
    { icon: FiUsers, title: t('whyLocalExpert'), desc: t('whyLocalExpertDesc') },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <>
      {/* Premium Services Grid */}
      <section className="py-32 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <span className="text-japan-system-secondary text-sm font-bold uppercase tracking-[0.4em] mb-4 block text-glow">
              {t('solutions')}
            </span>
            <h2 className="text-japan-system-primary mb-6">
              {t('ourService')}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-japan-system-primary to-japan-system-secondary mx-auto rounded-full"></div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.id} variants={itemVariants}>
                  <Link to={service.path} className="block group">
                    <TiltCard className="h-full">
                      <div className="glass-card shine-effect p-10 h-full flex flex-col group-hover:glass-card-hover border-white/40">
                        <div className="w-16 h-16 bg-japan-system-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-japan-system-primary group-hover:scale-110 transition-all duration-500">
                          <Icon className="w-8 h-8 text-japan-system-primary group-hover:text-white transition-colors duration-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-japan-system-primary mb-6 group-hover:text-japan-system-secondary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-500 mb-8 leading-relaxed line-clamp-4">
                          {service.desc}
                        </p>
                        <div className="mt-auto flex items-center text-xs font-bold uppercase tracking-widest text-japan-system-secondary opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-10px] group-hover:translate-x-0">
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

      {/* Why Choose Us & Stats */}
      <section className="py-32 bg-japan-system-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-japan-system-secondary/10 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-japan-system-secondary text-sm font-bold uppercase tracking-[0.4em] mb-4 block">
                {t('whyChooseUs')}
              </span>
              <h2 className="text-white mb-8 leading-tight">
                {t('whyChooseUsDesc')}
              </h2>
              <div className="w-20 h-1.5 bg-japan-system-secondary rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {whyUs.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 transition-colors"
                >
                  <item.icon className="w-8 h-8 text-japan-system-secondary mb-6" />
                  <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Luxury Stats Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-12 md:p-16 border-white/10 bg-white/5 text-white overflow-hidden group"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center relative z-10">
              {[
                { count: '200+', label: t('clients') },
                { count: '9+', label: t('yearsExp') },
                { count: '3', label: t('countries') },
                { count: '1000+', label: t('deployments') },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl md:text-6xl font-bold text-japan-system-secondary mb-3 group-hover:scale-110 transition-transform duration-700">
                    {stat.count}
                  </div>
                  <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-white/50">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Luxury Contact CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-japan-system-primary mb-8 text-gradient">
              {t('readyToGrow')}
            </h2>
            <p className="text-gray-500 text-lg md:text-xl mb-12 leading-relaxed opacity-80">
              {t('contactUs')}
            </p>
            <Magnetic>
              <Link 
                to="/contact" 
                className="luxury-button px-16 py-6 text-lg hover:bg-japan-system-secondary transition-colors duration-500 shadow-2xl"
              >
                {t('contact')}
              </Link>
            </Magnetic>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;


