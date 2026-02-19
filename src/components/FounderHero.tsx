import { motion } from "framer-motion";
import { ArrowRight, Handshake } from "lucide-react";
import globalNetwork from "@/assets/global-network.jpg";

const FounderHero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={globalNetwork}
          alt=""
          className="w-full h-full object-cover opacity-[0.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-display text-xs tracking-[0.35em] uppercase mb-6"
        >
          Kora Global Systems
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
        >
          Building secure, intelligent systems
          <br className="hidden sm:block" />
          <span className="text-primary"> for a connected world</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          An international technology group focused on security, infrastructure
          and intelligent orchestration — designed for real-world environments,
          emerging markets, and global scalability.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#solutions"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-display font-semibold tracking-wide text-sm rounded-lg"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Explore Our Solutions
            <ArrowRight className="h-4 w-4" />
          </motion.a>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 border border-border text-foreground font-display font-semibold text-sm rounded-lg hover:border-primary/40 transition-colors"
            whileHover={{ scale: 1.03 }}
          >
            <Handshake className="h-4 w-4" />
            Partner With Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderHero;
