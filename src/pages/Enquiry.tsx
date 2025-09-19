
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Send, Phone, Mail, MapPin, Clock, CheckCircle, } from 'lucide-react';
// import EnquiryImg from "../asset/EnquiryImg.webp";

// const Enquiry = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     service: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const services = [
//     'GST Registration & Compliance',
//     'Income Tax Filing',
//     'Business Registration',
//     'Project Report Preparation',
//     'Import/Export Consultancy',
//     'Digital Signature Certificate',
//     'Investment Consulting',
//     'Professional Training',
//     'Other Services'
//   ];

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate form submission
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setIsSubmitted(true);
      
//       // Reset form after 3 seconds
//       setTimeout(() => {
//         setIsSubmitted(false);
//         setFormData({
//           name: '',
//           email: '',
//           phone: '',
//           service: '',
//           message: ''
//         });
//       }, 3000);
//     }, 2000);
//   };

//   if (isSubmitted) {
//     return (
//       <div className="min-h-screen bg-gray-900 flex items-center justify-center relative overflow-hidden">
//         {/* Background Effects */}
//         <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 via-gray-700/20 to-gray-800/20"></div>
//         <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-600/20 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-500/20 rounded-full blur-3xl"></div>
        
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-8 text-center max-w-md relative z-10"
//         >
//           <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//             <CheckCircle className="w-8 h-8 text-green-600" />
//           </div>
//           <h2 className="text-2xl font-bold text-white mb-4">Thank You!</h2>
//           <p className="text-gray-200 mb-6">
//             Your enquiry has been submitted successfully. We will get back to you within 24 hours.
//           </p>
//           <div className="space-y-2 text-sm text-gray-300">
//             <p>You will receive a confirmation email shortly.</p>
//             <p>For immediate assistance, call us at +91-98765-43210</p>
//           </div>
//         </motion.div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-900 overflow-hidden">
// <section
//   className="relative bg-cover bg-center text-white min-h-[45vh] md:min-h-[55vh] flex items-center"
//   style={{
//     backgroundImage: `url(${EnquiryImg})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   }}
// >
//   {/* Background Blur Overlay */}
//   <div className="absolute inset-0 bg-black opacity-40"></div>
//   <div
//     className="absolute inset-0 bg-cover bg-center filter blur-sm"
//     style={{ backgroundImage: `url(${EnquiryImg})` }}
//   ></div>

//   {/* Content Wrapper */}
//   <div className="container mx-auto px-4 relative z-10 text-center">
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="space-y-4 md:space-y-6 mt-20 md:mt-0"
//     >
//       <h1 className="text-2xl md:text-6xl font-bold">Get In Touch</h1>
//       <p className="text-base text-blue-100 max-w-3xl mx-auto">
//         Ready to get started? Send us your enquiry and we'll respond within 24 hours
//         with a personalized solution for your business needs.
//       </p>
//     </motion.div>
//   </div>
// </section>



//       {/* Contact Form & Info Section */}
//       <section className="py-20 relative">
//         {/* Background Effects */}
//         <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 via-gray-700/20 to-gray-800/20"></div>
//         <div className="absolute top-0 left-0 w-72 h-72 bg-gray-600/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-500/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-8"
//             >
//               <h2 className="text-xl font-bold text-white mb-6">Send Us Your Enquiry</h2>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
//                     Full Name *
//                   </label>
//                   <input
//   type="text"
//   id="name"
//   name="name"
//   value={formData.name}
//   onChange={handleInputChange}
//   autoComplete="off"
//   required
//   className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 
//              placeholder-gray-400 text-white 
//              transition-all duration-300 
//              hover:border-yellow-400 hover:shadow-[0_0_10px_rgba(250,204,21,0.5)] 
//              focus:border-yellow-400 focus:shadow-[0_0_10px_rgba(250,204,21,0.5)] 
//              focus:outline-none"
//   placeholder="Enter your full name"
// />

//                 </div>

