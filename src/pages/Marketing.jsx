import { useTranslation } from 'react-i18next';
import { FiMonitor, FiBarChart2, FiSearch, FiMail, FiArrowRight, FiCheck } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaTwitter, FaLine } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TiltCard from '../components/TiltCard';
import Magnetic from '../components/Magnetic';

const Marketing = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: FiMonitor,
      title: t('webDev'),
      desc: t('websiteDesc'),
      tags: ['Corporate', 'E-commerce', 'Portfolio']
    },
    {
      icon: FiBarChart2,
      title: t('digitalStrategy'),
      desc: t('digitalStrategyDesc'),
      tags: ['Analysis', 'Growth', 'Planning']
    },
    {
      icon: FiSearch,
      title: t('seoContent'),
      desc: t('seoContentDesc'),
      tags: ['Keywords', 'Ranking', 'Content']
    },
    {
      icon: FiMail,
      title: t('emailMarketing'),
      desc: t('emailMarketingDesc'),
      tags: ['CRM', 'Automation', 'Direct']
    }
  ];

  const socialLinks = [
    { icon: FaFacebookF, label: 'Facebook', url: 'https://facebook.com', color: '#1877F2' },
    { icon: FaInstagram, label: 'Instagram', url: 'https://instagram.com', color: '#E4405F' },
    { icon: FaTwitter, label: 'Twitter / X', url: 'https://twitter.com', color: '#000000' },
    { icon: FaLine, label: 'Line', url: 'https://line.me', color: '#06C755' }
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
    <div className="relative min-h-screen bg-white overflow-hidden pb-32">
      {/* Cinematic Header */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-japan-system-primary">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80')" }}
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
            {t('digitalPresence')}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white mb-8"
          >
            Marketing <span className="text-japan-system-secondary">{t('solutionsSuffix')}</span>
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
            {t('webMarketingDesc')}
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-32"
        >
          {services.map((service, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <TiltCard className="h-full">
                <Link to="/contact" className="block h-full">
                  <div className="glass-card shine-effect p-12 h-full flex flex-col group hover:glass-card-hover border-white/50">
                    <div className="w-16 h-16 bg-japan-system-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-japan-system-primary transition-all duration-500 shadow-sm">
                      <service.icon className="w-8 h-8 text-japan-system-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-3xl font-bold text-japan-system-primary mb-6 group-hover:text-japan-system-secondary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-lg leading-relaxed mb-10 opacity-80">
                      {service.desc}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-3">
                      {service.tags.map((tag, i) => (
                        <span key={i} className="px-4 py-2 bg-gray-50 text-gray-400 text-[10px] font-bold uppercase tracking-widest rounded-xl group-hover:bg-blue-50 group-hover:text-japan-system-secondary transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Media Connect */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <span className="text-japan-system-secondary text-sm font-bold uppercase tracking-[0.4em] mb-4 block">Connect with Us</span>
            <h2 className="text-japan-system-primary">Our <span className="text-gradient">Social Channels</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {socialLinks.map((social, i) => (
              <Magnetic key={i}>
                <a 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="glass-card p-10 flex flex-col items-center justify-center border-white hover:glass-card-hover">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 shadow-sm group-hover:scale-110"
                      style={{ backgroundColor: social.color + '10' }}
                    >
                      <social.icon className="w-6 h-6" style={{ color: social.color }} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-japan-system-primary transition-colors">{social.label}</span>
                  </div>
                </a>
              </Magnetic>
            ))}
          </div>
        </div>

        {/* Marketing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-16 bg-gradient-to-br from-japan-system-primary to-japan-system-primary/90 text-white text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <h2 className="text-white mb-8 relative z-10">{t('readyToGrow')}</h2>
          <p className="text-white/70 text-xl mb-12 max-w-2xl mx-auto relative z-10">
            {t('readyToGrowDesc')}
          </p>
          <div className="flex justify-center relative z-10">
            <Magnetic>
              <Link to="/contact" className="luxury-button px-20 text-lg bg-white text-japan-system-primary hover:bg-japan-system-secondary hover:text-white transition-all duration-500">
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

