const STATS: [string, string][] = [
  ["10K+", "users served in production"],
  ["5K+", "transactions processed"],
  ["40%", "reliability uplift shipped"],
  ["600+", "DSA problems solved"],
];

export default function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 px-6 overflow-hidden bg-grid">
      <div className="pointer-events-none absolute -top-24 right-[-10%] h-80 w-80 rounded-full bg-cobalt/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-[-5%] h-64 w-64 rounded-full bg-lime/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-8">
          <p className="font-mono-brand text-xs tracking-widest text-lime uppercase mb-5">
            AI &nbsp;/&nbsp; SaaS &nbsp;/&nbsp; Full-Stack Engineering
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-white max-w-2xl">
            The technical backbone for founders who can&apos;t afford to get their stack wrong.
          </h1>
          <p className="font-body text-graphite-200/70 text-base md:text-lg mt-6 max-w-xl leading-relaxed">
            Sutryva Technologies is a full-stack engineering studio that ships production-grade,
            AI-integrated SaaS systems for early-stage founders — MERN, Next.js, and MCP-native AI,
            built with CTO-level ownership from architecture to scale.
          </p>
          <div className="flex flex-wrap gap-3 mt-9">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-cobalt hover:bg-deep-cobalt text-white rounded-md font-body h-12 px-6 font-medium transition-colors"
            >
              Book a build call
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-md font-body h-12 px-6 border border-white/20 text-white hover:bg-white/5 transition-colors"
            >
              See proof of work
            </a>
          </div>
        </div>
        <div className="md:col-span-4 md:pb-2">
          <dl className="grid grid-cols-2 gap-px bg-white/10 rounded-lg overflow-hidden border border-white/10">
            {STATS.map(([num, label]) => (
              <div key={label} className="bg-graphite-900 p-5">
                <dt className="font-display text-2xl font-bold text-lime">{num}</dt>
                <dd className="font-body text-xs text-graphite-200/60 mt-1 leading-snug">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
