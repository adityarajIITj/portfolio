import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const sections = [
  { id: "home", label: "Start" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "contact", label: "Connect" },
];

const JourneyPath = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  const pathProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);

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

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-1"
    >
      {/* Progress line background */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border" />
      
      {/* Animated progress line */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-0 w-px bg-foreground origin-top"
        style={{ height: pathProgress }}
      />
      
      {sections.map((section, index) => (
        <div key={section.id} className="relative group">
          <button
            onClick={() => scrollToSection(section.id)}
            className="relative py-4 px-2 flex items-center justify-center"
          >
            {/* Node */}
            <motion.div
              className={`w-2 h-2 rounded-full border transition-all duration-500 ${
                index <= activeIndex
                  ? "bg-foreground border-foreground scale-100"
                  : "bg-transparent border-muted-foreground/40 scale-75"
              }`}
              whileHover={{ scale: 1.5 }}
            />
            
            {/* Label */}
            <span
              className={`absolute right-8 whitespace-nowrap text-xs font-mono transition-all duration-300 ${
                index === activeIndex
                  ? "opacity-100 translate-x-0 text-foreground"
                  : "opacity-0 translate-x-2 text-muted-foreground group-hover:opacity-70 group-hover:translate-x-0"
              }`}
            >
              {section.label}
            </span>
          </button>
        </div>
      ))}
    </motion.div>
  );
};

export default JourneyPath;
