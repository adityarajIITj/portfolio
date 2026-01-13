import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import JourneyPath from "@/components/JourneyPath";

const Index = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden relative cursor-none">
      {/* Custom Cursor - Hidden on mobile */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>
      
      {/* Grain overlay */}
      <div className="grain-overlay" />
      
      {/* Journey path navigation */}
      <JourneyPath />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
