import React from "react";
import Link from "next/link";
import Logo from "../ui/Logo";
import ThemeToggle from "../ui/ThemeToggle";
import { SITE_CONFIG } from "@/src/data";
import { Mail, ShieldCheck } from "lucide-react";

const FOOTER_COLUMNS: Array<{ heading: string; links: Array<{ label: string; href: string }> }> = [
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Services", href: "/services" },
      { label: "Our Work", href: "/work" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "AI Software", href: "/services#ai-machine-intelligence" },
      { label: "SaaS Development", href: "/services#saas-product-development" },
      { label: "Automation", href: "/services#business-automation" },
      { label: "AI Agents", href: "/services#ai-agents" },
      { label: "Custom Software", href: "/services#custom-software-development" },
      { label: "API Integrations", href: "/services#api-integrations" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Insights", href: "/insights" },
      { label: "Documentation", href: "/documentation" },
      { label: "FAQs", href: "/faqs" },
      { label: "Case Studies", href: "/work" },
      { label: "Support", href: "/support" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms and Conditions", href: "/terms-and-conditions" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="glass-panel border-t border-slate-200 dark:border-slate-800/60 pt-16 pb-10 relative overflow-hidden">
      {/* Background Subtle Gradient Lights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" />
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              {SITE_CONFIG.primaryTagline}
            </p>
            <p className="text-xs text-cyan-600 dark:text-cyan-400 font-medium">
              {SITE_CONFIG.brandPromise}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              Sutryva builds intelligent software, AI-powered automation and digital solutions that turn ideas into impact.
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 italic">
              Technologies for a brighter tomorrow.
            </p>
            <div className="pt-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Link Columns */}
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.heading}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-600 dark:text-slate-200 mb-4">
                {column.heading}
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-slate-900 dark:hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-600 dark:text-slate-200 mb-4">
              Contact
            </h4>
            <div className="space-y-2.5 text-sm">
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="flex items-start gap-2 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span className="break-all leading-snug">{SITE_CONFIG.contact.email}</span>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.contact.supportEmail}`}
                className="flex items-start gap-2 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span className="break-all leading-snug">{SITE_CONFIG.contact.supportEmail}</span>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.contact.officialEmail}`}
                className="flex items-start gap-2 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span className="break-all leading-snug">{SITE_CONFIG.contact.officialEmail}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-6 text-center">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" /> Built to Enterprise Standards
            </span>
            <span>People. Products. Possibilities.</span>
          </div>
        </div>
        <p className="pt-4 text-center text-[11px] text-slate-500 dark:text-slate-400">
          Social links will be added here once our official profiles are live.
        </p>
      </div>
    </footer>
  );
}
