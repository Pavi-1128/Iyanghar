import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Dr. P.K. Iyenghar</h3>
            <p className="text-gray-400">
              Professional CA & Consulting Services providing comprehensive business solutions
              for individuals, SMEs, and students.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors"
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
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Income Tax Filing</li>
              <li>GST Registration</li>
              <li>MSME Registration</li>
              <li>Project Reports</li>
              <li>Import/Export Consultancy</li>
              <li>Digital Signatures</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <span>+91-98765-43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span>info@pkiyenghar.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1" />
                <span>123 Business District, City Name, State - 123456</span>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Office Hours</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4" />
                <div>
                  <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 2:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Dr. P.K. Iyenghar - CA & Consulting Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;