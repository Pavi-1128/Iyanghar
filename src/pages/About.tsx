import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Calendar, Target, CheckCircle, Trophy } from 'lucide-react';

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
      <section className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-5xl font-bold">About Dr. P.K. Iyenghar</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              A trusted name in professional CA services with a commitment to excellence,
              integrity, and comprehensive business solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto lg:mx-0">
                <span className="text-4xl font-bold text-blue-600">PK</span>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Dr. P.K. Iyenghar</h2>
                <p className="text-xl text-blue-600 font-semibold mb-4">
                  Chartered Accountant & Business Consultant
                </p>
                <p className="text-gray-600 leading-relaxed">
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
              className="bg-gray-50 rounded-xl p-8 space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-800">Professional Expertise</h3>
              <ul className="space-y-3">
                {expertise.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold">Our Mission</h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                To provide comprehensive, reliable, and efficient business solutions that
                empower our clients to achieve their goals while maintaining full compliance
                with regulatory requirements.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Target className="w-6 h-6 text-yellow-400" />
                  <span className="text-lg">Client-Centric Approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-yellow-400" />
                  <span className="text-lg">100% Compliance Guarantee</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-yellow-400" />
                  <span className="text-lg">Professional Excellence</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Our Values</h3>
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

      {/* Client Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">We Serve</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our diverse clientele includes various types of businesses and individuals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-blue-50 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{service}</h3>
              </motion.div>
            ))}
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