import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Handshake, Shield } from "lucide-react";
import KGSLogo from "./KGSLogo";
import africaGreen from "@/assets/africa-green-innovation.jpg";

const FounderHero = () => {
  return (
    <section className="min-h-screen flex items-start justify-center relative overflow-hidden pt-0">
      {/* Animated background image — slow pan + subtle scale for wind/life effect */}
      <div className="absolute inset-0">
        <motion.img
          src={africaGreen}
          alt="Modern eco-friendly African campus with greenery and innovation"
          className="w-full h-full object-cover"
          loading="eager"
          initial={{ scale: 1.18, x: 0 }}
          animate={{ scale: 1.05, x: -20 }}
          transition={{
            duration: 12,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background z-[5]" />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(0_0%_100%_/_0.35)_70%)]" />

      <div className="max-w-7xl mx-auto px-6 pt-2 pb-24 text-center relative z-10">
        {/* Animated logo with heartbeat pulse */}
        <motion.div
          className="flex justify-center mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <KGSLogo size="lg" animate copper />
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-none max-w-5xl mx-auto mb-6 uppercase tracking-wider"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          BUILDING SECURE
          <br />
          <motion.span
            className="text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            INTELLIGENT SYSTEMS
          </motion.span>
        </motion.h1>

        <motion.p
          className="font-display text-lg md:text-xl text-muted-foreground tracking-[0.3em] uppercase mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          For a Connected World
        </motion.p>

        {/* Advisory CTA — prominent */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-8"
        >
          <Link
            to="/advisory"
            className="group relative inline-flex items-center gap-3 px-10 py-4 font-display font-bold text-sm tracking-wide rounded-xl overflow-hidden transition-all duration-300 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-[0_4px_24px_-4px_hsl(var(--primary)_/_0.45)] hover:shadow-[0_8px_32px_-4px_hsl(var(--primary)_/_0.6)] hover:scale-[1.03]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Shield className="h-5 w-5 relative z-10" />
            <span className="relative z-10">Assess Your Organisation's Exposure</span>
            <ArrowRight className="h-5 w-5 relative z-10 transition-transform group-hover:translate-x-1.5" />
          </Link>
        </motion.div>

        <motion.p
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          An international technology group focused on security, infrastructure
          and intelligent orchestration, designed for real-world environments,
          emerging markets, and global scalability.
        </motion.p>

        {/* Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#solutions"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-display font-semibold tracking-wide text-sm rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
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
