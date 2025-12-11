import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Brain, Target, Lightbulb, Zap, Code2 } from "lucide-react";

const traits = [
  {
    icon: Rocket,
    title: "Ambitious",
    description: "Pushing boundaries and setting higher goals every day",
    gradient: "from-primary to-cyan-400",
  },
  {
    icon: Brain,
    title: "Curious Learner",
    description: "Constantly exploring new technologies and concepts",
    gradient: "from-accent to-pink-400",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Focused on delivering impactful solutions",
    gradient: "from-neon-tertiary to-orange-400",
  },
  {
    icon: Lightbulb,
    title: "Innovative",
    description: "Thinking outside the box to solve complex problems",
    gradient: "from-green-400 to-primary",
  },
];

const stats = [
  { value: "2+", label: "Projects Built", icon: Code2 },
  { value: "500+", label: "Lines of Code", icon: Zap },
  { value: "∞", label: "Curiosity Level", icon: Brain },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span 
            className="inline-block px-4 py-1 mb-6 text-xs font-mono tracking-wider text-primary glass rounded-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
          >
            ABOUT ME
          </motion.span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            Passionate About{" "}
            <span className="text-gradient">AI Innovation</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
            As a first-year student at IIT Jodhpur specializing in Applied AI and Data Science, 
            I'm on a mission to understand and harness the power of artificial intelligence.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-3 gap-4 md:gap-8 mb-20 max-w-3xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-6 md:p-8 glass rounded-3xl text-center border border-border/50 group-hover:border-primary/30 transition-colors">
                <stat.icon className="w-6 h-6 mx-auto mb-3 text-primary" />
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground font-mono">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Traits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {traits.map((trait, index) => (
            <motion.div
              key={trait.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative h-full p-8 glass rounded-3xl border border-border/50 group-hover:border-primary/30 transition-all duration-500 overflow-hidden">
                {/* Icon with gradient background */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${trait.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <trait.icon className="w-8 h-8 text-primary-foreground" />
                  <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h3 className="font-display text-xl font-bold mb-3 text-foreground group-hover:text-gradient transition-colors">
                  {trait.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {trait.description}
                </p>

                {/* Decorative corner */}
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${trait.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Journey Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-neon-tertiary/10 rounded-[2rem] blur-3xl" />
          <div className="relative glass rounded-[2rem] p-8 md:p-12 border border-border/50 overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-mono tracking-wider text-accent glass rounded-full">
                  MY JOURNEY
                </span>
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  From Curiosity to <span className="text-gradient">Creation</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                  From writing my first lines of Python code to building authentication systems 
                  and exploring Large Language Models, every step has been a learning adventure. 
                  I believe in the power of persistent effort and continuous improvement.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["IIT Jodhpur '29", "Applied AI & DS", "Linux Enthusiast", "Open Source"].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 text-sm font-mono glass rounded-full text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Animated Element */}
              <div className="relative w-64 h-64 flex-shrink-0">
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-neon-tertiary opacity-20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-4 rounded-full bg-gradient-to-br from-accent via-neon-tertiary to-primary opacity-30"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-8 rounded-full bg-gradient-to-br from-neon-tertiary via-primary to-accent opacity-40"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-12 rounded-full glass flex items-center justify-center">
                  <span className="font-display text-4xl font-bold text-gradient">AI</span>
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
