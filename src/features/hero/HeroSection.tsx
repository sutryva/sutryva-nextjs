"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import CodeTerminal from "@/src/components/ui/CodeTerminal";
import { InfiniteMovingCards } from "@/src/components/ui/infinite-moving-cards";
import { Spotlight } from "@/src/components/ui/Spotlight";
import { BackgroundBeams } from "@/src/components/ui/background-beams";
import { TextGenerateEffect } from "@/src/components/ui/text-generate-effect";
import { HoverBorderGradient } from "@/src/components/ui/hover-border-gradient";
import { SITE_CONFIG, HERO_DATA } from "@/src/data";
import { cn } from "@/src/lib/utils";
import { ArrowRight, Lightbulb, Code2, TrendingUp, Users, ShieldCheck, Terminal, CheckCircle2 } from "lucide-react";

const VALUE_ICONS: Record<string, React.ReactNode> = {
  Lightbulb: <Lightbulb className="w-3.5 h-3.5 text-cyan-400" />,
  Code2: <Code2 className="w-3.5 h-3.5 text-blue-400" />,
  TrendingUp: <TrendingUp className="w-3.5 h-3.5 text-purple-400" />,
  Users: <Users className="w-3.5 h-3.5 text-pink-400" />,
};

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-grid-pattern">
      {/* Aceternity Background Beams & Spotlight Effect */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#06b6d4" />
      <BackgroundBeams />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Developer Status Badge with Aceternity HoverBorderGradient */}
          <div className="flex items-center justify-center">
            <HoverBorderGradient
              containerClassName="rounded-full"
              className="bg-slate-950 text-slate-200 flex items-center space-x-2 text-xs font-semibold px-4 py-1.5 font-mono"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>{HERO_DATA.statusBadge}</span>
            </HoverBorderGradient>
          </div>

          {/* Primary Tagline & Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
            {HERO_DATA.titlePrimary} <span className="brand-gradient-text">{HERO_DATA.titleGradient}</span>
          </h1>

          {/* Alternative Heading / Subtitle */}
          <div className="text-xl sm:text-2xl font-semibold text-cyan-600 dark:text-cyan-400 tracking-tight">
            <TextGenerateEffect words={HERO_DATA.alternativeHeading} />
          </div>

          {/* Practical Developer Grounded Description */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            {HERO_DATA.description}
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={HERO_DATA.ctaPrimary.href} size="lg" icon={<ArrowRight className="w-5 h-5" />}>
              {HERO_DATA.ctaPrimary.label}
            </Button>
            <Button href={HERO_DATA.ctaSecondary.href} variant="secondary" size="lg">
              {HERO_DATA.ctaSecondary.label}
            </Button>
          </div>

          {/* Developer Metrics */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-500 dark:text-slate-400">
            {HERO_DATA.developerMetrics.map((m, idx) => (
              <span key={idx} className="flex items-center gap-1.5">
                <CheckCircle2 className={cn("w-4 h-4", m.color)} /> {m.label}
              </span>
            ))}
          </div>
        </div>

        {/* Real Code Terminal & Showcase Section */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Code Terminal */}
          <div className="lg:col-span-7">
            <CodeTerminal />
          </div>

          {/* Right: Featured Official Sutryva Brand Banner Card */}
          <div className="lg:col-span-5 glass-panel rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden group">
            <div className="text-xs uppercase font-bold tracking-wider text-cyan-600 dark:text-cyan-400 mb-3 flex items-center justify-between">
              <span>{HERO_DATA.brandBannerTitle}</span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">{HERO_DATA.brandBannerVersion}</span>
            </div>
            <div className="relative w-full aspect-[1024/381] rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-4">
              <Image
                src="/images/sutryva-banner.png"
                alt="Sutryva technology and automation"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {SITE_CONFIG.coreValues.map((val, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-center gap-2 text-slate-700 dark:text-slate-300 font-semibold">
                  {VALUE_ICONS[val.icon] || <Lightbulb className="w-3.5 h-3.5 text-cyan-400" />}
                  <span>{val.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enterprise Trust & Security Strip */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-6 text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Legal Entity: <strong className="text-slate-700 dark:text-slate-200 font-semibold">{SITE_CONFIG.legalName}</strong></span>
          </div>
          <div className="flex items-center gap-6 font-mono text-xs">
            <span>NDA-First Engagements</span>
            <span className="hidden sm:inline">•</span>
            <span>India & Worldwide Remote</span>
          </div>
        </div>
      </div>

      {/* Aceternity Moving Tech Stack Marquee */}
      <div className="mt-16">
        <InfiniteMovingCards items={HERO_DATA.marqueeTechItems} speed="normal" />
      </div>
    </section>
  );
}
