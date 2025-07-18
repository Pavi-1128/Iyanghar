
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Enquiry from './pages/Enquiry';
import PageNotFound from './pages/PageNotFound'; // Import PageNotFound component

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/enquiry" element={<Enquiry />} />
            {/* Catch-all route for undefined pages */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </motion.main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
