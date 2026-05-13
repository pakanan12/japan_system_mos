import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiCalendar, FiArrowRight, FiTag } from 'react-icons/fi';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

const NewsPreview = () => {
  const { t } = useTranslation();

  const newsItems = [
    {
      id: 1,
      date: '2024.04.01',
      category: 'Solution',
      title: 'e-Tax Invoice & e-Receipt Solution',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      date: '2024.03.15',
      category: 'Security',
      title: 'Advanced Security with MYLOGSTAR',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="news-preview" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-japan-system-secondary text-sm font-bold uppercase tracking-[0.4em] mb-4 block">
              {t('latestUpdates')}
            </span>
            <h2 className="text-japan-system-primary">
              {t('newRelease')}
            </h2>
          </div>
          <Link 
            to="/new-release" 
            className="mt-6 md:mt-0 text-sm font-bold uppercase tracking-widest text-japan-system-primary hover:text-japan-system-secondary transition-colors flex items-center group"
          >
            <span>{t('viewAll')}</span>
            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {newsItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link to="/new-release" className="group">
                <TiltCard className="h-full">
                  <div className="glass-card flex flex-col md:flex-row overflow-hidden border-white/50 hover:glass-card-hover group">
                    <div className="w-full md:w-1/2 h-64 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                    </div>
                    <div className="p-10 flex flex-col justify-center w-full md:w-1/2">
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="px-3 py-1 bg-japan-system-primary/5 text-japan-system-secondary text-[10px] font-bold uppercase tracking-widest rounded-full">
                          {item.category}
                        </span>
                        <span className="text-gray-400 text-xs font-medium">{item.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-japan-system-primary mb-4 leading-tight group-hover:text-japan-system-secondary transition-colors">
                        {item.title}
                      </h3>
                      <div className="mt-4 flex items-center text-[10px] font-bold uppercase tracking-widest text-japan-system-secondary opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0">
                        <span>{t('readMore')}</span>
                        <FiArrowRight className="ml-2" />
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsPreview;
