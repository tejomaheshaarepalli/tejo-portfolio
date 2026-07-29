import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const letters = "LOADING".split("");

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 800);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      rotateX: 90 
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0
    }
  };

  const progressVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: progress / 100 }
  };

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-hero"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyber-teal rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="text-center z-10">
        {/* Main Loading Text */}
        <div className="flex justify-center space-x-2 mb-8">
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              className="text-6xl md:text-8xl font-bold text-gradient inline-block"
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              transition={{
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.34, 1.56, 0.64, 1]
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-muted rounded-full mx-auto mb-4 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-cyber rounded-full origin-left"
            variants={progressVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>

        {/* Progress Text */}
        <motion.p 
          className="text-muted-foreground font-mono text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Initializing Intelligence Systems... {progress}%
        </motion.p>

        {/* Cybersecurity themed loading messages */}
        <motion.div
          className="mt-6 h-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          {progress < 25 && (
            <p className="text-xs text-muted-foreground font-mono">
              Bootstrapping neural networks...
            </p>
          )}
          {progress >= 25 && progress < 50 && (
            <p className="text-xs text-muted-foreground font-mono">
              Initializing RAG pipelines...
            </p>
          )}
          {progress >= 50 && progress < 75 && (
            <p className="text-xs text-muted-foreground font-mono">
              Configuring MLOps workflows...
            </p>
          )}
          {progress >= 75 && progress < 100 && (
            <p className="text-xs text-muted-foreground font-mono">
              Establishing semantic search...
            </p>
          )}
          {progress === 100 && (
            <p className="text-xs text-cyber-teal font-mono font-semibold">
              Systems ready. Welcome to the portfolio.
            </p>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;