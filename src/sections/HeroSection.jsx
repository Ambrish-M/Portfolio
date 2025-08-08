import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = ({ onStartClick }) => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-gray-900 to-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Hi, I'm <span className="text-indigo-500">Ambrish M</span>
        </h1>

        {/* 👇 Typing Animation */}
        <h2 className="text-xl sm:text-2xl font-medium text-indigo-400 mb-6 h-8">
          <Typewriter
            words={['Fullstack Developer','MERN Stack Developer','Web Developer']}
            loop={0} // infinite loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <p className="text-gray-400 mb-8 leading-relaxed">
          I am an aspiring fullstack developer, passionate about solving real-world problems.
          <br />
          I love building responsive websites and scalable applications.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/Ambrish_M_Resume.pdf"
            className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
            download
          >
            Download Resume
          </a>

          <button
            onClick={() => onStartClick(0)}
            className="px-6 py-3 border border-indigo-500 text-indigo-500 rounded-full hover:bg-indigo-500 hover:text-white transition"
          >
            View My Work
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
