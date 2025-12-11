import { motion } from "framer-motion";
import { Heart, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <motion.span
              className="font-display text-2xl font-bold text-gradient"
              whileHover={{ scale: 1.05 }}
            >
              AR
            </motion.span>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Aditya Raj. All rights reserved.
            </p>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span>at IIT Jodhpur</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="mailto:b25bs1020@iitj.ac.in"
              className="p-2 glass rounded-lg hover:border-primary/50 transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-5 h-5 text-muted-foreground" />
            </motion.a>
            <motion.a
              href="https://github.com/adityarajIITj"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 glass rounded-lg hover:border-primary/50 transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-5 h-5 text-muted-foreground" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
