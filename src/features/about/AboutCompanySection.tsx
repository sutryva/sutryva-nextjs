import React from "react";
import SectionHeader from "@/src/components/ui/SectionHeader";
import { Button } from "@/src/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

const BELIEFS = [
  "Good technology should solve real problems.",
  "AI should be practical, responsible and useful.",
  "Software should be designed around people.",
  "Simplicity is a competitive advantage.",
  "Scalable products begin with clear thinking.",
  "Long-term value matters more than short-term complexity.",
];

export default function AboutCompanySection() {
  return (
    <section className="py-20 sm:py-28 bg-white dark:bg-slate-950 relative overflow-hidden" id="about">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badgeText="About"
          title="About"
          gradientTitle="Sutryva"
          description="Sutryva is an AI-native software and technology company focused on building intelligent digital products, SaaS platforms, automation systems and custom software solutions."
        />

        {/* Our Story */}
        <div className="mb-10 glass-panel rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 space-y-4">
          <h3 className="text-xs uppercase font-bold tracking-widest text-cyan-600 dark:text-cyan-400 font-mono">
            Our Story
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Sutryva was created around a simple belief: technology becomes more valuable when it connects ideas, people, systems and actions. We aim to build software that is not only technically capable but also useful, understandable and focused on real-world outcomes.
          </p>
        </div>

        {/* What We Believe */}
        <div className="mb-10 glass-panel rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800">
          <h3 className="text-xs uppercase font-bold tracking-widest text-cyan-600 dark:text-cyan-400 font-mono mb-6">
            What We Believe
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BELIEFS.map((belief, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800"
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">{belief}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Our Approach */}
        <div className="mb-16 glass-panel rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 space-y-4">
          <h3 className="text-xs uppercase font-bold tracking-widest text-cyan-600 dark:text-cyan-400 font-mono">
            Our Approach
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            We combine product thinking, software engineering, artificial intelligence, automation and modern design to create digital solutions that are useful today and ready for tomorrow.
          </p>
        </div>

        {/* About Section CTA */}
        <div className="text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Let&apos;s build something meaningful together.
          </h3>
          <Button href="/contact" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
            Start a Conversation
          </Button>
        </div>
      </div>
    </section>
  );
}
