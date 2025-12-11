import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, MapPin, Send, ArrowUpRight, Loader2, Zap } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
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
        title: "Message Sent! 🎉",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Oops! Something went wrong",
        description: "Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "b25bs1020@iitj.ac.in",
      href: "mailto:b25bs1020@iitj.ac.in",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@adityarajIITj",
      href: "https://github.com/adityarajIITj",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "IIT Jodhpur, Rajasthan",
      href: null,
      gradient: "from-orange-500 to-yellow-500",
    },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[200px]" />
      
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
          >
            CONTACT
          </motion.span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Have an exciting project or just want to chat about AI? 
            I'm always open to discussions and collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="mb-8">
              <h3 className="font-display text-3xl font-bold mb-4">Get in Touch</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Whether you have a question, project idea, or just want to say hello, 
                feel free to reach out. I'm particularly interested in AI/ML projects 
                and innovative startup ideas.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactLinks.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 p-5 glass rounded-2xl hover:border-primary/30 transition-all duration-300 hoverable"
                    >
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground font-mono">{item.label}</p>
                        <p className="text-foreground font-semibold text-lg">{item.value}</p>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-5 glass rounded-2xl">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground font-mono">{item.label}</p>
                        <p className="text-foreground font-semibold text-lg">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-[2rem] blur-xl" />
              <div className="relative glass rounded-[2rem] p-8 md:p-10 border border-border/50">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-neon-tertiary rounded-t-[2rem]" />
                
                <div className="space-y-6">
                  {/* Name Field */}
                  <div className="relative">
                    <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === "name" || formData.name 
                        ? "-top-2 text-xs bg-card px-2 text-primary" 
                        : "top-4 text-muted-foreground"
                    }`}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-4 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground"
                      required
                      disabled={isSubmitting}
                      maxLength={100}
                    />
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === "email" || formData.email 
                        ? "-top-2 text-xs bg-card px-2 text-primary" 
                        : "top-4 text-muted-foreground"
                    }`}>
                      Your Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-4 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground"
                      required
                      disabled={isSubmitting}
                      maxLength={255}
                    />
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === "message" || formData.message 
                        ? "-top-2 text-xs bg-card px-2 text-primary" 
                        : "top-4 text-muted-foreground"
                    }`}>
                      Your Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      rows={5}
                      className="w-full px-4 py-4 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:border-primary transition-colors resize-none text-foreground"
                      required
                      disabled={isSubmitting}
                      maxLength={1000}
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full py-4 overflow-hidden rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hoverable"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-neon-tertiary" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-neon-tertiary opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                    <span className="relative z-10 flex items-center justify-center gap-2 text-primary-foreground">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Zap className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </span>
                  </motion.button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
