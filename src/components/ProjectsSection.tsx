import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lock, Bot, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Crystal-Based Auth System",
    description: "A secure authentication system built from scratch, implementing crystal-clear security protocols and modern encryption techniques for robust user verification. Features multi-factor authentication and secure session management.",
    tags: ["Python", "Security", "Authentication", "Encryption", "Cryptography"],
    icon: Lock,
    featured: true,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Indigenous LLM",
    description: "An ambitious ongoing project to develop a homegrown Large Language Model, exploring transformer architectures and natural language processing from the ground up. Building AI solutions with an India-first approach.",
    tags: ["AI", "NLP", "Deep Learning", "Transformers", "PyTorch"],
    icon: Bot,
    featured: true,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "More Coming Soon",
    description: "Constantly working on new ideas and experiments. Stay tuned for more exciting projects in AI, data science, and software development!",
    tags: ["In Progress", "Innovation"],
    icon: Sparkles,
    featured: false,
    gradient: "from-amber-500 to-orange-500",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">PROJECTS</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            What I'm <span className="text-gradient">Building</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            A showcase of my ongoing explorations and completed works in AI, 
            security, and software development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`group relative ${index === 2 ? "lg:col-span-2 lg:max-w-2xl lg:mx-auto" : ""}`}
            >
              <div className="relative overflow-hidden rounded-2xl glass h-full">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}>
                      <project.icon className="w-7 h-7 text-white" />
                    </div>
                    {project.featured && (
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-2xl font-bold mb-3 text-foreground group-hover:text-gradient transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary text-muted-foreground text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative corner */}
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-20 rounded-full blur-2xl group-hover:opacity-30 transition-opacity`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
