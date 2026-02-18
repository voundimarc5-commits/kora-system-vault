import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
            Contact
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Let's Build Your Infrastructure
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            Whether you're looking to automate operations, secure financial flows,
            or deploy smart access systems — we're ready to engineer the solution.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <motion.a
            href="mailto:contact@koraglobalsystems.com"
            className="inline-flex items-center gap-3 px-8 py-3 bg-primary text-primary-foreground font-display font-semibold tracking-wide text-sm rounded hover:brightness-110 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Mail className="h-4 w-4" />
            contact@koraglobalsystems.com
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
