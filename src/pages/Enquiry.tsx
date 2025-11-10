
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import EnquiryImg from "../asset/EnquiryImg.webp";

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const existingEmails = ["test@example.com", "user@domain.com"];

  const services = [
    "GST Registration & Compliance",
    "Income Tax Filing",
    "Business Registration",
    "Project Report Preparation",
    "Import/Export Consultancy",
    "Digital Signature Certificate",
    "Investment Consulting",
    "Professional Training",
    "Other Services",
  ];

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleSelect = (value: string) => {
    setFormData({ ...formData, service: value });
    setDropdownOpen(false);
    const fieldError = validateField("service", value);
    setErrors((prev) => ({ ...prev, service: fieldError }));
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const validateField = (name: string, value: string) => {
    let error = "";
    switch (name) {
      case "name":
        if (!value.trim()) error = "Full name is required.";
        else if (value.length < 3) error = "Name must be at least 3 characters.";
        else if (value.length > 50) error = "Name must not exceed 50 characters.";
        break;
      case "email":
        if (!value.trim()) error = "Email address is required.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = "Enter a valid email address.";
        else if (existingEmails.includes(value.trim().toLowerCase()))
          error = "This email already exists.";
        break;
      case "phone":
        if (!value.trim()) error = "Phone number is required.";
        else if (!/^\d{10}$/.test(value))
          error = "Phone number must be exactly 10 digits.";
        break;
      case "service":
        if (!value.trim()) error = "Please select a service.";
        break;
      case "message":
        if (value.length > 300) error = "Message must not exceed 300 characters.";
        break;
      default:
        break;
    }
    return error;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    let { value } = e.target;
    if (name === "phone") {
      value = value.replace(/\D/g, "");
      if (value.length > 10) value = value.slice(0, 10);
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
    const fieldError = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: fieldError }));
  };

  const validateAll = () => {
    const newErrors: { [key: string]: string } = {};
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field as keyof typeof formData]);
      if (error) newErrors[field] = error;
    });
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateAll();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbysxQNt4FKWWzbOlSjcWIImgcQ3tJU8G8W2Xu0SaR4x1HiLGoAFuboc9Fyd0Sij1HK2/exec";

      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as Record<string, string>),
      });

      // Small delay to ensure request completes
      await new Promise(resolve => setTimeout(resolve, 500));

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      
      // Clear any validation errors
      setErrors({});
      
      alert("✅ Your enquiry has been submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("⚠️ Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white min-h-[45vh] md:min-h-[55vh] flex items-center"
        style={{ backgroundImage: `url(${EnquiryImg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm"
          style={{ backgroundImage: `url(${EnquiryImg})` }}
        ></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-6 mt-20 md:mt-0"
          >
            <h1 className="text-2xl md:text-6xl font-bold">Get In Touch</h1>
            <p className="text-base text-blue-100 max-w-3xl mx-auto">
              Ready to get started? Send us your enquiry and we'll respond
              within 24 hours with a personalized solution for your business
              needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 via-gray-700/20 to-gray-800/20"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-gray-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-8"
            >
              <h2 className="text-xl font-bold text-white mb-6">
                Send Us Your Enquiry
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    autoComplete="off"
                    className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                      errors.name
                        ? "border-red-500"
                        : "border-white/30 hover:border-yellow-400 focus:border-yellow-400"
                    } text-white`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    autoComplete="off"
                    className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                      errors.email
                        ? "border-red-500"
                        : "border-white/30 hover:border-yellow-400 focus:border-yellow-400"
                    } text-white`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    autoComplete="off"
                    maxLength={10}
                    className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                      errors.phone
                        ? "border-red-500"
                        : "border-white/30 hover:border-yellow-400 focus:border-yellow-400"
                    } text-white`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Service Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Service Needed *
                  </label>

                  <motion.div
                    onClick={toggleDropdown}
                    className={`w-full px-4 py-3 rounded-lg cursor-pointer flex justify-between items-center
                      bg-white/10 
                      border ${
                        errors.service
                          ? "border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.7)]"
                          : "border-white/30"
                      } 
                      text-white transition-all duration-300 
                      hover:border-yellow-400 hover:shadow-[0_0_10px_rgba(250,204,21,0.5)]`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{formData.service || "Select a service"}</span>
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
                        {services.map((service, index) => (
                          <motion.li
                            key={index}
                            onClick={() => handleSelect(service)}
                            className="px-4 py-3 text-white hover:bg-gray-600 cursor-pointer"
                          >
                            {service}
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>

                  {errors.service && (
                    <p className="text-red-400 text-sm mt-1">{errors.service}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    maxLength={300}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border text-white hover:border-yellow-400 focus:border-yellow-400"
                    placeholder="Tell us more about your requirements..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-colors ${
                    isSubmitting
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900"
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Submitting...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <Send className="w-5 h-5" />
                      <span>Send Enquiry</span>
                    </div>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Phone</h4>
                      <p className="text-gray-200">+91-98765-43210</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Email</h4>
                      <p className="text-gray-200">info@pkiyenghar.com</p>
                      <p className="text-sm text-gray-400">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Address</h4>
                      <p className="text-gray-200">We will let you know soon</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Office Hours</h4>
                      <p className="text-gray-200">
                        Mon - Fri: 10:00 AM - 2:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                    <span>15+ years of professional experience</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                    <span>500+ satisfied clients</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                    <span>100% compliance guarantee</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                    <span>Affordable and transparent pricing</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enquiry;
