import React from "react";
import SectionHeader from "@/src/components/ui/SectionHeader";
import { PORTFOLIO_DATA } from "@/src/data/portfolio";
import { FolderOpen } from "lucide-react";

export default function PortfolioShowcase() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-900/40 relative overflow-hidden" id="work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badgeText="Proof of Work & Impact"
          title="Ideas Transformed into"
          gradientTitle="Useful Products"
          description="A selection of case studies demonstrating how Sutryva transforms business challenges into working software."
        />

        {PORTFOLIO_DATA.length === 0 ? (
          <div className="glass-panel rounded-3xl p-12 sm:p-16 border border-slate-200 dark:border-slate-800 text-center max-w-2xl mx-auto space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 mx-auto">
              <FolderOpen className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Selected projects will be added soon.</h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {PORTFOLIO_DATA.map((study) => (
              <div
                key={study.id}
                className="glass-card rounded-3xl p-8 border border-slate-200 dark:border-slate-800 space-y-4"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                  {study.industry}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{study.name}</h3>

                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-slate-700 dark:text-slate-200">Problem: </span>
                    <span className="text-slate-600 dark:text-slate-300">{study.problem}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700 dark:text-slate-200">Solution: </span>
                    <span className="text-slate-600 dark:text-slate-300">{study.solution}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700 dark:text-slate-200">Result: </span>
                    <span className="text-slate-600 dark:text-slate-300">{study.result}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {study.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
