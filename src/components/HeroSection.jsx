import { FiChevronDown, FiArrowRight } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-japan-system-primary">
      {/* Premium Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-slow-zoom opacity-40"
          style={{ backgroundImage: "url('/hero_bg.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-japan-system-primary/80 via-japan-system-primary/60 to-japan-system-primary"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block text-japan-system-secondary text-xs md:text-sm font-black uppercase tracking-[0.5em] mb-6">
            {t('heroSubtitle')}
          </span>
          
          <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight">
            {lang.startsWith('th') ? (
              <>มอบทางเลือก <span className="text-japan-system-secondary">DX</span> ที่ดีที่สุด<br/>เพื่อการเติบโตของธุรกิจคุณ</>
            ) : lang.startsWith('ja') ? (
              <>ビジネスの成長に最適な<br/><span className="text-japan-system-secondary">DX</span>ソリューションを提供</>
            ) : (
              <>Optimal <span className="text-japan-system-secondary">DX</span> Solutions<br/>for Your Business Growth</>
            )}
          </h1>

          <p className="max-w-2xl mx-auto text-white/80 text-lg md:text-xl leading-relaxed mb-12">
            {t('heroText')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/contact" 
              className="px-10 py-5 bg-japan-system-secondary text-white font-black uppercase tracking-widest text-sm rounded-2xl shadow-2xl hover:bg-white hover:text-japan-system-primary transition-all duration-300 flex items-center group"
            >
              <span>{t('contact')}</span>
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button 
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-black uppercase tracking-widest text-sm rounded-2xl hover:bg-white/20 transition-all duration-300"
            >
              {t('learnMore')}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 cursor-pointer text-white/40 flex flex-col items-center gap-2"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-[10px] font-black uppercase tracking-widest">{t('discover')}</span>
        <FiChevronDown className="w-6 h-6" />
      </motion.div>
    </div>
  );
};

export default HeroSection;
