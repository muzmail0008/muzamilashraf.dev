import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Instagram, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";


const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "muzamilreshi0008@gmail.com",
    href: "mailto:muzamilreshi0008@gmail.com",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+91 6006599096",
    href: "https://wa.me/916006599096",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "muzmail0008",
    href: "https://github.com/muzmail0008",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@muxa_mil_01",
    href: "https://instagram.com/muxa_mil_01",
  },
];

export function ContactSection() {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ REAL EMAIL SEND FUNCTION
  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);


  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    toast({
      title: "Message sent!",
      description: "Your message has been sent to your email.",
    });

    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    toast({
      title: "Error",
      description: "Message send failed. Try again.",
    });
  }

  setIsSubmitting(false);
};

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card-hover flex items-center gap-4 p-4"
              >
                <div className="p-3 rounded-xl bg-primary/20">
                  <link.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{link.label}</p>
                  <p className="font-medium">{link.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 lg:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />

              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />

              <Textarea
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              />

              <Button
                type="submit"
                variant="hero"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
