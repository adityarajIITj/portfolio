import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

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
            <span className="font-mono text-sm text-foreground">
              AR<span className="text-muted-foreground">.</span>
            </span>
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Aditya Raj
            </span>
          </div>

          {/* Center */}
          <div className="text-sm text-muted-foreground font-mono">
            Built with curiosity
          </div>

          {/* Right */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
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
