import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import financialDashboard from "@/assets/financial-dashboard.jpg";
import serverInfra from "@/assets/server-infrastructure.jpg";
import smartAccess from "@/assets/smart-access.jpg";
import globalNetwork from "@/assets/global-network.jpg";
import cyberOps from "@/assets/cyber-operations.jpg";
import citySkyline from "@/assets/city-skyline.jpg";

const images = [
  { src: financialDashboard, alt: "Financial trading dashboard", label: "KGS Flow — Financial Infrastructure" },
  { src: serverInfra, alt: "Server infrastructure", label: "KGS Core — Data Centers" },
  { src: smartAccess, alt: "Smart access control", label: "KGS Access — Security Systems" },
  { src: globalNetwork, alt: "Global network", label: "KGS Network — Global Reach" },
  { src: cyberOps, alt: "Operations center", label: "KGS Ops — Command Center" },
  { src: citySkyline, alt: "Futuristic campus", label: "KGS Campus — Smart Infrastructure" },
];

const ImageCarousel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-16 overflow-hidden border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 mb-8"
      >
        <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
          Our Operations
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Infrastructure in Action
        </h2>
      </motion.div>

      {/* Infinite scrolling carousel */}
      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex gap-6 animate-scroll"
        >
          {[...images, ...images].map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[350px] md:w-[450px] group relative rounded-lg overflow-hidden"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-[250px] md:h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-background font-display text-sm font-semibold tracking-wide">
                  {img.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ImageCarousel;
