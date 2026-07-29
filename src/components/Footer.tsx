import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Brain, ChevronUp, Github } from 'lucide-react';
import portfolioData from '../data/portfolioData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-gradient-hero border-t border-border">
      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-cyber rounded-full flex items-center justify-center shadow-glow hover:shadow-intense transition-shadow duration-300"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <ChevronUp className="w-6 h-6 text-white" />
      </motion.button>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-cyber-teal" />
              <span className="text-2xl font-bold text-gradient">
                TEJO MAHESH AAREPALLI
              </span>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              AI / Machine Learning Engineer dedicated to building intelligent solutions 
              across healthcare and financial domains.
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              <Brain className="w-4 h-4 mr-2 text-cyber-teal" />
              <span>Innovating the future with AI and Data Science.</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-cyber-teal">
              Quick Links
            </h3>
            <nav className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-cyber-teal transition-colors text-left py-1"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                >
                  {link.name}
                </motion.button>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-cyber-green">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <motion.a
                href={`mailto:${portfolioData.contact.email}`}
                className="block text-muted-foreground hover:text-cyber-teal transition-colors"
                whileHover={{ x: 5 }}
              >
                {portfolioData.contact.email}
              </motion.a>
              <motion.a
                href={`tel:${portfolioData.contact.phone}`}
                className="block text-muted-foreground hover:text-cyber-teal transition-colors"
                whileHover={{ x: 5 }}
              >
                {portfolioData.contact.phone}
              </motion.a>
              <motion.p
                className="text-muted-foreground"
                whileHover={{ x: 5 }}
              >
                {portfolioData.contact.location}
              </motion.p>
              <motion.a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-muted-foreground hover:text-cyber-teal transition-colors"
                whileHover={{ x: 5 }}
              >
                GitHub Profile →
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-border/50 pt-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Copyright */}
            <motion.p
              className="text-muted-foreground text-sm mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              © {currentYear} Tejo Mahesh Aarepalli. All rights reserved.
            </motion.p>

            {/* Made with Love */}
            {/* <motion.div
              className="flex items-center text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span>Built with</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="mx-2"
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>& React + TypeScript</span>
            </motion.div> */}
          </div>
        </motion.div>

        {/* Security Notice */}
        <motion.div
          className="mt-8 p-4 card-glow text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <p className="text-xs text-muted-foreground">
            <Brain className="w-3 h-3 inline mr-1 text-cyber-teal" />
            This portfolio showcases advanced AI/ML solutions and 
            engineering best practices in the field of Data Science.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;