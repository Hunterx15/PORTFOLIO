import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gradient">PJ</span>
            <span className="text-sm font-mono text-muted-foreground">/dev</span>
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Pankaj Jangid. Built with
            <Heart className="w-4 h-4 text-primary fill-primary" />
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#home"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Back to top
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
