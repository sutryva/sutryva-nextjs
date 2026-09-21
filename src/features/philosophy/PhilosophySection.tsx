"use client";

import React from "react";
import SectionHeader from "@/src/components/ui/SectionHeader";
import { Badge } from "@/src/components/ui/badge";
import { BentoGrid, BentoGridItem } from "@/src/components/ui/bento-grid";
import { PHILOSOPHY_CONFIG } from "@/src/data/philosophy";
import { BrainCircuit, Network, Zap } from "lucide-react";

const PILLAR_ICONS: Record<string, React.ReactNode> = {
  BrainCircuit: <BrainCircuit className="w-7 h-7 text-cyan-400" />,
  Network: <Network className="w-7 h-7 text-blue-400" />,
  Zap: <Zap className="w-7 h-7 text-purple-400" />,
};

export default function PhilosophySection() {
  const { badgeText, title, gradientTitle, description, pillars } = PHILOSOPHY_CONFIG;

  return (
    <section className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-950/90 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badgeText={badgeText}
          title={title}
          gradientTitle={gradientTitle}
          description={description}
        />

        <BentoGrid>
          {pillars.map((pillar) => (
            <BentoGridItem
              key={pillar.id}
              title={pillar.name}
              description={pillar.description}
              icon={PILLAR_ICONS[pillar.iconName]}
              badge={<Badge variant={pillar.accentColor}>Pillar {pillar.pillarNumber}</Badge>}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
