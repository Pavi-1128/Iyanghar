
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import EnquiryImg from "../asset/Enquiry.jpg";

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
    <div className="min-h-screen overflow-hidden" style={{ backgroundColor: '#EDF4FF' }}>
      {/* Main Content - Full Width */}
      <div className="w-full">
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
                <h1 className="text-2xl md:text-6xl font-bold text-[#38215e]">Get In Touch</h1>
                <p className="text-base  max-w-3xl mx-auto text-[#38215e]">
                  Ready to get started? Send us your enquiry and we'll respond
                  within 24 hours with a personalized solution for your business
                  needs.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-12 relative bg-transparent">
            <div className="px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-[#FBFCFD] border border-gray-200 rounded-xl shadow-lg p-8"
            >
              <h2 className="text-xl font-bold text-[#38215e] mb-6">
                Send Us Your Enquiry
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-[#252525] mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    autoComplete="off"
                    className={`w-full px-4 py-3 rounded-xl bg-white 
                      border-2 ${errors.name ? "border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.7)]" : "border-gray-200"} 
                      placeholder-gray-400 text-[#252525] 
                      transition-all duration-300 
                      hover:border-[#38215e] hover:shadow-md
                      focus:border-[#38215e] focus:shadow-lg focus:outline-none`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                      <span>⚠</span> {errors.name}
                    </p>
                  )}
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
                    onChange={handleInputChange}
                    autoComplete="off"
                    className={`w-full px-4 py-3 rounded-xl bg-white 
                      border-2 ${errors.email ? "border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.7)]" : "border-gray-200"} 
                      placeholder-gray-400 text-[#252525] 
                      transition-all duration-300 
                      hover:border-[#38215e] hover:shadow-md
                      focus:border-[#38215e] focus:shadow-lg focus:outline-none`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                      <span>⚠</span> {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-[#252525] mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    autoComplete="off"
                    maxLength={10}
                    className={`w-full px-4 py-3 rounded-xl bg-white 
                      border-2 ${errors.phone ? "border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.7)]" : "border-gray-200"} 
                      placeholder-gray-400 text-[#252525] 
                      transition-all duration-300 
                      hover:border-[#38215e] hover:shadow-md
                      focus:border-[#38215e] focus:shadow-lg focus:outline-none`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                      <span>⚠</span> {errors.phone}
                    </p>
                  )}
                </div>

                {/* Service Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <label className="block text-sm font-semibold text-[#252525] mb-2">
                    Service Needed <span className="text-red-500">*</span>
                  </label>

                  <motion.div
                    onClick={toggleDropdown}
                    className={`w-full px-4 py-3 rounded-xl cursor-pointer flex justify-between items-center
                      bg-white border-2 ${errors.service ? "border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.7)]" : "border-gray-200"} 
                      text-[#252525] transition-all duration-300 
                      hover:border-[#38215e] hover:shadow-md
                      focus-within:border-[#38215e] focus-within:shadow-lg`}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <span className={formData.service ? "text-[#252525]" : "text-gray-400"}>
                      {formData.service || "Select a service"}
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
                        {services.map((service, index) => (
                          <motion.li
                            key={index}
                            onClick={() => handleSelect(service)}
                            className="px-4 py-3 text-[#252525] hover:bg-[#38215e]/20 hover:text-[#38215e] cursor-pointer transition-colors duration-200"
                          >
                            {service}
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>

                  {errors.service && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                      <span>⚠</span> {errors.service}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-[#252525] mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    maxLength={300}
                    className="w-full px-4 py-3 rounded-xl bg-white 
                      border-2 border-gray-200 
                      placeholder-gray-400 text-[#252525] 
                      transition-all duration-300 
                      hover:border-[#38215e] hover:shadow-md
                      focus:border-[#38215e] focus:shadow-lg focus:outline-none"
                    placeholder="Tell us more about your requirements..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                      <span>⚠</span> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-white ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#6f3e9a] hover:bg-[#5a2f7a] transition-all duration-300 shadow-lg hover:shadow-[#6f3e9a]/30 transform hover:scale-105"
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
                      <Send className="w-5 h-5 text-white" strokeWidth={2} stroke="white" />
                      <span className="text-white">Send Enquiry</span>
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
              <div className="bg-[#FBFCFD] border border-gray-200 rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-[#38215e] mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#a676c8] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" strokeWidth={2} stroke="white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#38215e]">Phone</h4>
                      <p className="text-[#252525]">+91-98765-43210</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#a676c8] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" strokeWidth={2} stroke="white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#38215e]">Email</h4>
                      <p className="text-[#252525]">info@pkiyenghar.com</p>
                      <p className="text-sm text-gray-600">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#a676c8] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" strokeWidth={2} stroke="white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#38215e]">Address</h4>
                      <p className="text-[#252525]">We will let you know soon</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#a676c8] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" strokeWidth={2} stroke="white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#38215e]">Office Hours</h4>
                      <p className="text-[#252525]">
                        Mon - Fri: 10:00 AM - 2:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#FBFCFD] border border-gray-200 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-[#38215e]">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#38215e]" strokeWidth={2} stroke="#38215e" />
                    <span className="text-[#252525]">15+ years of professional experience</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#38215e]" strokeWidth={2} stroke="#38215e" />
                    <span className="text-[#252525]">500+ satisfied clients</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#38215e]" strokeWidth={2} stroke="#38215e" />
                    <span className="text-[#252525]">100% compliance guarantee</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#38215e]" strokeWidth={2} stroke="#38215e" />
                    <span className="text-[#252525]">Affordable and transparent pricing</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Enquiry;

