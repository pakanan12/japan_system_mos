import { useTranslation } from 'react-i18next';
import { FiSettings, FiMonitor, FiHeadphones, FiBox, FiCheckCircle, FiShield, FiZap, FiCpu, FiServer, FiGrid, FiActivity } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TiltCard from '../components/TiltCard';

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

  return (
    <div className="relative min-h-screen bg-japan-system-bg overflow-hidden pt-24 md:pt-32 pb-20 md:pb-32">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-[0.1] md:opacity-[0.15] scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-japan-system-bg/90 via-japan-system-bg/70 to-japan-system-bg/95"></div>
        <div className="absolute inset-0 bg-radial-vignette opacity-50"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.1] md:opacity-[0.2]"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-24"
        >
          <span className="text-japan-system-secondary text-[10px] md:text-sm font-black uppercase tracking-[0.3em] md:tracking-[0.4em] mb-4 block">
            {t('enterpriseSolutions')}
          </span>
          <h1 className="text-2xl md:text-6xl font-black text-japan-system-primary mb-6 tracking-tight px-4 md:px-0 leading-[1.2]">
            IT Systems <span className="text-gradient">{t('servicesSuffix')}</span>
          </h1>
          <div className="w-12 md:w-24 h-1 md:h-1.5 bg-japan-system-secondary mx-auto rounded-full mb-6 md:mb-10"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-sm md:text-xl leading-relaxed px-4 md:px-2">
            {t('itSystemDesc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-32 px-2 md:px-0">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
            >
              <TiltCard tiltMaxAngleX={3} tiltMaxAngleY={3} className="h-full">
                <Link to="/contact" className="block h-full cursor-pointer">
                  <div className="glass-card p-6 md:p-8 h-full flex items-start md:flex-col group hover:border-japan-system-secondary/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-gray-50 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-japan-system-primary transition-all duration-500 shadow-sm shrink-0">
                      <service.icon className="w-4 h-4 md:w-6 md:h-6 text-japan-system-primary group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div className="ml-5 md:ml-0 md:mt-8 flex-grow">
                      <h3 className="text-base md:text-lg font-black text-japan-system-primary mb-2 md:mb-3 group-hover:text-japan-system-secondary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-[11px] md:text-sm leading-relaxed mb-4 line-clamp-3 md:line-clamp-none">
                        {service.desc}
                      </p>
                      <ul className="space-y-1.5 md:space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-[10px] md:text-xs text-gray-500 font-medium group-hover:text-japan-system-primary transition-colors">
                            <FiCheckCircle className="text-japan-system-secondary mr-2 w-3 h-3 md:w-3.5 md:h-3.5 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 glass-card p-8 md:p-12 bg-japan-system-primary text-white flex flex-col justify-center text-center lg:text-left mx-2 md:mx-0"
          >
            <h2 className="text-xl md:text-3xl font-black mb-5 md:mb-6 tracking-tight uppercase italic px-4 md:px-0">
              {t('ourLabel')} <span className="text-japan-system-secondary">{t('supportLabel')}</span> {t('standardsLabel')}
            </h2>
            <p className="text-white/70 text-[13px] md:text-base mb-8 leading-relaxed px-2 md:px-0">
              {t('supportStandardsDesc')}
            </p>
            <Link to="/contact" className="text-[10px] md:text-sm font-black uppercase tracking-widest text-japan-system-secondary hover:text-white transition-colors flex items-center justify-center lg:justify-start">
              {t('connectExperts')} <FiZap className="ml-2" />
            </Link>
          </motion.div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 px-2 md:px-0">
            <div className="glass-card p-6 md:p-8 hover:shadow-lg transition-all duration-300 flex items-start md:block">
              <FiShield className="w-8 h-8 md:w-10 md:h-10 text-japan-system-secondary mb-0 md:mb-6 shrink-0" />
              <div className="ml-5 md:ml-0">
                <h4 className="text-base md:text-xl font-black text-japan-system-primary mb-2 md:mb-4 uppercase">{t('securityFirst')}</h4>
                <p className="text-gray-600 text-[12px] md:text-sm leading-relaxed">{t('securityFirstDesc')}</p>
              </div>
            </div>
            <div className="glass-card p-6 md:p-8 hover:shadow-lg transition-all duration-300 flex items-start md:block">
              <FiZap className="w-8 h-8 md:w-10 md:h-10 text-japan-system-secondary mb-0 md:mb-6 shrink-0" />
              <div className="ml-5 md:ml-0">
                <h4 className="text-base md:text-xl font-black text-japan-system-primary mb-2 md:mb-4 uppercase">{t('rapidResponse')}</h4>
                <p className="text-gray-600 text-[12px] md:text-sm leading-relaxed">{t('rapidResponseDesc')}</p>
              </div>
            </div>
            <div className="glass-card p-6 md:p-8 hover:shadow-lg transition-all duration-300 sm:col-span-2 flex items-start md:block">
              <FiSettings className="w-8 h-8 md:w-10 md:h-10 text-japan-system-secondary mb-0 md:mb-6 shrink-0" />
              <div className="ml-5 md:ml-0">
                <h4 className="text-base md:text-xl font-black text-japan-system-primary mb-2 md:mb-4 uppercase">{t('itPlanning')}</h4>
                <p className="text-gray-600 text-[12px] md:text-sm leading-relaxed">{t('itPlanningDesc')}</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 border-white bg-white/50 backdrop-blur shadow-xl text-center mx-2 md:mx-0"
        >
          <h3 className="text-lg md:text-2xl font-black text-japan-system-primary mb-3 md:mb-4 tracking-tight uppercase px-4 md:px-0">{t('maintenancePackage')}</h3>
          <p className="text-gray-500 text-[12px] md:text-base mb-8 md:mb-10 max-w-2xl mx-auto px-4 md:px-0">{t('maintenancePackageDesc')}</p>
          <Link to="/contact" className="luxury-button w-full sm:w-auto sm:min-w-[220px] text-xs py-4 flex md:inline-flex justify-center items-center">
            {t('viewPricing')}
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ITSystem;
