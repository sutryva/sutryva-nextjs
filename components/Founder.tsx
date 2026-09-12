import { GithubIcon, LinkedinIcon, XIcon } from "./Icons";

export default function Founder() {
  return (
    <section id="founder" className="py-24 px-6 bg-graphite-950">
      <div className="mx-auto max-w-6xl grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="font-mono-brand text-xs tracking-widest text-cobalt uppercase mb-3">Founder</p>
          <h2 className="font-display font-bold text-3xl text-white tracking-tight mb-4">Vikash Kumar</h2>
          <p className="font-body text-sm text-graphite-200/60">B.Tech CSE (IoT), GEC Siwan — 2026</p>
        </div>
        <div className="md:col-span-8">
          <p className="font-body text-graphite-200/75 leading-relaxed text-base">
            Full-stack MERN developer who built and shipped production systems for 10,000+ users and 5,000+
            transactions during a Sewacity Technologies internship — lifting system reliability by 40%. Solved
            600+ DSA problems in C++ and placed 1st at GEC Siwan and 2nd at IIT BHU hackathons. Sutryva
            Technologies exists to bring that same production discipline — architecture, scalability, and AI
            integration — to founders who need a technical partner they can hand the entire stack to.
          </p>
          <div className="flex gap-4 mt-7">
            <a href="https://github.com/sutryva" className="text-graphite-200/60 hover:text-lime transition-colors" aria-label="GitHub">
              <GithubIcon className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/company/sutryva" className="text-graphite-200/60 hover:text-lime transition-colors" aria-label="LinkedIn">
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a href="https://x.com/sutryva" className="text-graphite-200/60 hover:text-lime transition-colors" aria-label="X">
              <XIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
