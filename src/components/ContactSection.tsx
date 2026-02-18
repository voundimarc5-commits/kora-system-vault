import { Mail, MessageSquare } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="contact" className="py-20 border-t border-border" ref={ref}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">
            Get Started
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Strengthen Your Posture?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8 text-sm leading-relaxed">
            Whether you're looking to automate operations, secure financial flows,
            or deploy smart access systems — we're ready to talk.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button asChild size="lg" className="gap-2 font-display tracking-wide px-8">
            <a href="mailto:contact@koraglobalsystems.com">
              <Mail className="h-4 w-4" />
              Talk to Us
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2 font-display tracking-wide px-8">
            <a href="mailto:contact@koraglobalsystems.com?subject=Discovery%20Call%20Request">
              <MessageSquare className="h-4 w-4" />
              Book a Discovery Call
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
