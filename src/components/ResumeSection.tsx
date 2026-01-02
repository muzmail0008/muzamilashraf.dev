import { motion } from "framer-motion";
import { Download, GraduationCap, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ResumeSection() {
  return (
    <section id="resume" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="floating-orb w-72 h-72 top-20 left-0 opacity-10" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Education background and professional summary
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card-hover p-8 mb-8"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/20 shrink-0">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">
                  BSC Information Technology
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    SP College Srinagar
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    Completed
                  </span>
                </div>
                <p className="text-muted-foreground">
                  Comprehensive education in computer science fundamentals, programming, 
                  database management, and software engineering principles.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card-hover p-8 mb-8"
          >
            <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
            <p className="text-muted-foreground leading-relaxed">
              Passionate Full Stack Developer with expertise in building modern web applications 
              using React, Next.js, Node.js, and .NET technologies. Committed to writing clean, 
              maintainable code and creating exceptional user experiences. Always eager to learn 
              new technologies and take on challenging projects.
            </p>
          </motion.div>

          {/* Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="/resume.pdf" download className="group">
                <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                Download Full Resume
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}