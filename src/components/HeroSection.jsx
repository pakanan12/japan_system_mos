import { FiArrowRight, FiChevronDown } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Magnetic from './Magnetic';

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Cinematic Background */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 animate-slow-zoom"
          style={{ backgroundImage: "url('/hero-japan.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        <div className="absolute inset-0 bg-radial-vignette opacity-30"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center space-x-3 mb-8">
              <div className="w-12 h-[2px] bg-japan-system-secondary"></div>
              <span className="text-japan-system-secondary text-sm font-bold uppercase tracking-[0.3em] text-glow">
                {t('heroSubtitle')}
              </span>
            </div>
            
            <h1 className="mb-10 text-japan-system-primary leading-[1.1]">
              {lang.startsWith('th') ? (
                <>มอบทางเลือก <span className="text-gradient">DX</span> ที่ดีที่สุด<br/><span className="text-3xl md:text-5xl">เพื่อการเติบโตของธุรกิจคุณ</span></>
              ) : lang.startsWith('ja') ? (
                <>ビジネスの成長に最適な<br/><span className="text-gradient">DX</span>ソリューションを提供</>
              ) : (
                <>Optimal <span className="text-gradient">DX</span> Solutions<br/><span className="text-3xl md:text-5xl">for Your Business Growth</span></>
              )}
            </h1>

            <p className="max-w-xl text-gray-500 text-lg md:text-xl leading-relaxed mb-12 opacity-80">
              {t('heroText')}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Magnetic>
                <Link 
                  to="/contact" 
                  className="luxury-button group px-12"
                >
                  <span className="relative z-10">{t('contact')}</span>
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
                </Link>
              </Magnetic>

              <Magnetic>
                <button 
                  onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                  className="px-10 py-5 bg-white border border-gray-100 text-japan-system-primary font-bold rounded-2xl hover:border-japan-system-secondary hover:text-japan-system-secondary transition-all duration-300 shadow-sm hover:shadow-lg"
                >
                  {t('learnMore')}
                </button>
              </Magnetic>
            </div>
          </motion.div>

          {/* Right Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative hidden lg:block perspective-2000"
          >
            <div className="relative z-10 glass-card p-4 rotate-2 hover:rotate-0 transition-transform duration-1000 shadow-2xl border-white/40">
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
                <img 
                  src="/hero-japan.jpg" 
                  alt="Corporate DX" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>
            {/* Abstract Floating Elements */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-japan-system-secondary/10 rounded-full blur-3xl floating" style={{ animationDelay: '1s' }}></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-japan-system-primary/5 rounded-full blur-3xl floating"></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Hint */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 cursor-pointer text-gray-300 flex flex-col items-center gap-2"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">{t('discover')}</span>
        <FiChevronDown className="w-6 h-6" />
      </motion.div>
    </div>
  );
};

export default HeroSection;




