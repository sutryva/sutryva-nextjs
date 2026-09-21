import React from "react";
import { SITE_CONFIG } from "@/src/data";
import { Building2, Mail, LifeBuoy, Clock } from "lucide-react";

export default function ContactInfoPanel() {
  return (
    <div className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6">
      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Contact Information</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Reach us directly using the details below.</p>
      </div>

      <div className="space-y-3 text-sm">
        <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80">
          <Building2 className="w-4 h-4 mt-0.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Company</div>
            <div className="text-slate-700 dark:text-slate-200 font-semibold">{SITE_CONFIG.legalName}</div>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80">
          <Mail className="w-4 h-4 mt-0.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Official Email</div>
            <a href={`mailto:${SITE_CONFIG.contact.officialEmail}`} className="text-cyan-600 dark:text-cyan-400 font-semibold hover:underline">
              {SITE_CONFIG.contact.officialEmail}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80">
          <Mail className="w-4 h-4 mt-0.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400">General Enquiries</div>
            <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-cyan-600 dark:text-cyan-400 font-semibold hover:underline">
              {SITE_CONFIG.contact.email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80">
          <LifeBuoy className="w-4 h-4 mt-0.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Customer Support</div>
            <a href={`mailto:${SITE_CONFIG.contact.supportEmail}`} className="text-cyan-600 dark:text-cyan-400 font-semibold hover:underline">
              {SITE_CONFIG.contact.supportEmail}
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800">
        <Clock className="w-4 h-4 mt-0.5 shrink-0" />
        <span>Phone, WhatsApp, office address and working hours will be published here once available.</span>
      </div>
    </div>
  );
}
