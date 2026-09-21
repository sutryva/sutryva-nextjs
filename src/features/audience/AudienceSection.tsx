"use client";

import React, { useState } from "react";
import SectionHeader from "@/src/components/ui/SectionHeader";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { AUDIENCE_DATA } from "@/src/data/audience";
import { Rocket, Building2, Users, Cpu, GraduationCap, Wrench, CheckCircle, ArrowRight } from "lucide-react";

const AUDIENCE_ICONS: Record<string, React.ReactNode> = {
  Rocket: <Rocket className="w-6 h-6 text-amber-400" />,
  Building2: <Building2 className="w-6 h-6 text-blue-400" />,
  Users: <Users className="w-6 h-6 text-cyan-400" />,
  Cpu: <Cpu className="w-6 h-6 text-purple-400" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-emerald-400" />,
  Wrench: <Wrench className="w-6 h-6 text-pink-400" />,
};

export default function AudienceSection() {
  const [selectedAudienceId, setSelectedAudienceId] = useState<string>(AUDIENCE_DATA[0].id);

  const selectedAudience = AUDIENCE_DATA.find((a) => a.id === selectedAudienceId) || AUDIENCE_DATA[0];

  return (
    <section className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-900/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badgeText="Who We Serve"
          title="Tailored Software Solutions for"
          gradientTitle="Every Scale of Ambition"
          description="Sutryva partners with visionary founders, growing businesses, product teams, and enterprise operational leads to deliver scalable software solutions."
        />

        {/* Audience Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {AUDIENCE_DATA.map((aud) => {
            const isSelected = selectedAudienceId === aud.id;
            return (
              <button
                key={aud.id}
                onClick={() => setSelectedAudienceId(aud.id)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-slate-200 dark:bg-slate-800 border-cyan-500 shadow-lg shadow-cyan-500/10 scale-105"
                    : "glass-card border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                <div className="mb-2">
                  {AUDIENCE_ICONS[aud.iconName] || <Rocket className="w-6 h-6 text-cyan-400" />}
                </div>
                <div className={`text-xs font-bold ${isSelected ? "text-cyan-600 dark:text-cyan-400" : "text-slate-600 dark:text-slate-300"}`}>
                  {aud.title.split("&")[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Audience Profile Panel */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  {AUDIENCE_ICONS[selectedAudience.iconName]}
                </div>
                <div>
                  <Badge variant="cyan">Target Audience Profile</Badge>
                  <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">{selectedAudience.title}</h3>
                </div>
              </div>

              <p className="text-lg text-cyan-600 dark:text-cyan-300 font-semibold">{selectedAudience.subtitle}</p>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">{selectedAudience.description}</p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 font-mono">Key Strategic Benefits</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedAudience.keyBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-200">
                      <CheckCircle className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono">Recommended Services</h4>
              <ul className="space-y-2">
                {selectedAudience.recommendedServices.map((serviceName, idx) => (
                  <li key={idx} className="p-3 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-cyan-700 dark:text-cyan-300 font-medium flex items-center justify-between">
                    <span>{serviceName}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Button href="/contact" size="sm" className="w-full justify-center" icon={<ArrowRight className="w-4 h-4" />}>
                  Schedule Audience Solution Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
