import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6">
        
        {/* Name & Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white">Ambrish</h2>
          <p className="text-sm mt-1">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/Ambrish-M"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ambrish-m-baa36b2a0/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
