import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Python", "JavaScript"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "React.js", "Next.js", "Tailwind CSS", "Redux Toolkit"],
    color: "from-cyan-500 to-teal-500",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Flask", "REST APIs"],
    color: "from-teal-500 to-green-500",
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "AI / ML",
    skills: ["NumPy", "pandas", "scikit-learn", "TensorFlow", "Google Gemini API"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Tools & Systems",
    skills: ["Linux", "Git", "GitHub", "Postman", "VS Code", "Vercel", "Render", "Cloudinary", "Clerk"],
    color: "from-teal-500 to-cyan-500",
  },
  {
    title: "Core Expertise",
    skills: ["DSA", "OOP", "System Design", "Authentication & Security", "Performance Optimization"],
    color: "from-cyan-500 to-blue-500",
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 lg:py-32 bg-gradient-hero relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary font-mono text-sm mb-4 block"
            >
              // Technical Skills
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            >
              My <span className="text-gradient">Tech Stack</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Technologies and tools I use to bring ideas to life
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + categoryIndex * 0.1 }}
                className="bg-gradient-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-soft group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${category.color}`} />
                  <h3 className="font-semibold text-sm">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="px-3 py-1.5 text-xs font-medium bg-secondary hover:bg-primary/10 hover:text-primary rounded-full transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
