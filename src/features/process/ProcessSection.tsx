import React from "react";
import SectionHeader from "@/src/components/ui/SectionHeader";
import { Search, ClipboardList, Hammer, Rocket, TrendingUp } from "lucide-react";

const PROCESS_STEPS: Array<{ number: string; title: string; description: string; icon: React.ReactNode }> = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the problem, users and business goals.",
    icon: <Search className="w-5 h-5" />,
  },
  {
    number: "02",
    title: "Plan",
    description: "Define the product direction, technical approach and priorities.",
    icon: <ClipboardList className="w-5 h-5" />,
  },
  {
    number: "03",
    title: "Build",
    description: "Design and develop the solution using modern technologies.",
    icon: <Hammer className="w-5 h-5" />,
  },
  {
    number: "04",
    title: "Launch",
    description: "Deploy, test and prepare the product for real users.",
    icon: <Rocket className="w-5 h-5" />,
  },
  {
    number: "05",
    title: "Improve",
    description: "Measure results, collect feedback and continuously improve.",
    icon: <TrendingUp className="w-5 h-5" />,
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badgeText="How We Work"
          title="From idea"
          gradientTitle="to impact"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-cyan-50 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-500/30 text-cyan-600 dark:text-cyan-400">
                  {step.icon}
                </div>
                <span className="font-mono text-xs font-bold text-slate-500 dark:text-slate-400">{step.number}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{step.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
