import { useTranslation } from 'react-i18next';
import { FiSettings, FiMonitor, FiHeadphones, FiBox, FiCheckCircle, FiShield, FiZap, FiCpu, FiServer, FiGrid, FiActivity, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ITSystem = () => {
  const { t } = useTranslation();

  const services = [
    { 
      icon: FiSettings, 
      title: t('maintenance'), 
      desc: t('maintenanceDesc'),
      features: ['24/7 Monitoring', 'Security Patches', 'Performance Tuning']
    },
    { 
      icon: FiCpu, 
      title: t('systemSolutions'), 
      desc: t('systemSolutionsDesc'),
      features: ['ERP Planning', 'Custom Software', 'System Integration']
    },
    { 
      icon: FiHeadphones, 
      title: t('itSupport'), 
      desc: t('itSupportDesc'),
      features: ['Remote Support', 'On-site Help', 'User Training']
    },
    { 
      icon: FiBox, 
      title: t('productMgmt'), 
      desc: t('productMgmtDesc'),
      features: ['Inventory Control', 'Order Tracking', 'Supply Chain Sync']
    },
    { 
      icon: FiGrid, 
      title: t('networkDesign'), 
      desc: t('networkDesignDesc'),
      features: ['LAN / WAN Design', 'VPN Setup', 'Firewall Config']
    },
    { 
      icon: FiServer, 
      title: t('hardwareSales'), 
      desc: t('hardwareSalesDesc'),
      features: ['Server Procurement', 'Workstations', 'Network Devices']
    },
    { 
      icon: FiActivity, 
      title: t('erpSolutions'), 
      desc: t('erpSolutionsDesc'),
      features: ['Accounting', 'Logistics', 'HR Systems']
    },
    { 
      icon: FiMonitor, 
      title: t('itPlanning'), 
      desc: t('itPlanningDesc'),
      features: ['DX Roadmap', 'Budget Planning', 'Tech Assessment']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
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
          {t('enterpriseSolutions')}
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-japan-system-primary mb-6 tracking-tight leading-none"
        >
          IT Systems <span className="text-gradient">{t('servicesSuffix')}</span>
        </motion.h1>
        <div className="w-24 h-1.5 bg-japan-system-secondary rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="max-w-3xl mx-auto text-gray-500 text-lg md:text-xl leading-relaxed font-light">
            {t('itSystemDesc')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-32"
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div key={idx} variants={itemVariants}>
                <Link to="/contact" className="block h-full group">
                  <div className="bg-white border border-gray-100 rounded-3xl p-8 h-full flex flex-col hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-japan-system-secondary transition-all duration-300">
                      <Icon className="w-6 h-6 text-japan-system-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-japan-system-primary mb-4 group-hover:text-japan-system-secondary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 font-light flex-grow">
                      {service.desc}
                    </p>
                    
                    {/* Render the features! */}
                    <ul className="space-y-2 border-t border-gray-50 pt-4 mt-auto">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center text-xs text-gray-600 font-medium">
                          <FiCheckCircle className="text-japan-system-secondary mr-2 w-4 h-4 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Final IT CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-16 bg-gradient-to-br from-japan-system-primary to-blue-900 text-white text-center rounded-3xl relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-japan-system-secondary/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-japan-system-secondary/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <h3 className="text-3xl font-bold text-white mb-6 tracking-tight uppercase relative z-10">{t('maintenancePackage')}</h3>
          <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light relative z-10">{t('maintenancePackageDesc')}</p>
          <div className="flex justify-center relative z-10">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-12 py-5 bg-japan-system-secondary text-white font-bold rounded-xl hover:bg-blue-400 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span>{t('viewPricing')}</span>
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ITSystem;
