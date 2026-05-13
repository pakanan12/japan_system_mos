import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Clients = () => {
  const { t } = useTranslation();
  
  // Simulated famous company logos (placeholders that look pro)
  const clients = [
    { name: 'Mitsui', logo: 'MITSUI' },
    { name: 'Sony', logo: 'SONY' },
    { name: 'Toyota', logo: 'TOYOTA' },
    { name: 'Mizuho', logo: 'MIZUHO' },
    { name: 'Panasonic', logo: 'PANASONIC' },
    { name: 'Mitsubishi', logo: 'MITSUBISHI' },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <span className="text-japan-system-secondary text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
            {t('trustedBy')}
          </span>
        </div>
        
        <div className="relative">
          <div className="flex items-center justify-between gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700 overflow-x-auto no-scrollbar py-4">
            {clients.map((client, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-2xl font-black tracking-tighter text-japan-system-primary flex-shrink-0"
              >
                {client.logo}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
