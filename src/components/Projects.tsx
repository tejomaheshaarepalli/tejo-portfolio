import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import portfolioData from '../data/portfolioData';

const Projects: React.FC = () => {
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
    <section id="projects" className="py-20 bg-background" ref={ref}>
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
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-cyber mx-auto mb-8"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Innovative AI and Machine Learning solutions that transform complex 
              data into intelligent insights and automated systems
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {portfolioData.projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  className="card-cyber overflow-hidden h-full"
                  whileHover={{ 
                    scale: 1.02, 
                    y: -8,
                    rotateX: 5,
                    rotateY: 5
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Overlay with Links */}
                    {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-4">
                        <Button
                          size="sm"
                          className="btn-hero"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="btn-secondary"
                          onClick={() => window.open(project.repoUrl, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div> */}
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gradient group-hover:text-cyber-teal transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full hover:bg-cyber-teal/20 hover:text-cyber-teal transition-colors"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: index * 0.1 + techIndex * 0.05 + 0.3 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Project Links */}
                    {/* <div className="flex items-center justify-between">
                      <div className="flex space-x-3">
                        <motion.button
                          onClick={() => window.open(project.liveUrl, '_blank')}
                          className="text-cyber-teal hover:text-cyber-teal-light transition-colors flex items-center"
                          whileHover={{ x: 5 }}
                        >
                          <span className="text-sm font-medium mr-1">View Project</span>
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </div>
                      
                      <motion.button
                        onClick={() => window.open(project.repoUrl, '_blank')}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        whileHover={{ scale: 1.1, rotate: 15 }}
                      >
                        <Github className="w-5 h-5" />
                      </motion.button>
                    </div> */}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            className="text-center mt-16"
          >
            <div className="card-glow p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">
                Interested in <span className="text-gradient">Collaboration?</span>
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm always open to discussing new AI/ML challenges and 
                opportunities to build intelligent, innovative solutions.
              </p>
              <Button
                className="btn-hero"
                onClick={() => {
                  const contactSection = document.querySelector('#contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Let's Connect
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;