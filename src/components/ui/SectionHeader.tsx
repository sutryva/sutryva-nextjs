import React from "react";
import { Badge } from "./badge";
import { cn } from "@/src/lib/utils";

interface SectionHeaderProps {
  badgeText?: string;
  title: string;
  gradientTitle?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  badgeText,
  title,
  gradientTitle,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={cn("flex flex-col max-w-3xl mb-12 sm:mb-16", alignClass, className)}>
      {badgeText && <Badge variant="cyan" className="mb-4">{badgeText}</Badge>}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
        {title}{" "}
        {gradientTitle && <span className="brand-gradient-text">{gradientTitle}</span>}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
