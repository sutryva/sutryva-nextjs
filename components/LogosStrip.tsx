const items = ["MERN", "Next.js", "TypeScript", "Razorpay", "AWS", "Docker", "MCP / LLM"];

export default function LogosStrip() {
  return (
    <div className="border-y border-white/10 bg-graphite-950/60 py-5">
      <div className="mx-auto max-w-6xl px-6 flex flex-wrap items-center gap-x-10 gap-y-2 justify-between font-mono-brand text-xs tracking-wider text-graphite-500 uppercase">
        {items.map((i) => (
          <span key={i}>{i}</span>
        ))}
      </div>
    </div>
  );
}
