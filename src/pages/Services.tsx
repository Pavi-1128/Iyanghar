import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ServiceImg from "../asset/ServiceImg.webp"
import { 
  Calculator, 
  FileText, 
  Building, 
  TrendingUp, 
  Shield, 
  DollarSign,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const services = [
    {
      id: 'taxation',
      icon: Calculator,
      title: 'Taxation Services',
      description: 'Complete tax solutions for individuals and businesses',
      color: 'bg-blue-100 text-blue-600',
      subcategories: [
        {
          title: 'GST Services',
          items: [
            'GST Registration & Cancellation',
            'GST Return Filing (GSTR-1, GSTR-3B, GSTR-9)',
            'GST Compliance & Advisory',
            'GST Audit & Assessment',
            'Input Tax Credit Optimization'
          ]
        },
        {
          title: 'Income Tax',
          items: [
            'Individual ITR Filing',
            'Corporate Tax Returns',
            'Tax Planning & Advisory',
            'TDS Compliance',
            'Tax Assessment & Appeals'
          ]
        },
        {
          title: 'Other Tax Services',
          items: [
            'Professional Tax',
            'Service Tax (Legacy Issues)',
            'Custom Duty Advisory',
            'Tax Litigation Support'
          ]
        }
      ]
    },
    {
      id: 'registrations',
      icon: FileText,
      title: 'Business Registrations',
      description: 'All types of business registrations and licenses',
      color: 'bg-green-100 text-green-600',
      subcategories: [
        {
          title: 'Company Registration',
          items: [
            'Private Limited Company',
            'Public Limited Company',
            'Limited Liability Partnership (LLP)',
            'Partnership Firm',
            'Sole Proprietorship'
          ]
        },
        {
          title: 'Government Registrations',
          items: [
            'MSME Registration',
            'PAN & TAN Registration',
            'FSSAI License',
            'RERA Registration',
            'Shop & Establishment License'
          ]
        },
        {
          title: 'Import/Export',
          items: [
            'IEC Code Registration',
            'RCMC Certificate',
            'Export Promotion Council Registration',
            'Custom Clearance Support'
          ]
        }
      ]
    },
    {
      id: 'project-reports',
      icon: TrendingUp,
      title: 'Project Reports & Certifications',
      description: 'Professional project reports and business certifications',
      color: 'bg-purple-100 text-purple-600',
      subcategories: [
        {
          title: 'Project Reports',
          items: [
            'Detailed Project Report (DPR)',
            'Feasibility Study Reports',
            'Business Plan Preparation',
            'Financial Projections',
            'Market Research Reports'
          ]
        },
        {
          title: 'Certifications',
          items: [
            'ISO Certification Support',
            'HACCP Certification',
            'BIS Certification',
            'Pollution Control Clearance',
            'Fire Safety Clearance'
          ]
        }
      ]
    },
    {
      id: 'import-export',
      icon: Building,
      title: 'Import/Export Consultancy',
      description: 'Complete import/export business support',
      color: 'bg-indigo-100 text-indigo-600',
      subcategories: [
        {
          title: 'Documentation',
          items: [
            'Commercial Invoice Preparation',
            'Packing List & Shipping Bills',
            'Certificate of Origin',
            'Export Documentation',
            'Import License Support'
          ]
        },
        {
          title: 'Compliance',
          items: [
            'DGFT Policy Advisory',
            'Export Incentive Schemes',
            'SEZ Compliance',
            'Foreign Trade Policy Updates',
            'Customs Duty Optimization'
          ]
        }
      ]
    },
    {
      id: 'digital-signatures',
      icon: Shield,
      title: 'Digital Signatures',
      description: 'Digital signature certificates and implementation',
      color: 'bg-orange-100 text-orange-600',
      subcategories: [
        {
          title: 'DSC Services',
          items: [
            'Class 2 Digital Signature',
            'Class 3 Digital Signature',
            'DGFT Digital Signature',
            'Income Tax DSC',
            'GST Digital Signature'
          ]
        },
        {
          title: 'Implementation',
          items: [
            'DSC Installation Support',
            'E-filing Assistance',
            'Token Configuration',
            'Renewal Services',
            'Technical Support'
          ]
        }
      ]
    },
    {
      id: 'investment',
      icon: DollarSign,
      title: 'Investment Consulting',
      description: 'Financial planning and investment advisory services',
      color: 'bg-red-100 text-red-600',
      subcategories: [
        {
          title: 'Investment Planning',
          items: [
            'Mutual Fund Advisory',
            'SIP Planning',
            'Insurance Planning',
            'Tax Saving Investments',
            'Retirement Planning'
          ]
        },
        {
          title: 'Financial Services',
          items: [
            'Loan Advisory',
            'Credit Score Improvement',
            'Financial Risk Assessment',
            'Portfolio Management',
            'Wealth Management'
          ]
        }
      ]
    }
  ];

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-5xl font-bold">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive business solutions tailored to meet your specific needs
              with professional expertise and dedicated support.
            </p>
          </motion.div>
        </div>
      </section> */}

      <section
      className="relative bg-cover bg-center text-white py-32"
      style={{
        backgroundImage: `url(${ServiceImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background Blur Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Optional Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm"
        style={{ backgroundImage: `url(${ServiceImg})` }} // Apply the same image again for the blurred effect
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <h1 className="text-5xl font-bold">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive business solutions tailored to meet your specific needs
            with professional expertise and dedicated support.
          </p>
        </motion.div>
      </div>
    </section>

      {/* Services Section */}
<section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
  {/* Background Effects */}
  <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 via-gray-700/20 to-gray-800/20"></div>
  <div className="absolute top-0 left-0 w-72 h-72 bg-gray-600/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-500/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="space-y-8">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-2xl hover:shadow-gray-500/20 transition-all duration-300"
        >
          <div
            className="cursor-pointer hover:bg-gray-800/20 transition-colors duration-200"
            onClick={() => toggleService(service.id)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div
                  className={`w-16 h-16 rounded-lg ${service.color} flex items-center justify-center`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <motion.button
                  className="bg-yellow-300 text-black  font-bold px-6 py-2 rounded-lg hover:bg-yellow-500 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Quote
                </motion.button>
                {expandedService === service.id ? (
                  <ChevronUp className="w-6 h-6 text-gray-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </div>
            </div>
          </div>

          <AnimatePresence>
            {expandedService === service.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t border-gray-200"
              >
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {service.subcategories.map((subcategory, subIndex) => (
                      <motion.div
                        key={subIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: subIndex * 0.1 }}
                        className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 shadow-2xl hover:shadow-gray-500/20 transition-all duration-300"
                      >
                        <h4 className="text-lg font-semibold text-white mb-3">
                          {subcategory.title}
                        </h4>
                        <ul className="space-y-2">
                          {subcategory.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  </div>
</section>



      {/* Process Section */}
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
        Our Process
      </h2>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        A streamlined approach to deliver exceptional results
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          step: '01',
          title: 'Initial Consultation',
          description: 'Understanding your requirements and business needs',
        },
        {
          step: '02',
          title: 'Documentation',
          description: 'Collecting necessary documents and information',
        },
        {
          step: '03',
          title: 'Processing',
          description: 'Expert handling of your requirements with regular updates',
        },
        {
          step: '04',
          title: 'Delivery',
          description: 'Timely completion and ongoing support',
        },
      ].map((process, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          whileHover={{ y: -10, scale: 1.05 }}
          className="bg-gradient-to-br from-gray-900 via-black to-gray-900 bg-opacity-50 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center shadow-2xl hover:shadow-gray-500/20 transition-all duration-300"
        >
          <div className="w-16 h-16 bg-gradient-to-br  text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
            {process.step}
          </div>
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">
            {process.title}
          </h3>
          <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
            {process.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* CTA Section */}
<section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
  <div className="container mx-auto px-4 text-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <h2 className="text-4xl text-white font-bold">Need Professional Assistance?</h2>
      <p className="text-xl text-blue-100 max-w-2xl mx-auto">
        Get expert guidance for your business needs. Our team is ready to help you
        achieve compliance and growth.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <motion.a
          href="/enquiry"
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white px-8 py-4 rounded-lg font-semibold hover:from-gray-700 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-gray-500/30 transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Get Free Consultation</span>
          <ArrowRight className="w-5 h-5" />
        </motion.a>
        <motion.a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white px-8 py-4 rounded-lg font-semibold hover:from-gray-700 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-gray-500/30 transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>WhatsApp Us</span>
          <ArrowRight className="w-5 h-5" />
        </motion.a>
      </div>
    </motion.div>
  </div>
</section>

    </div>
  );
};

export default Services;