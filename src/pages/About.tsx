import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Users, Calendar, Target, CheckCircle, Trophy, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import AboutImg from "../asset/AboutHero.jpg";
import AboutImg2 from "../asset/AboutImg.jpg";
import AboutImg3 from "../asset/AboutImg7.jpg";

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const achievements = [
    { 
      icon: Calendar, 
      title: '20+ Years', 
      description: 'Professional Experience',
      image: AboutImg
    },
    { 
      icon: Users, 
      title: '500+', 
      description: 'Happy Clients',
      image: AboutImg2
    },
    { 
      icon: Trophy, 
      title: '98%', 
      description: 'Success Rate',
      image: AboutImg3
    },
    { 
      icon: Award, 
      title: '25+', 
      description: 'Professional Certifications',
      image: AboutImg
    }
  ];

  const nextAchievement = () => {
    setCurrentIndex((prev) => (prev + 1) % achievements.length);
  };

  const prevAchievement = () => {
    setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  const expertise = [
    'Professional Tax Consulting with 15+ years experience',
    'Specialized in GST implementation and compliance',
    'Expert in business registration and licensing',
    'Proficient in digital signature solutions',
    'Experienced in project report preparation',
    'Skilled in investment and financial consulting'
  ];


  return (
    <div className="min-h-screen" style={{ backgroundColor: '#EDF4FF' }}>
      {/* Main Content - Full Width */}
      <div className="w-full">
          {/* Hero Section */}
          <section
            className="relative bg-cover bg-center text-white min-h-[45vh] md:min-h-[55vh] flex items-center"
            style={{
              backgroundImage: `url(${AboutImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Background Blur Overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div
              className="absolute inset-0 bg-cover bg-center filter blur-sm"
              style={{ backgroundImage: `url(${AboutImg})` }}
            ></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4 md:space-y-6 mt-20 md:mt-0"
              >
                <h1 className="text-2xl md:text-5xl font-bold text-[#38215e]">
                  About Dr. P.K. Iyenghar
                </h1>
                <p className="text-base font-medium md:text-xl text-[#38215e] max-w-3xl mx-auto">
                  A trusted name in professional tax consulting services with a commitment to
                  excellence, integrity, and comprehensive business solutions.
                </p>
              </motion.div>
            </div>
          </section>

          <div className="px-4 lg:px-8 py-8">
            <div className="max-w-7xl mx-auto">

          {/* Profile Section */}
          <section className="py-12 relative overflow-hidden bg-transparent">
            <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="w-32 h-32 bg-[#a676c8] rounded-full flex items-center justify-center mx-auto lg:mx-0">
                <span className="text-4xl font-bold text-white">PK</span>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-[#38215e] mb-4">Dr. P.K. Iyenghar</h2>
                <p className="text-xl text-[#38215e] font-semibold mb-4">
                  Chartered Accountant & Business Consultant
                </p>
                <p className="text-[#252525] leading-relaxed">
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
              className="bg-[#FBFCFD] border border-gray-200 rounded-xl p-8 space-y-6 shadow-lg mt-8 lg:mt-12"
            >
              <h3 className="text-2xl font-bold text-[#38215e]">Professional Expertise</h3>
              <ul className="space-y-3">
                {expertise.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#38215e] mt-0.5 flex-shrink-0" />
                    <span className="text-[#252525]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

          {/* Achievements Section */}
          <section className="py-12 relative overflow-hidden bg-transparent">
            <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#38215e] mb-4">Our Achievements</h2>
            <p className="text-xl text-[#252525] max-w-2xl mx-auto">
              Numbers that speak for our commitment to excellence and client satisfaction
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative max-w-6xl mx-auto px-4">
            <AnimatePresence mode="wait">
              {(() => {
                const currentAchievement = achievements[currentIndex];
                const IconComponent = currentAchievement.icon;
                return (
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
                  >
                    {/* Left Side - Image Box */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="relative h-64 lg:h-80 rounded-2xl overflow-hidden shadow-xl"
                    >
                      <img
                        src={currentAchievement.image}
                        alt={currentAchievement.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#38215e]/10 to-transparent"></div>
                    </motion.div>

                    {/* Right Side - Content Box */}
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="bg-white border border-gray-200 rounded-2xl p-8 lg:p-10 shadow-xl flex flex-col justify-center space-y-6"
                    >
                      <div className="w-20 h-20 rounded-full bg-[#a676c8] flex items-center justify-center shadow-lg mx-auto lg:mx-0">
                        <IconComponent className="w-10 h-10 text-white" strokeWidth={2} stroke="white" />
                      </div>
                      <div className="text-center lg:text-left">
                        <h3 className="text-4xl lg:text-5xl font-bold text-[#38215e] mb-3">
                          {currentAchievement.title}
                        </h3>
                        <p className="text-xl text-[#252525]">
                          {currentAchievement.description}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <motion.button
                onClick={prevAchievement}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-[#6f3e9a] text-white flex items-center justify-center shadow-lg hover:bg-[#5a2f7a] transition-all duration-300"
                aria-label="Previous achievement"
              >
                <ChevronLeft className="w-6 h-6" strokeWidth={2} stroke="white" />
              </motion.button>
              
              {/* Dots Indicator */}
              <div className="flex gap-2">
                {achievements.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-[#a676c8] w-8' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to achievement ${index + 1}`}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextAchievement}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-[#6f3e9a] text-white flex items-center justify-center shadow-lg hover:bg-[#5a2f7a] transition-all duration-300"
                aria-label="Next achievement"
              >
                <ChevronRight className="w-6 h-6" strokeWidth={2} stroke="white" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

          {/* Mission Section */}
          <section className="py-12 relative overflow-hidden bg-transparent">
            <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-[#38215e]">
                Our Mission
              </h2>
              <p className="text-xl text-[#252525] leading-relaxed">
                To provide comprehensive, reliable, and efficient business solutions that
                empower our clients to achieve their goals while maintaining full compliance
                with regulatory requirements.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Target className="w-6 h-6 text-[#38215e]" strokeWidth={2} stroke="#38215e" />
                  <span className="text-lg text-[#38215e]">Client-Centric Approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#38215e]" strokeWidth={2} stroke="#38215e" />
                  <span className="text-lg text-[#38215e]">100% Compliance Guarantee</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-[#38215e]" strokeWidth={2} stroke="#38215e" />
                  <span className="text-lg text-[#38215e]">Professional Excellence</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#FBFCFD] border border-gray-200 rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-[#38215e]">Our Values</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-[#38215e] mb-2">Integrity</h4>
                  <p className="text-[#252525]">Maintaining the highest ethical standards in all our dealings</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-[#38215e] mb-2">Excellence</h4>
                  <p className="text-[#252525]">Delivering superior quality services that exceed expectations</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-[#38215e] mb-2">Innovation</h4>
                  <p className="text-[#252525]">Embracing technology and modern solutions for better outcomes</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
            </div>
          </div>
      </div>

      {/* CTA Section - Full Width */}
      <section className="py-16 bg-[#a676c8]/70 relative overflow-hidden w-full">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#38215e] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#38215e] rounded-full blur-3xl"></div>
        </div>
        <div className="px-4 text-center relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-white">Ready to Work With Us?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Experience the difference of working with a dedicated professional who puts
              your business needs first.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/enquiry"
                className="inline-flex items-center space-x-2 bg-[#6f3e9a] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#5a2f7a] transition-all duration-300 shadow-lg hover:shadow-[#6f3e9a]/30 transform hover:scale-105"
              >
                <span className="text-white">Get Started Today</span>
                <CheckCircle className="w-5 h-5 text-white" strokeWidth={2} stroke="white" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
