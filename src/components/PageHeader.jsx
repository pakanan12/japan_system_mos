import { motion } from 'framer-motion';

const PageHeader = ({ eyebrow, title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center mb-16 md:mb-24 px-4 md:px-0"
  >
    {eyebrow && (
      <span className="text-japan-system-secondary text-[10px] md:text-sm font-black uppercase tracking-[0.4em] mb-4 block">
        {eyebrow}
      </span>
    )}
    <h1 className="text-3xl md:text-6xl font-black text-japan-system-primary mb-6 tracking-tight leading-[1.2] md:leading-[1.1]">
      {title}
    </h1>
    <div className="w-12 md:w-24 h-1 md:h-1.5 bg-japan-system-secondary mx-auto rounded-full mb-8 md:mb-10"></div>
    {subtitle && (
      <p className="max-w-2xl mx-auto text-gray-500 text-base md:text-xl leading-relaxed px-2 md:px-0 opacity-80">
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default PageHeader;
