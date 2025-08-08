import { motion, AnimatePresence } from "framer-motion";
import AboutSection from "../sections/AboutSection";
import ProjectSection from "../sections/ProjectSection";
import EducationSection from "../sections/EducationSection";
import ContactSection from "../sections/ContactSection";
import Footer from "./Footer";

const sectionContent = [
  <AboutSection />,
  <ProjectSection />,
  <EducationSection />,
  <ContactSection />,
];

export default function Slideshow({ current }) {
  return (
    <AnimatePresence mode="wait">
      <div className="bg-black">
        {/* Animated Section Content */}
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="pt-16 min-h-screen px-4"
        >
          {sectionContent[current]}
          <Footer />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
