import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import developerAvatar from "@/assets/developer-avatar.png";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            >
              Hi, I'm{" "}
              <span className="text-gradient">Pankaj Jangid</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-muted-foreground mb-4 font-mono"
            >
              Software Development Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Backend & Full-Stack Developer passionate about building scalable systems, 
              solving complex problems, and crafting elegant code. 
              <span className="text-foreground font-medium"> 500+ DSA problems solved.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <a href="#projects">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  View Projects
                </Button>
              </a>
              <a href="#contact">
                <Button variant="hero-outline" size="lg" className="w-full sm:w-auto">
                  Contact Me
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/Hunterx15"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/pankaj-jangid-1a5320280/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:pankaj.jangid.work@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 animate-pulse-slow" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow animate-float">
                <img
                  src={developerAvatar}
                  alt="Developer Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-4 -right-4 px-4 py-2 glass rounded-full text-sm font-mono"
              >
                500+ Problems
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-4 -left-4 px-4 py-2 glass rounded-full text-sm font-mono"
              >
                CGPA: 9.22
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs font-mono">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
