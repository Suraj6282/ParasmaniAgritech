
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Search, Truck, User, Menu, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import Logo from "../../public/Logo/parasmanilogo.png";

// // Sample product images (replace with your actual image imports or URLs)
// const productImages = {
//   1: "https://via.placeholder.com/50?text=Weeder", // Power Weeder Pro
//   2: "https://via.placeholder.com/50?text=Trowel", // Hand Trowel
//   3: "https://via.placeholder.com/50?text=Cultivator", // Soil Cultivator
//   4: "https://via.placeholder.com/50?text=Tiller", // Mini Tiller
// };

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//     setIsSearchOpen(false);
//   };

//   const toggleSearch = () => {
//     setIsSearchOpen(!isSearchOpen);
//     setIsMenuOpen(false);
//     setSearchQuery("");
//   };

//   const products = [
//     {
//       id: 1,
//       name: "Power Weeder Pro",
//       category: "Power Weeder",
//       image: productImages[1],
//     },
//     {
//       id: 2,
//       name: "Hand Trowel",
//       category: "Manual Tools",
//       image: productImages[2],
//     },
//     {
//       id: 3,
//       name: "Soil Cultivator",
//       category: "Manual Tools",
//       image: productImages[3],
//     },
//     {
//       id: 4,
//       name: "Mini Tiller",
//       category: "Power Weeder",
//       image: productImages[4],
//     },
//   ];

//   const filteredProducts = products.filter(
//     (product) =>
//       product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       product.category.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const searchVariants = {
//     hidden: { opacity: 0, scale: 0.95, y: -10 },
//     visible: { opacity: 1, scale: 1, y: 0 },
//     exit: { opacity: 0, scale: 0.95, y: -10 },
//   };

//   const resultVariants = {
//     hidden: { opacity: 0, y: 10 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <div className="bg-gray-100 sticky top-0 z-50 p-4 md:p-6">
//       <header className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 rounded-2xl shadow-lg transition-all duration-300">
//         <div className="flex justify-between items-center p-4">
//           {/* Logo */}
//           <Link to="/" className="flex items-center group">
//             <img
//               src={Logo}
//               alt="Parshmani Agritech Logo"
//               className="w-12 h-10 md:w-14 md:h-12 mr-3 transition-transform duration-300 group-hover:scale-110"
//               loading="lazy"
//             />
//             <h1 className="text-xl md:text-3xl font-extrabold text-white tracking-tight">
//               <span className="text-yellow-300 group-hover:text-yellow-400 transition-colors duration-300">
//                 Parshmani
//               </span>{" "}
//               Agritech
//             </h1>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex flex-1 justify-center">
//             <ul className="flex gap-6 text-white">
//               {[
//                 { to: "/", text: "Home" },
//                 { to: "/", text: "New Drops 🔥" },
//                 { to: "/power-weeder", text: "Power Weeder" },
//                 { to: "/manual-framing-tools", text: "Manual Tools" },
//               ].map((item) => (
//                 <li key={item.to}>
//                   <Link
//                     to={item.to}
//                     className="text-sm font-medium uppercase hover:text-yellow-300 transition-colors duration-200 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-yellow-300 after:bottom-[-8px] after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
//                   >
//                     {item.text}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           {/* Desktop Icons */}
//           <div className="hidden lg:flex items-center gap-13">
//             {[
//               {
//                 Icon: Search,
//                 text: "Search",
//                 action: toggleSearch,
//                 isButton: true,
//               },
//               {
//                 Icon: User,
//                 text: "Profile",
//                 link: "/profile",
//               },
//               {
//                 Icon: Truck,
//                 text: "Cart",
//                 link: "/cart",
//               },
//             ].map(({ Icon, text, action, link, isButton }, index) => (
//               <motion.div
//                 key={text}
//                 whileHover={{ scale: 1.05 }}
//                 className="relative group"
//               >
//                 {isButton ? (
//                   <button
//                     onClick={action}
//                     className="flex flex-col items-center text-white transition-all duration-200 group-hover:text-yellow-300"
//                   >
//                     <Icon className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" />
//                     <motion.span
//                       initial={{ opacity: 0, y: 5 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className="absolute top-full mt-1 text-xs font-medium uppercase tracking-wide bg-green-800/80 px-2 py-1 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200"
//                       style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
//                     >
//                       {text}
//                     </motion.span>
//                   </button>
//                 ) : (
//                   <Link
//                     to={link}
//                     className="flex flex-col items-center text-white transition-all duration-200 group-hover:text-yellow-300"
//                   >
//                     <Icon className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" />
//                     <motion.span
//                       initial={{ opacity: 0, y: 5 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className="absolute top-full mt-1 text-xs font-medium uppercase tracking-wide bg-green-800/80 px-2 py-1 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200"
//                       style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
//                     >
//                       {text}
//                     </motion.span>
//                   </Link>
//                 )}
//               </motion.div>
//             ))}
//           </div>

