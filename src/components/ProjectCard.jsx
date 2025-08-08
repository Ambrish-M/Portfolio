import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

const ProjectCard = ({ title, description, tech, liveLink, githubLink }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-indigo-500/20 transition"
    >
      <h3 className="text-2xl font-semibold text-indigo-400 mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t, idx) => (
          <span
            key={idx}
            className="bg-indigo-600 text-xs px-2 py-1 rounded-full text-white"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-4 text-2xl">
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
          <FaGithub />
        </a>
        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
          <ExternalLink />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
