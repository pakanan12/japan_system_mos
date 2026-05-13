import { FiArrowRight } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div className="relative min-h-[90vh] flex items-center bg-white overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-10"
          >
            <div className="w-16 h-1 bg-japan-system-secondary mb-8"></div>
            <span className="inline-block text-japan-system-secondary text-sm font-bold uppercase tracking-widest mb-4">
              {t('heroSubtitle')}
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold text-japan-system-primary mb-8 leading-[1.2]">
              {lang.startsWith('th') ? (
                <>มอบทางเลือก <span className="text-japan-system-secondary">DX</span> ที่ดีที่สุด<br/>เพื่อการเติบโตของธุรกิจคุณ</>
              ) : lang.startsWith('ja') ? (
                <>ビジネスの成長に最適な<br/><span className="text-japan-system-secondary">DX</span>ソリューションを提供</>
              ) : (
                <>Optimal <span className="text-japan-system-secondary">DX</span> Solutions<br/>for Your Business Growth</>
              )}
            </h1>

            <p className="max-w-xl text-gray-600 text-lg md:text-xl leading-relaxed mb-12">
              {t('heroText')}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto px-8 py-4 bg-japan-system-primary text-white font-bold rounded-lg shadow-lg hover:bg-japan-system-secondary transition-all duration-300 flex items-center justify-center group"
              >
                <span>{t('contact')}</span>
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button 
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 py-4 bg-gray-100 text-japan-system-primary font-bold rounded-lg hover:bg-gray-200 transition-all duration-300"
              >
                {t('learnMore')}
              </button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="/hero_bg.png" 
                alt="Corporate DX Solutions" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-japan-system-secondary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-japan-system-primary/5 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

