import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

const ProjectCard = ({ title, description, tech, liveLink, githubLink, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-300 rounded-2xl p-4 shadow-lg hover:shadow-rose-500/30 transition"
    >
      {/* Project Image */}
      {icon && (
        <img
          src={icon}
          alt={title}
          className="w-full h-48 object-cover rounded-xl mb-4 shadow-md"
        />
      )}

      {/* Title */}
      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-900 mb-4">{description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t, idx) => (
          <span
            key={idx}
            className="bg-rose-600 text-xs px-2 py-1 rounded-full text-white"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 mt-4 text-2xl">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-rose-400 transition"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-rose-400 transition"
          aria-label="Live Site"
        >
          <ExternalLink />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
