"use client";

import React from "react";
import SectionHeader from "@/src/components/ui/SectionHeader";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { PRODUCT_DIRECTIONS } from "@/src/data/products";
import { Sparkles, GitBranch, Bot, AppWindow, Network, Cloud, ArrowUpRight } from "lucide-react";

const PRODUCT_ICONS: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-6 h-6 text-cyan-400" />,
  GitBranch: <GitBranch className="w-6 h-6 text-blue-400" />,
  Bot: <Bot className="w-6 h-6 text-purple-400" />,
  AppWindow: <AppWindow className="w-6 h-6 text-pink-400" />,
  Network: <Network className="w-6 h-6 text-cyan-400" />,
  Cloud: <Cloud className="w-6 h-6 text-blue-400" />,
};

export default function ProductDirectionsSection() {
  return (
    <section className="py-20 sm:py-28 bg-white dark:bg-slate-950 relative overflow-hidden" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badgeText="Product Architecture Directions"
          title="The Future Ecosystem of"
          gradientTitle="Sutryva Technology Platforms"
          description="We are actively building modular product architectures and reusable internal engines designed to accelerate intelligent SaaS platforms, agent swarms, and enterprise integrations."
        />

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCT_DIRECTIONS.map((prod) => (
            <div
              key={prod.id}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between group hover:border-cyan-500/50"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 group-hover:scale-110 transition-transform">
                    {PRODUCT_ICONS[prod.iconName] || <Sparkles className="w-6 h-6 text-cyan-400" />}
                  </div>
                  <Badge variant={prod.badge === "Future Offering" ? "purple" : "cyan"}>
                    {prod.badge}
                  </Badge>
                </div>

                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                  {prod.categoryTag}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  {prod.name}
                </h3>
                <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mb-3">{prod.tagline}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                  {prod.description}
                </p>
              </div>

              <div>
                <div className="mb-6 space-y-2">
                  <h4 className="text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">Core Capabilities</h4>
                  <ul className="space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
                    {prod.capabilities.slice(0, 3).map((cap, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap gap-1.5">
                  {prod.techFocus.map((tech, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-950 text-slate-500 dark:text-slate-400 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/contact" variant="outline" size="default" icon={<ArrowUpRight className="w-4 h-4" />}>
            Inquire About Custom Product Architecture Integration
          </Button>
        </div>
      </div>
    </section>
  );
}
