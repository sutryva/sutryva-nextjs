const steps = [
  { n: "01", t: "Scope & Architecture", d: "We define the MVP boundary, data model, and system architecture before a single line of code — founder-reviewed, not assumed." },
  { n: "02", t: "Build in Public Sprints", d: "Weekly shippable increments across auth, core product, and payments — you see working software, not status decks." },
  { n: "03", t: "AI Layer Integration", d: "MCP-native AI features wired into the real product surface, tested against real user flows, not a demo sandbox." },
  { n: "04", t: "Ship & Own Reliability", d: "Production deploy on AWS/Docker/PM2/NGINX with monitoring — reliability is measured post-launch, not assumed at handoff." },
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 bg-graphite-950">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono-brand text-xs tracking-widest text-cobalt uppercase mb-3">How it runs</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight mb-14 max-w-lg">
          Four stages. Full visibility, start to ship.
        </h2>
        <div className="grid md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-lg overflow-hidden">
          {steps.map((s) => (
            <div key={s.n} className="bg-graphite-950 p-6 min-h-[220px] flex flex-col">
              <span className="font-mono-brand text-xs text-graphite-500">{s.n}</span>
              <h3 className="font-display font-semibold text-white mt-4 mb-2">{s.t}</h3>
              <p className="font-body text-xs text-graphite-200/60 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
