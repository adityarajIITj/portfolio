import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const milestones = [
  { year: "2024", event: "Joined IIT Jodhpur", description: "Started B.Tech in Applied AI & Data Science" },
  { year: "2024", event: "First Python Project", description: "Built automation scripts and data tools" },
  { year: "2025", event: "Crystal Auth System", description: "Developed secure authentication framework" },
  { year: "2025", event: "Indigenous LLM", description: "Exploring transformer architectures" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative">
      <div className="section-container" ref={ref}>
        {/* Section indicator */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs text-primary">01</span>
          <div className="w-12 h-px bg-primary/50" />
          <span className="font-mono text-xs text-muted-foreground">About</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">
              Driven by <span className="text-primary">curiosity</span>,
              <br />
              powered by code.
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I'm a first-year student at IIT Jodhpur, specializing in Applied AI 
                and Data Science. My journey into technology began with a simple 
                question: "How can machines learn to think?"
              </p>
              <p>
                Today, I channel that curiosity into building practical solutions—from 
                secure authentication systems to exploring the frontiers of natural 
                language processing.
              </p>
              <p>
                When I'm not coding, you'll find me diving into Linux systems, 
                contributing to open source, or exploring the latest in AI research.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {["IIT Jodhpur '29", "AI/ML", "Linux", "Open Source"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono text-primary/80 border border-primary/30 rounded-full hover:bg-primary/10 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right column - Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="relative pl-8 group"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/50 transition-all" />
                  
                  <div className="font-mono text-xs text-primary mb-1">
                    {milestone.year}
                  </div>
                  <h3 className="font-medium text-foreground mb-1 group-hover:text-primary transition-colors">
                    {milestone.event}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {milestone.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
