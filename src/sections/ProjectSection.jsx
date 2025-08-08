import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "E-Commerce Store",
    description:
      "A full-stack MERN application with authentication, cart, payment, and admin panel.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    liveLink: "https://mern-ecommerce-t1vk.onrender.com",
    githubLink: "https://github.com/Ambrish-M/mern-ecommerce",
  },
  {
    title: "Netflix Clone",
    description:
      "A full-featured clone of Netflix built with user authentication, movie browsing, trailer previews, and responsive UI.",
    tech: ["React", "Node js", "TMDP API", "Tailwind"],
    liveLink: "https://mern-netflix-clone-1-ufbj.onrender.com",
    githubLink: "https://github.com/Ambrish-M/mern-Netflix-clone",
  },
  {
    title: "X-clone",
    description:
      "A functional clone of the Twitter (X) platform allowing users to post tweets,comments, like, retweet, and follow others. It supports real-time updates and user authentication",
    tech: ["React", "Node.js", "MongoDB", "Tailwind", "Daisyi UI"],
    liveLink: "https://twitter-clone-1hdy.onrender.com",
    githubLink: "https://github.com/Ambrish-M/twitter-clone",
  },
  {
    title: "Product Creator",
    description:
      "A CRUD-based web application for creating and managing products. Users can add product details along with compressed images, which are uploaded via Cloudinary. ",
    tech: ["React", "Node.js", "MongoDB", "Chakra UI"],
    liveLink: "https://product-creater.onrender.com",
    githubLink: "https://github.com/Ambrish-M/Product_Creater",
  },
];

const skills = [
  { name: "HTML", level: 80 },
  { name: "CSS", level: 75 },
  { name: "JavaScript", level: 70 },
  { name: "React", level: 60 },
  { name: "Tailwind CSS", level: 70 },
  { name: "Node.js", level: 60 },
  { name: "Express", level: 65 },
  { name: "MongoDB", level: 65 },
  { name: "Redux Toolkit", level: 50 },
  { name: "Zustand", level: 70 },
];

const ProjectSection = () => {
  return (
    <section className="min-h-screen bg-gray-950 text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Projects
        </motion.h2>

        {/* Project Cards */}
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Skills Progress Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 mt-20"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Skills & Proficiency
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((skill, index) => {
              const controls = useAnimation();
              const [ref, inView] = useInView({ triggerOnce: false });

              useEffect(() => {
                if (inView) {
                  controls.start({ width: `${skill.level}%` });
                } else {
                  controls.start({ width: "0%" });
                }
              }, [inView, controls, skill.level]);

              return (
                <div key={index} ref={ref}>
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className="bg-indigo-500 h-3 rounded-full"
                      initial={{ width: 0 }}
                      animate={controls}
                      transition={{
                        duration: 1,
                        ease: "easeOut",
                        delay: index * 0.1,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