//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
//                     Email Address *
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     autoComplete="off" 
//                     required
//                       className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 
//              placeholder-gray-400 text-white 
//              transition-all duration-300 
//              hover:border-yellow-400 hover:shadow-[0_0_10px_rgba(250,204,21,0.5)] 
//              focus:border-yellow-400 focus:shadow-[0_0_10px_rgba(250,204,21,0.5)] 
//              focus:outline-none"
//                     placeholder="Enter your email address"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-2">
//                     Phone Number *
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     autoComplete="off" 
//                     required
//                       className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 
//              placeholder-gray-400 text-white 
//              transition-all duration-300 
//              hover:border-yellow-400 hover:shadow-[0_0_10px_rgba(250,204,21,0.5)] 
//              focus:border-yellow-400 focus:shadow-[0_0_10px_rgba(250,204,21,0.5)] 
//              focus:outline-none"
//                     placeholder="Enter your phone number"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="service" className="block text-sm font-medium text-gray-200 mb-2">
//                     Service Needed *
//                   </label>
//                   <select
//                     id="service"
//                     name="service"
//                     value={formData.service}
//                     onChange={handleInputChange}
//                     required
//                       className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 
//              placeholder-gray-400 text-white 
//              transition-all duration-300 
//              hover:border-yellow-400 hover:shadow-[0_0_10px_rgba(250,204,21,0.5)] 
//              focus:border-yellow-400 focus:shadow-[0_0_10px_rgba(250,204,21,0.5)] 
//              focus:outline-none"
//                   >
//                     <option value="" className="bg-gray-800">Select a service</option>
//                     {services.map((service, index) => (
//                       <option key={index} value={service} className="bg-gray-800">
//                         {service}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     rows={4}
//                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 
//              placeholder-gray-400 text-white 
//              transition-all duration-300 
//              hover:border-yellow-400 hover:shadow-[0_0_10px_rgba(250,204,21,0.5)] 
//              focus:border-yellow-400 focus:shadow-[0_0_10px_rgba(250,204,21,0.5)] 
//              focus:outline-none"
//                     placeholder="Tell us more about your requirements..."
//                   />
//                 </div>

//                 <motion.button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-colors ${
//                     isSubmitting 
//                       ? 'bg-gray-600 cursor-not-allowed' 
//                       : 'bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900'
//                   }`}
//                   whileHover={!isSubmitting ? { scale: 1.02 } : {}}
//                   whileTap={!isSubmitting ? { scale: 0.98 } : {}}
//                 >
//                   {isSubmitting ? (
//                     <div className="flex items-center justify-center space-x-2">
//                       <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                       <span>Submitting...</span>
//                     </div>
//                   ) : (
//                     <div className="flex items-center justify-center space-x-2">
//                       <Send className="w-5 h-5" />
//                       <span>Send Enquiry</span>
//                     </div>
//                   )}
//                 </motion.button>
//               </form>
//             </motion.div>

//             {/* Contact Information */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="space-y-8"
//             >
//               <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-8">
//                 <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
//                 <div className="space-y-6">
//                   <div className="flex items-start space-x-4">
//                     <div className="w-12 h-12 bg-blue-100/20 rounded-lg flex items-center justify-center flex-shrink-0">
//                       <Phone className="w-6 h-6 text-blue-400" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-white">Phone</h4>
//                       <p className="text-gray-200">+91-98765-43210</p>
//                       {/* <p className="text-sm text-gray-400">Mon-Fri: 9:00 AM - 6:00 PM</p> */}
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-4">
//                     <div className="w-12 h-12 bg-green-100/20 rounded-lg flex items-center justify-center flex-shrink-0">
//                       <Mail className="w-6 h-6 text-green-400" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-white">Email</h4>
//                       <p className="text-gray-200">info@pkiyenghar.com</p>
//                       <p className="text-sm text-gray-400">We'll respond within 24 hours</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-4">
//                     <div className="w-12 h-12 bg-purple-100/20 rounded-lg flex items-center justify-center flex-shrink-0">
//                       <MapPin className="w-6 h-6 text-purple-400" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-white">Address</h4>
//                       <p className="text-gray-200">
//                         We will let you know soon<br />
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-4">
//                     <div className="w-12 h-12 bg-orange-100/20 rounded-lg flex items-center justify-center flex-shrink-0">
//                       <Clock className="w-6 h-6 text-orange-400" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-white">Office Hours</h4>
//                       <p className="text-gray-200">
//                         Mon - Fri: 10:00 AM - 2:00 PM<br />
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-xl p-8 border border-white/20">
//                 <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
//                 <ul className="space-y-3">
//                   <li className="flex items-center space-x-3">
//                     <CheckCircle className="w-5 h-5 text-yellow-400" />
//                     <span>15+ years of professional experience</span>
//                   </li>
//                   <li className="flex items-center space-x-3">
//                     <CheckCircle className="w-5 h-5 text-yellow-400" />
//                     <span>500+ satisfied clients</span>
//                   </li>
//                   <li className="flex items-center space-x-3">
//                     <CheckCircle className="w-5 h-5 text-yellow-400" />
//                     <span>100% compliance guarantee</span>
//                   </li>
//                   <li className="flex items-center space-x-3">
//                     <CheckCircle className="w-5 h-5 text-yellow-400" />
//                     <span>24/7 customer support</span>
//                   </li>
//                   <li className="flex items-center space-x-3">
//                     <CheckCircle className="w-5 h-5 text-yellow-400" />
//                     <span>Competitive pricing</span>
//                   </li>
//                 </ul>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Enquiry;