//           {/* Hamburger Button */}
//           <button
//             className="lg:hidden text-white focus:outline-none z-50"
//             onClick={toggleMenu}
//           >
//             {isMenuOpen ? (
//               <X className="w-6 h-6" />
//             ) : (
//               <Menu className="w-6 h-6" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`lg:hidden overflow-hidden transition-all duration-500 ${
//             isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//           }`}
//         >
//           <nav className="bg-green-700/95 p-6 rounded-b-2xl">
//             <ul className="flex flex-col gap-4 text-white">
//               {[
//                 { to: "/", text: "New Drops 🔥" },
//                 { to: "/power-weeder", text: "Power Weeder" },
//                 { to: "/manual-framing-tools", text: "Manual Tools" },
//                 { text: "Search", icon: Search, onClick: toggleSearch },
//                 { to: "/profile", text: "Profile", icon: User },
//                 { to: "/cart", text: "Cart", icon: Truck },
//               ].map((item) => (
//                 <li key={item.to || item.text}>
//                   <button
//                     onClick={item.onClick || (() => setIsMenuOpen(false))}
//                     className="flex items-center gap-3 text-lg hover:text-yellow-300 transition-all duration-200 w-full text-left"
//                   >
//                     {item.icon && <item.icon className="w-5 h-5" />}
//                     <span>{item.text}</span>
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>

//         {/* Search Overlay */}
//         <AnimatePresence>
//           {isSearchOpen && (
//             <motion.div
//               variants={searchVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="absolute top-full left-4 right-4 md:left-6 md:right-6 bg-white rounded-xl shadow-2xl z-50 overflow-hidden"
//               style={{
//                 boxShadow:
//                   "0 10px 25px rgba(0,0,0,0.1), 0 0 20px rgba(255,215,0,0.2)",
//               }}
//             >
//               <div className="p-4 bg-gradient-to-b from-gray-50 to-white">
//                 <div className="flex items-center gap-2">
//                   <Search className="w-5 h-5 text-green-600" />
//                   <input
//                     type="text"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     placeholder="Search products..."
//                     className="w-full p-2 border-0 bg-transparent focus:outline-none focus:ring-0 text-gray-800 placeholder-gray-400"
//                   />
//                   <button
//                     onClick={toggleSearch}
//                     className="text-gray-600 hover:text-red-600"
//                   >
//                     <X className="w-5 h-5" />
//                   </button>
//                 </div>
//               </div>

//               {/* Search Results */}
//               {searchQuery && (
//                 <motion.div
//                   variants={resultVariants}
//                   initial="hidden"
//                   animate="visible"
//                   className="p-4 max-h-64 overflow-y-auto"
//                 >
//                   {filteredProducts.length > 0 ? (
//                     <ul className="space-y-3">
//                       {filteredProducts.map((product) => (
//                         <motion.li
//                           key={product.id}
//                           whileHover={{ scale: 1.02 }}
//                           className="p-3 bg-white rounded-lg hover:bg-green-50 transition-colors duration-200 border border-gray-100"
//                         >
//                           <Link
//                             to={`/product/${product.id}`} // Link to product details page
//                             onClick={() => {
//                               setIsSearchOpen(false);
//                               setSearchQuery("");
//                             }}
//                             className="flex items-center gap-3"
//                           >
//                             <img
//                               src={product.image}
//                               alt={product.name}
//                               className="w-12 h-12 object-cover rounded-md"
//                               onError={(e) => {
//                                 e.target.src =
//                                   "https://via.placeholder.com/50?text=No+Image"; // Fallback image
//                               }}
//                             />
//                             <div>
//                               <span className="font-medium text-green-800">
//                                 {product.name}
//                               </span>
//                               <span className="block text-sm text-gray-600">
//                                 {product.category}
//                               </span>
//                             </div>
//                           </Link>
//                         </motion.li>
//                       ))}
//                     </ul>
//                   ) : (
//                     <motion.div
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       className="text-center py-8"
//                     >
//                       <p className="text-green-600 text-lg font-medium animate-pulse">
//                         Explore Our Products
//                       </p>
//                     </motion.div>
//                   )}
//                 </motion.div>
//               )}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </header>
//     </div>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Truck, User, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../public/Logo/parasmanilogo.png";

