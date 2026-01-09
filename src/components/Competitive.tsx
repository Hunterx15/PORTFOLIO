import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Target, Zap, ExternalLink } from "lucide-react";

const platforms = [
  {
    name: "Codeforces",
    rating: "Pupil",
    handle: "@pankaj_jangid",
    url: "https://codeforces.com/",
    color: "from-blue-500 to-blue-600",
    problems: "200+",
  },
  {
    name: "LeetCode",
    rating: "1600+",
    handle: "@pankaj_jangid",
    url: "https://leetcode.com/",
    color: "from-amber-500 to-orange-500",
    problems: "250+",
  },
  {
    name: "GeeksforGeeks",
    rating: "Active",
    handle: "@pankaj_jangid",
    url: "https://www.geeksforgeeks.org/",
    color: "from-green-500 to-emerald-500",
    problems: "100+",
  },
  {
    name: "Codolio",
    rating: "Profile",
    handle: "@IgakcZLT",
    url: "https://codolio.com/profile/IgakcZLT",
    color: "from-purple-500 to-violet-500",
    problems: "View",
  },
];

const stats = [
  { icon: Target, value: "500+", label: "Problems Solved" },
  { icon: Trophy, value: "Pupil", label: "Codeforces Rating" },
  { icon: Zap, value: "1600+", label: "LeetCode Rating" },
];

export function Competitive() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="competitive" className="py-20 lg:py-32 bg-gradient-hero relative">
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
              // Competitive Programming
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            >
              DSA & <span className="text-gradient">Problem Solving</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Passionate about algorithms and data structures with consistent practice across platforms
            </motion.p>
          </div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="grid sm:grid-cols-3 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-gradient-card rounded-2xl p-6 border border-border text-center group hover:border-primary/50 transition-colors"
              >
                <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Platform Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {platforms.map((platform, index) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${platform.color} p-0.5 rounded-xl`}>
                  <div className="bg-card rounded-[calc(0.75rem-2px)] p-5 h-full hover:bg-card/80 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">{platform.name}</h3>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </div>
                    <div className="text-2xl font-bold mb-1">{platform.rating}</div>
                    <div className="text-xs text-muted-foreground font-mono">
                      {platform.problems} problems
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
