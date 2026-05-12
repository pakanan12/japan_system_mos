import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiMail, FiPhone, FiMapPin, FiCheck, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Contact = () => {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 4000);
    }, 1500);
  };

  const contactItems = [
    { 
      icon: FiMapPin, 
      label: 'OFFICE ADDRESS', 
      val: '129 หมู่ 9 ต.หัวโพธิ์ อ.สองพี่น้อง จ.สุพรรณบุรี 72110',
      href: 'https://maps.google.com/?q=129+Moo+9+Hua+Pho+Song+Phi+Nong+Suphan+Buri+72110',
      isExternal: true
    },
    { 
      icon: FiMail, 
      label: 'OFFICIAL EMAIL', 
      val: 'pakanan2004@gmail.com',
      href: 'mailto:pakanan2004@gmail.com',
      isExternal: false
    },
    { 
      icon: FiPhone, 
      label: 'CONTACT NUMBER', 
      val: '092-724-3149', 
      href: 'tel:0927243149',
      isExternal: false
    }
  ];

  const inputBaseClass = "w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl outline-none transition-all duration-300 font-medium text-white placeholder:text-gray-500 focus:border-japan-system-secondary/50 focus:bg-white/10";

  return (
    <div className="relative min-h-screen bg-[#050505] overflow-hidden pt-32 pb-20 md:pt-48 md:pb-40">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#1a1a1a,transparent)] opacity-40"></div>
        <div className="absolute top-[10%] left-[-10%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-japan-system-secondary/5 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-32"
        >
          <span className="text-japan-system-secondary text-[10px] md:text-xs font-black uppercase tracking-[0.5em] mb-6 block">
            {t('getInTouch') || 'CONTACT US'}
          </span>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tight leading-[1.1]">
            Let's <span className="text-japan-system-secondary">Connect</span>
          </h1>
          <div className="w-16 h-1 bg-japan-system-secondary mx-auto rounded-full mb-10"></div>
          <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed opacity-80">
            Have a project in mind or need expert DX advice? Reach out to our team and let's build something exceptional together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-6 md:space-y-8"
          >
            {contactItems.map((item, i) => (
              <a 
                key={i} 
                href={item.href}
                target={item.isExternal ? '_blank' : undefined}
                rel={item.isExternal ? 'noopener noreferrer' : undefined}
                className="group block"
              >
                <div className="glass-card p-6 md:p-10 bg-white/5 border border-white/10 hover:border-japan-system-secondary/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                  <div className="flex items-center space-x-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-japan-system-secondary group-hover:text-white transition-all duration-500">
                      <item.icon className="w-5 h-5 md:w-7 md:h-7 text-japan-system-secondary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-2 block">{item.label}</span>
                      <p className="text-white font-bold text-sm md:text-lg leading-relaxed group-hover:text-japan-system-secondary transition-colors">
                        {item.val}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Form UI */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8 md:p-12 bg-white/[0.03] border border-white/10 shadow-2xl relative">
              <div className="mb-10">
                <h3 className="text-xl md:text-3xl font-black text-white mb-4 uppercase tracking-tight italic">
                  SEND A MESSAGE
                </h3>
                <p className="text-gray-500 text-sm">We normally respond within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">FULL NAME</label>
                    <input 
                      name="name"
                      type="text" 
                      value={formData.name}
                      onChange={handleChange}
                      className={inputBaseClass}
                      placeholder="Enter your name" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">EMAIL ADDRESS</label>
                    <input 
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className={inputBaseClass}
                      placeholder="Enter your email" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">MESSAGE</label>
                  <textarea 
                    name="message"
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputBaseClass} resize-none`}
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button 
                  disabled={formStatus === 'sending'}
                  type="submit" 
                  className={`luxury-button w-full flex items-center justify-center gap-3 py-5 group transition-all duration-500 text-xs uppercase tracking-widest rounded-2xl shadow-xl ${formStatus === 'success' ? '!bg-green-600' : ''}`}
                >
                  {formStatus === 'idle' && (
                    <>
                      <span>SEND MESSAGE</span>
                      <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                  {formStatus === 'sending' && (
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                  )}
                  {formStatus === 'success' && (
                    <span className="flex items-center gap-2"><FiCheck className="w-4 h-4" /> MESSAGE SENT</span>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
