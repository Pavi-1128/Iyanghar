import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Calculator,
  FileText,
  Users,
  TrendingUp,
  Shield,
  Award,
  ArrowRight,
  Star,
  CheckCircle
} from 'lucide-react';
import HeroImg from "../asset/heroImg.jpg"

const Home = () => {
  const services = [
    {
      icon: Calculator,
      title: 'Taxation Services',
      description: 'GST, TDS, Income Tax filing and compliance',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: FileText,
      title: 'Business Registration',
      description: 'MSME, PAN, TAN, FSSAI, RERA registrations',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: TrendingUp,
      title: 'Project Reports',
      description: 'DPR, feasibility studies, certifications',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Shield,
      title: 'Digital Signatures',
      description: 'Class 2 & 3 digital certificates',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Small Business Owner',
      content: 'Excellent service for GST registration and compliance. Very professional and timely.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Startup Founder',
      content: 'Dr. Iyenghar helped us with all our business registrations. Highly recommended!',
      rating: 5
    },
    {
      name: 'Amit Patel',
      role: 'Individual Client',
      content: 'Best tax consultancy services. They handle everything with great care and expertise.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center text-white"
        style={{
          backgroundImage: `url(${HeroImg})`,
        }}
      >
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-6 md:mt-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 mt-6 md:mt-12"
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Professional
                <span className="text-yellow-400"> CA Services</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Comprehensive taxation, business registration, and consulting services
                for individuals, SMEs, and students with over 15 years of expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/enquiry"
                    className="inline-flex items-center space-x-2 bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
                  >
                    <span>Request Callback</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
                <motion.a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>WhatsApp Us</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mt-6 md:mt-12"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <Award className="w-12 h-12 text-yellow-400" />
                  <div>
                    <h3 className="text-2xl font-bold">15+ Years</h3>
                    <p className="text-blue-100">Professional Experience</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Users className="w-12 h-12 text-yellow-400" />
                  <div>
                    <h3 className="text-2xl font-bold">500+</h3>
                    <p className="text-blue-100">Happy Clients</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-12 h-12 text-yellow-400" />
                  <div>
                    <h3 className="text-2xl font-bold">100%</h3>
                    <p className="text-blue-100">Compliance Rate</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 via-gray-700/20 to-gray-800/20"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-gray-600/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-500/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive business solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-2xl hover:shadow-gray-500/20 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gray-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white px-8 py-4 rounded-lg font-semibold hover:from-gray-700 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-gray-500/30 transform hover:scale-105"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 via-gray-700/20 to-gray-800/20"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-500/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Trusted by hundreds of satisfied clients across various industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-2xl hover:shadow-gray-500/20 transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current group-hover:text-yellow-300 transition-colors" />
                  ))}
                </div>
                <p className="text-gray-200 mb-4 group-hover:text-white transition-colors">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-white/20 pt-4">
                  <h4 className="font-semibold text-white group-hover:text-gray-300 transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 via-gray-700/20 to-gray-800/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-600/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-500/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-white bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
                Professional Training Programs
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed">
                Enhance your skills with our comprehensive training programs designed for
                students and professionals in taxation and business compliance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 group">
                  <CheckCircle className="w-6 h-6 text-yellow-400 group-hover:text-green-300 transition-colors" />
                  <span className="text-gray-200 group-hover:text-white transition-colors">GST Compliance Training</span>
                </li>
                <li className="flex items-center space-x-3 group">
                  <CheckCircle className="w-6 h-6 text-yellow-400 group-hover:text-green-300 transition-colors" />
                  <span className="text-gray-200 group-hover:text-white transition-colors">Income Tax Practical Sessions</span>
                </li>
                <li className="flex items-center space-x-3 group">
                  <CheckCircle className="w-6 h-6 text-yellow-400 group-hover:text-green-300 transition-colors" />
                  <span className="text-gray-200 group-hover:text-white transition-colors">Business Registration Procedures</span>
                </li>
                <li className="flex items-center space-x-3 group">
                  <CheckCircle className="w-6 h-6 text-yellow-400 group-hover:text-green-300 transition-colors" />
                  <span className="text-gray-200 group-hover:text-white transition-colors">Digital Signature Implementation</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Get Training Information</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 placeholder-gray-400 text-white focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400/50 transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 placeholder-gray-400 text-white focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400/50 transition-all duration-300"
                />
                <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400/50 transition-all duration-300">
                  <option value="" className="bg-gray-800 text-white">Select Training Program</option>
                  <option value="gst" className="bg-gray-800 text-white">GST Compliance</option>
                  <option value="income-tax" className="bg-gray-800 text-white">Income Tax</option>
                  <option value="business-reg" className="bg-gray-800 text-white">Business Registration</option>
                  <option value="digital-sig" className="bg-gray-800 text-white">Digital Signatures</option>
                </select>
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gray-600 to-gray-800 text-white py-3 rounded-lg font-semibold hover:from-gray-700 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-gray-400/30 transform hover:scale-105"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Request Training Details
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Let us handle your business compliance needs so you can focus on what you do best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/enquiry"
                  className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.a
                href="tel:+91-9876543210"
                className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Call Now: +91-98765-43210</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;