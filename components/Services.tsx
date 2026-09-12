import { ShieldCheck, Zap, Layers, Cpu } from "lucide-react";

const cards = [
  {
    icon: Layers,
    title: "Full-Stack Product Builds",
    desc: "End-to-end MERN / Next.js systems — auth, payments (Razorpay/webhooks), RBAC, and infra — shipped as one owned system, not a patchwork of freelancers.",
  },
  {
    icon: Cpu,
    title: "AI + MCP Integration",
    desc: "AI features that can actually call tools and act inside your product via MCP — not a chatbot bolted onto the sidebar.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability Engineering",
    desc: "Uptime, latency, and transaction-success are treated as shipped metrics — the same discipline that lifted a production system's reliability by 40%.",
  },
  {
    icon: Zap,
    title: "Fractional CTO Ownership",
    desc: "Architecture, scalability, and monetization decisions made alongside you — for founders who need a technical co-owner, not a task-taker.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-graphite-900">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl mb-14">
          <p className="font-mono-brand text-xs tracking-widest text-cobalt uppercase mb-3">What we build</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
            One engineering partner. Entire stack owned.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {cards.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`p-7 border border-white/10 bg-graphite-800/50 hover:border-cobalt/50 transition-colors ${
                i === 0 ? "rounded-tl-2xl" : i === 3 ? "rounded-br-2xl" : "rounded-md"
              }`}
            >
              <Icon className="h-6 w-6 text-lime mb-4" strokeWidth={1.75} />
              <h3 className="font-display font-semibold text-lg text-white mb-2">{title}</h3>
              <p className="font-body text-sm text-graphite-200/65 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
