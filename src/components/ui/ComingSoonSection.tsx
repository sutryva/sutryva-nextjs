import React from "react";
import SectionHeader from "@/src/components/ui/SectionHeader";
import { Button } from "@/src/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ComingSoonSectionProps {
  badgeText: string;
  title: string;
  gradientTitle?: string;
  description?: string;
  icon: React.ReactNode;
  heading: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function ComingSoonSection({
  badgeText,
  title,
  gradientTitle,
  description,
  icon,
  heading,
  body,
  ctaLabel = "Get in Touch",
  ctaHref = "/contact",
}: ComingSoonSectionProps) {
  return (
    <section className="py-20 sm:py-28 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badgeText={badgeText}
          title={title}
          gradientTitle={gradientTitle}
          description={description}
        />

        <div className="glass-panel rounded-3xl p-10 sm:p-16 border border-slate-200 dark:border-slate-800 text-center max-w-2xl mx-auto space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-cyan-50 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mx-auto">
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{heading}</h3>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{body}</p>
          <div className="pt-2">
            <Button href={ctaHref} icon={<ArrowRight className="w-4 h-4" />}>
              {ctaLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
