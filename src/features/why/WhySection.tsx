import React from "react";
import SectionHeader from "@/src/components/ui/SectionHeader";
import {
  Sparkles,
  Code2,
  Layers,
  UserCheck,
  MessagesSquare,
  Handshake,
  Briefcase,
  RefreshCw,
} from "lucide-react";

const WHY_POINTS: Array<{ title: string; icon: React.ReactNode }> = [
  { title: "Practical use of AI", icon: <Sparkles className="w-5 h-5 text-cyan-400" /> },
  { title: "Modern engineering", icon: <Code2 className="w-5 h-5 text-blue-400" /> },
  { title: "Scalable architecture", icon: <Layers className="w-5 h-5 text-purple-400" /> },
  { title: "User-focused design", icon: <UserCheck className="w-5 h-5 text-pink-400" /> },
  { title: "Transparent communication", icon: <MessagesSquare className="w-5 h-5 text-cyan-400" /> },
  { title: "Flexible collaboration", icon: <Handshake className="w-5 h-5 text-blue-400" /> },
  { title: "Business-oriented solutions", icon: <Briefcase className="w-5 h-5 text-amber-400" /> },
  { title: "Continuous improvement", icon: <RefreshCw className="w-5 h-5 text-purple-400" /> },
];

export default function WhySection() {
  return (
    <section className="py-20 sm:py-28 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badgeText="Why Sutryva"
          title="Built for clarity, speed"
          gradientTitle="and scale"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {WHY_POINTS.map((point, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 flex items-center gap-3"
            >
              <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shrink-0">
                {point.icon}
              </div>
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{point.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
