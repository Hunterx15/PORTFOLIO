import { motion } from "framer-motion";

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
          {/* Logo / Brand */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gradient">PJ</span>
            <span className="text-sm font-mono text-muted-foreground">
              /dev
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Pankaj Jangid. All rights reserved.
          </p>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <a
              href="#home"
              aria-label="Back to top"
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
