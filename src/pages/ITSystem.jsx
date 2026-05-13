import { useTranslation } from 'react-i18next';
import { FiSettings, FiMonitor, FiHeadphones, FiBox, FiCheckCircle, FiShield, FiZap, FiCpu, FiServer, FiGrid, FiActivity, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TiltCard from '../components/TiltCard';
import Magnetic from '../components/Magnetic';

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
          {t('enterpriseSolutions')}
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-japan-system-primary mb-4"
        >
          IT Systems <span className="text-japan-system-secondary">{t('servicesSuffix')}</span>
        </motion.h1>
        <div className="w-20 h-1.5 bg-japan-system-secondary rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="max-w-3xl mx-auto text-gray-500 text-xl md:text-2xl leading-relaxed font-medium">
            {t('itSystemDesc')}
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-32"
        >
          {services.map((service, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Link to="/contact" className="block h-full">
                <div className="glass-card p-8 h-full flex flex-col group border-white">
                  <div className="w-14 h-14 bg-japan-system-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-japan-system-primary transition-all duration-500 shadow-sm">
                    <service.icon className="w-6 h-6 text-japan-system-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-japan-system-primary mb-4 group-hover:text-japan-system-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 opacity-80">
                    {service.desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Final IT CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-16 bg-japan-system-primary text-white text-center rounded-3xl relative overflow-hidden"
        >
          <h3 className="text-3xl font-bold text-white mb-6 tracking-tight uppercase">{t('maintenancePackage')}</h3>
          <p className="text-white/70 text-xl mb-12 max-w-2xl mx-auto opacity-80">{t('maintenancePackageDesc')}</p>
          <Magnetic>
            <Link to="/contact" className="luxury-button px-20 text-lg hover:bg-japan-system-secondary transition-colors duration-500">
              <span>{t('viewPricing')}</span>
              <FiArrowRight className="ml-2" />
            </Link>
          </Magnetic>
        </motion.div>
      </div>
    </div>

  );
};

export default ITSystem;

