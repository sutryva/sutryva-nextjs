import React from "react";
import SectionHeader from "@/src/components/ui/SectionHeader";
import { Sparkles, Layers, Workflow, LayoutDashboard, Code2, Bot } from "lucide-react";

const PRODUCT_CATEGORIES: Array<{ name: string; description: string; icon: React.ReactNode }> = [
  {
    name: "AI Tools",
    description: "Applied AI features and tools built around real business use cases.",
    icon: <Sparkles className="w-6 h-6 text-cyan-400" />,
  },
  {
    name: "SaaS Platforms",
    description: "Multi-tenant cloud products designed for subscription-based businesses.",
    icon: <Layers className="w-6 h-6 text-blue-400" />,
  },
  {
    name: "Automation Systems",
    description: "Workflow and process automation that removes repetitive manual work.",
    icon: <Workflow className="w-6 h-6 text-purple-400" />,
  },
  {
    name: "Business Dashboards",
    description: "Internal tools and dashboards that turn data into clear decisions.",
    icon: <LayoutDashboard className="w-6 h-6 text-amber-400" />,
  },
  {
    name: "Developer Tools",
    description: "Utilities and internal platforms that help engineering teams move faster.",
    icon: <Code2 className="w-6 h-6 text-cyan-400" />,
  },
  {
    name: "Intelligent Assistants",
    description: "Conversational and agentic assistants that support day-to-day operations.",
    icon: <Bot className="w-6 h-6 text-pink-400" />,
  },
];

export default function ProductCategoriesSection() {
  return (
    <section className="py-20 sm:py-28 bg-white dark:bg-slate-950 relative overflow-hidden" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badgeText="Product Directions"
          title="Building the next generation of"
          gradientTitle="Digital Products"
          description="Categories we are actively exploring and building product direction around."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCT_CATEGORIES.map((category) => (
            <div
              key={category.name}
              className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3"
            >
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-fit">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{category.name}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