// Sample product images (replace with actual imports/URLs)
const productImages = {
  1: "https://via.placeholder.com/50?text=Weeder",
  2: "https://via.placeholder.com/50?text=Trowel",
  3: "https://via.placeholder.com/50?text=Cultivator",
  4: "https://via.placeholder.com/50?text=Tiller",
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchOpen(false);
    setIsProductDropdownOpen(false); // Close dropdown when menu toggles
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsMenuOpen(false);
    setIsProductDropdownOpen(false); // Close dropdown when search opens
  };

  const toggleProductDropdown = () => {
    setIsProductDropdownOpen(!isProductDropdownOpen);
  };

  const products = [
    { id: 1, name: "Power Weeder Pro", category: "Power Weeder", image: productImages[1] },
    { id: 2, name: "Hand Trowel", category: "Manual Tools", image: productImages[2] },
    { id: 3, name: "Soil Cultivator", category: "Manual Tools", image: productImages[3] },
    { id: 4, name: "Mini Tiller", category: "Power Weeder", image: productImages[4] },
  ];

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const dropdownVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -10 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: -10 },
  };

  return (
    <div className="bg-gray-100 sticky top-0 z-50 px-4 py-2 md:px-6 md:py-4">
      <header className="bg-gradient-to-r from-green-700 via-green-800 to-green-900 rounded-2xl shadow-xl transition-all duration-500 ease-in-out">
        <div className="flex justify-between items-center p-4 md:p-6">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <motion.img
              src={Logo}
              alt="Parshmani Agritech Logo"
              className="w-10 h-10 md:w-12 md:h-12 mr-2 transition-transform duration-300"
              whileHover={{ scale: 1.15, rotate: 5 }}
              loading="lazy"
            />
            <h1 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
              <span className="text-yellow-400 group-hover:text-yellow-500 transition-colors duration-300">
                Parshmani
              </span>{" "}
              Agritech
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center">
            <ul className="flex gap-8 text-white font-semibold">
              {[
                { to: "/", text: "Home" },
                { to: "/", text: "New Drops 🔥" },
                { to: "/power-weeder", text: "Power Weeder" },
                { to: "/manual-framing-tools", text: "Manual Tools" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm uppercase hover:text-yellow-400 transition-all duration-300 relative group"
                  >
                    {item.text}
                    <span className="absolute left-0 bottom-[-6px] w-full h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </Link>
                </li>
              ))}
              {/* Products Dropdown */}
              <li
                className="relative group"
                onMouseEnter={() => setIsProductDropdownOpen(true)}
                onMouseLeave={() => setIsProductDropdownOpen(false)}
              >
                <button className="text-sm uppercase hover:text-yellow-400 transition-all duration-300 relative">
                  Products
                  <span className="absolute left-0 bottom-[-6px] w-full h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </button>
                <AnimatePresence>
                  {isProductDropdownOpen && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50 overflow-hidden border border-green-200"
                    >
                      <ul className="py-2">
                        {products.map((product) => (
                          <li key={product.id}>
                            <Link
                              to={`/product/${product.id}`}
                              className="block px-4 py-2 text-sm text-green-900 hover:bg-green-100 transition-colors duration-200"
                              onClick={() => setIsProductDropdownOpen(false)}
                            >
                              {product.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            </ul>
          </nav>

          {/* Desktop Icons */}
          <div className="hidden lg:flex items-center gap-8">
            {[
              { Icon: Search, text: "Search", action: toggleSearch, isButton: true },
              { Icon: User, text: "Profile", link: "/profile" },
              { Icon: Truck, text: "Cart", link: "/cart" },
            ].map(({ Icon, text, action, link, isButton }) => (
              <motion.div
                key={text}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                {isButton ? (
                  <button
                    onClick={action}
                    className="flex flex-col items-center text-white hover:text-yellow-400 transition-all duration-200"
                  >
                    <Icon className="w-6 h-6" />
                    <span className="text-xs mt-1 uppercase tracking-wide">{text}</span>
                  </button>
                ) : (
                  <Link
                    to={link}
                    className="flex flex-col items-center text-white hover:text-yellow-400 transition-all duration-200"
                  >
                    <Icon className="w-6 h-6" />
                    <span className="text-xs mt-1 uppercase tracking-wide">{text}</span>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* Hamburger Button */}
          <button
            className="lg:hidden text-white focus:outline-none z-50"
            onClick={toggleMenu}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          animate={{ height: isMenuOpen ? "auto" : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="lg:hidden overflow-hidden"
        >
          <nav className="bg-green-800/90 p-6 rounded-b-2xl">
            <ul className="flex flex-col gap-5 text-white">
              {[
                { to: "/", text: "New Drops 🔥" },
                { to: "/power-weeder", text: "Power Weeder" },
                { to: "/manual-framing-tools", text: "Manual Tools" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 text-lg hover:text-yellow-400 transition-all duration-200"
                  >
                    <span>{item.text}</span>
                  </Link>
                </li>
              ))}
              {/* Mobile Products Dropdown */}
              <li>
                <button
                  onClick={toggleProductDropdown}
                  className="flex items-center gap-3 text-lg hover:text-yellow-400 transition-all duration-200 w-full text-left"
                >
                  <span>Products</span>
                </button>
                <AnimatePresence>
                  {isProductDropdownOpen && (
                    <motion.ul
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="mt-2 pl-4 space-y-2"
                    >
                      {products.map((product) => (
                        <li key={product.id}>
                          <Link
                            to={`/product/${product.id}`}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsProductDropdownOpen(false);
                            }}
                            className="block text-sm text-white hover:text-yellow-400 transition-colors duration-200"
                          >
                            {product.name}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
              {[
                { text: "Search", icon: Search, onClick: toggleSearch },
                { to: "/profile", text: "Profile", icon: User },
                { to: "/cart", text: "Cart", icon: Truck },
              ].map((item) => (
                <li key={item.to || item.text}>
                  <button
                    onClick={item.onClick || (() => setIsMenuOpen(false))}
                    className="flex items-center gap-3 text-lg hover:text-yellow-400 transition-all duration-200 w-full text-left"
                  >
                    {item.icon && <item.icon className="w-5 h-5" />}
                    <span>{item.text}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>

        {/* Search Overlay */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-full left-2 right-2 md:left-4 md:right-4 bg-white rounded-xl shadow-2xl z-50 overflow-hidden border border-green-200"
            >
              <div className="p-3 bg-gradient-to-b from-green-50 to-white">
                <div className="flex items-center gap-2">
                  <Search className="w-5 h-5 text-green-700" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-full p-2 bg-transparent border-0 focus:outline-none text-gray-900 placeholder-gray-500"
                  />
                  <button onClick={toggleSearch} className="text-gray-700 hover:text-red-500">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Search Results */}
              {searchQuery && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  className="p-4 max-h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-gray-100"
                >
                  {filteredProducts.length > 0 ? (
                    <ul className="space-y-3">
                      {filteredProducts.map((product) => (
                        <motion.li
                          key={product.id}
                          whileHover={{ scale: 1.03 }}
                          className="p-3 bg-green-50/50 rounded-lg hover:bg-green-100 transition-all duration-200"
                        >
                          <Link
                            to={`/product/${product.id}`}
                            onClick={() => {
                              setIsSearchOpen(false);
                              setSearchQuery("");
                            }}
                            className="flex items-center gap-3"
                          >
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-10 h-10 object-cover rounded-md shadow-sm"
                              onError={(e) => (e.target.src = "https://via.placeholder.com/50?text=No+Image")}
                            />
                            <div>
                              <span className="font-semibold text-green-900">{product.name}</span>
                              <span className="block text-sm text-gray-600">{product.category}</span>
                            </div>
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  ) : (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center py-6 text-green-700 font-medium"
                    >
                      No results found. Try something else!
                    </motion.p>
                  )}
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
};

export default Header;