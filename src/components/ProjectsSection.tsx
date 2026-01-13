import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Lock, Bot, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Crystal Auth System",
    description: "A secure authentication framework built from scratch with modern encryption, multi-factor authentication, and secure session management.",
    tags: ["Python", "Cryptography", "Security"],
    icon: Lock,
    featured: true,
  },
  {
    title: "Indigenous LLM",
    description: "An ambitious exploration into building a Large Language Model from the ground up. Understanding transformer architectures through hands-on development.",
    tags: ["PyTorch", "NLP", "Transformers"],
    icon: Bot,
    featured: true,
  },
  {
    title: "More Coming Soon",
    description: "Constantly working on new experiments in AI, data science, and software development.",
    tags: ["In Progress"],
    icon: Sparkles,
    featured: false,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative">
      {/* Background accent */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="section-container" ref={ref}>
        {/* Section indicator */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs text-primary">03</span>
          <div className="w-12 h-px bg-primary/50" />
          <span className="font-mono text-xs text-muted-foreground">Projects</span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-2xl mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            Selected
            <br />
            <span className="text-primary">work.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A showcase of projects that represent my journey in AI, security, 
            and software development.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="p-8 md:p-10 border border-border rounded-2xl bg-card/30 hover:bg-card/50 hover:border-primary/30 transition-all duration-500">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all">
                      <project.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-xl md:text-2xl font-medium text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="flex-shrink-0 px-2 py-1 text-xs font-mono text-primary border border-primary/30 rounded bg-primary/10">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-mono text-muted-foreground border border-border rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Arrow */}
                  <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/adityarajIITj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors underline-effect"
          >
            View all projects on GitHub
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
