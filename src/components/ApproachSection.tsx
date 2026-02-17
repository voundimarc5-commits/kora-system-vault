const steps = [
  {
    number: "01",
    title: "Assess",
    description:
      "We analyze your existing infrastructure, workflows, and operational requirements to identify inefficiencies and opportunities for automation.",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "We design system architectures tailored to your operational context — modular, scalable, and built for long-term resilience.",
  },
  {
    number: "03",
    title: "Deploy",
    description:
      "We implement and integrate systems into your environment with precision, ensuring minimal disruption and maximum alignment.",
  },
  {
    number: "04",
    title: "Operate",
    description:
      "We provide ongoing system management and optimization, ensuring your infrastructure evolves with your business demands.",
  },
];

const ApproachSection = () => {
  return (
    <section id="approach" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
            Our Approach
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            How We Design & Deploy Systems
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={s.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary/30 to-transparent -translate-x-4" />
              )}
              <div className="font-display text-4xl font-bold text-primary/20 mb-3">
                {s.number}
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
