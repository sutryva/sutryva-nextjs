import React from "react";
import { Button } from "@/src/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-900/60 relative overflow-hidden" id="contact">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
          Have an idea? Let&apos;s build it.
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Tell us what you are trying to build, improve or automate. We will explore the right technical direction with you.
        </p>
        <div>
          <Button href="/contact" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
            Start a Conversation
          </Button>
        </div>
      </div>
    </section>
  );
}
