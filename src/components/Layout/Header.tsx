
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/enquiry', label: 'Enquiry' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Detect click outside menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed w-full top-0 z-50">
      <div className="backdrop-blur-sm bg-white/95 shadow-lg border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                className="w-10 h-10 bg-[#6f3e9a] rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-white font-bold text-xl">P</span>
              </motion.div>
              <div>
                <h1 className="text-xl font-bold text-[#252525]">Dr. P.K. Iyenghar</h1>
                <p className="text-sm text-[#252525]"> Professional Tax Consulting Services</p>
              </div>
            </Link>

            {/* Desktop Navigation (show from lg and above) */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-base font-medium transition-all duration-300 px-4 py-1 rounded-lg ${
                    isActive(item.path) 
                      ? 'text-white bg-[#6f3e9a]' 
                      : 'text-[#252525] hover:bg-[#6f3e9a]/20 hover:text-[#6f3e9a]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Contact Actions (show from lg and above) */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.a
                href="tel:+91-9876543210"
                className="flex items-center space-x-2 bg-[#6f3e9a] text-white px-4 py-2 rounded-lg hover:bg-[#5a2f7a] transition-all duration-300 shadow-lg hover:shadow-[#6f3e9a]/30 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-4 h-4 text-white" strokeWidth={2} stroke="white" />
                <span className="text-sm text-white">Call Now</span>
              </motion.a>
              <motion.a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-4 h-4 text-white" strokeWidth={2} stroke="white" />
                <span className="text-sm text-white">WhatsApp</span>
              </motion.a>
            </div>

            {/* Mobile/Tablet Menu Button (up to lg) */}
            <button className="lg:hidden text-[#252525]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile/Tablet Navigation */}
          {isMenuOpen && (
            <motion.nav
              ref={menuRef}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:hidden mt-4 pt-4 border-t border-gray-200"
            >
              <div className="flex flex-col items-center space-y-2 w-full">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-base font-medium transition-all duration-300 px-4 py-1 rounded-lg w-4/5 text-center ${
                      isActive(item.path) 
                        ? 'text-white bg-[#6f3e9a]' 
                        : 'text-[#252525] hover:bg-[#6f3e9a]/20 hover:text-[#6f3e9a]'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 w-full items-center pt-4">
                  <a
                    href="tel:+91-9876543210"
                    className="flex items-center space-x-2 bg-[#6f3e9a] text-white px-4 py-2 rounded-lg hover:bg-[#5a2f7a] transition-all duration-300 shadow-lg hover:shadow-[#6f3e9a]/30 transform hover:scale-105 w-4/5 justify-center"
                  >
                    <Phone className="w-4 h-4 text-white" strokeWidth={2} stroke="white" />
                    <span className="text-sm text-white">Call Now</span>
                  </a>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors w-4/5 justify-center"
                  >
                    <MessageCircle className="w-4 h-4 text-white" strokeWidth={2} stroke="white" />
                    <span className="text-sm text-white">WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
