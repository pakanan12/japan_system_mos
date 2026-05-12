import { useEffect, useRef } from 'react';

const MouseAura = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d', { alpha: true });
    let animationFrameId;
    let particles = [];
    
    const color = '77, 168, 218'; 
    const maxParticles = 100;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const handleMouseMove = (e) => {
      for (let i = 0; i < 2; i++) {
        if (particles.length < maxParticles) {
          const spreadX = (Math.random() - 0.5) * 20;
          const spreadY = (Math.random() - 0.5) * 20;
          particles.push({
            x: e.clientX + spreadX,
            y: e.clientY + spreadY,
            life: 1, 
            size: Math.random() * 40 + 30,
            velocity: {
              x: (Math.random() - 0.5) * 1,
              y: (Math.random() - 0.5) * 1
            }
          });
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.globalCompositeOperation = 'lighter';
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        p.x += p.velocity.x;
        p.y += p.velocity.y;
        p.life -= 0.012;
        p.size *= 0.99;
        
        if (p.life > 0) {
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
          gradient.addColorStop(0, `rgba(${color}, ${p.life * 0.25})`); 
          gradient.addColorStop(1, `rgba(${color}, 0)`);
          
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      }
      
      particles = particles.filter(p => p.life > 0);
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none hidden md:block"
      style={{ 
        zIndex: 5, 
        mixBlendMode: 'screen', 
        filter: 'blur(8px)'
      }}
    />
  );
};

export default MouseAura;
