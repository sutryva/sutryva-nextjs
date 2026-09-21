"use client";

import React from "react";
import { useTheme } from "@/src/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2.5 rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-center border ${
        theme === "dark"
          ? "bg-slate-900/80 border-slate-800 text-amber-400 hover:bg-slate-800 hover:text-amber-300"
          : "bg-slate-100 border-slate-300 text-indigo-600 hover:bg-slate-200 hover:text-indigo-700 shadow-sm"
      } ${className}`}
      aria-label="Toggle Theme (Dark / Light)"
      title={`Switch to ${theme === "dark" ? "Light" : "Dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 animate-in spin-in-180 duration-300" />
      ) : (
        <Moon className="w-4 h-4 animate-in spin-in-180 duration-300" />
      )}
    </button>
  );
}
