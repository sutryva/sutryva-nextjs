import React from "react";
import SectionHeader from "@/src/components/ui/SectionHeader";
import { Button } from "@/src/components/ui/button";
import { CardSpotlight } from "@/src/components/ui/card-spotlight";
import { SERVICES_DATA } from "@/src/data/services";
import {
  BrainCircuit,
  Layers,
  Workflow,
  Bot,
  Code2,
  Network,
  Rocket,
  Palette,
  Cloud,
  Wrench,
  ArrowRight,
} from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  BrainCircuit: <BrainCircuit className="w-6 h-6 text-cyan-400" />,
  Layers: <Layers className="w-6 h-6 text-blue-400" />,
  Workflow: <Workflow className="w-6 h-6 text-purple-400" />,
  Bot: <Bot className="w-6 h-6 text-cyan-400" />,
  Code2: <Code2 className="w-6 h-6 text-blue-400" />,
  Network: <Network className="w-6 h-6 text-purple-400" />,
  Rocket: <Rocket className="w-6 h-6 text-amber-400" />,
  Palette: <Palette className="w-6 h-6 text-pink-400" />,
  Cloud: <Cloud className="w-6 h-6 text-blue-400" />,
  Wrench: <Wrench className="w-6 h-6 text-slate-400" />,
};

interface ServicesGridProps {
  ids?: string[];
  title?: string;
  gradientTitle?: string;
  description?: string;
  showViewAll?: boolean;
}

export default function ServicesGrid({
  ids,
  title = "What we",
  gradientTitle = "build",
  description = "From early-stage ideas to business-critical systems, Sutryva helps teams design, develop and improve digital products.",
  showViewAll = false,
}: ServicesGridProps) {
  const displayedServices = ids
    ? ids.map((id) => SERVICES_DATA.find((s) => s.id === id)).filter((s): s is (typeof SERVICES_DATA)[number] => Boolean(s))
    : SERVICES_DATA;

  return (
    <section className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-900/60 relative overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badgeText="Services"
          title={title}
          gradientTitle={gradientTitle}
          description={description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedServices.map((service) => (
            <CardSpotlight
              key={service.id}
              id={service.id}
              className="flex flex-col justify-between hover:border-cyan-500/50 scroll-mt-28"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                    {ICON_MAP[service.icon] || <Code2 className="w-6 h-6 text-cyan-400" />}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-500 dark:text-slate-400">#{service.number}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80">
                <Button
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  size="sm"
                  variant="outline"
                  className="w-full justify-center"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Discuss Your Requirements
                </Button>
              </div>
            </CardSpotlight>
          ))}
        </div>

        {showViewAll && (
          <div className="mt-12 text-center">
            <Button href="/services" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
              View All Services
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
