
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Calculator,
  FileText,
  TrendingUp,
  Shield,
  ArrowRight,
  Star,
  X,
  CheckCircle,
} from "lucide-react";
import HeroImg from "../asset/HomeImg.jpg";

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
  const [selectedService, setSelectedService] = useState<string | null>(null);

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


  const testimonials = [
    { name: 'Rajesh Kumar', role: 'Small Business Owner', content: 'Excellent service for GST registration and compliance. Very professional and timely.', rating: 5 },
    { name: 'Priya Sharma', role: 'Startup Founder', content: 'Dr. Iyenghar helped us with all our business registrations. Highly recommended!', rating: 5 },
    { name: 'Amit Patel', role: 'Individual Client', content: 'Best tax consultancy services. They handle everything with great care and expertise.', rating: 5 }
  ];

  // Service details mapping from Services page
  const serviceDetails: { [key: string]: { title: string; items: string[] } } = {
    'GST': {
      title: 'GST Services',
      items: ['GST Registration & Cancellation', 'GST Return Filing', 'GST Compliance', 'GST Audit & Assessment', 'Input Tax Credit Optimization']
    },
    'Income Tax': {
      title: 'Income Tax',
      items: ['Individual ITR Filing', 'Corporate Tax Returns', 'Tax Planning & Advisory', 'TDS Compliance', 'Tax Assessment & Appeals']
    },
    'Government Registrations': {
      title: 'Government Registrations',
      items: ['MSME Registration', 'PAN & TAN', 'FSSAI License']
    },
    'Import/Export': {
      title: 'Import/Export',
      items: ['IEC Code Registration', 'RCMC Certificate', 'Export Promotion Registration']
    },
    'Project Reports': {
      title: 'Project Reports',
      items: ['Detailed Project Report (DPR)', 'Feasibility Study', 'Market Research']
    },
    'Certifications': {
      title: 'Certifications',
      items: ['ISO Certification', 'HACCP Certification', 'BIS Certification']
    },
    'Documentation': {
      title: 'Documentation',
      items: ['Commercial Invoice', 'Packing List', 'Certificate of Origin']
    },
    'Compliance': {
      title: 'Compliance',
      items: ['DGFT Policy', 'Export Incentive Schemes', 'Customs Duty Optimization']
    },
    'DSC Services': {
      title: 'DSC Services',
      items: ['Class 2 DSC', 'Class 3 DSC', 'GST DSC']
    },
    'Implementation': {
      title: 'Implementation',
      items: ['DSC Installation', 'E-filing Assistance', 'Token Configuration']
    },
    'Investment Planning': {
      title: 'Investment Planning',
      items: ['Mutual Fund Advisory', 'SIP Planning', 'Tax Saving Investments']
    },
    'Financial Services': {
      title: 'Financial Services',
      items: ['Loan Advisory', 'Credit Score Improvement', 'Portfolio Management']
    }
  };

  // Academy courses/topics they teach
  const academyCourses = [
    { title: "GST Compliance", icon: Calculator },
    { title: "Income Tax", icon: FileText },
    { title: "Business Registration", icon: TrendingUp },
    { title: "Digital Signatures", icon: Shield },
    { title: "Tax Planning", icon: Calculator },
    { title: "TDS Compliance", icon: FileText },
  ];

  // Sample ads with links
  const ads = [
    { 
      title: "Premium Tax Software", 
      description: "Get 20% off on professional tax tools",
      link: "https://example.com/tax-software",
      color: "bg-blue-500"
    },
    { 
      title: "Business Loans", 
      description: "Quick approval for your business",
      link: "https://example.com/business-loans",
      color: "bg-[#38215e]"
    },
    { 
      title: "Accounting Services", 
      description: "Expert bookkeeping solutions",
      link: "https://example.com/accounting",
      color: "bg-purple-500"
    },
    { 
      title: "Legal Services", 
      description: "Professional legal consultation",
      link: "https://example.com/legal",
      color: "bg-orange-500"
    },
    { 
      title: "Cloud Accounting", 
      description: "Modern cloud-based solutions",
      link: "https://example.com/cloud",
      color: "bg-indigo-500"
    },
    { 
      title: "Business Insurance", 
      description: "Protect your business assets",
      link: "https://example.com/insurance",
      color: "bg-red-500"
    },
    { 
      title: "HR Solutions", 
      description: "Complete HR management system",
      link: "https://example.com/hr",
      color: "bg-teal-500"
    },
    { 
      title: "Marketing Tools", 
      description: "Boost your business visibility",
      link: "https://example.com/marketing",
      color: "bg-pink-500"
    },
    
    { 
      title: "Business Analytics", 
      description: "Data-driven business insights",
      link: "https://example.com/analytics",
      color: "bg-rose-500"
    },
    { 
      title: "Customer Support", 
      description: "24/7 customer service solutions",
      link: "https://example.com/support",
      color: "bg-sky-500"
    },
    
   
  ];

  return (
    <div className="min-h-screen overflow-hidden pt-20 bg-[#EDF4FF]">
      {/* Main 3-column layout */}
      <div className="flex w-full flex-col lg:flex-row">
        {/* First Column - 20% - Academy Courses */}
        <div className="w-full lg:w-[20%] border-r-0 lg:border-r border-gray-200 bg-white/50 order-2 lg:order-1 lg:h-screen lg:overflow-y-auto scrollbar-thin scrollbar-thumb-[#a676c8] scrollbar-track-gray-100">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-0 p-4"
          >
            <h2 className="text-xl font-bold text-[#252525] mb-4 pb-2 border-b-2 border-[#38215e]">
              What We Teach
            </h2>
            <div className="space-y-3">
              {academyCourses.map((course, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="bg-[#FBFCFD] border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-lg bg-[#a676c8] flex items-center justify-center">
                        <course.icon className="w-4 h-4 text-white" strokeWidth={2} stroke="white" />
                      </div>
                      <span className="text-sm font-semibold text-[#252525] group-hover:text-[#38215e] transition-colors">
                        {course.title}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 p-3 bg-[#6f3e9a] rounded-lg text-center hover:bg-[#5a2f7a] transition-all duration-300 shadow-lg hover:shadow-[#6f3e9a]/30"
            >
              <p className="text-xs font-semibold text-white">Join Our Academy</p>
              <p className="text-xs mt-1 text-white">Professional Training Programs</p>
            </motion.div>
          </motion.div>
        </div>
        {/* End of First Column - 20% */}

        {/* Scroll Container for Columns 2 & 3 */}
        <div className="w-full lg:w-[80%] flex flex-col lg:flex-row order-1 lg:order-2 lg:h-screen lg:overflow-y-auto scrollbar-thin scrollbar-thumb-[#38215e] scrollbar-track-gray-100">
          {/* Second Column - 65% - Main Content */}
          <div className="w-full lg:w-[85%] px-2 lg:px-4">
      
      {/* Hero Section */}
          <section className="bg-transparent py-6 relative">
        <div className="px-4 max-w-7xl mx-auto relative">
          {/* Curved Rectangle Background with Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 left-4 right-4 bottom-0  rounded-3xl overflow-hidden shadow-xl"
            style={{
              backgroundImage: `url(${HeroImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              minHeight: '220px',
              filter: 'blur(3px)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent rounded-3xl"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-3 relative z-10 p-5 md:p-6"
          >
            {/* Main Headline */}
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight drop-shadow-lg">
                Professional <span className="text-[#38215e] font-bold ">Tax Consulting</span> Services
              </h1>
            </div>

            {/* Description */}
            <div>
              <p className="text-base md:text-lg text-white leading-relaxed max-w-4xl drop-shadow-md">
                Comprehensive taxation, business registration, and consulting services
                for individuals, SMEs, and students with over 15 years of expertise.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/enquiry"
                  className="inline-flex items-center space-x-2 bg-[#6f3e9a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#5a2f7a] transition-all duration-300 shadow-lg hover:shadow-[#6f3e9a]/30 transform hover:scale-105 text-sm"
                >
                  <span className="text-white">Request Callback</span>
                  <ArrowRight className="w-4 h-4 text-white" strokeWidth={2} stroke="white" />
                </Link>
              </motion.div>
              <motion.a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 border-2 border-green text-white 
                  px-5 py-3 rounded-lg font-semibold text-sm shadow-lg
                  hover:border-[#5a2f7a] focus:border-[#a676c8] 
                  hover:shadow-[#5a2f7a]/30 transition-all duration-300 focus:outline-none"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-white">WhatsApp Us</span>
                <ArrowRight className="w-4 h-4 text-white" strokeWidth={2} stroke="white" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
           <section className="pt-8 pb-20 relative overflow-hidden bg-transparent">

         <div className="px-4 relative z-10">
          {/* Enhanced Header Section */}
           <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#38215e] mb-4">
              Our <span className="text-[#38215e]">Services</span>
            </h2>
            <p className="text-lg md:text-xl text-[#252525] max-w-3xl mx-auto leading-relaxed">
              Comprehensive end-to-end business solutions from tax compliance to business registrations, tailored for individuals, SMEs, and enterprises.
            </p>
          </motion.div>

          {/* Service Categories Info Card */}
              <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#FBFCFD] border border-gray-200 rounded-2xl p-8 mb-8 shadow-lg"
          >
            <div className="text-center mb-8">
              <p className="text-gray-600 mb-1">Click on any service below to view detailed information</p>
              <div className="w-24 h-1 bg-gradient-to-r from-[#38215e] to-[#38215e] mx-auto rounded-full"></div>
            </div>
            
            {/* Service Buttons Grid with Icons */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: 'GST', icon: Calculator, desc: 'Tax Services' },
                { name: 'Income Tax', icon: FileText, desc: 'Tax Filing' },
                { name: 'Government Registrations', icon: Shield, desc: 'Business Setup' },
                { name: 'Import/Export', icon: TrendingUp, desc: 'Trade Services' },
                { name: 'Project Reports', icon: FileText, desc: 'DPR & Analysis' },
                { name: 'Certifications', icon: Shield, desc: 'ISO & Standards' },
                { name: 'Documentation', icon: FileText, desc: 'Trade Documents' },
                { name: 'Compliance', icon: Shield, desc: 'Regulatory' },
                { name: 'DSC Services', icon: Shield, desc: 'Digital Certificates' },
                { name: 'Implementation', icon: TrendingUp, desc: 'Setup & Support' },
                { name: 'Investment Planning', icon: TrendingUp, desc: 'Financial Advisory' },
                { name: 'Financial Services', icon: Calculator, desc: 'Portfolio Management' }
              ].map((service, index) => (
                <motion.button
                key={index}
                  onClick={() => setSelectedService(service.name)}
                  initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white border-2 border-gray-200 rounded-xl px-4 py-5 text-center
                    hover:bg-[#a676c8]/20 hover:border-[#a676c8] 
                    transition-all duration-300 shadow-md hover:shadow-xl
                    focus:outline-none focus:ring-2 focus:ring-[#a676c8] focus:ring-offset-2
                    relative overflow-hidden group"
                >
                  <div className="relative z-10">
                    <div className="w-6 h-6 mx-auto mb-2 icon-container">
                      <service.icon className="w-full h-full transition-all duration-300" strokeWidth={2} stroke="#38215e" />
                    </div>
                    <div className="font-semibold text-sm mb-1 text-[#38215e] transition-colors">{service.name}</div>
                    <div className="text-xs text-[#38215e] transition-colors">{service.desc}</div>
                  </div>
                  <div className="absolute inset-0 bg-[#a676c8]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Key Features Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#a676c8]/30 rounded-2xl p-5 text-[#38215e] shadow-xl mb-8"
          >
            <div className="text-center mb-5">
              <h3 className="text-2xl md:text-3xl text-[#38215e] font-bold mb-2">Why Choose Our Services?</h3>
              <p className="text-[#38215e]/80 max-w-2xl mx-auto text-sm">
                We combine expertise, technology, and personalized service to deliver exceptional results for your business
                  </p>
                </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { icon: Shield, text: '100% Compliance Guarantee', desc: 'Full regulatory adherence' },
                { icon: FileText, text: 'Expert Documentation', desc: 'Accurate & timely filing' },
                { icon: TrendingUp, text: 'Fast Processing', desc: 'Quick turnaround times' },
                { icon: Calculator, text: 'Transparent Pricing', desc: 'No hidden charges' }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/50 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/70 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#a676c8]/30 rounded-full flex items-center justify-center mx-auto mb-2">
                    <feature.icon className="w-6 h-6 text-[#38215e]" strokeWidth={2} stroke="#38215e" />
                  </div>
                  <p className="text-sm font-semibold mb-1 text-[#38215e]">{feature.text}</p>
                  <p className="text-xs text-[#38215e]/70">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
          </motion.div>

          {/* Service Details Modal */}
          <AnimatePresence>
            {selectedService && serviceDetails[selectedService] && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedService(null)}
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                />
                {/* Modal */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className="fixed inset-0 z-50 flex items-center justify-center p-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="bg-[#FBFCFD] rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200">
                    {/* Modal Header */}
                    <div className="sticky top-0 bg-[#FBFCFD] border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
                      <h3 className="text-2xl font-bold text-[#252525]">
                        {serviceDetails[selectedService].title}
                      </h3>
                      <button
                        onClick={() => setSelectedService(null)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <X className="w-6 h-6 text-[#252525]" />
                      </button>
                    </div>
                    {/* Modal Content */}
                    <div className="p-6">
                      <ul className="space-y-3">
                        {serviceDetails[selectedService].items.map((item, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="flex items-start space-x-3"
                          >
                            <CheckCircle className="w-5 h-5 text-[#38215e] mt-0.5 flex-shrink-0" />
                            <span className="text-[#252525] text-base">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    {/* Modal Footer */}
                    <div className="sticky bottom-0 bg-[#FBFCFD] border-t border-gray-200 px-6 py-4 flex justify-end rounded-b-2xl">
                      <motion.button
                        onClick={() => setSelectedService(null)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#6f3e9a] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#5a2f7a] transition-all duration-300 shadow-lg hover:shadow-[#6f3e9a]/30 transform hover:scale-105"
                      >
                        Close
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 bg-[#6f3e9a] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#5a2f7a] transition-all duration-300 shadow-lg hover:shadow-[#6f3e9a]/30 transform hover:scale-105"
            >
              <span className="text-white">View All Services</span>
              <ArrowRight className="w-5 h-5 text-white" strokeWidth={2} stroke="white" />
            </Link>
          </motion.div>
        </div>
      </section>


      {/* Testimonials */}
     <section className="pt-8 pb-20 relative overflow-hidden bg-transparent">
         <div className="px-4 relative z-10">
           <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#38215e] mb-4">
              What Our <span className="text-[#38215e]">Clients Say</span>
            </h2>
            <p className="text-lg md:text-xl text-[#252525] max-w-2xl mx-auto">
              Trusted by hundreds of satisfied clients across various industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-[#FBFCFD] hover:bg-[#a676c8]/20 border border-gray-200 hover:border-[#38215e] rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
              >
                
                <div className="relative z-10">
                  {/* Quote icon */}
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#38215e] to-[#38215e] rounded-full flex items-center justify-center mb-4">
                      <span className="text-white text-2xl font-bold">"</span>
                    </div>
                  </div>
                  
                  {/* Rating stars */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" strokeWidth={2} stroke="#D4AF37" />
                    ))}
                  </div>
                  
                  {/* Testimonial content */}
                  <p className="text-[#38215e] mb-6 leading-relaxed text-base">
                    {testimonial.content}
                  </p>
                  
                  {/* Author info */}
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-bold text-[#38215e] text-lg mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-[#38215e]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-16 relative overflow-hidden bg-transparent">
        <div className="px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-block mb-4 px-4 py-1.5 bg-[#38215e]/10 rounded-full">
                <span className="text-[#38215e] font-semibold text-sm uppercase tracking-wider">Training</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#38215e]">
                Professional <span className="text-[#38215e]">Training Programs</span>
              </h2>
              <p className="text-lg md:text-xl text-[#252525] leading-relaxed">
                Enhance your skills with our comprehensive training programs designed for
                students and professionals in taxation and business compliance.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-[#38215e]">
                  <CheckCircle className="w-5 h-5 text-[#38215e]" />
                  <span className="text-sm font-bold">Expert Instructors</span>
                </div>
                <div className="flex items-center gap-2 text-[#38215e]">
                  <CheckCircle className="w-5 h-5 text-[#38215e]" />
                  <span className="text-sm font-bold">Practical Learning</span>
                </div>
                <div className="flex items-center gap-2 text-[#38215e]">
                  <CheckCircle className="w-5 h-5 text-[#38215e]" />
                  <span className="text-sm font-bold">Certification</span>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#FBFCFD] border border-gray-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#38215e] to-[#38215e] rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-white" strokeWidth={2} stroke="white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#38215e] mb-2">Get Training Information</h3>
                  <p className="text-sm text-gray-600">Fill out the form below to receive details</p>
                </div>
                <form className="space-y-5" onSubmit={handleSubmit}>
                {/* Name */}
                <div>
                    <label className="block text-sm font-semibold text-[#252525] mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                      placeholder="Enter your full name"
                    autoComplete="off"
                      className={`w-full px-4 py-3 rounded-xl bg-white 
                        border-2 ${errors.name ? "border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.7)]" : "border-gray-200"} 
                      placeholder-gray-400 text-[#252525] 
                      transition-all duration-300 
                        hover:border-[#38215e] hover:shadow-md
                        focus:border-[#38215e] focus:shadow-lg focus:outline-none`}
                  />
                    {errors.name && <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                      <span>⚠</span> {errors.name}
                    </p>}
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-semibold text-[#252525] mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                      placeholder="Enter your email address"
                    autoComplete="off"
                      className={`w-full px-4 py-3 rounded-xl bg-white 
                        border-2 ${errors.email ? "border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.7)]" : "border-gray-200"} 
                      placeholder-gray-400 text-[#252525] 
                      transition-all duration-300 
                        hover:border-[#38215e] hover:shadow-md
                        focus:border-[#38215e] focus:shadow-lg focus:outline-none`}
                  />
                    {errors.email && <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                      <span>⚠</span> {errors.email}
                    </p>}
                </div>

                {/* Dropdown */}
                <div className="relative" ref={dropdownRef}>
                    <label className="block text-sm font-semibold text-[#252525] mb-2">
                      Training Program <span className="text-red-500">*</span>
                    </label>
                  <motion.div
                    onClick={toggleDropdown}
                      className={`w-full px-4 py-3 rounded-xl cursor-pointer flex justify-between items-center
                        bg-white border-2 ${errors.program ? "border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.7)]" : "border-gray-200"} 
                      text-[#252525] transition-all duration-300 
                        hover:border-[#38215e] hover:shadow-md
                        focus-within:border-[#38215e] focus-within:shadow-lg`}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <span className={program ? "text-[#252525]" : "text-gray-400"}>
                        {programs.find(p => p.value === program)?.label || "Select Training Program"}
                      </span>
                      <span className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}>▼</span>
                  </motion.div>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                          className="absolute left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-xl overflow-hidden z-20"
                      >
                        {programs.map((p) => (
                          <motion.li
                            key={p.value}
                            onClick={() => handleSelect(p.value)}
                              className="px-4 py-3 text-[#252525] hover:bg-[#38215e]/20 hover:text-[#38215e] cursor-pointer transition-colors duration-200"
                          >
                            {p.label}
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                    {errors.program && <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                      <span>⚠</span> {errors.program}
                    </p>}
                </div>

                <motion.button
                  type="submit"
                    className="w-full bg-[#6f3e9a] text-white py-4 rounded-xl font-semibold hover:bg-[#5a2f7a] transition-all duration-300 shadow-lg hover:shadow-[#6f3e9a]/30 transform hover:scale-105 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-white">Request Training Details</span>
                  <ArrowRight className="w-5 h-5 text-white" strokeWidth={2} stroke="white" />
                </motion.button>
              </form>
                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-3 bg-[#38215e]/20 border border-[#38215e]/30 rounded-lg text-center"
                  >
                    <p className="text-sm text-[#38215e] font-medium">{status}</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
        </div>
          {/* End of Second Column - 65% */}

          {/* Third Column - 20% - Ads */}
          <div className="w-full lg:w-[20%] border-l-0 lg:border-l border-t lg:border-t-0 border-gray-200 bg-white/50 p-4 lg:flex lg:flex-col lg:self-start">
         <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-0 lg:overflow-y-auto scrollbar-thin scrollbar-thumb-[#38215e] scrollbar-track-gray-100 space-y-4 pb-4 w-full"
          >
            <h2 className="text-lg font-bold text-[#252525] mb-4 pb-2 border-b-2 border-[#38215e]">
              Advertisement
            </h2>
            {ads.map((ad, index) => (
              <motion.a
                key={index}
                href={ad.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="block bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-lg transition-all duration-300 group mb-4"
              >
                <div className={`w-full h-24 ${ad.color} rounded-lg mb-3 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity`}>
                  <span className="text-white text-xs font-bold text-center px-2">AD</span>
                </div>
                <h3 className="text-sm font-bold text-[#252525] mb-1 group-hover:text-[#38215e] transition-colors">
                  {ad.title}
                </h3>
                <p className="text-xs text-gray-600 leading-tight mb-2">
                  {ad.description}
                </p>
                <div className="mt-2 text-xs text-[#38215e] font-semibold group-hover:underline">
                  Learn More →
                </div>
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 p-4 bg-gray-100 rounded-lg text-center border border-gray-200 mb-4"
            >
              <p className="text-xs text-gray-500 font-semibold">Ad Space Available</p>
              <p className="text-xs text-gray-400 mt-1">Contact us for advertising</p>
            </motion.div>
            
            {/* Spacer to extend ads column until Training Section */}
            <div className="flex-1 min-h-[300px]"></div>
          </motion.div>
        </div>
          {/* End of Third Column - 15% */}
        </div>
        {/* End of Scroll Container for Columns 2 & 3 */}
      </div>
      {/* End of 3-column layout */}

      {/* CTA - Full Width */}
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
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-white">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Let us handle your business compliance needs so you can focus on what you do best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/enquiry"
                  className="inline-flex items-center space-x-2 bg-[#6f3e9a] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#5a2f7a] transition-all duration-300 shadow-lg hover:shadow-[#6f3e9a]/30 transform hover:scale-105"
                >
                  <span className="text-white">Get Free Consultation</span>
                  <ArrowRight className="w-5 h-5 text-white" strokeWidth={2} stroke="white" />
                </Link>
              </motion.div>
              <motion.a
                href="tel:+91-9876543210"
                className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#a676c8] transition-all duration-300 hover:shadow-lg focus:outline-none"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-white hover:text-black">Call Now: +91-98765-43210</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
