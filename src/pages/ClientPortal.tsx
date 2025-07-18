import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Lock, 
  Upload, 
  Download, 
  FileText, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  LogOut,
  Eye
} from 'lucide-react';

const ClientPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Mock client data
  const clientData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91-98765-43210',
    clientId: 'CL001',
    services: ['GST Registration', 'Income Tax Filing', 'Business Registration'],
    documents: [
      {
        id: 1,
        name: 'GST Registration Certificate',
        type: 'PDF',
        uploadedAt: '2024-01-15',
        size: '2.5 MB',
        status: 'approved'
      },
      {
        id: 2,
        name: 'Income Tax Return 2023-24',
        type: 'PDF',
        uploadedAt: '2024-01-10',
        size: '1.8 MB',
        status: 'pending'
      },
      {
        id: 3,
        name: 'PAN Card Copy',
        type: 'JPG',
        uploadedAt: '2024-01-05',
        size: '0.5 MB',
        status: 'approved'
      }
    ],
    statusUpdates: [
      {
        id: 1,
        message: 'GST Registration completed successfully',
        date: '2024-01-15',
        type: 'success'
      },
      {
        id: 2,
        message: 'Income Tax Return under review',
        date: '2024-01-12',
        type: 'pending'
      },
      {
        id: 3,
        message: 'Additional documents required for business registration',
        date: '2024-01-08',
        type: 'action'
      }
    ]
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login logic
    if (loginData.email === 'john.doe@example.com' && loginData.password === 'password123') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials. Try: john.doe@example.com / password123');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginData({ email: '', password: '' });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const submitFile = () => {
    if (selectedFile) {
      // Mock file upload logic
      alert(`File "${selectedFile.name}" uploaded successfully!`);
      setSelectedFile(null);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Client Portal</h2>
            <p className="text-gray-600">Login to access your documents and services</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={loginData.email}
                onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={loginData.password}
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your password"
                required
              />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-center space-x-2">
                <Lock className="w-5 h-5" />
                <span>Login</span>
              </div>
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Demo credentials: john.doe@example.com / password123
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Don't have an account? Contact us to get registered.
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Client Portal</h1>
              <p className="text-gray-600">Welcome back, {clientData.name}</p>
            </div>
            <motion.button
              onClick={handleLogout}
              className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </motion.button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Client Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">Client Information</h2>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-500">Name</label>
                <p className="text-gray-800">{clientData.name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Email</label>
                <p className="text-gray-800">{clientData.email}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Phone</label>
                <p className="text-gray-800">{clientData.phone}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Client ID</label>
                <p className="text-gray-800">{clientData.clientId}</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Active Services</h3>
              <div className="space-y-2">
                {clientData.services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Status Updates */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Updates</h2>
              <div className="space-y-4">
                {clientData.statusUpdates.map((update) => (
                  <div key={update.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      update.type === 'success' ? 'bg-green-100' :
                      update.type === 'pending' ? 'bg-yellow-100' : 'bg-red-100'
                    }`}>
                      {update.type === 'success' ? 
                        <CheckCircle className="w-4 h-4 text-green-600" /> :
                        update.type === 'pending' ?
                        <Clock className="w-4 h-4 text-yellow-600" /> :
                        <AlertCircle className="w-4 h-4 text-red-600" />
                      }
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800">{update.message}</p>
                      <p className="text-sm text-gray-500 mt-1">{update.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Document Management */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-4">Document Management</h2>
              
              {/* File Upload */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Upload Document</h3>
                <div className="flex items-center space-x-4">
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    className="flex-1 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  />
                  <motion.button
                    onClick={submitFile}
                    disabled={!selectedFile}
                    className={`px-4 py-2 rounded-lg font-semibold ${
                      selectedFile 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    whileHover={selectedFile ? { scale: 1.05 } : {}}
                    whileTap={selectedFile ? { scale: 0.95 } : {}}
                  >
                    <Upload className="w-4 h-4 inline mr-2" />
                    Upload
                  </motion.button>
                </div>
              </div>

              {/* Document List */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-800">Your Documents</h3>
                {clientData.documents.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-800">{doc.name}</p>
                        <p className="text-sm text-gray-500">{doc.type} • {doc.size} • {doc.uploadedAt}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        doc.status === 'approved' ? 'bg-green-100 text-green-800' :
                        doc.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {doc.status}
                      </span>
                      <div className="flex space-x-2">
                        <motion.button
                          className="p-1 text-blue-600 hover:bg-blue-100 rounded"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Eye className="w-4 h-4" />
                        </motion.button>
                        <motion.button
                          className="p-1 text-green-600 hover:bg-green-100 rounded"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Download className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPortal;