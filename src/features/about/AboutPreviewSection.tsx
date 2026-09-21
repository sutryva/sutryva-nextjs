import React from "react";
import { Button } from "@/src/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutPreviewSection() {
  return (
    <section className="py-20 sm:py-28 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
          Technology with a purpose.
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Sutryva exists to make technology practical, connected and impactful. We believe great software should not only look modern; it should solve real problems and make work easier.
        </p>
        <div>
          <Button href="/about" variant="outline" icon={<ArrowRight className="w-4 h-4" />}>
            More About Sutryva
          </Button>
        </div>
      </div>
    </section>
  );
}
