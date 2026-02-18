import kgsParentLogo from "@/assets/kgs-parent-logo.png";
import kgsAccessLogo from "@/assets/kgs-access-logo.png";
import kgsAutomationsLogo from "@/assets/kgs-automations-logo.png";
import kgsFlowLogo from "@/assets/kgs-flow-logo.png";

const items = [
  { label: "KORA Global Systems", color: "text-foreground", weight: "font-semibold", logo: kgsParentLogo },
  { label: "KGS Access", sub: "Secure Identity & Access Control", color: "text-[hsl(210,60%,65%)]", logo: kgsAccessLogo },
  { label: "KGS Automations", sub: "Workflow & Business Process Automation", color: "text-[hsl(170,50%,55%)]", logo: kgsAutomationsLogo },
  { label: "KGS Flow", sub: "Financial & Payment Flows", color: "text-[hsl(43,55%,60%)]", logo: kgsFlowLogo },
];

const Separator = () => (
  <span className="mx-8 text-border select-none" aria-hidden>│</span>
);

const ItemList = () => (
  <>
    {items.map((item, i) => (
      <span key={i} className="inline-flex items-center gap-3 whitespace-nowrap">
        {i > 0 && <Separator />}
        <img src={item.logo} alt={item.label} className="h-16 md:h-20 w-auto object-contain" />
        <span className={`${item.color} ${item.weight || "font-medium"} text-sm tracking-widest uppercase`}>
          {item.label}
        </span>
        {item.sub && (
          <span className="text-muted-foreground text-xs tracking-wide font-normal">
            — {item.sub}
          </span>
        )}
      </span>
    ))}
  </>
);

const Marquee = () => (
  <div className="sticky top-16 z-40 w-full bg-background overflow-hidden border-b border-border">
    <div className="animate-scroll flex items-center py-4 w-max">
      <ItemList />
      <Separator />
      <ItemList />
      <Separator />
      <ItemList />
      <Separator />
      <ItemList />
      <Separator />
    </div>
  </div>
);

export default Marquee;
