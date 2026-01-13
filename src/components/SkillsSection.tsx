import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages & Core",
    skills: ["Python", "SQL", "Bash", "JavaScript"],
  },
  {
    title: "AI & Data",
    skills: ["TensorFlow", "PyTorch", "Pandas", "NumPy", "Scikit-learn"],
  },
  {
    title: "Tools & Systems",
    skills: ["Linux", "Git", "Docker", "Vim", "APIs"],
  },
  {
    title: "Exploring",
    skills: ["NLP", "Computer Vision", "LLMs", "Transformers"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative">
      <div className="section-container" ref={ref}>
        {/* Section indicator */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs text-muted-foreground">02</span>
          <div className="w-12 h-px bg-border" />
          <span className="font-mono text-xs text-muted-foreground">Skills</span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left - Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-4"
          >
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
              Technical
              <br />
              <span className="text-muted-foreground">toolkit.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              A growing collection of technologies and methodologies. 
              Focused on AI/ML, with a strong foundation in systems programming 
              and open-source tools.
            </p>
            
            {/* Philosophy card */}
            <div className="p-6 border border-border rounded-2xl bg-card/50">
              <p className="text-sm text-muted-foreground font-mono mb-2">Philosophy</p>
              <p className="text-foreground">
                "Learn by building. Every project is an opportunity to grow."
              </p>
            </div>
          </motion.div>

          {/* Right - Skills grid */}
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
                className="group"
              >
                <h3 className="font-mono text-xs text-muted-foreground mb-4 uppercase tracking-wider">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.3, 
                        delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 text-sm border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Linux/Open Source note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 p-8 border border-border rounded-2xl bg-gradient-to-br from-card/80 to-transparent"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Open Source Advocate</h3>
              <p className="text-muted-foreground text-sm max-w-xl">
                Believing in community-driven development. Open source isn't just code—it's 
                a philosophy that democratizes technology and accelerates innovation.
              </p>
            </div>
            <div className="font-mono text-6xl text-muted-foreground/20 select-none">
              🐧
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
