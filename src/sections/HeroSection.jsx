import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import myPhoto from "../assets/ambrish.png";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6
                 bg-gradient-to-b from-rose-950 via-gray-900 to-black text-white overflow-hidden"
    >
      {/* Left-side Background Photo */}
      <img
        src={myPhoto}
        alt="Ambrish M"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 
                   w-1/2 h-auto object-contain opacity-50 sm:opacity-50 z-10"
      />

      {/* Overlay Gradient for text readability */}
      <div className="absolute inset-0 bg-black/50 -z-10"></div>

      {/* Text Container */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl z-10 text-center sm:text-left ml-auto"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Hi, I'm <span className="text-rose-500">Ambrish M</span>
        </h1>

        <h2 className="text-xl sm:text-2xl font-medium text-rose-400 mb-6 h-8">
          <Typewriter
            words={[
              "Fullstack Developer",
              "MERN Stack Developer",
              "Web Developer",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <p className="text-gray-300 mb-8 leading-relaxed">
          I’m a passionate fullstack developer who loves crafting responsive,
          scalable, and visually engaging web applications using the MERN stack.
        </p>

        {/* Buttons and Social Links */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          {/* Buttons */}
          <div className="flex justify-center sm:justify-start gap-4 flex-wrap">
            <a
              href="/Ambrish_M_Resume.pdf"
              download
              className="px-6 py-3 bg-rose-600 text-white rounded-full 
                         hover:bg-rose-700 shadow-lg shadow-rose-500/30 transition"
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="px-6 py-3 border border-rose-500 text-rose-500 rounded-full 
                         hover:bg-rose-500 hover:text-white shadow-lg shadow-rose-500/30 transition"
            >
              View My Work
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center sm:justify-start gap-6 text-2xl mt-4 sm:mt-0">
            <a
              href="https://github.com/Ambrish-M"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-rose-400 transition duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ambrish-m-baa36b2a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-rose-400 transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
