import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiMail, FiUser, FiMessageSquare, FiCheckCircle, FiAlertCircle, FiLoader } from 'react-icons/fi';

const Contact = () => {
  const { t } = useTranslation();
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const sendEmail = (e) => {
    e.preventDefault();

    // Prevent double submission
    if (isSending) return;

    setIsSending(true);
    setStatus(null);

    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    emailjs.sendForm(
      'service_id', // Replace with your Service ID
      'template_id', // Replace with your Template ID
      formRef.current,
      'public_key' // Replace with your Public Key
    )
      .then((result) => {
          console.log(result.text);
          setStatus('success');
          setIsSending(false);
          formRef.current.reset();
          // Reset status after 5 seconds
          setTimeout(() => setStatus(null), 5000);
      }, (error) => {
          console.log(error.text);
          setStatus('error');
          setIsSending(false);
          // Reset status after 5 seconds
          setTimeout(() => setStatus(null), 5000);
      });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-[#050A15] text-white flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-japan-system-secondary/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-japan-system-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-2xl"
      >
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.span 
            variants={itemVariants}
            className="text-japan-system-secondary font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
          >
            {t('contactPage.subtitle') || 'Get In Touch'}
          </motion.span>
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
          >
            {t('contactPage.title') || 'Contact Us'}
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-gray-400 max-w-md mx-auto"
          >
            {t('contactPage.formHelp') || 'Have a question or want to work together? Send us a message and we will get back to you shortly.'}
          </motion.p>
        </div>

        {/* Contact Form Card */}
        <motion.div 
          variants={itemVariants}
          className="dark-glass-card p-8 md:p-12 relative overflow-hidden"
        >
          {/* Status Overlay */}
          <AnimatePresence>
            {status && (
              <motion.div 
                initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
                exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                className="absolute inset-0 z-50 flex items-center justify-center bg-black/60"
              >
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="text-center p-8"
                >
                  {status === 'success' ? (
                    <>
                      <FiCheckCircle className="text-6xl text-green-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-gray-300">Thank you for reaching out. We will contact you soon.</p>
                    </>
                  ) : (
                    <>
                      <FiAlertCircle className="text-6xl text-red-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">Failed to Send</h3>
                      <p className="text-gray-300">Something went wrong. Please try again later.</p>
                      <button 
                        onClick={() => setStatus(null)}
                        className="mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                      >
                        Try Again
                      </button>
                    </>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-japan-system-secondary/80 ml-1">
                  {t('contactPage.fullName') || 'Name'}
                </label>
                <div className="relative group">
                  <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-japan-system-secondary transition-colors" />
                  <input 
                    type="text" 
                    name="user_name"
                    required
                    placeholder={t('contactPage.enterName') || "Your full name"}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none input-glow placeholder:text-gray-600"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-japan-system-secondary/80 ml-1">
                  {t('contactPage.emailAddr') || 'Email'}
                </label>
                <div className="relative group">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-japan-system-secondary transition-colors" />
                  <input 
                    type="email" 
                    name="user_email"
                    required
                    placeholder={t('contactPage.enterEmail') || "example@mail.com"}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none input-glow placeholder:text-gray-600"
                  />
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-japan-system-secondary/80 ml-1">
                {t('contactPage.message') || 'Message'}
              </label>
              <div className="relative group">
                <FiMessageSquare className="absolute left-4 top-6 text-gray-500 group-focus-within:text-japan-system-secondary transition-colors" />
                <textarea 
                  name="message"
                  required
                  rows="5"
                  placeholder={t('contactPage.tellUs') || "How can we help you?"}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none input-glow placeholder:text-gray-600 resize-none"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSending}
                type="submit"
                className={`w-full py-5 rounded-2xl font-bold flex items-center justify-center space-x-3 transition-all duration-500 relative overflow-hidden group
                  ${isSending 
                    ? 'bg-gray-700 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-japan-system-primary to-japan-system-secondary hover:shadow-[0_0_30px_rgba(77,168,218,0.4)]'
                  }`}
              >
                {isSending ? (
                  <>
                    <FiLoader className="animate-spin text-xl" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span className="relative z-10">{t('contactPage.sendBtn') || 'Send Message'}</span>
                    <FiSend className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Footer info or social links could go here */}
        <motion.div 
          variants={itemVariants}
          className="mt-12 text-center text-gray-500 text-sm"
        >
          <p>© {new Date().getFullYear()} MOS Japan. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
