import { Link } from 'react-router-dom';
import { FiMonitor, FiGlobe, FiBell, FiArrowRight } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

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

  return (
    <>
      {/* Feature Cards Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-japan-system-primary mb-4">
              {t('ourService')}
            </h2>
            <div className="w-20 h-1 bg-japan-system-secondary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Link 
                    to={service.path} 
                    className="block p-8 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
                  >
                    <div className="w-14 h-14 bg-japan-system-bg rounded-lg flex items-center justify-center mb-6 group-hover:bg-japan-system-secondary/10 transition-colors">
                      <Icon className="w-7 h-7 text-japan-system-primary group-hover:text-japan-system-secondary transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-japan-system-primary mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.desc}
                    </p>
                    <div className="flex items-center text-sm font-bold text-japan-system-secondary">
                      <span>{t('explore')}</span>
                      <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-japan-system-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('readyToGrow')}
          </h2>
          <p className="text-white/80 text-lg mb-10 leading-relaxed">
            {t('contactUs')}
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-10 py-4 bg-japan-system-secondary text-white font-bold rounded-lg shadow-xl hover:bg-white hover:text-japan-system-primary transition-all duration-300"
          >
            {t('contact')}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;

