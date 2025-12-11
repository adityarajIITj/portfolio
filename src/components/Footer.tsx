import { motion } from "framer-motion";
import { Heart, Github, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 border-t border-border/50">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-accent to-neon-tertiary flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground">AR</span>
              </div>
              <span className="font-display text-xl font-bold text-gradient">
                Aditya Raj
              </span>
            </motion.div>
            <p className="text-sm text-muted-foreground font-mono">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-mono">Crafted with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.div>
            <span className="font-mono">at IIT Jodhpur</span>
          </div>

          {/* Social & Back to Top */}
          <div className="flex items-center gap-4">
            <motion.a
              href="mailto:b25bs1020@iitj.ac.in"
              className="p-3 glass rounded-xl hover:border-primary/30 transition-colors hoverable"
              whileHover={{ y: -3 }}
            >
              <Mail className="w-5 h-5 text-muted-foreground" />
            </motion.a>
            <motion.a
              href="https://github.com/adityarajIITj"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-xl hover:border-primary/30 transition-colors hoverable"
              whileHover={{ y: -3 }}
            >
              <Github className="w-5 h-5 text-muted-foreground" />
            </motion.a>
            <motion.button
              onClick={scrollToTop}
              className="p-3 bg-gradient-to-r from-primary to-accent rounded-xl hoverable"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="w-5 h-5 text-primary-foreground" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
