import { motion } from "framer-motion";
import myPhoto from "../assets/my-photo.png";

const AboutSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-20 flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
        {/* Photo with Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-shrink-0"
        >
          <img
            src={myPhoto}
            alt="Ambrish M"
            className="w-60 md:w-72 rounded-full object-cover  shadow-xl mx-auto mb-6 "
          />
        </motion.div>

        {/* Text Content */}
        <div className="max-w-xl">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-indigo-400"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            Hello! I’m{" "}
            <span className="text-indigo-500 font-semibold">Ambrish M</span>, a
            dedicated
            <span className="font-semibold"> MERN Stack Developer</span> who
            loves turning complex problems into elegant and efficient solutions.
            I specialize in building responsive, high-performance web
            applications using modern technologies. My journey in tech is driven
            by a deep passion for learning and innovation.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
