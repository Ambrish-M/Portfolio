import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

// Skills icons
import htmlIcon from "../assets/icons/html5.png";
import cssIcon from "../assets/icons/css.png";
import jsIcon from "../assets/icons/javascript.png";
import reactIcon from "../assets/icons/react.png";
import nodeIcon from "../assets/icons/nodejs.png";
import expressIcon from "../assets/icons/express.png";
import mongoIcon from "../assets/icons/mongodb.png";
import tailwindIcon from "../assets/icons/tailwindcss.png";
import reduxIcon from "../assets/icons/redux.png";

const skills = [
  { name: "HTML", level: 80, icon: htmlIcon },
  { name: "CSS", level: 75, icon: cssIcon },
  { name: "JavaScript", level: 60, icon: jsIcon },
  { name: "React", level: 65, icon: reactIcon },
  { name: "Node.js", level: 60, icon: nodeIcon },
  { name: "Express.js", level: 70, icon: expressIcon },
  { name: "MongoDB", level: 60, icon: mongoIcon },
  { name: "Tailwind CSS", level: 65, icon: tailwindIcon },
  { name: "Redux & Zustand", level: 55, icon: reduxIcon },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-b from-rose-950 via-black to-black text-white px-6 py-16"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          Skills & Proficiency
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skill, index) => {
            const controls = useAnimation();
            const [ref, inView] = useInView({ triggerOnce: true });
            const [displayLevel, setDisplayLevel] = useState(0);

            // Animate progress bar
            useEffect(() => {
              if (inView) controls.start({ width: `${skill.level}%` });
              else controls.start({ width: "0%" });
            }, [inView, controls, skill.level]);

            // Animate percentage number
            useEffect(() => {
              if (!inView) return;
              let start = 0;
              const interval = setInterval(() => {
                start += 1;
                if (start >= skill.level) clearInterval(interval);
                setDisplayLevel(start);
              }, 12);
              return () => clearInterval(interval);
            }, [inView, skill.level]);

            return (
              <div key={index} ref={ref}>
                <div className="flex items-center gap-3 mb-1">
                  {/* Icon with white circle */}
                  <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full p-1">
                    <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                  </div>
                  <span className="font-semibold">{skill.name}</span>
                  <span className="ml-auto font-mono">{displayLevel}%</span>
                </div>
                <div className="w-full bg-rose-300 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="bg-rose-500 h-3 rounded-full"
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
      </div>
    </section>
  );
};

export default SkillsSection;
