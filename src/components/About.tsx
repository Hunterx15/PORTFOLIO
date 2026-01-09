import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Code2, Server } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Server,
      title: "Backend Expert",
      description: "Building scalable APIs and microservices with Node.js, Express, and databases.",
    },
    {
      icon: Code2,
      title: "Full-Stack Dev",
      description: "Creating seamless experiences from React frontends to robust backends.",
    },
    {
      icon: GraduationCap,
      title: "Continuous Learner",
      description: "Always exploring new technologies and best practices in software engineering.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary font-mono text-sm mb-4 block"
            >
              // About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            >
              Passionate about{" "}
              <span className="text-gradient">building things</span>
            </motion.h2>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="lg:col-span-3 space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a <span className="text-foreground font-medium">Software Development Engineer</span> with 
                a strong focus on backend development and full-stack applications. I love 
                tackling complex problems and building systems that scale.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With expertise in <span className="text-foreground font-medium">Node.js, React, and modern databases</span>, 
                I create production-grade applications with clean architecture and secure authentication. 
                My passion for DSA has led me to solve <span className="text-foreground font-medium">500+ algorithmic problems</span> across 
                multiple competitive platforms.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently pursuing my B.Tech in Computer Science at{" "}
                <span className="text-foreground font-medium">IIIT Ranchi</span>, 
                I'm actively seeking Software Engineer or Backend Engineer roles where I can 
                contribute to impactful projects.
              </p>
            </motion.div>

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="bg-gradient-card rounded-2xl p-6 border border-border shadow-soft">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">Education</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm">
                      Indian Institute of Information Technology, Ranchi
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      B.Tech in Computer Science and Engineering
                    </p>
                    <p className="text-sm text-muted-foreground">2023 - 2027</p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-sm text-muted-foreground">CGPA</span>
                    <span className="text-2xl font-bold text-gradient">9.22</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-6 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Hindaun City, Rajasthan, India</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="grid sm:grid-cols-3 gap-6 mt-16"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
