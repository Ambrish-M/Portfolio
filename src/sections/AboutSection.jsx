import { motion } from "framer-motion";
import myPhoto from "../assets/mypic.png";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-rose-950 via-gray-900 to-black text-white px-6 py-20 flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
        {/* Photo with elegant shape */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-shrink-0"
        >
          <img
            src={myPhoto}
            alt="Ambrish M"
            className="w-72 md:w-80 rounded-2xl object-cover opacity-70 mx-auto mb-6"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Hello! I’m <span className="text-rose-400 font-semibold">Ambrish M</span>, a passionate <span className="font-semibold text-rose-400">MERN Stack Developer</span> skilled in creating responsive and high-performance web applications. I love transforming complex problems into elegant, efficient solutions using modern web technologies. Driven by curiosity and innovation, I continuously explore new tools and frameworks to build clean, scalable, and user-friendly experiences. My goal is to combine creativity with technical expertise to deliver impactful digital solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
