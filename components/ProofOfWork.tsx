import { CheckCircle2 } from "lucide-react";

const items = [
  {
    tag: "Production system",
    title: "Sewacity Technologies — Platform Reliability",
    metrics: ["10,000+ active users", "5,000+ transactions processed", "40% reliability improvement shipped"],
  },
  {
    tag: "Competitive proof",
    title: "Hackathon-Validated Engineering",
    metrics: ["1st place — GEC Siwan Hackathon", "2nd place — IIT BHU Hackathon", "600+ DSA problems solved (C++)"],
  },
];

export default function ProofOfWork() {
  return (
    <section id="work" className="py-24 px-6 bg-graphite-900">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono-brand text-xs tracking-widest text-lime uppercase mb-3">Proof of work</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight mb-14 max-w-lg">
          Not a portfolio. A track record.
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-md border border-white/10 p-8 bg-gradient-to-br from-graphite-800/60 to-graphite-900">
              <span className="inline-block text-[11px] font-mono-brand uppercase tracking-wider text-cobalt border border-cobalt/40 rounded-sm px-2 py-1 mb-5">
                {it.tag}
              </span>
              <h3 className="font-display font-semibold text-xl text-white mb-5">{it.title}</h3>
              <ul className="space-y-2.5">
                {it.metrics.map((m) => (
                  <li key={m} className="flex items-start gap-2 font-body text-sm text-graphite-200/75">
                    <CheckCircle2 className="h-4 w-4 text-lime mt-0.5 shrink-0" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
