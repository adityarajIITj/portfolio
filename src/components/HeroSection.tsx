import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Github, Mail } from "lucide-react";

const roles = ["AI Engineer", "Data Scientist", "Problem Solver", "Open Source Dev"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      {/* Gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-muted/30 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <motion.div
        className="section-container relative z-10"
        style={{ opacity, y }}
      >
        <div className="max-w-4xl">
          {/* Intro line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-sm text-muted-foreground mb-6"
          >
            First Year @ IIT Jodhpur — Applied AI & Data Science
          </motion.p>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8"
          >
            <span className="block text-foreground">Aditya Raj</span>
            <span className="block text-muted-foreground mt-2">
              Building the future
              <br />
              with intelligence.
            </span>
          </motion.h1>

          {/* Role switcher */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="h-8 mb-12 overflow-hidden"
          >
            <motion.div
              key={roleIndex}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-muted-foreground"
            >
              → {roles[roleIndex]}
            </motion.div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#projects"
              className="group inline-flex items-center gap-3 px-6 py-3 bg-foreground text-background rounded-full font-medium text-sm transition-transform"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </motion.a>
            
            <motion.a
              href="https://github.com/adityarajIITj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full text-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-4 h-4" />
              GitHub
            </motion.a>
            
            <motion.a
              href="mailto:b25bs1020@iitj.ac.in"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full text-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-4 h-4" />
              Email
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs font-mono tracking-wider">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
