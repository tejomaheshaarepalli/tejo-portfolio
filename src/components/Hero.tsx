import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, MessageCircle, ChevronDown, Brain, Cpu, Database } from 'lucide-react';
import { Button } from './ui/button';
import ThreeBackground from './ThreeBackground';
import portfolioData from '../data/portfolioData';

const Hero: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = portfolioData.personalInfo.title;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = portfolioData.personalInfo.resume;
    link.download = portfolioData.personalInfo.resume.split('/').pop() || 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="home" className="py-20 relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Three.js Background */}
     <ThreeBackground />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0  bg-gradient-hero opacity-90" />
      
      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{
          staggerChildren: 0.2,
          delayChildren: 0.3
        }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end order-2 lg:order-1"
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 rounded-full overflow-hidden border-4 border-cyber-teal shadow-glow"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={portfolioData.personalInfo.profileImage}
                  alt={`${portfolioData.personalInfo.name} - Profile`}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </motion.div>
              
              {/* Floating security icons */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-cyber-teal rounded-full flex items-center justify-center text-white shadow-glow"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Brain className="w-8 h-8 text-white" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-cyber-green rounded-full flex items-center justify-center text-white text-lg shadow-card"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -10, 0]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <Cpu className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            className="text-center lg:text-left order-1 lg:order-2"
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Greeting */}
            <motion.p
              className="text-cyber-teal font-mono text-lg mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <span className="text-gradient">
                {portfolioData.personalInfo.name}
              </span>
            </motion.h1>

            {/* Typewriter Title */}
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 h-12"
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <span className="text-cyber-teal">
                {displayedText}
                <motion.span
                  className="inline-block w-0.5 h-8 bg-cyber-teal ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </span>
            </motion.h2>

            {/* Location */}
            <motion.p
              className="text-muted-foreground text-lg mb-8 font-mono"
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              📍 {portfolioData.personalInfo.location}
            </motion.p>

            {/* Short Tagline */}
            <motion.p
              className="text-lg mb-10 max-w-2xl leading-relaxed text-muted-foreground"
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              Crafting state-of-the-art Generative AI, RAG systems, and end-to-end Machine Learning pipelines. 
              Specializing in transforming complex datasets into actionable intelligence with 4+ years 
              of expertise in Healthcare and Finance.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            >
              <Button
                onClick={handleDownloadResume}
                className="btn-hero group"
                size="lg"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
              
              <Button
                onClick={handleContactClick}
                variant="outline"
                className="btn-secondary group"
                size="lg"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Let's Connect
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-cyber-teal cursor-pointer"
            onClick={() => {
              const aboutSection = document.querySelector('#about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;