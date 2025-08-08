import HeroSection from "../sections/HeroSection";
import Navbar from "../components/Navbar";
import Slideshow from "../components/SlideShow";
import { useState } from "react";

export default function HomePage() {
  const [currentSection, setCurrentSection] = useState(null); // null means homepage

  const handleNavClick = (index) => {
    setCurrentSection(index); // switch to slideshow
  };

  const handleCloseSlideshow = () => {
    setCurrentSection(null); // return to home
  };

  return (
    <div>
      <Navbar
        onSelect={handleNavClick}
        isHome={currentSection === null}
        goHome={handleCloseSlideshow}
      />
      {currentSection === null ? (
        <HeroSection onStartClick={handleNavClick} />
      ) : (
        <Slideshow current={currentSection} />
      )}
    </div>
  );
}
