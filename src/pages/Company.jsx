import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiActivity, FiAward, FiGlobe, FiUsers, FiStar, FiMessageSquare, FiLayers, FiMapPin } from 'react-icons/fi';
import TiltCard from '../components/TiltCard';

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

  return (
    <div className="relative min-h-screen bg-japan-system-bg overflow-hidden pt-24 md:pt-32 pb-20 md:pb-32">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-[0.08] md:opacity-[0.12] scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-japan-system-bg/95 via-japan-system-bg/60 to-japan-system-bg/95"></div>
        <div className="absolute inset-0 bg-radial-vignette opacity-50"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.1] md:opacity-[0.2]"></div>
        
        <div className="absolute top-[10%] right-[10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-100/20 rounded-full blur-[80px] md:blur-[120px]"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-indigo-50/30 rounded-full blur-[60px] md:blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-24"
        >
          <span className="text-japan-system-secondary text-[10px] md:text-sm font-black uppercase tracking-[0.3em] md:tracking-[0.4em] mb-4 block">
            {t('ourIdentity')}
          </span>
          <h1 className="text-2xl md:text-6xl font-black text-japan-system-primary mb-6 tracking-tight px-4 md:px-0 leading-[1.2]">
            Corporate <span className="text-gradient">{t('profileLabel')}</span>
          </h1>
          <div className="w-12 md:w-24 h-1 md:h-1.5 bg-japan-system-secondary mx-auto rounded-full mb-6 md:mb-10"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-sm md:text-xl leading-relaxed px-4 md:px-2">
            {t('companyIntroDesc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-16 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-6 md:p-12 h-full bg-white group hover:border-japan-system-secondary/30 transition-all duration-500">
              <div className="flex items-center md:block mb-4 md:mb-8">
                <div className="w-10 h-10 md:w-16 md:h-16 bg-blue-50 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-japan-system-primary transition-all duration-500 shadow-sm shrink-0">
                  <FiTarget className="w-4 h-4 md:w-7 md:h-7 text-japan-system-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="ml-4 md:ml-0 text-lg md:text-3xl font-black text-japan-system-primary tracking-tight uppercase">{t('mission')}</h3>
              </div>
              <p className="text-gray-600 text-[12px] md:text-lg leading-relaxed px-2 md:px-0">
                {t('missionDesc')}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="glass-card p-6 md:p-12 h-full bg-white group hover:border-japan-system-secondary/30 transition-all duration-500">
              <div className="flex items-center md:block mb-4 md:mb-8">
                <div className="w-10 h-10 md:w-16 md:h-16 bg-blue-50 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-japan-system-primary transition-all duration-500 shadow-sm shrink-0">
                  <FiEye className="w-4 h-4 md:w-7 md:h-7 text-japan-system-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="ml-4 md:ml-0 text-lg md:text-3xl font-black text-japan-system-primary tracking-tight uppercase">{t('vision')}</h3>
              </div>
              <p className="text-gray-600 text-[12px] md:text-lg leading-relaxed px-2 md:px-0">
                {t('visionDesc')}
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-32"
        >
          <div className="text-center mb-10 md:mb-16 px-4">
            <span className="text-japan-system-secondary text-[9px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.4em] mb-4 block">{t('whyChooseUs')}</span>
            <h2 className="text-xl md:text-3xl font-black text-japan-system-primary tracking-tight uppercase">{t('whyChooseUsDesc')}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-2 md:px-0">
            {whyUs.map((item, i) => (
              <TiltCard key={i} tiltMaxAngleX={3} tiltMaxAngleY={3} className="h-full">
                <div className="glass-card p-6 md:p-8 h-full flex items-start md:flex-col group hover:border-japan-system-secondary/30 transition-all duration-500">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-japan-system-primary transition-all duration-500 shrink-0">
                    <item.icon className="w-4 h-4 md:w-6 md:h-6 text-japan-system-primary group-hover:text-white transition-colors" />
                  </div>
                  <div className="ml-4 md:ml-0 md:mt-6">
                    <h4 className="text-base font-black text-japan-system-primary mb-2 group-hover:text-japan-system-secondary transition-colors">{item.title}</h4>
                    <p className="text-gray-500 text-[11px] md:text-sm leading-relaxed line-clamp-3 md:line-clamp-none">{item.desc}</p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-32 overflow-hidden mx-2 md:mx-0"
        >
          <div className="glass-card overflow-hidden border-white shadow-2xl">
            <div className="p-6 md:p-10 bg-japan-system-primary text-white text-center md:text-left">
              <h3 className="text-lg md:text-2xl font-black uppercase tracking-widest">{t('companyInfoTitle')}</h3>
            </div>
            <div className="divide-y divide-gray-50 bg-white">
              {companyInfo.map((info, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-3 p-5 md:p-8 hover:bg-gray-50 transition-colors">
                  <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-japan-system-secondary mb-1 md:mb-0 md:col-span-1 flex items-center">
                    {info.label}
                  </span>
                  <p className="text-japan-system-primary text-[13px] md:text-base font-bold md:col-span-2 leading-tight">
                    {info.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mb-16 md:mb-32 px-4 md:px-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-20"
          >
            <h2 className="text-xl md:text-3xl font-black text-japan-system-primary uppercase tracking-tight">{t('ourJourney')}</h2>
            <div className="w-12 h-1 bg-japan-system-secondary mx-auto mt-3 md:mt-4 rounded-full"></div>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-200 hidden md:block"></div>
            <div className="space-y-8 md:space-y-12">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 text-center md:text-right w-full">
                    {idx % 2 === 0 && (
                      <div className="md:pr-4">
                        <span className="text-lg md:text-2xl font-black text-japan-system-secondary">{item.year}</span>
                        <p className="text-gray-600 mt-0.5 md:mt-2 font-medium text-[13px] md:text-base">{item.event}</p>
                      </div>
                    )}
                  </div>
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-white border-[3px] md:border-4 border-japan-system-secondary rounded-full flex items-center justify-center z-10 shadow-lg shrink-0">
                    <FiActivity className="text-japan-system-primary w-3 h-3 md:w-5 md:h-5" />
                  </div>
                  <div className="flex-1 text-center md:text-left w-full">
                    {idx % 2 !== 0 ? (
                      <div className="md:pl-4">
                        <span className="text-lg md:text-2xl font-black text-japan-system-secondary">{item.year}</span>
                        <p className="text-gray-600 mt-0.5 md:mt-2 font-medium text-[13px] md:text-base">{item.event}</p>
                      </div>
                    ) : (
                      <div className="md:hidden">
                        <span className="text-lg font-black text-japan-system-secondary">{item.year}</span>
                        <p className="text-gray-600 mt-0.5 font-medium text-[13px]">{item.event}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 px-2 md:px-0">
          {[
            { icon: FiUsers, count: '200+', label: t('clients') },
            { icon: FiGlobe, count: '3', label: t('countries') },
            { icon: FiAward, count: '9+', label: t('yearsExp') },
            { icon: FiActivity, count: '1000+', label: t('deployments') }
          ].map((stat, i) => (
            <div key={i} className="text-center p-5 md:p-8 glass-card bg-white/50 backdrop-blur">
              <stat.icon className="w-5 h-5 md:w-8 md:h-8 text-japan-system-secondary mx-auto mb-2 md:mb-4" />
              <div className="text-xl md:text-3xl font-black text-japan-system-primary mb-1 md:mb-2">{stat.count}</div>
              <div className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Company;
