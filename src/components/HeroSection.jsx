import { useEffect } from 'react';
import { FiChevronDown, FiArrowRight } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import Magnetic from './Magnetic';

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const bgX = useTransform(smoothMouseX, [-500, 500], [-15, 15]);
  const bgY = useTransform(smoothMouseY, [-500, 500], [-15, 15]);
  const textX = useTransform(smoothMouseX, [-500, 500], [8, -8]);
  const textY = useTransform(smoothMouseY, [-500, 500], [8, -8]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      mouseX.set(moveX);
      mouseY.set(moveY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#050505] py-16 md:py-20 lg:py-0">
      {/* Premium background for Desktop */}
      <motion.div 
        style={{ x: bgX, y: bgY, scale: 1.1 }}
        className="absolute inset-0 z-0 hidden lg:block"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero_bg.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-japan-system-bg/100"></div>
        <div className="absolute inset-0 bg-radial-vignette opacity-50"></div>
      </motion.div>

      {/* Enhanced background for Mobile - Optimized for premium feel */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-110"
          style={{ backgroundImage: "url('/hero_bg.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-japan-system-bg/100"></div>
        {/* Glass blur overlay for mobile depth */}
        <div className="absolute inset-0 backdrop-blur-[2px] bg-black/10"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] w-[150px] h-[150px] md:w-[350px] md:h-[350px] bg-japan-system-secondary/20 rounded-full blur-[40px] md:blur-[100px]"
        />
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[25%] right-[5%] w-[200px] h-[200px] md:w-[450px] md:h-[450px] bg-white/5 rounded-full blur-[50px] md:blur-[120px]"
        />
      </div>

      <div className="relative z-10 text-center px-5 w-full max-w-7xl mx-auto py-8 md:py-12 lg:py-0">
        <motion.div
          style={{ x: textX, y: textY }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center space-x-3 mb-4 md:mb-6"
          >
            <div className="h-[1px] w-4 md:w-6 bg-japan-system-secondary/50"></div>
            <span className="text-japan-system-secondary text-[9px] md:text-xs font-black uppercase tracking-[0.5em] whitespace-nowrap">
              {t('heroSubtitle')}
            </span>
            <div className="h-[1px] w-4 md:w-6 bg-japan-system-secondary/50"></div>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-6 md:mb-8 leading-[1.15] md:leading-[1.1] tracking-tight max-w-5xl mx-auto drop-shadow-2xl px-1 md:px-0">
            {lang.startsWith('en') && (
              <motion.span initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.05 } } }}>
                <span className="block mb-1 md:mb-2">
                  {"Optimal DX Solutions".split(' ').map((word, i) => (
                    <motion.span key={i} className="inline-block mr-[0.2em]" variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                      {word === 'DX' ? <span className="text-japan-system-secondary">{word}</span> : word}
                    </motion.span>
                  ))}
                </span>
                <span className="block text-white/95">
                  {"for Your Business Growth".split(' ').map((word, i) => (
                    <motion.span key={i} className="inline-block mr-[0.2em]" variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                      {word}
                    </motion.span>
                  ))}
                </span>
              </motion.span>
            )}
            {lang.startsWith('th') && (
              <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
                มอบทางเลือก <span className="text-japan-system-secondary">DX</span> ที่ดีที่สุด<br className="sm:hidden" />
                <span className="block mt-1">เพื่อการเติบโตของธุรกิจคุณ</span>
              </motion.span>
            )}
            {lang.startsWith('ja') && (
              <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
                ビジネスの成長に最適な<br className="sm:hidden" />
                <span className="block mt-1">
                  <span className="text-japan-system-secondary">DX</span>ソリューションを提供
                </span>
              </motion.span>
            )}
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm md:text-lg lg:text-xl text-white/70 font-medium max-w-xs sm:max-w-xl md:max-w-2xl mx-auto leading-relaxed mb-10 md:mb-12 px-2 md:px-0"
          >
            {t('heroText')}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-[280px] sm:max-w-none"
          >
            <div className="w-full sm:w-auto">
              <Link to="/contact" className="luxury-button w-full sm:min-w-[220px] group shadow-2xl py-4 md:py-5 flex items-center justify-center rounded-2xl border border-white/10">
                <span className="relative z-10 text-[11px] md:text-sm font-black uppercase tracking-widest">{t('contact')}</span>
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
              </Link>
            </div>

            <div className="w-full sm:w-auto">
              <button 
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                className="w-full sm:min-w-[220px] px-8 py-4 md:py-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-white text-[11px] md:text-sm font-black uppercase tracking-widest transition-all flex items-center justify-center shadow-xl hover:bg-white/10 hover:border-white/20 active:scale-[0.98]"
              >
                {t('learnMore')}
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 cursor-pointer flex flex-col items-center gap-1.5"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <motion.span 
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.5em] text-white/40"
        >
          {t('discover')}
        </motion.span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiChevronDown className="w-5 h-5 text-white/40" />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-japan-system-bg via-japan-system-bg/40 to-transparent z-[2] pointer-events-none"></div>
    </div>me="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-japan-system-bg to-transparent z-[2] pointer-events-none"></div>
    </div>
  );
};

export default HeroSection;
