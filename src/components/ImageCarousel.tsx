import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import africaSmartAccess from "@/assets/africa-smart-access.jpg";
import africaDataCenter from "@/assets/africa-data-center.jpg";
import africaBoardroom from "@/assets/africa-boardroom.jpg";
import africaBusinessDistrict from "@/assets/africa-business-district.jpg";
import africaLogistics from "@/assets/africa-logistics.jpg";
import africaSkyline from "@/assets/africa-skyline-hero.jpg";

const images = [
  { src: africaSmartAccess, alt: "Smart access control villa", label: "KGS Access — Secure Environments" },
  { src: africaDataCenter, alt: "Data center infrastructure", label: "KGS Core — Infrastructure" },
  { src: africaBoardroom, alt: "Corporate boardroom", label: "KGS Advisory — Strategic Partnerships" },
  { src: africaBusinessDistrict, alt: "African business district", label: "KGS Global — Emerging Markets" },
  { src: africaLogistics, alt: "Port and logistics hub", label: "KGS Flow — Operational Systems" },
  { src: africaSkyline, alt: "Modern African skyline", label: "KGS Campus — Smart Infrastructure" },
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
