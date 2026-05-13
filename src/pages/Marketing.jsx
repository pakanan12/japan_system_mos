import { useTranslation } from 'react-i18next';
import { FiMonitor, FiArrowRight, FiCheck } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaTwitter, FaLine } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Magnetic from '../components/Magnetic';

const Marketing = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen bg-white overflow-hidden pt-32 pb-32">
      {/* Simple Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-24">
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
          className="text-japan-system-primary mb-6"
        >
          Your Partner for <br/><span className="text-japan-system-secondary">Website & Online Marketing</span>
        </motion.h1>
        <div className="w-20 h-1.5 bg-japan-system-secondary mx-auto rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {/* Website Services Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 flex flex-col items-center text-center group hover:glass-card-hover border-white"
          >
            <h3 className="text-xl font-bold text-japan-system-primary uppercase tracking-widest mb-10">
              {t('webDev')}
            </h3>
            <div className="w-24 h-24 bg-gray-50 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-japan-system-primary transition-all duration-500 shadow-sm">
              <FiMonitor className="w-10 h-10 text-japan-system-primary group-hover:text-white transition-colors" />
            </div>
            <div className="space-y-4">
              <p className="text-gray-500 font-medium">Custom Website Design</p>
              <p className="text-gray-500 font-medium">Responsive Development</p>
            </div>
          </motion.div>

          {/* Online Marketing Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 flex flex-col items-center text-center group hover:glass-card-hover border-white"
          >
            <h3 className="text-xl font-bold text-japan-system-primary uppercase tracking-widest mb-10">
              Online Marketing Solutions
            </h3>
            <div className="flex flex-col gap-6">
              {[
                { icon: FaFacebookF, color: '#1877F2' },
                { icon: FaInstagram, color: '#E4405F' },
                { icon: FaLine, color: '#06C755' },
                { icon: FaTwitter, color: '#000000' }
              ].map((social, i) => (
                <div key={i} className="w-12 h-12 rounded-full bg-japan-system-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <social.icon className="w-5 h-5 text-japan-system-primary" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Marketing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-16 bg-japan-system-primary text-white text-center rounded-3xl relative overflow-hidden"
        >
          <h2 className="text-white mb-8 relative z-10">{t('readyToGrow')}</h2>
          <p className="text-white/70 text-xl mb-12 max-w-2xl mx-auto relative z-10">
            {t('readyToGrowDesc')}
          </p>
          <div className="flex justify-center relative z-10">
            <Magnetic>
              <Link to="/contact" className="luxury-button px-20 text-lg hover:bg-japan-system-secondary transition-colors duration-500">
                <span>{t('startProject')}</span>
                <FiArrowRight className="ml-2" />
              </Link>
            </Magnetic>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Marketing;


