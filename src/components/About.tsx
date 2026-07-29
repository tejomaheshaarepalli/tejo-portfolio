import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Award, Database, TrendingUp, Cpu, Network } from 'lucide-react';
import portfolioData from '../data/portfolioData';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: Brain,
      value: '4+',
      label: 'Years Experience',
      description: 'In AI / ML'
    },
    {
      icon: Award,
      value: '6',
      label: 'Certifications',
      description: 'Global Rankings'
    },
    {
      icon: Database,
      value: '3M+',
      label: 'Docs Processed',
      description: 'Semantic Indexing'
    },
    {
      icon: TrendingUp,
      value: '92%',
      label: 'Model Accuracy',
      description: 'Higher Precision'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 bg-muted/20" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-cyber mx-auto mb-8"></div>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-cyber-teal">
                AI / Machine Learning Specialist
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {portfolioData.summary}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My expertise spans across Generative AI, Retrieval-Augmented Generation (RAG), 
                  Time-Series Forecasting, and NLP. I'm passionate about building intelligent, 
                  scalable systems that solve complex problems in healthcare and finance.
                </p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="card-cyber text-center group"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-gradient-cyber rounded-full flex items-center justify-center group-hover:shadow-glow transition-shadow duration-300">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-emerald-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Core Competencies */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Core <span className="text-gradient">Competencies</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card-glow p-6 text-center">
                <div className="w-16 h-16 bg-cyber-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-cyber-teal" />
                </div>
                <h4 className="font-semibold mb-2">Generative AI & LLMs</h4>
                <p className="text-sm text-muted-foreground">
                  RAG systems, fine-tuning with LoRA/PEFT, and advanced prompt engineering
                </p>
              </div>
              <div className="card-glow p-6 text-center">
                <div className="w-16 h-16 bg-cyber-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-cyber-green" />
                </div>
                <h4 className="font-semibold mb-2">Deep Learning & NLP</h4>
                <p className="text-sm text-muted-foreground">
                  Entity extraction, semantic search, and time-series forecasting with PyTorch
                </p>
              </div>
              <div className="card-glow p-6 text-center">
                <div className="w-16 h-16 bg-cyber-amber/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Network className="w-8 h-8 text-cyber-amber" />
                </div>
                <h4 className="font-semibold mb-2">MLOps & Deployment</h4>
                <p className="text-sm text-muted-foreground">
                  Scalable ML services using Docker, FastAPI, MLflow, and cloud platforms
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;