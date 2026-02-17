import { Layers, Lock, Globe, Cog } from "lucide-react";

const differentiators = [
  {
    icon: Layers,
    title: "Systems Thinking",
    description:
      "We approach every engagement as a systems design challenge — not a list of tasks. Every component is designed to work as part of a larger operational architecture.",
  },
  {
    icon: Lock,
    title: "Security-First Design",
    description:
      "From financial transaction flows to access management, security is embedded in every layer of our infrastructure — not bolted on as an afterthought.",
  },
  {
    icon: Globe,
    title: "Global Operational Scope",
    description:
      "Our systems are built for cross-border and multi-market environments, handling the complexity of international operations with precision.",
  },
  {
    icon: Cog,
    title: "Operational Depth",
    description:
      "We don't just deliver and leave. KGS systems are designed for continuous operation, monitoring, and evolution alongside your business.",
  },
];

const WhyKGSSection = () => {
  return (
    <section id="why" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
            Why KGS
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Why KORA Global Systems
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {differentiators.map((d) => (
            <div
              key={d.title}
              className="flex gap-5 p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-all hover:shadow-[0_0_20px_-8px_hsl(var(--primary)_/_0.15)]"
            >
              <d.icon className="h-8 w-8 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {d.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {d.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyKGSSection;
