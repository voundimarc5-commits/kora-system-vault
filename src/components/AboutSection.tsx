import cyberOps from "@/assets/cyber-operations.jpg";
import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 border-t border-border relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal direction="left" delay={0}>
              <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
                About Us
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.1}>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                Systems, Not Services.
                <br />
                Infrastructure, Not Tasks.
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  KORA Global Systems is a digital systems and infrastructure company
                  positioned at the intersection of automation, financial technology,
                  and intelligent operations.
                </p>
                <p>
                  We don't deliver projects — we engineer systems. Our focus is on
                  building and operating the infrastructure that enables businesses and
                  institutions to scale securely and efficiently.
                </p>
                <p>
                  From automating complex business processes to securing cross-border
                  financial flows and deploying smart access infrastructure, KGS
                  provides long-term, operationally embedded solutions designed for
                  the demands of modern enterprise.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" delay={0.3}>
            <div className="relative">
              <div className="rounded-lg overflow-hidden border border-border shadow-[0_0_40px_-15px_hsl(var(--primary)_/_0.2)]">
                <img
                  src={cyberOps}
                  alt="KGS operations center"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/20 rounded-lg -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-primary/10 rounded-lg -z-10" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
