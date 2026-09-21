import { Button } from "@/src/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for contacting Sutryva Technologies Private Limited.",
};

export default function ThankYouPage() {
  return (
    <div className="pt-20 min-h-[80vh] flex items-center justify-center bg-white dark:bg-slate-950">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center space-y-6 py-20">
        <div className="w-16 h-16 rounded-full bg-cyan-50 dark:bg-cyan-950 border border-cyan-500 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mx-auto shadow-lg shadow-cyan-500/20">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Thank you for reaching out.
        </h1>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          Your message has been received. Our team will review it and get back to you.
        </p>
        <div className="pt-2">
          <Button href="/" icon={<ArrowRight className="w-4 h-4" />}>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
