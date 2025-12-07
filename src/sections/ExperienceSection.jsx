// ExperienceSection.jsx
import { motion } from "framer-motion";
import { FaCertificate, FaBriefcase } from "react-icons/fa";

const experience = {
  title: "Fullstack Developer Intern",
  company: "Novitech R&D Pvt Ltd",
  period: "Feb 2025 - May 2025",
  certificate: "../../public/Fullstack-internship.pdf",
  description:
    "Gained hands on experience on fundamentals of fullstack development technologies like Html,Css,JavaScript,React,Nodejs,Expressjs and MongoDB.Following that moved on into mern stack to created dynamic web applications."
};

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-gradient-to-b from-black via-rose-950 to-black text-white px-6 py-20 flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl w-full bg-gray-200 rounded-3xl p-8 shadow-2xl shadow-rose-500/40 hover:shadow-rose-500/60 transition"
      >
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-6">
          <FaBriefcase className="text-rose-500 text-2xl" />
          <h2 className="text-3xl font-bold text-gray-900">My Internship</h2>
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{experience.title}</h3>
        <p className="text-gray-900 font-medium">{experience.company}</p>
        <p className="text-sm text-rose-300 italic mb-4">{experience.period}</p>
        <p className="text-gray-900 mb-6">{experience.description}</p>

        {experience.certificate && (
          <a
            href={experience.certificate}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white font-medium px-6 py-3 rounded-full transition text-lg"
          >
            <FaCertificate className="text-xl" />
            View Certificate
          </a>
        )}
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
