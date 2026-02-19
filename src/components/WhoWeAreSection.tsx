import ScrollReveal from "./ScrollReveal";

const WhoWeAreSection = () => {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <p className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-4">
            Who We Are
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8 leading-tight">
            A global technology group, grounded in real-world realities.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Kora Global Systems was created to design and structure technology
              solutions that work where conditions are complex, infrastructure is
              uneven, and expectations are high.
            </p>
            <p>
              We operate at the intersection of security, systems architecture,
              and operational intelligence, with a strong focus on markets that
              are often underserved by rigid, one-size-fits-all solutions.
            </p>
            <p>
              Our approach is pragmatic, scalable, and human-centered — combining
              international standards with deep contextual understanding.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
