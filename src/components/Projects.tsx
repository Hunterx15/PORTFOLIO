import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Users, Code, Bot, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "CODEBOX",
    subtitle: "Game-Based Coding & Learning Platform",
    description:
      "Full-stack game-based coding and learning platform with structured courses, in-browser code execution, and secure authentication. Built for interactive programming education without local setup.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Drizzle ORM",
      "Clerk",
      "Sandpack",
    ],
    features: [
      {
        icon: Shield,
        text: "Secure authentication & access control with Clerk",
      },
      {
        icon: Code,
        text: "In-browser code execution for interactive learning",
      },
    ],
    github: "https://github.com/Hunterx15/codebox",
    live: "https://codebox-gamma.vercel.app/",
    color: "from-blue-500/20 to-cyan-500/20",
    accent: "bg-blue-500",
  },
  {
    title: "INVIZIO",
    subtitle: "Smart Hiring & Interview Management Platform",
    description:
      "Full-stack recruitment and interview management platform with secure authentication, real-time chat, and interview coordination. Built for modern hiring workflows with cloud-native architecture.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Clerk", "Stream"],
    features: [
      { icon: Shield, text: "Secure RBAC auth with Clerk" },
      { icon: Users, text: "Real-time interview coordination" },
    ],
    github: "https://github.com/Hunterx15/INVIZIO",
    live: "https://invizio-uvcd8.sevalla.app",
    color: "from-blue-500/20 to-cyan-500/20",
    accent: "bg-blue-500",
  },
  {
    title: "XCODE",
    subtitle: "DSA & Coding Practice Platform",
    description:
      "Scalable coding platform with real-time code execution, AI-powered hints, and admin dashboards. Supports multiple languages with Monaco Editor and Judge0 integration.",
    tech: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Redis",
      "Judge0",
      "Google Gemini",
    ],
    features: [
      { icon: Code, text: "Multi-language code execution" },
      { icon: Bot, text: "AI-powered hints & explanations" },
    ],
    github: "https://github.com/Hunterx15/XCODE",
    live: "https://xcode-eta.vercel.app",
    color: "from-teal-500/20 to-green-500/20",
    accent: "bg-teal-500",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.span className="text-primary font-mono text-sm mb-4 block">
              // Featured Work
            </motion.span>
            <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Projects I've <span className="text-gradient">Built</span>
            </motion.h2>
            <motion.p className="text-muted-foreground max-w-2xl mx-auto">
              Production-grade applications showcasing full-stack development
              expertise
            </motion.p>
          </div>

          {/* ✅ ONLY ADDITION: items-stretch */}
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.2 }}
                className="group h-full"
              >
                <div
                  className={`bg-gradient-to-br ${project.color} rounded-3xl p-1 h-full`}
                >
                  <div className="bg-card rounded-[calc(1.5rem-4px)] p-6 lg:p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <div
                            className={`w-3 h-3 rounded-full ${project.accent}`}
                          />
                          <h3 className="text-2xl font-bold">
                            {project.title}
                          </h3>
                        </div>
                        <p className="text-primary font-mono text-sm">
                          {project.subtitle}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {project.features.map((feature) => (
                        <div
                          key={feature.text}
                          className="flex items-center gap-3"
                        >
                          <div className="p-1.5 rounded-md bg-primary/10">
                            <feature.icon className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* ✅ ONLY ADDITION: mt-auto */}
                    <div className="mt-auto flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-mono bg-secondary rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero-outline" size="lg">
                <Github className="w-5 h-5 mr-2" />
                View More on GitHub
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
