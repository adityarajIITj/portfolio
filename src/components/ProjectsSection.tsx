import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lock, Bot, Sparkles, ArrowUpRight, Layers } from "lucide-react";

const projects = [
  {
    title: "Crystal-Based Auth System",
    description: "A secure authentication system built from scratch with crystal-clear security protocols, modern encryption techniques, multi-factor authentication, and secure session management.",
    tags: ["Python", "Security", "Cryptography", "Auth"],
    icon: Lock,
    featured: true,
    gradient: "from-cyan-500 via-blue-500 to-purple-500",
    size: "large",
  },
  {
    title: "Indigenous LLM",
    description: "An ambitious project to develop a homegrown Large Language Model, exploring transformer architectures and NLP from the ground up with an India-first approach.",
    tags: ["AI", "NLP", "Transformers", "PyTorch"],
    icon: Bot,
    featured: true,
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    size: "large",
  },
  {
    title: "More Coming Soon",
    description: "Constantly working on new ideas and experiments in AI, data science, and software development. Stay tuned!",
    tags: ["In Progress", "Innovation"],
    icon: Sparkles,
    featured: false,
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    size: "small",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-tertiary/50 to-transparent" />
      
      {/* Background */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />
      
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span 
            className="inline-block px-4 py-1 mb-6 text-xs font-mono tracking-wider text-neon-tertiary glass rounded-full"
          >
            PROJECTS
          </motion.span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            What I'm <span className="text-gradient">Building</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            A showcase of my ongoing explorations in AI, security, and software development.
          </p>
        </motion.div>

        {/* Projects Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative ${
                project.size === "small" ? "lg:col-span-2" : ""
              }`}
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-20 transition-all duration-700`} />
              
              <div className="relative h-full glass rounded-[2rem] border border-border/50 group-hover:border-primary/30 transition-all duration-500 overflow-hidden">
                {/* Gradient Border Top */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} opacity-50 group-hover:opacity-100 transition-opacity`} />
                
                <div className="p-8 md:p-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                      <project.icon className="w-8 h-8 text-white" />
                      <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="flex items-center gap-2">
                      {project.featured && (
                        <span className="px-3 py-1 text-xs font-mono bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full border border-primary/20">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-foreground group-hover:text-gradient transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono glass rounded-full text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Indicator */}
                <motion.div 
                  className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </motion.div>

                {/* Decorative Corner */}
                <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${project.gradient} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/adityarajIITj"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 glass rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hoverable"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Layers className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="font-medium text-muted-foreground group-hover:text-foreground transition-colors">
              Explore more on GitHub
            </span>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
