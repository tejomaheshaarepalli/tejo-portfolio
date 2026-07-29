import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from '../components/LoadingScreen';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS or other libraries here if needed
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen
            key="loading"
            onLoadingComplete={() => setIsLoading(false)}
          />
        ) : (
          <div key="content">
            <Header />
            <main>
              <Hero />
              <About />
              <Experience />
              <Skills />
              <Projects />
              <Education />
              <Contact />
            </main>
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;
