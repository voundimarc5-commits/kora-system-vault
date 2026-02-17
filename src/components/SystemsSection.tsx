import { Cpu, ArrowLeftRight, ShieldCheck } from "lucide-react";

const systems = [
  {
    icon: Cpu,
    name: "KGS Automation",
    tagline: "Orchestrate. Optimize. Scale.",
    points: [
      "Business process automation",
      "Intelligent workflow orchestration",
      "System integration & operational efficiency",
    ],
  },
  {
    icon: ArrowLeftRight,
    name: "KGS Flow",
    tagline: "Move value. Securely. Globally.",
    points: [
      "Payment facilitation & cross-border flows",
      "Financial process automation",
      "Secure transaction infrastructure",
    ],
  },
  {
    icon: ShieldCheck,
    name: "KGS Access",
    tagline: "Connect. Control. Protect.",
    points: [
      "Smart access systems & connected devices",
      "Secure access management",
      "Smart infrastructure deployment",
    ],
  },
];

const SystemsSection = () => {
  return (
    <section id="systems" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
            Our Systems
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Three Pillars of Digital Infrastructure
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {systems.map((s) => (
            <div
              key={s.name}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_-10px_hsl(var(--primary)_/_0.2)] group"
            >
              <s.icon className="h-10 w-10 text-primary mb-6 group-hover:text-accent transition-colors" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {s.name}
              </h3>
              <p className="text-primary/70 text-sm mb-5 italic">{s.tagline}</p>
              <ul className="space-y-3">
                {s.points.map((p) => (
                  <li key={p} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemsSection;
