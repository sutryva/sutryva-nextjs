import { Button } from "@/src/components/ui/button";
import { Compass, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="pt-20 min-h-[80vh] flex items-center justify-center bg-white dark:bg-slate-950">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center space-y-6 py-20">
        <div className="w-16 h-16 rounded-2xl bg-cyan-50 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mx-auto">
          <Compass className="w-8 h-8" />
        </div>
        <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 tracking-widest">404</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          This page took a different route.
        </h1>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          The page you are looking for could not be found.
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
