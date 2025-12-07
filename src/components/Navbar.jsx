import { useState } from "react";
import {
  Menu,
  X,
  User,
  FolderGit2,
  GraduationCap,
  Mail,
  Award,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { name: "About", icon: <User size={20} />, href: "#about" },
    { name: "Projects", icon: <FolderGit2 size={20} />, href: "#projects" },
    { name: "Experience", icon: <Award size={20} />, href: "#experience" },
    {
      name: "Education",
      icon: <GraduationCap size={20} />,
      href: "#education",
    },
    { name: "Contact", icon: <Mail size={20} />, href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-black via-rose-950 to-black text-white z-50 shadow-lg backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#home")
              ?.scrollIntoView({ behavior: "smooth" });

            history.replaceState(null, "", window.location.pathname);
          }}
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="text-xl font-semibold tracking-wide text-gray-200 flex items-center gap-1"
        >
          <span className="text-3xl text-rose-500">P</span>
          <span>ort</span>
          <span className="text-3xl text-rose-500">f</span>
          <span>olio</span>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {sections.map((section) => (
            <motion.a
              key={section.name}
              href={section.href}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-gray-300 hover:text-rose-400 transition"
            >
              {section.icon}
              <span>{section.name}</span>
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-200 hover:text-rose-400 transition"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black border-t border-gray-800 px-4 py-4 flex flex-col gap-4"
          >
            {sections.map((section) => (
              <a
                key={section.name}
                href={section.href}
                className="flex items-center gap-3 text-left text-gray-300 hover:text-rose-400 transition"
                onClick={() => setIsOpen(false)}
              >
                {section.icon}
                <span>{section.name}</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
