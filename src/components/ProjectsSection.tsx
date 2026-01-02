import { motion, type Variants } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce solution with cart management, payment integration, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: null,
    githubUrl: "https://github.com/muzmail0008",
    status: "Coming Soon",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates and team features.",
    tech: ["Next.js", "TypeScript", "SQL Server", "ASP.NET"],
    liveUrl: null,
    githubUrl: "https://github.com/muzmail0008",
    status: "In Development",
  },
  {
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website built with cutting-edge technologies and stunning animations.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "https://github.com/muzmail0008",
    status: "Live",
  },
  {
    title: "Blog Platform",
    description: "Content management system with markdown support, SEO optimization, and analytics dashboard.",
    tech: ["Next.js", "Node.js", "MongoDB"],
    liveUrl: null,
    githubUrl: "https://github.com/muzmail0008",
    status: "Coming Soon",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="floating-orb w-80 h-80 -top-40 right-0 opacity-10" />
        <div className="floating-orb w-64 h-64 bottom-20 left-10 opacity-10" style={{ animationDelay: "2s" }} />
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my skills and passion for development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="glass-card-hover group p-6 lg:p-8 flex flex-col"
            >
              {/* Status Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === "Live" 
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : project.status === "In Development"
                    ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                    : "bg-primary/20 text-primary border border-primary/30"
                }`}>
                  {project.status === "Live" && <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />}
                  {project.status}
                </span>
              </div>

              {/* Project Title */}
              <h3 className="text-xl lg:text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 flex-grow">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-secondary/50 text-foreground/80 rounded-md border border-border/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                {project.liveUrl ? (
                  <Button variant="neon" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      View Live
                    </a>
                  </Button>
                ) : (
                  <Button variant="glass" size="sm" disabled className="opacity-50">
                    <Sparkles className="w-4 h-4" />
                    Coming Soon
                  </Button>
                )}
                <Button variant="ghost" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}