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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] py-20 lg:py-0">
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

      {/* Simplified background for mobile */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: "url('/hero_bg.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-japan-system-bg/100"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[25%] left-[20%] w-[200px] h-[200px] md:w-[350px] md:h-[350px] bg-japan-system-secondary/15 rounded-full blur-[60px] md:blur-[100px]"
        />
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[20%] right-[15%] w-[250px] h-[250px] md:w-[450px] md:h-[450px] bg-white/5 rounded-full blur-[80px] md:blur-[120px]"
        />
      </div>

      <div className="relative z-10 text-center px-6 w-full max-w-7xl mx-auto py-12 lg:py-0">
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
            className="flex items-center space-x-3 mb-5 md:mb-6"
          >
            <div className="h-[1px] w-5 md:w-6 bg-japan-system-secondary/40"></div>
            <span className="text-japan-system-secondary text-[8px] md:text-xs font-black uppercase tracking-[0.4em] whitespace-nowrap">
              {t('heroSubtitle')}
            </span>
            <div className="h-[1px] w-5 md:w-6 bg-japan-system-secondary/40"></div>
          </motion.div>

          <h1 className="text-2xl sm:text-4xl md:text-6xl font-black text-white mb-6 md:mb-8 leading-[1.2] md:leading-[1.1] tracking-tight max-w-5xl mx-auto drop-shadow-xl px-2 md:px-0">
            {lang.startsWith('en') && (
              <motion.span initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.05 } } }}>
                <span className="block mb-0.5 md:mb-1">
                  {"Optimal DX Solutions".split(' ').map((word, i) => (
                    <motion.span key={i} className="inline-block mr-[0.25em]" variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                      {word === 'DX' ? <span className="text-japan-system-secondary">{word}</span> : word}
                    </motion.span>
                  ))}
                </span>
                <span className="block">
                  {"for Your Business Growth".split(' ').map((word, i) => (
                    <motion.span key={i} className="inline-block mr-[0.25em]" variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                      {word}
                    </motion.span>
                  ))}
                </span>
              </motion.span>
            )}
            {lang.startsWith('th') && (
              <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
                มอบทางเลือก <span className="text-japan-system-secondary">DX</span> ที่ดีที่สุด<br className="hidden md:block" />
                เพื่อการเติบโตของธุรกิจคุณ
              </motion.span>
            )}
            {lang.startsWith('ja') && (
              <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
                ビジネスの成長に最適な<br className="hidden md:block" />
                <span className="text-japan-system-secondary">DX</span>ソリューションを提供
              </motion.span>
            )}
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-[13px] md:text-lg lg:text-xl text-white/80 font-medium max-w-xl md:max-w-2xl mx-auto leading-relaxed mb-10 md:mb-12 px-4 md:px-0"
          >
            {t('heroText')}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-sm sm:max-w-none px-4 sm:px-0"
          >
            <div className="w-full sm:w-auto">
              <Link to="/contact" className="luxury-button w-full sm:min-w-[200px] group shadow-2xl py-4 md:py-5 flex items-center justify-center">
                <span className="relative z-10 text-xs md:text-sm font-black uppercase tracking-widest">{t('contact')}</span>
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
              </Link>
            </div>

            <div className="w-full sm:w-auto">
              <button 
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                className="w-full sm:min-w-[200px] px-8 py-4 md:py-5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-white text-xs md:text-sm font-black uppercase tracking-widest transition-all flex items-center justify-center shadow-xl hover:bg-white/10 hover:border-white/20"
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
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 cursor-pointer flex flex-col items-center gap-2"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <motion.span 
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-[9px] font-black uppercase tracking-[0.4em] text-white/50"
        >
          {t('discover')}
        </motion.span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiChevronDown className="w-5 h-5 text-white/60" />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-japan-system-bg to-transparent z-[2] pointer-events-none"></div>
    </div>
  );
};

export default HeroSection;
