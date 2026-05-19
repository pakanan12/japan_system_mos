import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMonitor, FiArrowRight } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Services = () => {
  const { t } = useTranslation();

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data.data);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <>
      {/* Services Grid */}
      <section className="py-32 relative overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-japan-system-secondary text-sm font-bold uppercase tracking-[0.4em] mb-4 block">
              {t('solutions')}
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-japan-system-primary mb-6 tracking-tight">
              {t('ourService')}
            </h2>

            <div className="w-24 h-1.5 bg-japan-system-secondary mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={itemVariants}>
                <Link to="/" className="block group h-full">

                  <div className="bg-white border border-gray-100 rounded-2xl p-10 h-full flex flex-col hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-japan-system-secondary transition-colors duration-300">
                      <FiMonitor className="w-8 h-8 text-japan-system-primary group-hover:text-white transition-colors duration-300" />
                    </div>

                    <h3 className="text-xl font-bold text-japan-system-primary mb-4 group-hover:text-japan-system-secondary transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-8 leading-relaxed font-light line-clamp-4">
                      {service.description?.[0]?.children?.[0]?.text}
                    </p>

                    <div className="mt-auto flex items-center text-sm font-semibold text-japan-system-secondary group-hover:translate-x-2 transition-transform duration-300">
                      <span>{t('explore')}</span>
                      <FiArrowRight className="ml-2" />
                    </div>

                  </div>

                </Link>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 relative overflow-hidden bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <h2 className="text-3xl md:text-4xl font-bold text-japan-system-primary mb-6 tracking-tight">
              {t('readyToGrow')}
            </h2>

            <p className="text-gray-600 text-lg md:text-xl mb-12 leading-relaxed opacity-80 font-light">
              {t('contactUs')}
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-12 py-5 bg-japan-system-primary text-white text-lg font-bold rounded-xl hover:bg-blue-900 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {t('contact')}
            </Link>

          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Services;