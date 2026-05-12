import { motion } from 'framer-motion';

const PageHeader = ({ eyebrow, title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center mb-24"
  >
    {eyebrow && (
      <span className="text-japan-system-secondary text-sm font-black uppercase tracking-[0.4em] mb-4 block">
        {eyebrow}
      </span>
    )}
    <h1 className="text-4xl md:text-6xl font-black text-japan-system-primary mb-6 tracking-tight leading-[1.1]">
      {title}
    </h1>
    <div className="w-24 h-1.5 bg-japan-system-secondary mx-auto rounded-full mb-10"></div>
    {subtitle && (
      <p className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl leading-relaxed">
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default PageHeader;
