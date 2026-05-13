import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiActivity, FiAward, FiGlobe, FiUsers, FiStar, FiMessageSquare, FiLayers, FiMapPin, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import TiltCard from '../components/TiltCard';
import Magnetic from '../components/Magnetic';

const Company = () => {
  const { t } = useTranslation();

  const companyInfo = [
    { label: t('compName'), value: t('companyNameVal') },
    { label: t('representative'), value: t('representativeVal') },
    { label: t('headquarters'), value: t('headquartersVal') },
    { label: t('established'), value: t('establishedVal') },
    { label: t('capital'), value: '2,000,000 THB' },
    { label: t('coreBusiness'), value: t('coreBusinessVal') },
    { label: t('address'), value: t('officeAddress') },
    { label: t('phone'), value: '(02) 664-1674' },
    { label: t('email'), value: 'info@jpsys-th.com' },
  ];

  const timeline = [
    { year: '2015', event: t('timeline1') },
    { year: '2017', event: t('timeline2') },
    { year: '2019', event: t('timeline3') },
    { year: '2021', event: t('timeline4') },
    { year: '2023', event: t('timeline5') }
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
    <div className="relative min-h-screen bg-white overflow-hidden pt-32 pb-32">
      {/* Simple Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-japan-system-secondary text-sm font-bold uppercase tracking-[0.4em] mb-4 block"
        >
          {t('ourIdentity')}
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-japan-system-primary mb-4"
        >
          Corporate <span className="text-japan-system-secondary">{t('profileLabel')}</span>
        </motion.h1>
        <div className="w-20 h-1.5 bg-japan-system-secondary rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32"
        >
          <div>
            <h2 className="text-japan-system-primary mb-8 leading-tight">
              {t('companyIntroTitle') || 'Driving Digital Innovation with Japanese Standards'}
            </h2>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-10 opacity-80">
              {t('companyIntroDesc')}
            </p>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-white">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" 
                alt="Office" 
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Company Details Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 overflow-hidden"
        >
          <div className="glass-card border-white shadow-2xl overflow-hidden">
            <div className="p-10 bg-japan-system-primary text-white">
              <h3 className="text-2xl font-bold tracking-tight uppercase">{t('companyInfoTitle')}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100 bg-white">
              {companyInfo.map((info, i) => (
                <div key={i} className="p-8 flex flex-col justify-center">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-japan-system-secondary mb-3">
                    {info.label}
                  </span>
                  <p className="text-japan-system-primary text-lg font-bold">
                    {info.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-16 bg-japan-system-primary text-white text-center rounded-3xl relative overflow-hidden"
        >
          <h2 className="text-white mb-8 relative z-10">{t('readyToGrow')}</h2>
          <p className="text-white/70 text-xl mb-12 max-w-2xl mx-auto relative z-10">
            {t('contactUs')}
          </p>
          <div className="flex justify-center relative z-10">
            <Magnetic>
              <Link to="/contact" className="luxury-button px-20 text-lg hover:bg-japan-system-secondary transition-colors duration-500">
                <span>{t('contact')}</span>
                <FiArrowRight className="ml-2" />
              </Link>
            </Magnetic>
          </div>
        </motion.div>
      </div>
    </div>

  );
};

export default Company;

