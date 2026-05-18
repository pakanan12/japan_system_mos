import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

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
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-japan-system-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-japan-system-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20 relative z-10">
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
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-japan-system-primary mb-6 tracking-tight leading-none"
        >
          Corporate <span className="text-gradient">{t('profileLabel')}</span>
        </motion.h1>
        <div className="w-24 h-1.5 bg-japan-system-secondary rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-japan-system-primary mb-8 leading-tight">
              {t('companyIntroTitle') || 'Driving Digital Innovation with Japanese Standards'}
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed font-light mb-10">
              {t('companyIntroDesc')}
            </p>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-white p-12">
              <img 
                src="/company-logo.png" 
                alt="Japan System Logo" 
                className="w-full h-80 object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-32"
        >
          {/* Mission */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-100 rounded-3xl p-10 shadow-sm flex flex-col">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
              <FiTarget className="w-7 h-7 text-japan-system-primary" />
            </div>
            <h3 className="text-2xl font-bold text-japan-system-primary mb-4">
              {t('mission')}
            </h3>
            <p className="text-gray-500 leading-relaxed font-light">
              {t('missionDesc')}
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-100 rounded-3xl p-10 shadow-sm flex flex-col">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
              <FiEye className="w-7 h-7 text-japan-system-primary" />
            </div>
            <h3 className="text-2xl font-bold text-japan-system-primary mb-4">
              {t('vision')}
            </h3>
            <p className="text-gray-500 leading-relaxed font-light">
              {t('visionDesc')}
            </p>
          </motion.div>
        </motion.div>

        {/* Company Details Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
            <div className="p-10 bg-japan-system-primary text-white">
              <h3 className="text-2xl font-bold tracking-tight uppercase text-white">{t('companyInfoTitle')}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y divide-gray-100 bg-white">
              {companyInfo.map((info, i) => (
                <div key={i} className="p-8 flex flex-col justify-center hover:bg-gray-50/30 transition-colors">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-japan-system-secondary mb-2 block">
                    {info.label}
                  </span>
                  <p className="text-japan-system-primary text-lg font-semibold leading-normal">
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
          className="p-16 bg-gradient-to-br from-japan-system-primary to-blue-900 text-white text-center rounded-3xl relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-japan-system-secondary/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-japan-system-secondary/20 rounded-full blur-3xl pointer-events-none"></div>

          <h2 className="text-white mb-6 relative z-10 font-extrabold text-3xl md:text-5xl">{t('readyToGrow')}</h2>
          <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light relative z-10">
            {t('contactUs')}
          </p>
          <div className="flex justify-center relative z-10">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-12 py-5 bg-japan-system-secondary text-white font-bold rounded-xl hover:bg-blue-400 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span>{t('contact')}</span>
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Company;
