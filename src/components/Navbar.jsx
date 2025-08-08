import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({ onSelect, isHome, goHome }) {
  const [isOpen, setIsOpen] = useState(false);
  const sections = ["About", "Projects", "Education", "Contact"];

  const handleNavClick = (index) => {
    onSelect(index);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo or Name */}
        <button onClick={goHome} className="text-xl font-bold text-gray-200">
          <span className="text-3xl  text-indigo-400">P</span>ort{" "}
          <span className="text-3xl  text-indigo-400">f</span>olio
        </button>

        {/* Desktop Links - Only show if not on homepage */}
        {!isHome && (
          <div className="hidden md:flex gap-6">
            {sections.map((section, index) => (
              <button
                key={section}
                onClick={() => handleNavClick(index)}
                className="hover:text-blue-400 transition"
              >
                {section}
              </button>
            ))}
          </div>
        )}

        {/* Mobile Hamburger */}
        {!isHome && (
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        )}
      </div>

      {/* Mobile Dropdown */}
      {!isHome && isOpen && (
        <div className="md:hidden bg-black px-4 pb-4 flex flex-col gap-4">
          {sections.map((section, index) => (
            <button
              key={section}
              onClick={() => handleNavClick(index)}
              className="text-left hover:text-blue-400 transition"
            >
              {section}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
