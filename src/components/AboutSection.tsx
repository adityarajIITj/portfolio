import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Brain, Target, Lightbulb } from "lucide-react";

const traits = [
  {
    icon: Rocket,
    title: "Ambitious",
    description: "Always pushing boundaries and setting higher goals",
  },
  {
    icon: Brain,
    title: "Curious Learner",
    description: "Constantly exploring new technologies and concepts",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Focused on delivering impactful solutions",
  },
  {
    icon: Lightbulb,
    title: "Innovative",
    description: "Thinking outside the box to solve complex problems",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">ABOUT ME</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Passionate About <span className="text-gradient">AI Innovation</span>
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground text-lg leading-relaxed">
            As a first-year student at IIT Jodhpur specializing in Applied AI and Data Science, 
            I'm on a mission to understand and harness the power of artificial intelligence. 
            My journey is driven by an insatiable curiosity and a deep desire to create 
            technology that makes a real difference.
          </p>
        </motion.div>

        {/* Traits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {traits.map((trait, index) => (
            <motion.div
              key={trait.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group p-6 glass rounded-xl hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:glow-primary transition-all duration-300">
                <trait.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                {trait.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {trait.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20 relative"
        >
          <div className="glass rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                  My Journey So Far
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  From writing my first lines of Python code to building authentication systems 
                  and exploring Large Language Models, every step has been a learning adventure. 
                  I believe in the power of persistent effort and continuous improvement. 
                  The world of AI is vast, and I'm here to explore every corner of it.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    IIT Jodhpur '29
                  </span>
                  <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    Applied AI & DS
                  </span>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Problem Solver
                  </span>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 animate-pulse-glow" />
                  <div className="absolute inset-4 bg-gradient-primary rounded-full opacity-40 animate-pulse-glow" style={{ animationDelay: "0.5s" }} />
                  <div className="absolute inset-8 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="font-display text-4xl font-bold text-primary-foreground">AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
