const AboutSection = () => {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
              About Us
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Systems, Not Services.
              <br />
              Infrastructure, Not Tasks.
            </h2>
          </div>

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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
