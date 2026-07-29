import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, GraduationCap, Calendar, MapPin, ExternalLink } from 'lucide-react';
import portfolioData from '../data/portfolioData';

const Education: React.FC = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="education" className="py-20 bg-muted/20" ref={ref}>
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
              Education & <span className="text-gradient">Certifications</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-cyber mx-auto mb-8"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Academic foundation and industry certifications that drive AI / Machine Learning excellence
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Education */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-8 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-cyber-teal" />
                Academic <span className="text-gradient ml-2">Background</span>
              </h3>
              
              <div className="space-y-6">
                {portfolioData.education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="card-cyber p-6 group"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    style={{ 
                      transitionDelay: `${0.4 + index * 0.2}s`,
                      transitionDuration: '0.5s'
                    }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gradient mb-2">
                          {edu.degree}
                        </h4>
                        <p className="text-cyber-teal font-semibold mb-1">
                          {edu.institution}
                        </p>
                        {edu.gpa && (
                          <p className="text-sm text-muted-foreground mb-2">
                            GPA: {edu.gpa}
                          </p>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground sm:text-right">
                        <div className="flex items-center sm:justify-end mb-1">
                          <Calendar className="w-4 h-4 mr-2" />
                          {edu.duration}
                        </div>
                        <div className="flex items-center sm:justify-end">
                          <MapPin className="w-4 h-4 mr-2" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold mb-8 flex items-center">
                <Award className="w-6 h-6 mr-3 text-cyber-green" />
                Professional <span className="text-gradient ml-2">Certifications</span>
              </h3>
              
              <div className="grid gap-4">
                {portfolioData.certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="card-glow p-4 group cursor-pointer"
                    whileHover={{ scale: 1.02, y: -3 }}
                    transition={{ duration: 0.2 }}
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                    style={{ 
                      transitionDelay: `${0.6 + index * 0.1}s`,
                      transitionDuration: '0.4s'
                    }}
                    onClick={() => {
                      if (cert.credentialUrl && cert.credentialUrl !== '#') {
                        window.open(cert.credentialUrl, '_blank');
                      }
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-cyber-green transition-colors">
                          {cert.name}
                        </h4>
                        <p className="text-sm text-cyber-green font-medium">
                          {cert.provider}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {cert.year}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-12 h-12 bg-gradient-cyber rounded-full flex items-center justify-center">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        {cert.credentialUrl && cert.credentialUrl !== '#' && (
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-cyber-green transition-colors" />
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Achievement Summary */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="card-cyber p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-6">
                Continuous <span className="text-gradient">Learning</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                My commitment to continuous learning ensures I stay current with evolving 
                AI technologies, architectures, and best practices. These certifications 
                represent my dedication to excellence in building intelligent and 
                data-driven solutions.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyber-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-8 h-8 text-cyber-teal" />
                  </div>
                  <div className="text-2xl font-bold text-gradient mb-2">Master's</div>
                  <div className="text-sm text-muted-foreground">Computer Science</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyber-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-cyber-green" />
                  </div>
                  <div className="text-2xl font-bold text-gradient mb-2">6</div>
                  <div className="text-sm text-muted-foreground">Professional Certifications</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyber-amber/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-cyber-amber" />
                  </div>
                  <div className="text-2xl font-bold text-gradient mb-2">2024</div>
                  <div className="text-sm text-muted-foreground">Year Certified</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;