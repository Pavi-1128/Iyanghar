
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ServiceImg from "../asset/ServiceImg.jpg";
import {
  Calculator,
  FileText,
  Building,
  TrendingUp,
  Shield,
  DollarSign,
  ChevronDown,
  ChevronUp,
  CheckCircle
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
        { title: 'GST Services', items: ['GST Registration & Cancellation', 'GST Return Filing', 'GST Compliance', 'GST Audit & Assessment', 'Input Tax Credit Optimization'] },
        { title: 'Income Tax', items: ['Individual ITR Filing', 'Corporate Tax Returns', 'Tax Planning & Advisory', 'TDS Compliance', 'Tax Assessment & Appeals'] },
        { title: 'Other Tax Services', items: ['Professional Tax', 'Service Tax', 'Custom Duty Advisory', 'Tax Litigation Support'] }
      ]
    },
    {
      id: 'registrations',
      icon: FileText,
      title: 'Business Registrations',
      description: 'All types of business registrations and licenses',
      color: 'bg-[#38215e]/20 text-[#38215e]',
      subcategories: [
        { title: 'Company Registration', items: ['Private Limited Company', 'LLP', 'Sole Proprietorship', 'Public Limited Company'] },
        { title: 'Government Registrations', items: ['MSME Registration', 'PAN & TAN', 'FSSAI License'] },
        { title: 'Import/Export', items: ['IEC Code Registration', 'RCMC Certificate', 'Export Promotion Registration'] }
      ]
    },
    {
      id: 'project-reports',
      icon: TrendingUp,
      title: 'Project Reports & Certifications',
      description: 'Professional project reports and business certifications',
      color: 'bg-purple-100 text-purple-600',
      subcategories: [
        { title: 'Project Reports', items: ['Detailed Project Report (DPR)', 'Feasibility Study', 'Market Research'] },
        { title: 'Certifications', items: ['ISO Certification', 'HACCP Certification', 'BIS Certification'] }
      ]
    },
    {
      id: 'import-export',
      icon: Building,
      title: 'Import/Export Consultancy',
      description: 'Complete import/export business support',
      color: 'bg-indigo-100 text-indigo-600',
      subcategories: [
        { title: 'Documentation', items: ['Commercial Invoice', 'Packing List', 'Certificate of Origin'] },
        { title: 'Compliance', items: ['DGFT Policy', 'Export Incentive Schemes', 'Customs Duty Optimization'] }
      ]
    },
    {
      id: 'digital-signatures',
      icon: Shield,
      title: 'Digital Signatures',
      description: 'Digital signature certificates and implementation',
      color: 'bg-orange-100 text-orange-600',
      subcategories: [
        { title: 'DSC Services', items: ['Class 2 DSC', 'Class 3 DSC', 'GST DSC'] },
        { title: 'Implementation', items: ['DSC Installation', 'E-filing Assistance', 'Token Configuration'] }
      ]
    },
    {
      id: 'investment',
      icon: DollarSign,
      title: 'Investment Consulting',
      description: 'Financial planning and investment advisory services',
      color: 'bg-red-100 text-red-600',
      subcategories: [
        { title: 'Investment Planning', items: ['Mutual Fund Advisory', 'SIP Planning', 'Tax Saving Investments'] },
        { title: 'Financial Services', items: ['Loan Advisory', 'Credit Score Improvement', 'Portfolio Management'] }
      ]
    }
  ];

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#EDF4FF' }}>
<section
  className="relative bg-cover bg-center text-white min-h-[45vh] md:min-h-[55vh] flex items-center"
  style={{
    backgroundImage: `url(${ServiceImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Background Overlay */}
  <div className="absolute inset-0 bg-black opacity-40"></div>
  <div
    className="absolute inset-0 bg-cover bg-center filter blur-sm"
    style={{ backgroundImage: `url(${ServiceImg})` }}
  ></div>

  <div className="container mx-auto px-4 relative z-10 text-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-4 md:space-y-6 mt-20 md:mt-0"
    >
      <h1 className="text-2xl md:text-5xl text-[#38215e] font-bold">Our Services</h1>
      <p className="text-base md:text-xl  max-w-3xl mx-auto text-[#38215e]">
        Comprehensive business solutions tailored to meet your specific needs
        with professional expertise and dedicated support.
      </p>
    </motion.div>
  </div>
</section>



      {/* Services Section */}
      <section className="py-20 relative overflow-hidden bg-transparent">
        <div className="container mx-auto px-4 relative z-10">
          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-[#FBFCFD] border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div
                  className="cursor-pointer hover:bg-gray-50 transition-colors duration-200 rounded-lg p-2 -m-2"
                  onClick={() => toggleService(service.id)}
                >
                  <div className="w-full flex flex-col lg:flex-row lg:items-center">
                    <div className="flex flex-col sm:flex-row items-center justify-between flex-grow space-y-4 sm:space-y-0 sm:space-x-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-[#a676c8] rounded-full flex items-center justify-center">
                          {(() => {
                            const IconComponent = service.icon;
                            return <IconComponent className="w-6 h-6 text-white" strokeWidth={2} stroke="white" />;
                          })()}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-[#252525]">{service.title}</h3>
                          <p className="text-[#252525] text-sm">{service.description}</p>
                        </div>
                      </div>
                      <div className="lg:hidden">
                        {expandedService === service.id ? (
                          <ChevronUp className="w-6 h-6 text-[#252525]" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-[#252525]" />
                        )}
                      </div>
                    </div>

                    <div className="mt-4 lg:mt-0 lg:ml-auto lg:flex lg:items-center lg:space-x-2">
                      <div className="w-full text-center lg:text-right mt-0 lg:mt-0 lg:ml-auto">
                        <motion.button
                          className="bg-[#6f3e9a] text-white font-bold px-6 py-2 rounded-lg hover:bg-[#5a2f7a] transition-all duration-300 shadow-lg hover:shadow-[#6f3e9a]/30 transform hover:scale-105 text-sm"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Get Quote
                        </motion.button>
                      </div>

                      <div className="hidden lg:block">
                        {expandedService === service.id ? (
                          <ChevronUp className="w-6 h-6 text-[#252525]" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-[#252525]" />
                        )}
                      </div>
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
                      className="border-t border-gray-200 mt-4"
                    >
                      <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {service.subcategories.map((subcategory, subIndex) => {
                            const bgColors = [
                              'bg-[#a676c8]/40',
                              'bg-[#a676c8]/40',
                              'bg-[#a676c8]/40',
                              'bg-[#a676c8]/40',
                              'bg-[#a676c8]/40',
                              'bg-[#a676c8]/40'
                            ];
                            return (
                              <motion.div
                                key={subIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: subIndex * 0.1 }}
                                className={`${bgColors[subIndex % bgColors.length]} border border-[#a676c8]/20 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300`}
                              >
                                <h4 className="text-lg font-semibold text-[#38215e] mb-3">
                                  {subcategory.title}
                                </h4>
                                <ul className="space-y-2">
                                  {subcategory.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="flex items-start space-x-2">
                                      <CheckCircle className="w-4 h-4 text-[#38215e] mt-0.5 flex-shrink-0" strokeWidth={2} stroke="#38215e" />
                                      <span className="text-sm text-[#252525]">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            );
                          })}
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
    </div>
  );
};

export default Services;

