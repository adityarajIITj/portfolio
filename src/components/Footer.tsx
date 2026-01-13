import { motion } from "framer-motion";
import { ArrowUp, Github, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <span className="font-mono text-sm text-primary">
              AR<span className="text-muted-foreground">.</span>
            </span>
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Aditya Raj
            </span>
          </div>

          {/* Center */}
          <div className="flex items-center gap-4">
            <motion.a
              href="mailto:b25bs1020@iitj.ac.in"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ y: -2 }}
            >
              <Mail className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="https://github.com/adityarajIITj"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ y: -2 }}
            >
              <Github className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Right */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            whileHover={{ y: -2 }}
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
