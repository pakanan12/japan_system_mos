import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';
import MouseAura from './components/MouseAura';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Company from './pages/Company';
import News from './pages/News';
import Marketing from './pages/Marketing';
import ITSystem from './pages/ITSystem';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  },
  exit: { 
    opacity: 0, 
    y: -20, 
    transition: { 
      duration: 0.4, 
      ease: [0.7, 0, 0.84, 0] 
    } 
  }
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company" element={<Company />} />
          <Route path="/new-release" element={<News />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/it-system" element={<ITSystem />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <MouseAura />
      <div className="relative min-h-screen flex flex-col font-sans overflow-hidden">
        {/* Global Background Elements */}
        <div className="fixed inset-0 noise-bg pointer-events-none z-[1]"></div>
        <div className="fixed inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none z-0"></div>
        
        <Navbar />
        <main className="flex-grow relative z-10">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

