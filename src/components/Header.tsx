// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, X, Sun, Moon, Shield } from 'lucide-react';
// import { useTheme } from '../contexts/ThemeContext';
// import { Button } from './ui/button';

// const Header: React.FC = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const { theme, toggleTheme } = useTheme();

//   const navItems = [
//     { name: 'Home', href: '#home' },
//     { name: 'About', href: '#about' },
//     { name: 'Experience', href: '#experience' },
//     { name: 'Skills', href: '#skills' },
//     { name: 'Projects', href: '#projects' },
//     { name: 'Education', href: '#education' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleNavClick = (href: string) => {
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <>
//       <motion.header
//         className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
//           isScrolled 
//             ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-card' 
//             : 'bg-transparent'
//         }`}
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             {/* Logo */}
//             <motion.div 
//               className="flex items-center space-x-2"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Shield className="h-8 w-8 text-cyber-teal" />
//               <span className="text-xl font-bold text-gradient">
//                 RAVITEJA
//               </span>
//             </motion.div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-8">
//               {navItems.map((item, index) => (
//                 <motion.button
//                   key={item.name}
//                   onClick={() => handleNavClick(item.href)}
//                   className="text-foreground hover:text-cyber-teal transition-colors duration-200 font-medium"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 + 0.3 }}
//                 >
//                   {item.name}
//                 </motion.button>
//               ))}
//             </div>

//             {/* Theme Toggle & Mobile Menu */}
//             <div className="flex items-center space-x-4">
//               {/* Theme Toggle */}
//               <motion.button
//                 onClick={toggleTheme}
//                 className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
//                 whileHover={{ scale: 1.1, rotate: 15 }}
//                 whileTap={{ scale: 0.9 }}
//                 aria-label="Toggle theme"
//               >
//                 <AnimatePresence mode="wait">
//                   {theme === 'light' ? (
//                     <motion.div
//                       key="moon"
//                       initial={{ rotate: -90, opacity: 0 }}
//                       animate={{ rotate: 0, opacity: 1 }}
//                       exit={{ rotate: 90, opacity: 0 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <Moon className="h-5 w-5" />
//                     </motion.div>
//                   ) : (
//                     <motion.div
//                       key="sun"
//                       initial={{ rotate: 90, opacity: 0 }}
//                       animate={{ rotate: 0, opacity: 1 }}
//                       exit={{ rotate: -90, opacity: 0 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <Sun className="h-5 w-5" />
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.button>

//               {/* Mobile Menu Button */}
//               <Button
//                 variant="ghost"
//                 size="sm"
//                 className="md:hidden p-2"
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 aria-label="Toggle mobile menu"
//               >
//                 <AnimatePresence mode="wait">
//                   {isMobileMenuOpen ? (
//                     <motion.div
//                       key="close"
//                       initial={{ rotate: -90, opacity: 0 }}
//                       animate={{ rotate: 0, opacity: 1 }}
//                       exit={{ rotate: 90, opacity: 0 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <X className="h-6 w-6" />
//                     </motion.div>
//                   ) : (
//                     <motion.div
//                       key="menu"
//                       initial={{ rotate: 90, opacity: 0 }}
//                       animate={{ rotate: 0, opacity: 1 }}
//                       exit={{ rotate: -90, opacity: 0 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <Menu className="h-6 w-6" />
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </Button>
//             </div>
//           </div>
//         </nav>
//       </motion.header>

//       {/* Mobile Menu Overlay */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <>
//             {/* Backdrop */}
//             <motion.div
//               className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm md:hidden"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsMobileMenuOpen(false)}
//             />
            
//             {/* Mobile Menu */}
//             <motion.div
//               className="fixed top-16 left-0 right-0 z-35 bg-card border-b border-border shadow-intense md:hidden"
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.2 }}
//             >
//               <div className="px-4 py-6 space-y-4">
//                 {navItems.map((item, index) => (
//                   <motion.button
//                     key={item.name}
//                     onClick={() => handleNavClick(item.href)}
//                     className="block w-full text-left py-3 px-4 text-lg font-medium text-foreground hover:text-cyber-teal hover:bg-muted rounded-lg transition-all duration-200"
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.05 }}
//                     whileHover={{ x: 10 }}
//                   >
//                     {item.name}
//                   </motion.button>
//                 ))}
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Header;





import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Shield, Brain } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const HEADER_HEIGHT = 64; // h-16 = 64px

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback((href: string) => {
    const el = document.querySelector(href) as HTMLElement | null;
    if (el) {
      const rect = el.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetY = rect.top + scrollTop - (HEADER_HEIGHT + 8);
      window.scrollTo({ top: Math.max(targetY, 0), behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <>
      {/* Fixed Header */}
      <motion.header
        className={`fixed inset-x-0 top-0 z-[9999] transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border shadow-card"
            : "bg-transparent"
        }`}
        style={{ height: HEADER_HEIGHT, paddingTop: "env(safe-area-inset-top)" }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <motion.button
              type="button"
              onClick={() => handleNavClick("#home")}
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Go to Home"
            >
              <Brain className="h-8 w-8 text-cyber-teal" />
              <span className="text-xl font-bold text-gradient">TEJO MAHESH</span>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-foreground hover:text-cyber-teal transition-colors duration-200 font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 + 0.2 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu Button */}
            <div className="flex items-center space-x-2">
              {/* Theme Toggle */}
              <motion.button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                whileHover={{ scale: 1.1, rotate: 12 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {theme === "light" ? (
                    <motion.div
                      key="moon"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="sun"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setIsMobileMenuOpen((s) => !s)}
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu + Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.button
              type="button"
              className="fixed inset-0 z-[9998] bg-background/80 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu backdrop"
            />

            {/* Mobile Menu */}
            <motion.div
              id="mobile-menu"
              className="fixed top-16 left-0 right-0 z-[9999] bg-card border-b border-border shadow-xl md:hidden"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.2 }}
              role="dialog"
              aria-modal="true"
            >
              <div className="px-4 py-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left py-3 px-4 text-lg font-medium text-foreground hover:text-cyber-teal hover:bg-muted rounded-lg transition-all duration-200"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 8 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
