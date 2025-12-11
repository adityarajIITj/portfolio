import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code, Palette, Cpu, Database, GitBranch, Terminal, Boxes, Brain } from "lucide-react";

const skills = [
  {
    name: "Python",
    level: 85,
    icon: Code,
    category: "Programming",
    description: "ML/AI, automation, data analysis",
    color: "from-blue-500 to-cyan-400",
  },
  {
    name: "Linux Expert",
    level: 80,
    icon: Terminal,
    category: "Systems",
    description: "Shell scripting, system admin, FOSS advocate",
    color: "from-orange-500 to-yellow-400",
  },
  {
    name: "UI/UX Design",
    level: 75,
    icon: Palette,
    category: "Design",
    description: "Creating intuitive interfaces",
    color: "from-pink-500 to-rose-400",
  },
  {
    name: "Logic Building",
    level: 80,
    icon: Cpu,
    category: "Problem Solving",
    description: "Algorithm design & optimization",
    color: "from-purple-500 to-violet-400",
  },
  {
    name: "Data Science",
    level: 70,
    icon: Database,
    category: "Analytics",
    description: "Data analysis, visualization",
    color: "from-green-500 to-emerald-400",
  },
  {
    name: "Machine Learning",
    level: 65,
    icon: Brain,
    category: "AI",
    description: "Neural networks, deep learning",
    color: "from-primary to-accent",
  },
];

const techStack = [
  "TensorFlow", "PyTorch", "NumPy", "Pandas", "Git", "Docker", 
  "SQL", "Vim", "Bash", "APIs", "NLP", "Computer Vision"
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      
      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span 
            className="inline-block px-4 py-1 mb-6 text-xs font-mono tracking-wider text-accent glass rounded-full"
          >
            SKILLS
          </motion.span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            A growing toolkit of technologies and methodologies. Passionate about 
            open source and the Linux ecosystem.
          </p>
        </motion.div>

        {/* Skills Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className={`group relative ${index === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500`} />
              <div className="relative h-full p-6 glass rounded-3xl border border-border/50 group-hover:border-primary/30 transition-all duration-500 overflow-hidden">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                    <skill.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground px-3 py-1 glass rounded-full">
                    {skill.category}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold mb-2 text-foreground group-hover:text-gradient transition-colors">
                  {skill.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {skill.description}
                </p>

                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground font-mono">Proficiency</span>
                    <span className="text-primary font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1.2, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </div>

                {/* Decorative */}
                <div className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br ${skill.color} opacity-10 rounded-full blur-2xl group-hover:opacity-30 transition-opacity`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Open Source Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-neon-tertiary/10 rounded-3xl blur-xl" />
          <div className="relative p-8 glass rounded-3xl border border-border/50 text-center overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-neon-tertiary" />
            <Boxes className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="font-display text-2xl font-bold mb-3">
              🐧 Open Source Advocate
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Believing in the power of community-driven development. Open source isn't just code—it's 
              a movement that democratizes technology and fosters innovation for everyone.
            </p>
          </div>
        </motion.div>

        {/* Tech Stack Cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6 font-mono text-sm">Also exploring</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-4 py-2 glass rounded-full text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 hoverable"
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
