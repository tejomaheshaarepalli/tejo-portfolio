import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import portfolioData from '../data/portfolioData';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    if (inView && !animationTriggered) {
      setAnimationTriggered(true);
    }
  }, [inView, animationTriggered]);

  const skillCategories = [
    {
      title: 'Generative AI & LLMs',
      skills: portfolioData.skills.generativeAiLlms,
      color: 'cyber-teal',
      bgColor: 'bg-cyber-teal/10'
    },
    {
      title: 'Machine Learning & Deep Learning',
      skills: portfolioData.skills.machineLearningDeepLearning,
      color: 'cyber-green',
      bgColor: 'bg-cyber-green/10'
    },
    {
      title: 'MLOps & Deployment',
      skills: portfolioData.skills.mlOpsDeployment,
      color: 'cyber-amber',
      bgColor: 'bg-cyber-amber/10'
    },
    {
      title: 'Natural Language Processing',
      skills: portfolioData.skills.naturalLanguageProcessing,
      color: 'cyber-teal',
      bgColor: 'bg-cyber-teal/10'
    },
    {
      title: 'Data Engineering & Big Data',
      skills: portfolioData.skills.dataEngineeringBigData,
      color: 'cyber-green',
      bgColor: 'bg-cyber-green/10'
    },
    {
      title: 'Cloud & AI Platforms',
      skills: portfolioData.skills.cloudAiPlatforms,
      color: 'cyber-amber',
      bgColor: 'bg-cyber-amber/10'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Radial Progress Component
  const RadialProgress: React.FC<{ 
    percentage: number; 
    skill: string; 
    color: string;
    delay: number;
  }> = ({ percentage, skill, color, delay }) => {
    const [currentPercentage, setCurrentPercentage] = useState(0);

    useEffect(() => {
      if (animationTriggered) {
        const timer = setTimeout(() => {
          const interval = setInterval(() => {
            setCurrentPercentage((prev) => {
              if (prev >= percentage) {
                clearInterval(interval);
                return percentage;
              }
              return prev + 2;
            });
          }, 20);
        }, delay);

        return () => clearTimeout(timer);
      }
    }, [animationTriggered, percentage, delay]);

    const circumference = 2 * Math.PI * 35;
    const strokeDashoffset = circumference - (currentPercentage / 100) * circumference;

    return (
      <div className="flex flex-col items-center group">
        <div className="relative mb-3">
          <svg width="80" height="80" className="transform -rotate-90">
            <circle
              cx="40"
              cy="40"
              r="35"
              stroke="currentColor"
              strokeWidth="6"
              fill="transparent"
              className="text-muted/20"
            />
            <circle
              cx="40"
              cy="40"
              r="35"
              stroke="currentColor"
              strokeWidth="6"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className={`text-${color} transition-all duration-1000 ease-out drop-shadow-sm`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`text-lg font-bold text-${color}`}>
              {currentPercentage}%
            </span>
          </div>
        </div>
        <span className="text-sm font-medium text-center text-foreground group-hover:text-foreground/80 transition-colors">
          {skill}
        </span>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-cyber mx-auto mb-8"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advanced expertise across Generative AI, Machine Learning, Data Engineering, and MLOps domains
            </p>
          </motion.div>

          {/* Featured Skills - Radial Progress */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold text-center mb-8">
              Core <span className="text-gradient">Proficiencies</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <RadialProgress percentage={95} skill="Generative AI & LLMs" color="cyber-teal" delay={0} />
              <RadialProgress percentage={92} skill="Machine Learning" color="cyber-green" delay={200} />
              <RadialProgress percentage={90} skill="NLP & Semantic Search" color="cyber-amber" delay={400} />
              <RadialProgress percentage={88} skill="MLOps & Data Pipelines" color="cyber-teal" delay={600} />
            </div>
          </motion.div>

          {/* Skill Categories */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-center mb-12">
              Technology <span className="text-gradient">Stack</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  className={`card-cyber ${category.bgColor} p-6 group`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.2 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  style={{ 
                    transitionDelay: `${0.6 + categoryIndex * 0.1}s`,
                    transitionDuration: '0.5s'
                  }}
                >
                  <h4 className={`font-semibold mb-4 text-${category.color} group-hover:text-${category.color}-light transition-colors`}>
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1 bg-muted rounded-full text-sm font-medium text-muted-foreground hover:bg-muted/80 hover:text-foreground transition-colors cursor-default"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={animationTriggered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: 0.8 + categoryIndex * 0.1 + index * 0.05, duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Operating Systems & Scripting */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
            className="mt-12"
          >
            <h3 className="text-xl font-semibold text-center mb-8">
              Programming & <span className="text-gradient">Data Frameworks</span>
            </h3>
            <div className="max-w-4xl mx-auto">
              <div className="card-glow p-6">
                <div className="flex flex-wrap gap-3 justify-center">
                  {portfolioData.skills.programmingDataProcessing.map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2 bg-gradient-cyber text-white rounded-lg font-medium hover:shadow-glow transition-shadow cursor-default"
                      initial={{ opacity: 0, y: 20 }}
                      animate={animationTriggered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;