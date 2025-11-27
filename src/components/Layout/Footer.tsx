import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-[#252525]">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Company Info */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-[#252525]">Dr. P.K. Iyenghar</h3>
            <p className="text-[#252525] text-sm">
              We provide Professional Tax Consulting Services with comprehensive business solutions for individuals, SMEs, and students.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#38215e] hover:text-[#38215e] transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <MessageCircle className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="tel:+91-9876543210"
                className="text-blue-400 hover:text-blue-300 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Phone className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:info@pkiyenghar.com"
                className="text-red-400 hover:text-red-300 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-1">
            <h4 className="text-base font-semibold text-[#252525]">Services</h4>
            <ul className="space-y-1 text-[#252525] text-sm">
              <li>Income Tax Filing</li>
              <li>GST Registration</li>
              <li>MSME Registration</li>
              <li>Project Reports</li>
              <li>Import/Export Consultancy</li>
              <li>Digital Signatures</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            <h4 className="text-base font-semibold text-[#252525]">Contact Information</h4>
            <div className="space-y-2 text-[#252525] text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <span>+91-98765-43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span>info@pkiyenghar.com</span>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div className="space-y-2">
            <h4 className="text-base font-semibold text-[#252525]">Office Hours</h4>
            <div className="space-y-1 text-[#252525] text-sm">
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4" />
                <div>
                  <p>Mon - Fri: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-4 pt-4 text-center text-[#252525]">
          <p className="text-sm">&copy; 2025 Dr. P.K. Iyenghar - Professional Tax Consulting Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;