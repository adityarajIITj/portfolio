import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

const sections = [
  { id: "home", label: "Start", icon: "🏁" },
  { id: "about", label: "About", icon: "📍" },
  { id: "skills", label: "Skills", icon: "⚡" },
  { id: "projects", label: "Work", icon: "🚀" },
  { id: "contact", label: "Connect", icon: "🎯" },
];

const JourneyPath = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  // Car position based on scroll
  const carY = useTransform(smoothProgress, [0, 1], [0, 280]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveIndex(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDrag = (event: any, info: any) => {
    if (!pathRef.current) return;
    
    const pathHeight = 280;
    const progress = Math.max(0, Math.min(1, info.point.y / pathHeight));
    const targetIndex = Math.round(progress * (sections.length - 1));
    
    if (targetIndex !== activeIndex && sections[targetIndex]) {
      scrollToSection(sections[targetIndex].id);
    }
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      className="fixed right-6 lg:right-12 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center"
    >
      {/* Road/Path */}
      <div 
        ref={pathRef}
        className="relative w-16 h-[320px] flex flex-col items-center"
      >
        {/* Road background */}
        <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-3 bg-muted rounded-full overflow-hidden">
          {/* Road markings */}
          <div className="absolute inset-0 flex flex-col items-center justify-around py-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-0.5 h-3 bg-muted-foreground/30 rounded-full" />
            ))}
          </div>
          
          {/* Progress glow */}
          <motion.div
            className="absolute top-0 left-0 right-0 bg-gradient-to-b from-primary to-primary/50 glow-line"
            style={{ height: useTransform(smoothProgress, [0, 1], ["0%", "100%"]) }}
          />
        </div>
        
        {/* Draggable Car */}
        <motion.div
          drag="y"
          dragConstraints={{ top: 0, bottom: 280 }}
          dragElastic={0.1}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          onDrag={handleDrag}
          style={{ y: carY }}
          className="absolute left-1/2 -translate-x-1/2 z-20 cursor-grab active:cursor-grabbing"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative">
            {/* Car glow */}
            <div className="absolute inset-0 bg-primary/50 rounded-lg blur-lg animate-pulse" />
            
            {/* Car body */}
            <div className="relative w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-lg border border-primary/50">
              <span className="text-lg">🚗</span>
            </div>
            
            {/* Headlights */}
            <motion.div
              className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-8 bg-gradient-to-t from-transparent via-primary/20 to-primary/40 rounded-t-full"
              style={{ filter: "blur(4px)" }}
            />
          </div>
        </motion.div>
        
        {/* Section nodes */}
        {sections.map((section, index) => {
          const nodeY = (index / (sections.length - 1)) * 280 + 20;
          const isActive = index <= activeIndex;
          const isCurrent = index === activeIndex;
          
          return (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="absolute left-1/2 -translate-x-1/2 group"
              style={{ top: nodeY }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Node */}
              <motion.div
                className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                  isCurrent
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : isActive
                    ? "bg-primary/30 text-primary"
                    : "bg-muted text-muted-foreground"
                }`}
                animate={isCurrent ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-sm">{section.icon}</span>
                
                {/* Active ring */}
                {isCurrent && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-primary"
                    animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                )}
              </motion.div>
              
              {/* Label */}
              <span
                className={`absolute right-12 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs font-mono transition-all duration-300 ${
                  isCurrent
                    ? "opacity-100 translate-x-0 text-primary"
                    : "opacity-0 translate-x-2 group-hover:opacity-70 group-hover:translate-x-0 text-muted-foreground"
                }`}
              >
                {section.label}
              </span>
            </motion.button>
          );
        })}
      </div>
      
      {/* Instructions */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="mt-4 text-xs text-muted-foreground font-mono text-center"
      >
        Drag to<br/>navigate
      </motion.p>
    </motion.div>
  );
};

export default JourneyPath;
