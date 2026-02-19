import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import realVillaAccess from "@/assets/real-villa-access.jpg";
import realSecurityCenter from "@/assets/real-security-center.jpg";
import realArchitecturePlanning from "@/assets/real-architecture-planning.jpg";
import africaCoastalPort from "@/assets/africa-coastal-port.jpg";
import realSolarInfra from "@/assets/real-solar-infrastructure.jpg";
import realLogistics from "@/assets/real-logistics-warehouse.jpg";

const images = [
  { src: realVillaAccess, alt: "Luxury villa secure access gate", label: "KGS Access — Residential Security" },
  { src: realSecurityCenter, alt: "Security monitoring center", label: "KGS Security — Surveillance & Control" },
  { src: realSolarInfra, alt: "Solar energy infrastructure", label: "KGS Energy — Sustainable Systems" },
  { src: africaCoastalPort, alt: "Coastal port infrastructure", label: "KGS Global — Trade & Logistics" },
  { src: realLogistics, alt: "Logistics warehouse operations", label: "KGS Logistics — Supply Chain" },
  { src: realArchitecturePlanning, alt: "Architecture planning", label: "KGS Advisory — Strategic Design" },
];

const ImageCarousel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-12 overflow-hidden relative">
      {/* Left/right fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />
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
