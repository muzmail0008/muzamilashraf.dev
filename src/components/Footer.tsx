import { motion } from "framer-motion";
 

export function Footer() {
  return (
    <footer className="relative py-8 border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Muzamil Ashraf. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Built with using React & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
}