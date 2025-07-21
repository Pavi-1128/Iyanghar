import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Calendar, Target, CheckCircle, Trophy } from 'lucide-react';
import AboutImg from "../asset/AboutImg.jpg"

const About = () => {
  const achievements = [
    { icon: Calendar, title: '15+ Years', description: 'Professional Experience' },
    { icon: Users, title: '500+', description: 'Happy Clients' },
    { icon: Trophy, title: '98%', description: 'Success Rate' },
    { icon: Award, title: '25+', description: 'Professional Certifications' }
  ];

  const services = [
    'Individual Tax Payers',
    'Small & Medium Enterprises',
    'Startup Companies',
    'Students & Professionals',
    'Import/Export Businesses',
    'Manufacturing Units'
  ];

  const expertise = [
    'Chartered Accountant with 15+ years experience',
    'Specialized in GST implementation and compliance',
    'Expert in business registration and licensing',
    'Proficient in digital signature solutions',
    'Experienced in project report preparation',
    'Skilled in investment and financial consulting'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-20 md:py-32"
        style={{
          backgroundImage: `url(${AboutImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Background Blur Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm"
          style={{ backgroundImage: `url(${AboutImg})` }}
        ></div>

        <div className="container mx-auto px-4 relative z-10 pt-24 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 md:space-y-6"
          >
            <h1 className="text-3xl md:text-5xl font-bold">About Dr. P.K. Iyenghar</h1>
            <p className="text-base md:text-xl text-blue-100 max-w-3xl mx-auto">
              A trusted name in professional CA services with a commitment to excellence,
              integrity, and comprehensive business solutions.
            </p>
          </motion.div>
        </div>
      </section>


      {/* Profile Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 via-gray-700/20 to-gray-800/20"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-gray-600/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-500/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center mx-auto lg:mx-0">
                <span className="text-4xl font-bold text-600">PK</span>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white mb-4">Dr. P.K. Iyenghar</h2>
                <p className="text-xl text-yellow-400 font-semibold mb-4">
                  Chartered Accountant & Business Consultant
                </p>
                <p className="text-gray-300 leading-relaxed">
                  With over 15 years of dedicated service in the field of taxation and business
                  consultancy, Dr. P.K. Iyenghar has established himself as a trusted advisor
                  for businesses of all sizes. His expertise spans across various domains including
                  GST implementation, income tax planning, business registrations, and comprehensive
                  financial consulting.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 space-y-6"
            >
              <h3 className="text-2xl font-bold text-white">Professional Expertise</h3>
              <ul className="space-y-3">
                {expertise.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
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
            <h2 className="text-4xl font-bold text-white mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Numbers that speak for our commitment to excellence and client satisfaction
            </p>
          </motion.div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-gradient-to-br from-gray-900 via-black to-gray-900 bg-opacity-50 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center shadow-2xl hover:shadow-gray-500/20 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br  flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Mission Section */}
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
                Our Mission
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                To provide comprehensive, reliable, and efficient business solutions that
                empower our clients to achieve their goals while maintaining full compliance
                with regulatory requirements.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Target className="w-6 h-6 text-yellow-400" />
                  <span className="text-lg text-white">Client-Centric Approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-yellow-400" />
                  <span className="text-lg text-white">100% Compliance Guarantee</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-yellow-400" />
                  <span className="text-lg text-white">Professional Excellence</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Our Values</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white/10 rounded-lg">
                  <h4 className="font-semibold text-yellow-400 mb-2">Integrity</h4>
                  <p className="text-blue-100">Maintaining the highest ethical standards in all our dealings</p>
                </div>
                <div className="p-4 bg-white/10 rounded-lg">
                  <h4 className="font-semibold text-yellow-400 mb-2">Excellence</h4>
                  <p className="text-blue-100">Delivering superior quality services that exceed expectations</p>
                </div>
                <div className="p-4 bg-white/10 rounded-lg">
                  <h4 className="font-semibold text-yellow-400 mb-2">Innovation</h4>
                  <p className="text-blue-100">Embracing technology and modern solutions for better outcomes</p>
                </div>
              </div>
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
            <h2 className="text-4xl font-bold">Ready to Work With Us?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the difference of working with a dedicated professional who puts
              your business needs first.
            </p>
            <motion.a
              href="/enquiry"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Started Today</span>
              <CheckCircle className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;