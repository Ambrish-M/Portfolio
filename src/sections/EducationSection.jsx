// EducationSection.jsx
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "BE | Computer Science and Engineering",
    institution: "Sree Sakthi Engineering College",
    year: "2021-2025",


  },
  {
    degree: "Higher Secondary",
    institution: "Government Higher Secondary School",
    year: "2019-2020",


  },
  {
    degree: "Secondary School Leaving Certificate",
    institution: "Government Higher Secondary School",
    year: "2017-2018",


  },
];

const EducationSection = () => {
  return (
    <section
      id="education"
      className="min-h-screen bg-gradient-to-b from-rose-950 via-black to-black text-white px-6 py-16"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          Education
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-200 rounded-2xl p-6 shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 transition"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-1 flex items-center gap-2">
                <FaGraduationCap /> {edu.degree}
              </h3>
              <p className="text-gray-900 font-medium">{edu.institution}</p>
              <p className="text-sm text-rose-900 italic mb-4">{edu.year}</p>


            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
