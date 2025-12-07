import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

// project icons 
import aijobtracker from "../assets/projectsImg/aijobtracker.png"
import ecommerceIcon from "../assets/projectsImg/ecommerce.png";
import netflixIcon from "../assets/projectsImg/netflix.png";
import twitterIcon from "../assets/projectsImg/twitter.png";
import productIcon from "../assets/projectsImg/product.png";


const projects = [
  {
    title: "AI Jobtracker",
    description: "A role based job application admin can do crud operations,manange application,view resume,use an analytics dashboard whereas user can browse jobs,apply jobs,track application and integration with ai features",
    tech: ["React", "Node.js", "MongoDB", "Tailwind", "Express.js", "Framer Motion", "Cloudinary", "Zustand"],
    liveLink: "https://ai-job-tracker-kxb5.onrender.com",
    githubLink: "https://github.com/Ambrish-M/Ai-job-Tracker",
    icon: aijobtracker,

  },
  {
    title: "E-Commerce Store",
    description:
      "A full-stack MERN app with authentication, cart, payment, and admin panel.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    liveLink: "https://mern-ecommerce-t1vk.onrender.com",
    githubLink: "https://github.com/Ambrish-M/mern-ecommerce",
    icon: ecommerceIcon,
  },
  {
    title: "Netflix Clone",
    description:
      "Clone of Netflix with authentication, movie browsing, trailers, responsive UI.",
    tech: ["React", "Node.js", "TMDB API", "Tailwind"],
    liveLink: "https://mern-netflix-clone-1-ufbj.onrender.com",
    githubLink: "https://github.com/Ambrish-M/mern-Netflix-clone",
    icon: netflixIcon,
  },
  {
    title: "X-clone",
    description:
      "Functional Twitter (X) clone with real-time updates, posts, likes, and authentication.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind", "DaisyUI"],
    liveLink: "https://twitter-clone-1hdy.onrender.com",
    githubLink: "https://github.com/Ambrish-M/twitter-clone",
    icon: twitterIcon,
  },
  {
    title: "Product Creator",
    description:
      "CRUD app to manage products with images uploaded via Cloudinary.",
    tech: ["React", "Node.js", "MongoDB", "Chakra UI"],
    liveLink: "https://product-creater.onrender.com",
    githubLink: "https://github.com/Ambrish-M/Product_Creater",
    icon: productIcon,
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-rose-950 via-black to-black text-black px-6 py-16"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          Projects
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
