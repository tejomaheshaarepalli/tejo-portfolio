import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar, Building } from 'lucide-react';
import portfolioData from '../data/portfolioData';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="experience" className="py-20 bg-muted/20" ref={ref}>
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
              Professional <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-cyber mx-auto mb-8"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A journey of innovation and technical excellence in AI / Machine Learning engineering
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-cyber opacity-30"></div>

              {/* Experience Items */}
              {portfolioData.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                  className="relative flex items-start mb-12 group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-cyber rounded-full border-4 border-background shadow-glow group-hover:scale-125 transition-transform duration-300 z-10"></div>

                  {/* Content Card */}
                  <div className="ml-20 flex-1">
                    <motion.div
                      className="card-cyber p-6 group-hover:shadow-intense transition-all duration-300"
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gradient mb-1">
                            {exp.role}
                          </h3>
                          <div className="flex items-center text-cyber-teal font-semibold mb-2">
                            <Building className="w-4 h-4 mr-2" />
                            {exp.company}
                          </div>
                        </div>
                        <div className="flex flex-col sm:items-end text-sm text-muted-foreground">
                          <div className="flex items-center mb-1">
                            <Calendar className="w-4 h-4 mr-2" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <motion.li
                              key={achievementIndex}
                              className="flex items-start text-muted-foreground"
                              initial={{ opacity: 0, x: -20 }}
                              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                              transition={{ 
                                delay: index * 0.2 + achievementIndex * 0.1 + 0.3, 
                                duration: 0.4 
                              }}
                            >
                              <div className="w-2 h-2 bg-cyber-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="leading-relaxed">
                                {achievement}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Career Progression Summary */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="card-glow p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">
                Career <span className="text-gradient">Progression</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                From Data Engineer to Gen AI / ML Engineer, I've consistently delivered 
                intelligent solutions that solve complex problems in financial and healthcare sectors. 
                My journey reflects a commitment to building scalable, 
                high-performance machine learning systems and Generative AI applications.
              </p>
              <div className="flex justify-center mt-6 space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">4+</div>
                  <div className="text-sm text-muted-foreground">Years Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">5</div>
                  <div className="text-sm text-muted-foreground">Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">100%</div>
                  <div className="text-sm text-muted-foreground">Impact Driven</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;