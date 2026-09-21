import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
  priority?: boolean;
}

export default function Logo({ size = "md", showText = true, className = "", priority = false }: LogoProps) {
  const iconDimensions = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-12 h-12",
  }[size];

  const pixelSize = {
    sm: 32,
    md: 40,
    lg: 56,
  }[size];

  const textSize = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  }[size];

  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 group ${className}`}>
      {/* Sutryva Official 3D Ribbon Logo Mark (Transparent PNG) */}
      <div className={`relative ${iconDimensions} flex items-center justify-center shrink-0`}>
        <Image
          src="/images/sutryva-symbol-transparent.png"
          alt="Sutryva Technologies logo"
          width={pixelSize}
          height={pixelSize}
          className="w-full h-full object-contain transform transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(14,165,233,0.4)]"
          priority={priority}
        />
      </div>

      {showText && (
        <div className="flex flex-col justify-center">
          <span className={`font-extrabold tracking-tight text-slate-900 dark:text-white ${textSize} group-hover:text-cyan-500 transition-colors`}>
            Sutryva
          </span>
          <span className="text-[9px] uppercase tracking-widest text-cyan-500 dark:text-cyan-400 font-bold -mt-1 hidden sm:block">
            IDEAS TO IMPACT
          </span>
        </div>
      )}
    </Link>
  );
}
