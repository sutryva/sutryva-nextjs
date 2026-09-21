import { Mail, ChevronRight } from "lucide-react";
import CheckoutButton from "./CheckoutButton";

export default function CTA() {
  return (
    <section id="contact" className="py-24 px-6 bg-graphite-900 border-t border-white/10">
      <div className="mx-auto max-w-6xl grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight mb-4">
            Have a product that needs to ship right the first time?
          </h2>
          <p className="font-body text-graphite-200/65 max-w-lg leading-relaxed mb-6">
            Tell us where you&apos;re stuck — MVP scope, a stalled build, or an AI feature you can&apos;t wire in.
            We&apos;ll respond with a real technical read, not a sales call.
          </p>
          <div className="p-5 rounded-lg border border-white/10 bg-graphite-850 max-w-lg">
            <h3 className="text-white font-semibold text-sm mb-1">Instant Technical Consultation</h3>
            <p className="text-xs text-graphite-400 mb-4">Reserve a 1-on-1 CTO architecture & scoping session with our lead engineer.</p>
            <CheckoutButton
              amountInRupees={500}
              buttonText="Book Architecture Session"
              description="Sutryva 1-on-1 CTO Scoping Session"
            />
          </div>
        </div>
        <div className="md:col-span-5 flex flex-col gap-3">
          <a
            href="mailto:hire@sutryva.com"
            className="flex items-center justify-between rounded-md border border-white/15 px-5 py-4 hover:border-cobalt transition-colors group"
          >
            <span className="font-body text-sm text-white flex items-center gap-3">
              <Mail className="h-4 w-4 text-lime" /> hire@sutryva.com
            </span>
            <ChevronRight className="h-4 w-4 text-graphite-500 group-hover:text-cobalt group-hover:translate-x-0.5 transition-all" />
          </a>
          <a
            href="mailto:hire@sutryva.com"
            className="inline-flex items-center justify-center bg-lime text-graphite-950 hover:bg-lime/90 rounded-md font-body font-semibold h-12 transition-colors"
          >
            Start the conversation
          </a>
        </div>
      </div>
    </section>
  );
}

