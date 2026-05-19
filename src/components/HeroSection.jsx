import React, { useEffect, useState } from 'react';
import { FiArrowRight, FiChevronDown } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const [hero, setHero] = useState(null);

  useEffect(() => {
    fetch(
      "http://localhost:1337/api/home-page?populate[sections][populate]=*"
    )
      .then((res) => res.json())
      .then((data) => {
        setHero(data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // 🔥 ดึง Hero จาก Dynamic Zone
  const heroSection =
    hero?.sections?.find(
      (section) =>
        section.__component === "hero.sections"
    ) || null;

  // 🔥 Title
  const title =
    hero?.heroTitle ||
    "Welcome to Japan System";

  // 🔥 Subtitle
  const subtitle =
    hero?.heroSubtitle?.[0]?.children?.[0]?.text ||
    heroSection?.subtitle ||
    t('heroText');

  // 🔥 Image
  const image =
    heroSection?.heroImage?.url
      ? `http://localhost:1337${heroSection.heroImage.url}`
      : '/hero_bg.png';

  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-japan-system-primary/70 backdrop-blur-[2px] mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-16">

        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-japan-system-secondary text-sm md:text-base font-bold uppercase tracking-[0.3em] mb-6 block"
        >
          {t('heroSubtitle')}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-md tracking-wide"
        >
          {lang.startsWith('th') ? (
            <>
              มอบทางเลือก{' '}
              <span className="text-japan-system-secondary">DX</span>{' '}
              ที่ดีที่สุด
              <br />
              เพื่อการเติบโตของธุรกิจคุณ
            </>
          ) : lang.startsWith('ja') ? (
            <>
              ビジネスの成長に最適な
              <br />
              <span className="text-japan-system-secondary">DX</span>
              ソリューションを提供
            </>
          ) : (
            title
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg md:text-xl text-gray-200 font-light tracking-wide opacity-90 max-w-2xl mx-auto mb-10"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            to="/contact"
            className="flex items-center justify-center px-8 py-4 bg-japan-system-secondary text-white rounded-xl hover:bg-blue-500 transition-colors duration-300 font-bold shadow-lg"
          >
            {t('contact')}
            <FiArrowRight className="ml-2" />
          </Link>

          <button
            onClick={() =>
              window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth',
              })
            }
            className="px-8 py-4 bg-white/10 text-white border border-white/30 rounded-xl hover:bg-white hover:text-japan-system-primary transition-all duration-300 font-bold"
          >
            {t('learnMore')}
          </button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 cursor-pointer text-white/50 flex flex-col items-center gap-2"
        onClick={() =>
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
          })
        }
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
          {t('discover')}
        </span>

        <FiChevronDown className="w-6 h-6" />
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </div>
  );
};

export default HeroSection;