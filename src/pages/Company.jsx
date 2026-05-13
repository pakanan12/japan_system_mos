import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiActivity, FiAward, FiGlobe, FiUsers, FiStar, FiMessageSquare, FiLayers, FiMapPin, FiArrowRight } from 'react-icons/fi';
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
    <div className="relative min-h-screen bg-white overflow-hidden pb-32">
      {/* Cinematic Header */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-japan-system-primary">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 scale-110"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80')" }}
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
            {t('ourIdentity')}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white mb-8"
          >
            Corporate <span className="text-japan-system-secondary">{t('profileLabel')}</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="w-24 h-1.5 bg-japan-system-secondary mx-auto rounded-full"
          ></motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 -mt-24">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-12 md:p-20 border-white/50 bg-white/80 backdrop-blur-2xl mb-32 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-japan-system-primary mb-8 leading-tight">
                {t('companyIntroTitle') || 'Driving Digital Innovation with Japanese Standards'}
              </h2>
              <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-10 opacity-80">
                {t('companyIntroDesc')}
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-4xl font-bold text-japan-system-primary">9+</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-japan-system-secondary mt-1">{t('yearsExp')}</div>
                </div>
                <div className="w-[1px] h-12 bg-gray-100"></div>
                <div>
                  <div className="text-4xl font-bold text-japan-system-primary">200+</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-japan-system-secondary mt-1">{t('clients')}</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-1000 border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" 
                  alt="Office" 
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-japan-system-secondary/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-32">
          {[
            { icon: FiTarget, title: t('mission'), desc: t('missionDesc'), color: 'secondary' },
            { icon: FiEye, title: t('vision'), desc: t('visionDesc'), color: 'primary' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-12 hover:glass-card-hover border-white group"
            >
              <div className="w-16 h-16 bg-japan-system-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-japan-system-primary transition-all duration-500">
                <item.icon className="w-8 h-8 text-japan-system-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-3xl font-bold text-japan-system-primary mb-6 group-hover:text-japan-system-secondary transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed opacity-80">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Company Details Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 overflow-hidden"
        >
          <div className="glass-card border-white shadow-2xl">
            <div className="p-10 bg-japan-system-primary text-white">
              <h3 className="text-2xl font-bold tracking-tight uppercase">{t('companyInfoTitle')}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100 bg-white/50 backdrop-blur">
              {companyInfo.map((info, i) => (
                <div key={i} className="p-8 hover:bg-gray-50/50 transition-colors flex flex-col justify-center">
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

        {/* Timeline Section */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <span className="text-japan-system-secondary text-sm font-bold uppercase tracking-[0.4em] mb-4 block">
              {t('ourJourney')}
            </span>
            <h2 className="text-japan-system-primary">{t('evolution')}</h2>
          </div>

          <div className="relative max-w-4xl mx-auto px-4">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-[1px] bg-gray-100 hidden md:block"></div>
            <div className="space-y-16">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-12 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 text-center md:text-right">
                    {idx % 2 === 0 ? (
                      <div>
                        <span className="text-3xl font-bold text-japan-system-secondary">{item.year}</span>
                        <p className="text-gray-600 mt-4 text-lg font-medium">{item.event}</p>
                      </div>
                    ) : null}
                  </div>
                  <div className="w-12 h-12 bg-white border-2 border-japan-system-secondary rounded-full flex items-center justify-center z-10 shadow-xl shrink-0">
                    <div className="w-4 h-4 bg-japan-system-primary rounded-full"></div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    {idx % 2 !== 0 ? (
                      <div>
                        <span className="text-3xl font-bold text-japan-system-secondary">{item.year}</span>
                        <p className="text-gray-600 mt-4 text-lg font-medium">{item.event}</p>
                      </div>
                    ) : (
                      <div className="md:hidden">
                        <span className="text-2xl font-bold text-japan-system-secondary">{item.year}</span>
                        <p className="text-gray-600 mt-2 font-medium">{item.event}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-16 bg-gradient-to-br from-japan-system-primary to-japan-system-primary/90 text-white text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
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

