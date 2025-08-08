import { motion } from "framer-motion";

const educationData = [
  {
    degree: "BE|Computer Science and Engineering",
    institution: "Sree Sakthi Enginnering College",
    year: "2021-2025",
    description:
      "Focused on full-stack web development, data structures, and Algorithms. Graduated with distinction.",
  },
  {
    degree: "Higher Secondary",
    institution: "Government Higher Secondary School",
    year: "2019-2020",
    description:
      "Completed with Physics, Chemistry, Mathematics. Strong foundation in logical and analytical skills.",
  },
  {
    degree: "Secondary School Leaving Certificate",
    institution: "Government Higher Secondary School",
    year: "2017 - 2018",
    description: "Basic education with focus on mathematics, science and computer applications.",
  },
];

const EducationSection = () => {
  return (
    <section  className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Education
        </motion.h2>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-indigo-400">{edu.degree}</h3>
              <p className="text-gray-300">{edu.institution}</p>
              <p className="text-sm text-gray-400 italic">{edu.year}</p>
              <p className="text-gray-200 mt-2">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
