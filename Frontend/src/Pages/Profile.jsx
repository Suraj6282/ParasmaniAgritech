import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Lock, Phone, User, X } from "lucide-react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const Profile = () => {
  const [isLoginForm, setIsLoginForm] = useState(true); // Toggle between Login and Register
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [regFirstName, setRegFirstName] = useState("");
  const [regLastName, setRegLastName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regPhone, setRegPhone] = useState("");
  const [isGooglePopupOpen, setIsGooglePopupOpen] = useState(false);

  // Mock Google accounts for demonstration
  const googleAccounts = [
    { id: 1, name: "John Doe", email: "john.doe@gmail.com", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: 2, name: "Jane Smith", email: "jane.smith@gmail.com", avatar: "https://randomuser.me/api/portraits/women/2.jpg" },
  ];

  const handleGoogleLogin = () => {
    setIsGooglePopupOpen(true);
  };

  const handleGoogleAccountSelect = (account) => {
    console.log(`Logging in with Google account: ${account.email}`);
    setIsGooglePopupOpen(false);
    // Replace with real Google auth logic
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", { email: loginEmail, password: loginPassword });
    // Add login logic here
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!regEmail || !regPassword || !regPhone) {
      alert("Email, Password, and Phone Number are required!");
      return;
    }
    console.log("Register:", { firstName: regFirstName, lastName: regLastName, email: regEmail, password: regPassword, phone: regPhone });
    // Add registration logic here
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const formVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  };

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Header */}
     <Header/>
      {/* Main Content */}
      <motion.div
        className="max-w-7xl mx-auto flex flex-col lg:flex-row min-h-[calc(100vh-80px)] p-6 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Side - Login/Register Form */}
        <motion.div
          className="lg:w-1/2 bg-white rounded-3xl shadow-2xl p-8 flex flex-col justify-center border border-green-100"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
            {isLoginForm ? "Login" : "Register"}
          </h2>

          <motion.div
            key={isLoginForm ? "login" : "register"}
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            {isLoginForm ? (
              <form className="space-y-6" onSubmit={handleLoginSubmit}>
                <div className="relative group">
                  <Mail className="absolute top-1/2 left-4 transform -translate-y-1/2 text-green-500 w-5 h-5 group-focus-within:text-green-600 transition-colors duration-200" />
                  <input
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="Email"
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-50 transition-all duration-300"
                  />
                </div>
                <div className="relative group">
                  <Lock className="absolute top-1/2 left-4 transform -translate-y-1/2 text-green-500 w-5 h-5 group-focus-within:text-green-600 transition-colors duration-200" />
                  <input
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="Password"
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-50 transition-all duration-300"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <Link
                    to="/forgot-password"
                    className="text-sm text-green-600 hover:text-green-800 font-medium transition-colors duration-200"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="w-full bg-white text-gray-800 py-3 rounded-lg border border-gray-200 hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl font-semibold"
                >
                  <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                  Login with Google
                </button>
                <p className="text-sm text-gray-600 text-center">
                  Not registered?{" "}
                  <button
                    type="button"
                    onClick={() => setIsLoginForm(false)}
                    className="text-green-600 hover:text-green-800 font-medium transition-colors duration-200"
                  >
                    Register here
                  </button>
                </p>
              </form>
            ) : (
              <form className="space-y-6" onSubmit={handleRegisterSubmit}>
                <div className="relative group">
                  <User className="absolute top-1/2 left-4 transform -translate-y-1/2 text-green-500 w-5 h-5 group-focus-within:text-green-600 transition-colors duration-200" />
                  <input
                    type="text"
                    value={regFirstName}
                    onChange={(e) => setRegFirstName(e.target.value)}
                    placeholder="First Name (Optional)"
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-50 transition-all duration-300"
                  />
                </div>
                <div className="relative group">
                  <User className="absolute top-1/2 left-4 transform -translate-y-1/2 text-green-500 w-5 h-5 group-focus-within:text-green-600 transition-colors duration-200" />
                  <input
                    type="text"
                    value={regLastName}
                    onChange={(e) => setRegLastName(e.target.value)}
                    placeholder="Last Name (Optional)"
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-50 transition-all duration-300"
                  />
                </div>
                <div className="relative group">
                  <Mail className="absolute top-1/2 left-4 transform -translate-y-1/2 text-green-500 w-5 h-5 group-focus-within:text-green-600 transition-colors duration-200" />
                  <input
                    type="email"
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    placeholder="Email"
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-50 transition-all duration-300"
                  />
                </div>
                <div className="relative group">
                  <Lock className="absolute top-1/2 left-4 transform -translate-y-1/2 text-green-500 w-5 h-5 group-focus-within:text-green-600 transition-colors duration-200" />
                  <input
                    type="password"
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    placeholder="Password"
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-50 transition-all duration-300"
                  />
                </div>
                <div className="relative group">
                  <Phone className="absolute top-1/2 left-4 transform -translate-y-1/2 text-green-500 w-5 h-5 group-focus-within:text-green-600 transition-colors duration-200" />
                  <input
                    type="tel"
                    value={regPhone}
                    onChange={(e) => setRegPhone(e.target.value)}
                    placeholder="Phone Number"
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-50 transition-all duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
                >
                  Register
                </button>
                <p className="text-sm text-gray-600 text-center">
                  Already registered?{" "}
                  <button
                    type="button"
                    onClick={() => setIsLoginForm(true)}
                    className="text-green-600 hover:text-green-800 font-medium transition-colors duration-200"
                  >
                    Login here
                  </button>
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>

        {/* Right Side - Buy Products Section */}
        <motion.div
          className="lg:w-1/2 flex flex-col justify-center p-10 bg-gradient-to-br from-green-600 via-green-700 to-green-800 rounded-3xl shadow-2xl text-white relative overflow-hidden"
          variants={itemVariants}
        >
          {/* Immersive Background Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent_60%)] z-0" />
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1),transparent_50%)] animate-pulse-slow z-0" />

          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 z-10 drop-shadow-lg">
            Buy Products
          </h1>
          <p className="text-lg md:text-xl mb-4 z-10 font-light leading-relaxed">
            Discover our premium range of agricultural tools and equipment designed to boost productivity.
          </p>
          <p className="text-base md:text-lg mb-6 z-10 font-light leading-relaxed">
            From power weeders to manual farming tools, find everything you need to cultivate success.
          </p>
          <ul className="list-disc list-inside text-base md:text-lg mb-8 z-10 font-light space-y-2">
            <li>High-quality, durable products</li>
            <li>Competitive pricing & fast delivery</li>
            <li>Expert support for all purchases</li>
          </ul>
          <motion.button
            className="relative inline-block px-10 py-4 bg-yellow-300 text-green-900 font-bold rounded-lg overflow-hidden group z-10 shadow-lg"
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="relative z-10">Shop Now</span>
            <span className="absolute inset-0 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Google Account Selection Popup */}
      {isGooglePopupOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl p-6 w-full max-w-md relative shadow-2xl"
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
              onClick={() => setIsGooglePopupOpen(false)}
              aria-label="Close popup"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Choose a Google Account</h3>
            <div className="space-y-4">
              {googleAccounts.map((account) => (
                <button
                  key={account.id}
                  onClick={() => handleGoogleAccountSelect(account)}
                  className="w-full flex items-center gap-4 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-200"
                >
                  <img src={account.avatar} alt={account.name} className="w-10 h-10 rounded-full" />
                  <div className="text-left">
                    <p className="font-medium text-gray-800">{account.name}</p>
                    <p className="text-sm text-gray-600">{account.email}</p>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
      <Footer/>
    </div>
  );
};

export default Profile;