import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, ElementType } from "react";

interface LetterRevealProps {
  text: string;
  className?: string;
  as?: ElementType;
  /** Play immediately on mount (hero) instead of on scroll into view. */
  immediate?: boolean;
  /** Delay in seconds before the first letter. */
  delay?: number;
  /** Stagger between letters in seconds (15-25ms). */
  stagger?: number;
}

const LetterReveal = ({
  text,
  className = "",
  as: Tag = "h2",
  immediate = false,
  delay = 0,
  stagger = 0.02,
}: LetterRevealProps) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  const words = text.split(" ");
  const play = immediate || isInView;
  let index = -1;

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, w) => (
        <span key={`${word}-${w}`} className="inline-block whitespace-nowrap">
          {Array.from(word).map((char, c) => {
            index += 1;
            return (
              <motion.span
                key={`${char}-${c}`}
                aria-hidden="true"
                className="inline-block"
                initial={{ opacity: 0, y: 8 }}
                animate={play ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.4,
                  delay: delay + index * stagger,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
              >
                {char}
              </motion.span>
            );
          })}
          {w < words.length - 1 && <span aria-hidden="true">&nbsp;</span>}
        </span>
      ))}
    </Tag>
  );
};

export default LetterReveal;
