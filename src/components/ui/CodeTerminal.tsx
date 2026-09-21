"use client";

import React, { useState } from "react";
import { Terminal, Copy, Check, Code2, Cpu, GitBranch } from "lucide-react";
import { CODE_SNIPPETS } from "@/src/data/codeSnippets";
import { cn } from "@/src/lib/utils";

const ICON_MAP: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-4 h-4 text-purple-400" />,
  Code2: <Code2 className="w-4 h-4 text-cyan-400" />,
  GitBranch: <GitBranch className="w-4 h-4 text-amber-400" />,
};

export default function CodeTerminal({ className = "" }: { className?: string }) {
  const [activeTab, setActiveTab] = useState<string>(CODE_SNIPPETS[0].id);
  const [copied, setCopied] = useState<boolean>(false);

  const currentSnippet = CODE_SNIPPETS.find((s) => s.id === activeTab) || CODE_SNIPPETS[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("w-full glass-panel rounded-2xl border border-slate-800 shadow-2xl overflow-hidden text-left font-mono", className)}>
      {/* Terminal Top Window Bar */}
      <div className="px-4 py-3 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs font-semibold text-slate-400 flex items-center gap-1.5 font-sans">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            {currentSnippet.filename}
          </span>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white hover:border-slate-700 transition-colors font-sans"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? "Copied" : "Copy Code"}</span>
        </button>
      </div>

      {/* Snippet Tabs */}
      <div className="flex overflow-x-auto bg-slate-950/60 border-b border-slate-800/80 px-2 pt-2 gap-1 font-sans">
        {CODE_SNIPPETS.map((snippet) => {
          const isActive = activeTab === snippet.id;
          return (
            <button
              key={snippet.id}
              onClick={() => setActiveTab(snippet.id)}
              className={cn(
                "flex items-center gap-2 px-3.5 py-2 rounded-t-xl text-xs font-semibold transition-all cursor-pointer",
                isActive
                  ? "bg-slate-900 text-cyan-400 border-t border-x border-slate-800 shadow-sm"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"
              )}
            >
              {ICON_MAP[snippet.iconName] || <Code2 className="w-4 h-4" />}
              <span>{snippet.tabTitle}</span>
            </button>
          );
        })}
      </div>

      {/* Code Editor Body */}
      <div className="p-4 sm:p-6 bg-slate-950/95 overflow-x-auto max-h-[380px] relative">
        <div className="text-xs text-slate-400 mb-3 pb-2 border-b border-slate-900 font-sans flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>{currentSnippet.description}</span>
        </div>

        <pre className="text-xs text-slate-200 leading-relaxed font-mono font-medium">
          <code>
            {currentSnippet.code.split("\n").map((line, idx) => (
              <div key={idx} className="flex">
                <span className="w-8 select-none text-slate-600 text-right pr-4 shrink-0 font-mono text-[11px]">
                  {idx + 1}
                </span>
                <span className="flex-1">{line}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>

      {/* Terminal Footer Telemetry */}
      <div className="px-4 py-2 bg-slate-950 border-t border-slate-900 text-[11px] text-slate-500 font-sans flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-4">
          <span className="text-emerald-400 font-mono">✓ TypeScript 5.5 Strict Checked</span>
          <span>• Latency: &lt; 45ms</span>
        </div>
        <span>Zero-Downtime Deployment Ready</span>
      </div>
    </div>
  );
}
