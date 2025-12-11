import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Github, Mail, Sparkles, ExternalLink } from "lucide-react";

const roles = ["AI Engineer", "Data Scientist", "Open Source Advocate", "Problem Solver"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedRole.length < currentRole.length) {
          setDisplayedRole(currentRole.slice(0, displayedRole.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedRole.length > 0) {
          setDisplayedRole(displayedRole.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayedRole, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] animate-blob"
          style={{ y }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] animate-blob"
          style={{ animationDelay: "2s", y }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-neon-tertiary/10 rounded-full blur-[100px] animate-blob"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,150,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,150,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-20 w-20 h-20 border border-primary/30 rounded-xl"
        animate={{ 
          rotate: [0, 90, 180, 270, 360],
          y: [0, -20, 0, 20, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-32 left-20 w-16 h-16 bg-gradient-to-br from-accent/30 to-transparent rounded-full"
        animate={{ 
          scale: [1, 1.2, 1],
          y: [0, -30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary rounded-full"
        animate={{ 
          y: [0, -40, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div 
        className="container mx-auto px-6 z-10"
        style={{ opacity }}
      >
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="group mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-neon-tertiary rounded-full blur opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center gap-2 px-6 py-2 glass rounded-full border border-primary/20">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-mono">First Year @ IIT Jodhpur</span>
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-4"
          >
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
              <span className="block text-foreground">Aditya</span>
              <span className="block text-gradient-animated">Raj</span>
            </h1>
          </motion.div>

          {/* Animated Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-12 mb-8 flex items-center justify-center"
          >
            <div className="flex items-center gap-2 font-mono text-xl md:text-2xl">
              <span className="text-muted-foreground">{">"}</span>
              <span className="text-primary neon-text">{displayedRole}</span>
              <span className="w-0.5 h-6 bg-primary animate-pulse" />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed"
          >
            Crafting intelligent systems at the intersection of{" "}
            <span className="text-primary font-medium">AI</span>,{" "}
            <span className="text-accent font-medium">Data Science</span>, and{" "}
            <span className="text-neon-tertiary font-medium">Open Source</span>.
            Building tomorrow's solutions today.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <motion.a
              href="#projects"
              className="group relative px-8 py-4 overflow-hidden rounded-2xl font-semibold hoverable"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-neon-tertiary" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-neon-tertiary opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
              <span className="relative z-10 flex items-center gap-2 text-primary-foreground">
                Explore My Work
                <ExternalLink className="w-4 h-4" />
              </span>
            </motion.a>
            
            <motion.a
              href="https://github.com/adityarajIITj"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 glass rounded-2xl font-semibold border border-border hover:border-primary/50 transition-colors flex items-center gap-2 hoverable"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-5 h-5" />
              GitHub Profile
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-16 flex gap-4"
          >
            {[
              { icon: Mail, href: "mailto:b25bs1020@iitj.ac.in", label: "Email" },
              { icon: Github, href: "https://github.com/adityarajIITj", label: "GitHub" },
            ].map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group p-4 glass rounded-2xl hover:border-primary/50 transition-all hoverable"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors hoverable"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs font-mono tracking-wider">SCROLL</span>
          <ArrowDown className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
