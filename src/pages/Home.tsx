
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Calculator,
  FileText,
  Users,
  TrendingUp,
  Shield,
  Award,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react";
import HeroImg from "../asset/hero.png";

const Home: React.FC = () => {
  const [program, setProgram] = useState<string>("");
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState({ name: "", email: "", program: "" });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    program?: string;
  }>({});
  const [status, setStatus] = useState<string>("");

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Dummy existing emails
  const existingEmails = ["test@example.com", "hello@domain.com", "user@mail.com"];

  const programs = [
    { value: "gst", label: "GST Compliance" },
    { value: "income-tax", label: "Income Tax" },
    { value: "business-reg", label: "Business Registration" },
    { value: "digital-sig", label: "Digital Signatures" },
  ];

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleSelect = (value: string) => {
    setProgram(value);
    setFormData((prev) => ({ ...prev, program: value }));
    setErrors((prev) => ({ ...prev, program: "" }));
    setDropdownOpen(false);
  };

  // Handle form input with live validation
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  // Field validation
  const validateField = (name: string, value: string) => {
    let message = "";
    if (name === "name") {
      if (!value.trim()) message = "Full Name is required";
      else if (value.length < 3) message = "Name must be at least 3 characters";
      else if (value.length > 50) message = "Name must be less than 50 characters";
    }
    if (name === "email") {
      if (!value.trim()) message = "Email Address is required";
      else if (!/\S+@\S+\.\S+/.test(value)) message = "Enter a valid email address";
      else if (existingEmails.includes(value.toLowerCase()))
        message = "This email already exists";
    }
    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  // Full form validation
  const validateForm = () => {
    const newErrors: { name?: string; email?: string; program?: string } = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    else if (formData.name.length < 3)
      newErrors.name = "Name must be at least 3 characters";
    else if (formData.name.length > 50)
      newErrors.name = "Name must be less than 50 characters";

    if (!formData.email.trim()) newErrors.email = "Email Address is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email address";
    else if (existingEmails.includes(formData.email.toLowerCase()))
      newErrors.email = "This email already exists";

    if (!formData.program) newErrors.program = "Please select a training program";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit (Google Sheets Integration)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setStatus("Sending...");
      try {
        const formPayload = new FormData();
        formPayload.append("name", formData.name);
        formPayload.append("email", formData.email);
        formPayload.append("program", formData.program);

        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbxaF4it3fFgWgUnqLHgffSXuGe3ZXMIJvKF4KlgQpRc-q0u9WkBq7ehmJ7tSxM4stSe/exec",
          {
            method: "POST",
            body: formPayload,
          }
        );

        if (response.ok) {
          setStatus("✅ Submitted successfully!");
          setFormData({ name: "", email: "", program: "" });
          setProgram("");
          setErrors({});
        } else {
          setStatus("❌ Failed to submit. Try again.");
        }
      } catch (error) {
        console.error(error);
        setStatus("❌ Error! Please try again.");
      }
    }
  };

  // Close dropdown when click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  // Close dropdown when click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const services = [
    { icon: Calculator, title: 'Taxation Services', description: 'GST, TDS, Income Tax filing and compliance', color: 'bg-blue-100 text-blue-600' },
    { icon: FileText, title: 'Business Registration', description: 'MSME, PAN, TAN, FSSAI, RERA registrations', color: 'bg-green-100 text-green-600' },
    { icon: TrendingUp, title: 'Project Reports', description: 'DPR, feasibility studies, certifications', color: 'bg-purple-100 text-purple-600' },
    { icon: Shield, title: 'Digital Signatures', description: 'Class 2 & 3 digital certificates', color: 'bg-orange-100 text-orange-600' }
  ];

  const testimonials = [
    { name: 'Rajesh Kumar', role: 'Small Business Owner', content: 'Excellent service for GST registration and compliance. Very professional and timely.', rating: 5 },
    { name: 'Priya Sharma', role: 'Startup Founder', content: 'Dr. Iyenghar helped us with all our business registrations. Highly recommended!', rating: 5 },
    { name: 'Amit Patel', role: 'Individual Client', content: 'Best tax consultancy services. They handle everything with great care and expertise.', rating: 5 }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      
      {/* Hero Section */}
          <section
        className="bg-cover bg-center md:min-h-[60vh] text-white"
        style={{ backgroundImage: `url(${HeroImg})` }}
      >
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-6 md:mt-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 mt-6 md:mt-12"
            >
              <h1 className="text-2xl md:text-5xl font-bold leading-tight">
                Professional
                <span className="text-yellow-400"> Tax Consulting </span>
                <span className="text-2xl md:text-5xl font-bold leading-tight">Services</span>
              </h1>
              
              <p className="text-lg text-blue-100 leading-relaxed">
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
                  className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white 
                    px-6 py-3 rounded-lg font-semibold
                    max-w-[250px] w-full
                    hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(250,204,21,0.8)]
                    focus:border-yellow-400 focus:shadow-[0_0_20px_rgba(250,204,21,0.8)]
                    hover:bg-white hover:text-yellow-600 transition-all duration-300 focus:outline-none"
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
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
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

      {/* Services */}
           <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 via-gray-700/20 to-gray-800/20"></div>
       <div className="absolute top-0 left-0 w-72 h-72 bg-gray-600/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
         <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-500/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>

         <div className="container mx-auto px-4 relative z-10">
           <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
                viewport={{ once: true }}
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
            viewport={{ once: true }}
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


      {/* Testimonials */}
     <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 via-gray-700/20 to-gray-800/20"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-600/20 rounded-full blur-3xl"></div>
         <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-500/20 rounded-full blur-3xl"></div>
         <div className="container mx-auto px-4 relative z-10">
           <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
                viewport={{ once: true }}
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
      <section className="py-28 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-yellow-400 bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
                Professional Training Programs
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed">
                Enhance your skills with our comprehensive training programs designed for
                students and professionals in taxation and business compliance.
              </p>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Get Training Information</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                
                {/* Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    autoComplete="off"
                    className={`w-full px-4 py-3 rounded-lg bg-white/10 
                      border ${errors.name ? "border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.7)]" : "border-white/30"} 
                      placeholder-gray-400 text-white 
                      transition-all duration-300 
                      hover:border-yellow-400 hover:shadow-[0_0_10px_rgba(250,204,21,0.5)] 
                      focus:outline-none`}
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    autoComplete="off"
                    className={`w-full px-4 py-3 rounded-lg bg-white/10 
                      border ${errors.email ? "border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.7)]" : "border-white/30"} 
                      placeholder-gray-400 text-white 
                      transition-all duration-300 
                      hover:border-yellow-400 hover:shadow-[0_0_10px_rgba(250,204,21,0.5)] 
                      focus:outline-none`}
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <motion.div
                    onClick={toggleDropdown}
                    className={`w-full px-4 py-3 rounded-lg cursor-pointer flex justify-between items-center
                      bg-white/10 
                      border ${errors.program ? "border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.7)]" : "border-white/30"} 
                      text-white transition-all duration-300 
                      hover:border-yellow-400 hover:shadow-[0_0_10px_rgba(250,204,21,0.5)]`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{programs.find(p => p.value === program)?.label || "Select Training Program"}</span>
                    <span>{dropdownOpen ? "▲" : "▼"}</span>
                  </motion.div>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute left-0 right-0 mt-1 bg-gray-800 rounded-lg shadow-lg overflow-hidden z-20"
                      >
                        {programs.map((p) => (
                          <motion.li
                            key={p.value}
                            onClick={() => handleSelect(p.value)}
                            className="px-4 py-3 text-white hover:bg-gray-600 cursor-pointer"
                          >
                            {p.label}
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                  {errors.program && <p className="text-red-400 text-sm mt-1">{errors.program}</p>}
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gray-600 to-gray-800 text-white py-3 rounded-lg font-semibold hover:from-gray-700 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-gray-400/30 transform hover:scale-105"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Request Training Details
                </motion.button>
              </form>
              {status && <p className="text-sm mt-3 text-yellow-300">{status}</p>}
            </motion.div>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-12 bg-gray-900 text-white">
         <div className="container mx-auto px-4 text-center">
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Let us handle your business compliance needs so you can focus on what you do best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/enquiry"
                  className="inline-flex items-center space-x-2 bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.a
                href="tel:+91-9876543210"
                className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(250,204,21,0.8)]
                  focus:border-yellow-400 focus:shadow-[0_0_20px_rgba(250,204,21,0.8)]
                  hover:bg-white hover:text-yellow-600 transition-all duration-300 focus:outline-none"
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
