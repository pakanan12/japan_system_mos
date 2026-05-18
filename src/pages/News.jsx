import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiPlayCircle, FiArrowRight, FiCalendar, FiTag, FiCheckCircle, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import TiltCard from '../components/TiltCard';

const News = () => {
  const { t } = useTranslation();
  const [showVideo, setShowVideo] = useState(false);

  const newsItems = [
    {
      id: 1,
      date: '2024.04.01',
      category: t('etaxNewsCategory'),
      title: t('etaxNewsTitle'),
      desc: t('etaxNewsDesc'),
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      date: '2024.03.15',
      category: t('mylogstarNewsCategory'),
      title: t('mylogstarNewsTitle'),
      desc: t('mylogstarNewsDesc'),
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      date: '2024.02.10',
      category: t('dxConsultCategory'),
      title: t('dxConsultTitle'),
      desc: t('dxConsultDesc'),
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const etaxBenefits = [
    t('etaxBenefit1'),
    t('etaxBenefit2'),
    t('etaxBenefit3'),
    t('etaxBenefit4'),
  ];

  return (
    <div className="relative min-h-screen bg-japan-system-bg overflow-hidden pt-24 md:pt-32 pb-20 md:pb-32">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-[0.1] md:opacity-[0.15] scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-japan-system-bg/90 via-japan-system-bg/60 to-japan-system-bg/95"></div>
        <div className="absolute inset-0 bg-radial-vignette opacity-50"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.1] md:opacity-[0.2]"></div>
        
        <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-blue-400/10 rounded-full blur-[80px] md:blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-500/10 rounded-full blur-[60px] md:blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-24"
        >
          <span className="text-japan-system-secondary text-[10px] md:text-sm font-black uppercase tracking-[0.3em] md:tracking-[0.4em] mb-4 block">
            {t('latestUpdates')}
          </span>
          <h1 className="text-2xl md:text-6xl font-black text-japan-system-primary mb-6 tracking-tight px-4 md:px-0 leading-[1.2]">
            {t('newRelease')}
          </h1>
          <div className="w-12 md:w-24 h-1 md:h-1.5 bg-japan-system-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-16 md:mb-32">
          {newsItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <TiltCard tiltMaxAngleX={3} tiltMaxAngleY={3} perspective={1000} className="h-full">
                <Link to="/contact" className="block h-full cursor-pointer">
                  <div className="glass-card group h-full flex flex-col md:flex-col overflow-hidden hover:shadow-2xl hover:-translate-y-1 md:hover:-translate-y-2">
                    <div className="relative h-40 md:h-56 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center space-x-2 shadow-sm">
                        <FiTag className="text-japan-system-secondary w-2.5 h-2.5 md:w-3 md:h-3" />
                        <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-japan-system-primary">{item.category}</span>
                      </div>
                    </div>
                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                      <div className="flex items-center text-gray-400 text-[10px] md:text-xs font-bold mb-3 md:mb-4">
                        <FiCalendar className="mr-2" />
                        <span>{item.date}</span>
                      </div>
                      <h3 className="text-base md:text-xl font-black text-japan-system-primary mb-3 md:mb-4 leading-tight group-hover:text-japan-system-secondary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-[12px] md:text-sm leading-relaxed mb-4 md:mb-6 flex-grow line-clamp-3 md:line-clamp-none">
                        {item.desc}
                      </p>
                      <div className="flex items-center text-[9px] md:text-[xs] font-black text-japan-system-secondary uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300 mt-auto">
                        <span>{t('readMore')}</span>
                        <FiArrowRight className="ml-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-32"
        >
          <div className="glass-card p-6 md:p-20 relative overflow-hidden bg-gradient-to-br from-white to-gray-50 border-white shadow-2xl">
            <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-blue-50/50 rounded-full -mr-32 -mt-32 md:-mr-48 md:-mt-48 blur-3xl"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center text-center lg:text-left">
              <div>
                <span className="text-japan-system-secondary text-[9px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.4em] mb-4 md:mb-6 block">{t('spotlight')}</span>
                <h2 className="text-xl md:text-4xl font-black text-japan-system-primary mb-5 md:mb-8 leading-tight px-4 md:px-0">
                  {t('spotlightTitle')}<br className="hidden md:block" />
                  <span className="text-gradient">MY LOG STAR</span>
                </h2>
                <p className="text-gray-600 text-[13px] md:text-lg leading-relaxed mb-8 md:mb-10 px-4 md:px-0">
                  {t('spotlightDesc')}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start px-4 md:px-0">
                  <button onClick={() => setShowVideo(true)} className="luxury-button w-full sm:min-w-[180px] text-xs py-4">
                    {t('watchDemo')}
                  </button>
                  <Link to="/contact" className="w-full sm:w-auto px-8 py-4 rounded-xl border border-gray-200 text-japan-system-primary text-xs font-bold uppercase tracking-widest hover:bg-gray-50 transition-all flex items-center justify-center">
                    {t('techSpecs')}
                  </Link>
                </div>
              </div>

              <div onClick={() => setShowVideo(true)} className="w-full px-4 md:px-0">
                <TiltCard tiltMaxAngleX={4} tiltMaxAngleY={4} className="relative aspect-video rounded-xl md:rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" 
                    alt="My Log Star Demo" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 md:w-20 md:h-20 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all">
                      <FiPlayCircle className="w-6 h-6 md:w-10 md:h-10 text-japan-system-primary" />
                    </div>
                  </div>
                </TiltCard>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-32"
        >
          <div className="glass-card p-6 md:p-16 border-white shadow-xl bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start text-center lg:text-left">
              <div>
                <span className="text-japan-system-secondary text-[9px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.4em] mb-4 md:mb-6 block">{t('etaxTitle')}</span>
                <h2 className="text-xl md:text-3xl font-black text-japan-system-primary mb-5 tracking-tight uppercase italic px-4 md:px-0">
                  {t('etaxSubtitle')}
                </h2>
                <p className="text-gray-600 text-[13px] md:text-lg leading-relaxed mb-8 md:mb-10 px-4 md:px-0">
                  {t('etaxDesc')}
                </p>
                <Link to="/contact" className="luxury-button w-full sm:min-w-[200px] text-xs py-4 flex md:inline-flex">
                  {t('requestConsult')}
                </Link>
              </div>
              <div className="space-y-3 md:space-y-6 text-left px-2 md:px-0">
                {etaxBenefits.map((benefit, i) => (
                  <div key={i} className="flex items-start space-x-3 md:space-x-4">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-50 rounded-lg md:rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                      <FiCheckCircle className="w-3.5 h-3.5 md:w-5 md:h-5 text-japan-system-secondary" />
                    </div>
                    <p className="text-gray-600 text-[12px] md:text-base leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8 md:mb-16 px-4">
            <h2 className="text-xl md:text-3xl font-black text-japan-system-primary mb-3 tracking-tight uppercase">{t('costAnalysis')}</h2>
            <p className="text-gray-500 text-[12px] md:text-base">{t('costTransitionDesc')}</p>
          </div>
          
          <div className="max-w-4xl mx-auto glass-card overflow-hidden shadow-xl border-white mx-4 md:mx-auto">
            <div className="overflow-x-auto scrollbar-hide">
              <table className="w-full text-left min-w-[450px] md:min-w-0">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="py-4 md:py-6 px-6 md:px-10 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-gray-400">{t('paperMedium')}</th>
                    <th className="py-4 md:py-6 px-6 md:px-10 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 text-right">{t('unitPrice')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    { label: t('paperCostLabel'), val: '0.8 Baht/set' },
                    { label: t('printingFeeLabel'), val: '2 Baht/set' },
                    { label: t('storageMaterialsLabel'), val: '0.02 Baht/set' },
                    { label: t('deliveryFeeLabel'), val: '37 Baht/set' }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 md:py-6 px-6 md:px-10 text-japan-system-primary text-[13px] md:text-base font-bold">{row.label}</td>
                      <td className="py-4 md:py-6 px-6 md:px-10 text-right text-[12px] md:text-base font-medium text-gray-600">{row.val}</td>
                    </tr>
                  ))}
                  <tr className="bg-blue-50/30">
                    <td className="py-5 md:py-8 px-6 md:px-10 font-black text-japan-system-primary text-base md:text-xl">{t('totalCost')}</td>
                    <td className="py-5 md:py-8 px-6 md:px-10 text-right font-black text-red-500 text-xl md:text-3xl whitespace-nowrap">39.82 Baht</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-6 md:p-10 bg-japan-system-primary text-white">
              <div className="flex flex-col md:flex-row justify-between items-center gap-5 text-center md:text-left">
                <div>
                  <h4 className="text-xl md:text-3xl font-black mb-1 md:mb-2 italic">39,820 Baht {t('savings')}</h4>
                  <p className="text-white/70 text-[11px] md:text-base">{t('potentialSavings')}</p>
                </div>
                <Link to="/contact" className="w-full md:w-auto px-6 py-4 rounded-xl bg-japan-system-secondary text-white font-black uppercase tracking-widest text-[9px] md:text-xs hover:bg-white hover:text-japan-system-primary transition-all whitespace-nowrap">
                  {t('requestConsult')}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* YouTube Video Modal Overlay */}
      <AnimatePresence>
        {showVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-10"
            onClick={() => setShowVideo(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setShowVideo(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <FiX className="w-6 h-6" />
              </button>

              {/* YouTube Iframe */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1"
                title="MY LOG STAR PC Log Management Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default News;
