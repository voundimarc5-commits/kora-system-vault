const items = [
  { label: "KORA Global Systems", color: "text-[hsl(0,0%,75%)]", weight: "font-semibold" },
  { label: "KGS Access", sub: "Secure Identity & Access Control", color: "text-[hsl(210,60%,65%)]" },
  { label: "KGS Automations", sub: "Workflow & Business Process Automation", color: "text-[hsl(170,50%,55%)]" },
  { label: "KGS Flow", sub: "Financial & Payment Flows", color: "text-[hsl(43,55%,60%)]" },
];

const Separator = () => (
  <span className="mx-8 text-[hsl(0,0%,30%)] select-none" aria-hidden>│</span>
);

const ItemList = () => (
  <>
    {items.map((item, i) => (
      <span key={i} className="inline-flex items-baseline gap-2 whitespace-nowrap">
        {i > 0 && <Separator />}
        <span className={`${item.color} ${item.weight || "font-medium"} text-sm tracking-widest uppercase`}>
          {item.label}
        </span>
        {item.sub && (
          <span className="text-[hsl(0,0%,45%)] text-xs tracking-wide font-normal">
            — {item.sub}
          </span>
        )}
      </span>
    ))}
  </>
);

const Marquee = () => (
  <div className="fixed top-0 left-0 right-0 z-[60] w-full bg-[hsl(0,0%,8%)] overflow-hidden border-b border-[hsl(0,0%,15%)]">
    <div className="animate-scroll flex items-center py-2.5 w-max">
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
