import { motion } from "framer-motion";
import KGSLogo from "./KGSLogo";
import DashboardBackground from "./DashboardBackground";
import citySkyline from "@/assets/city-skyline.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0">
        <motion.img
          src={citySkyline}
          alt="Futuristic green campus"
          className="w-full h-full object-cover"
          loading="eager"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-background/75" />
      </div>

      <DashboardBackground />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(0_0%_100%_/_0.4)_70%)]" />

      <div className="max-w-7xl mx-auto px-6 py-24 text-center relative z-10">
        <motion.div
          className="flex justify-center mb-6 -mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <KGSLogo size="lg" />
        </motion.div>

        <motion.h1
          className="font-display text-5xl md:text-6xl lg:text-8xl font-bold text-foreground leading-none max-w-5xl mx-auto mb-8 uppercase tracking-wider"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          INTELLIGENT
          <br />
          <motion.span
            className="text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            SYSTEMS
          </motion.span>
        </motion.h1>

        <motion.p
          className="font-display text-lg md:text-xl text-muted-foreground tracking-[0.3em] uppercase mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          For Modern Infrastructure
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          KORA Global Systems designs, deploys, and operates intelligent systems
          that automate operations, secure financial flows, and optimize digital
          infrastructures.
        </motion.p>

        <motion.a
          href="#systems"
          className="inline-block px-8 py-3 bg-primary text-primary-foreground font-display font-semibold tracking-wide text-sm rounded hover:brightness-110 transition-all shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Discover Our Systems
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
