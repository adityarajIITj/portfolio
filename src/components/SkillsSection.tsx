import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code, Palette, Cpu, Database, GitBranch, Terminal } from "lucide-react";

const skills = [
  {
    name: "Python",
    level: 85,
    icon: Code,
    category: "Programming",
    description: "Data analysis, ML/AI, automation scripts",
  },
  {
    name: "Linux Expert",
    level: 80,
    icon: Terminal,
    category: "Systems",
    description: "Command line, shell scripting, open source advocacy",
  },
  {
    name: "UI/UX Design",
    level: 75,
    icon: Palette,
    category: "Design",
    description: "Creating intuitive and beautiful interfaces",
  },
  {
    name: "Logic Building",
    level: 80,
    icon: Cpu,
    category: "Problem Solving",
    description: "Algorithm design and optimization",
  },
  {
    name: "Data Science",
    level: 70,
    icon: Database,
    category: "Analytics",
    description: "Data analysis, visualization, insights",
  },
  {
    name: "Git & GitHub",
    level: 75,
    icon: GitBranch,
    category: "Open Source",
    description: "Version control, collaboration, contributing to FOSS",
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-32 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">SKILLS</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            A growing toolkit of technologies and methodologies that I'm mastering 
            to build innovative solutions. Passionate about open source and the Linux ecosystem.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="group relative"
            >
              <div className={`p-6 glass rounded-xl transition-all duration-300 h-full ${
                hoveredSkill === skill.name ? "border-primary/50 glow-primary" : ""
              }`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <skill.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground px-3 py-1 bg-secondary rounded-full">
                    {skill.category}
                  </span>
                </div>
                
                <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                  {skill.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {skill.description}
                </p>
                
                {/* Progress Bar */}
                <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  <span>Proficiency</span>
                  <span className="text-primary font-medium">{skill.level}%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Open Source Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 p-6 glass rounded-xl text-center"
        >
          <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
            🐧 Open Source Advocate
          </h3>
          <p className="text-muted-foreground">
            Believing in the power of community-driven development. Open source isn't just code—it's a movement that democratizes technology and fosters innovation.
          </p>
        </motion.div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-6">Also exploring:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["TensorFlow", "Neural Networks", "NLP", "Computer Vision", "APIs", "SQL", "NumPy", "Pandas", "Bash", "Vim"].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 1 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 glass rounded-full text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
