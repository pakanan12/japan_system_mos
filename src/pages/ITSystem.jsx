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
    <div className="relative min-h-screen bg-white overflow-hidden pb-32">
      {/* Cinematic Header */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-japan-system-primary">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-japan-system-primary/50"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-japan-system-secondary text-sm font-bold uppercase tracking-[0.4em] mb-6 block"
          >
            {t('enterpriseSolutions')}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white mb-8"
          >
            IT Systems <span className="text-japan-system-secondary">{t('servicesSuffix')}</span>
          </motion.h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 -mt-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
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
              <TiltCard className="h-full">
                <Link to="/contact" className="block h-full">
                  <div className="glass-card shine-effect p-8 h-full flex flex-col group hover:glass-card-hover border-white/50">
                    <div className="w-14 h-14 bg-japan-system-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-japan-system-primary transition-all duration-500 shadow-sm">
                      <service.icon className="w-6 h-6 text-japan-system-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-japan-system-primary mb-4 group-hover:text-japan-system-secondary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 opacity-80">
                      {service.desc}
                    </p>
                    <ul className="mt-auto space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-[10px] text-gray-400 font-bold uppercase tracking-wider group-hover:text-japan-system-primary transition-colors">
                          <FiCheckCircle className="text-japan-system-secondary mr-2 w-3.5 h-3.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 glass-card p-12 bg-japan-system-primary text-white flex flex-col justify-center border-white/10"
          >
            <h2 className="text-white mb-8 leading-tight">
              {t('ourLabel')} <span className="text-japan-system-secondary">{t('supportLabel')}</span> {t('standardsLabel')}
            </h2>
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              {t('supportStandardsDesc')}
            </p>
            <Magnetic>
              <Link to="/contact" className="text-sm font-bold uppercase tracking-widest text-japan-system-secondary hover:text-white transition-colors flex items-center">
                {t('connectExperts')} <FiZap className="ml-2" />
              </Link>
            </Magnetic>
          </motion.div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { icon: FiShield, title: t('securityFirst'), desc: t('securityFirstDesc') },
              { icon: FiZap, title: t('rapidResponse'), desc: t('rapidResponseDesc') },
              { icon: FiSettings, title: t('itPlanning'), desc: t('itPlanningDesc'), full: true },
            ].map((feature, i) => (
              <div key={i} className={`glass-card p-10 hover:glass-card-hover border-white ${feature.full ? 'sm:col-span-2' : ''}`}>
                <feature.icon className="w-12 h-12 text-japan-system-secondary mb-8" />
                <h4 className="text-2xl font-bold text-japan-system-primary mb-4 uppercase">{feature.title}</h4>
                <p className="text-gray-500 text-lg leading-relaxed opacity-80">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final IT CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-16 bg-white/50 backdrop-blur-2xl border-white shadow-2xl text-center"
        >
          <h3 className="text-3xl font-bold text-japan-system-primary mb-6 tracking-tight uppercase">{t('maintenancePackage')}</h3>
          <p className="text-gray-500 text-xl mb-12 max-w-2xl mx-auto opacity-80">{t('maintenancePackageDesc')}</p>
          <Magnetic>
            <Link to="/contact" className="luxury-button px-20 text-lg">
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

