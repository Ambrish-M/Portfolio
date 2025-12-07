import Navbar from "../components/Navbar";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import SkillsSection from "../sections/SkillsSection";
import ExperienceSection from "../sections/ExperienceSection";
import EducationSection from "../sections/EducationSection";
import ProjectsSection from "../sections/ProjectsSection";
import ContactSection from "../sections/ContactSection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-black via-rose-950 to-black text-white">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Main Sections */}
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
