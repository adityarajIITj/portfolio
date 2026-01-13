import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, MapPin, Send, Loader2, ArrowUpRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Message sent successfully",
        description: "I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("Error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "b25bs1020@iitj.ac.in",
      href: "mailto:b25bs1020@iitj.ac.in",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@adityarajIITj",
      href: "https://github.com/adityarajIITj",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "IIT Jodhpur, Rajasthan",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-32 relative">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="section-container" ref={ref}>
        {/* Section indicator */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs text-primary">04</span>
          <div className="w-12 h-px bg-primary/50" />
          <span className="font-mono text-xs text-muted-foreground">Contact</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
              Let's <span className="text-primary">connect.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Interested in collaborating on AI projects, discussing ideas, 
              or just want to connect? I'd love to hear from you.
            </p>

            {/* Contact links */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 py-3 border-b border-border hover:border-primary/30 transition-colors"
                    >
                      <item.icon className="w-4 h-4 text-primary" />
                      <div className="flex-1">
                        <p className="text-xs font-mono text-muted-foreground">{item.label}</p>
                        <p className="text-foreground group-hover:text-primary transition-colors">{item.value}</p>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 py-3 border-b border-border">
                      <item.icon className="w-4 h-4 text-primary" />
                      <div className="flex-1">
                        <p className="text-xs font-mono text-muted-foreground">{item.label}</p>
                        <p className="text-foreground">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-mono text-primary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all text-foreground placeholder:text-muted-foreground/50"
                  placeholder="Your name"
                  required
                  disabled={isSubmitting}
                  maxLength={100}
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-primary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all text-foreground placeholder:text-muted-foreground/50"
                  placeholder="your@email.com"
                  required
                  disabled={isSubmitting}
                  maxLength={255}
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-primary mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all resize-none text-foreground placeholder:text-muted-foreground/50"
                  placeholder="What would you like to discuss?"
                  required
                  disabled={isSubmitting}
                  maxLength={1000}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-primary-foreground rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:shadow-lg hover:shadow-primary/25"
                whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
