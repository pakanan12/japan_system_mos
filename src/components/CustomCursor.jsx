import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const mouseX = useSpring(-100, springConfig);
  const mouseY = useSpring(-100, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isHidden) setIsHidden(false);
      mouseX.set(e.clientX - 24);
      mouseY.set(e.clientY - 24);
    };

    const handleMouseOver = (e) => {
      const isClickable = e.target.closest(
        'button, a, input, textarea, select, .cursor-pointer, .glass-card-hover, .luxury-button'
      );
      setIsHovering(!!isClickable);
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isHidden]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-[10000] hidden md:block"
      style={{
        x: mouseX,
        y: mouseY,
      }}
      animate={{
        scale: isHovering ? 1.8 : 1,
        opacity: isHidden ? 0 : isHovering ? 0.7 : 0.3,
      }}
      transition={{ 
        scale: { duration: 0.3, ease: "easeOut" },
        opacity: { duration: 0.3, ease: "easeOut" }
      }}
    >
      <div className="absolute inset-0 bg-japan-system-secondary blur-[12px] rounded-full opacity-60"></div>
      
      <div className="absolute inset-3 bg-japan-system-secondary blur-[4px] rounded-full opacity-80"></div>
      
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-japan-system-primary rounded-full"></div>
    </motion.div>
  );
};

export default CustomCursor;