import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
} from "lucide-react";
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
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  // Handle field change
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // clear error when typing
  };

  // Validation
  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }
    if (!formData.service.trim())
      newErrors.service = "Please select a service.";

    return newErrors;
  };

  // Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      }, 3000);
    }, 2000);
  };

  // Success screen
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 via-gray-700/20 to-gray-800/20"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-500/20 rounded-full blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-8 text-center max-w-md relative z-10"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Thank You!</h2>
          <p className="text-gray-200 mb-6">
            Your enquiry has been submitted successfully. We will get back to
            you within 24 hours.
          </p>
          <div className="space-y-2 text-sm text-gray-300">
            <p>You will receive a confirmation email shortly.</p>
            <p>For immediate assistance, call us at +91-98765-43210</p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white min-h-[45vh] md:min-h-[55vh] flex items-center"
        style={{
          backgroundImage: `url(${EnquiryImg})`,
        }}
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
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-200 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    autoComplete="off"
                    className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                      errors.name
                        ? "border-red-500"
                        : "border-white/30 hover:border-yellow-400 focus:border-yellow-400"
                    } placeholder-gray-400 text-white transition-all duration-300 
                    hover:shadow-[0_0_10px_rgba(250,204,21,0.5)] 
                    focus:shadow-[0_0_10px_rgba(250,204,21,0.5)] focus:outline-none`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-200 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    autoComplete="off"
                    className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                      errors.email
                        ? "border-red-500"
                        : "border-white/30 hover:border-yellow-400 focus:border-yellow-400"
                    } placeholder-gray-400 text-white transition-all duration-300 
                    hover:shadow-[0_0_10px_rgba(250,204,21,0.5)] 
                    focus:shadow-[0_0_10px_rgba(250,204,21,0.5)] focus:outline-none`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-200 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    autoComplete="off"
                    className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                      errors.phone
                        ? "border-red-500"
                        : "border-white/30 hover:border-yellow-400 focus:border-yellow-400"
                    } placeholder-gray-400 text-white transition-all duration-300 
                    hover:shadow-[0_0_10px_rgba(250,204,21,0.5)] 
                    focus:shadow-[0_0_10px_rgba(250,204,21,0.5)] focus:outline-none`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-200 mb-2"
                  >
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                      errors.service
                        ? "border-red-500"
                        : "border-white/30 hover:border-yellow-400 focus:border-yellow-400"
                    } placeholder-gray-400 text-white transition-all duration-300 
                    hover:shadow-[0_0_10px_rgba(250,204,21,0.5)] 
                    focus:shadow-[0_0_10px_rgba(250,204,21,0.5)] focus:outline-none`}
                  >
                    <option value="" className="bg-gray-800">
                      Select a service
                    </option>
                    {services.map((service, index) => (
                      <option
                        key={index}
                        value={service}
                        className="bg-gray-800"
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-red-400 text-sm mt-1">{errors.service}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-200 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 
                    placeholder-gray-400 text-white transition-all duration-300 
                    hover:border-yellow-400 focus:border-yellow-400
                    hover:shadow-[0_0_10px_rgba(250,204,21,0.5)] 
                    focus:shadow-[0_0_10px_rgba(250,204,21,0.5)] focus:outline-none"
                    placeholder="Tell us more about your requirements..."
                  />
                </div>

                {/* Submit Button */}
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

            {/* Info Side */}
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
                      <p className="text-gray-200">Mon - Fri: 10:00 AM - 2:00 PM</p>
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

