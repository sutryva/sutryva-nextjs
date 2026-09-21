"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/src/components/ui/SectionHeader";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { SITE_CONFIG } from "@/src/data";
import { CheckCircle2, Sparkles, Send, ShieldCheck, ArrowRight, ArrowLeft, Loader2, Check, Paperclip } from "lucide-react";

interface ProjectPlannerFormProps {
  title?: string;
  gradientTitle?: string;
  description?: string;
  leftPanel?: React.ReactNode;
}

export default function ProjectPlannerForm({
  title = "Transform Ideas into Useful",
  gradientTitle = "Intelligent Digital Products",
  description = "Ready to build software that thinks, connects, and acts? Use our interactive project planner to outline your goals or submit a direct inquiry.",
  leftPanel,
}: ProjectPlannerFormProps) {
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    serviceType: "AI and Machine Intelligence",
    timeline: "Standard (4-8 Weeks)",
    budget: "$15,000 - $35,000",
    name: "",
    email: "",
    company: "",
    description: "",
    consent: false,
    website: "",
  });
  const [attachmentName, setAttachmentName] = useState<string>("");

  const serviceOptions = [
    "AI and Machine Intelligence",
    "AI Agents",
    "SaaS Product Development",
    "Business Automation",
    "Custom Software Development",
    "API and Integrations",
    "MVP Development",
    "UI/UX and Product Design",
  ];

  const timelineOptions = ["Urgent (< 4 Weeks)", "Standard (4-8 Weeks)", "Strategic (2-3 Months)", "Flexible"];

  const budgetOptions = ["$5,000 - $15,000", "$15,000 - $35,000", "$35,000 - $75,000", "$75,000+ / Enterprise"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) return;
    // Honeypot: real users never see or fill this field. If it has a value, the
    // submission is almost certainly automated, so we drop it silently.
    if (formData.website) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const progressPercentage = step === 1 ? 33 : step === 2 ? 66 : 100;

  return (
    <section className="py-20 sm:py-28 bg-white dark:bg-slate-950 relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badgeText="Start Your Project"
          title={title}
          gradientTitle={gradientTitle}
          description={description}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            {leftPanel ?? (
              <div className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-cyan-50 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-500/30 text-cyan-600 dark:text-cyan-400">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Engineering Studio Engagement</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">CTO-Level Ownership & Transparency</p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {SITE_CONFIG.companyDescription}
                </p>

                <div className="space-y-3 border-t border-slate-200 dark:border-slate-800 pt-4 text-xs font-mono">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800/80">
                    <span className="font-sans font-medium">Direct Contact Email:</span>
                    <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-cyan-600 dark:text-cyan-400 font-bold hover:underline">
                      {SITE_CONFIG.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800/80">
                    <span className="font-sans font-medium">Company Legal Name:</span>
                    <span className="text-slate-700 dark:text-slate-200 font-semibold">{SITE_CONFIG.legalName}</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/30 text-xs text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  <span>NDA & Data Privacy Guaranteed Prior to Architecture Review.</span>
                </div>
              </div>
            )}
          </div>

          {/* Right Form Column with Smooth Step Animations */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 relative">
              {/* Animated Progress Bar */}
              {!submitted && (
                <div className="mb-8">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2 font-mono">
                    <span className={step >= 1 ? "text-cyan-600 dark:text-cyan-400 font-bold" : ""}>1. Service Required</span>
                    <span className={step >= 2 ? "text-cyan-600 dark:text-cyan-400 font-bold" : ""}>2. Timeline & Budget</span>
                    <span className={step >= 3 ? "text-cyan-600 dark:text-cyan-400 font-bold" : ""}>3. Contact Details</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-900 rounded-full overflow-hidden border border-slate-300 dark:border-slate-800">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                      initial={{ width: "33%" }}
                      animate={{ width: `${progressPercentage}%` }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    />
                  </div>
                </div>
              )}

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="text-center py-12 space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-cyan-50 dark:bg-cyan-950 border border-cyan-500 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mx-auto shadow-lg shadow-cyan-500/20">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white">Enquiry Sent</h3>
                    <p className="text-slate-600 dark:text-slate-300 max-w-md mx-auto text-sm leading-relaxed">
                      Thank you for contacting Sutryva. We have received your message and will get back to you soon.
                    </p>
                    <div className="p-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 max-w-md mx-auto text-left text-xs space-y-2 text-slate-500 dark:text-slate-400 font-mono">
                      <div><strong className="text-slate-700 dark:text-slate-200">Selected Service:</strong> {formData.serviceType}</div>
                      <div><strong className="text-slate-700 dark:text-slate-200">Target Timeline:</strong> {formData.timeline}</div>
                      <div><strong className="text-slate-700 dark:text-slate-200">Budget Range:</strong> {formData.budget}</div>
                      <div><strong className="text-slate-700 dark:text-slate-200">Client Email:</strong> {formData.email}</div>
                    </div>
                    <Button
                      variant="outline"
                      size="default"
                      onClick={() => {
                        setSubmitted(false);
                        setStep(1);
                        setAttachmentName("");
                        setFormData((prev) => ({ ...prev, name: "", email: "", company: "", description: "", consent: false, website: "" }));
                      }}
                    >
                      Send Another Enquiry
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot field: hidden from real users, catches basic bots */}
                    <div className="absolute left-[-9999px] top-auto w-px h-px overflow-hidden" aria-hidden="true">
                      <label htmlFor="website">Leave this field empty</label>
                      <input
                        id="website"
                        name="website"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      />
                    </div>
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <label className="text-base font-bold text-slate-900 dark:text-white block">
                          Service required
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {serviceOptions.map((opt) => {
                            const isSelected = formData.serviceType === opt;
                            return (
                              <button
                                type="button"
                                key={opt}
                                onClick={() => setFormData({ ...formData, serviceType: opt })}
                                className={`p-4 rounded-2xl border text-left text-xs font-semibold transition-all duration-200 flex items-center justify-between ${
                                  isSelected
                                    ? "bg-cyan-50 dark:bg-cyan-950/60 border-cyan-500 text-cyan-700 dark:text-cyan-300 shadow-lg shadow-cyan-500/10 scale-[1.02]"
                                    : "bg-slate-50 dark:bg-slate-950/80 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-900/60"
                                }`}
                              >
                                <span>{opt}</span>
                                {isSelected && <Check className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />}
                              </button>
                            );
                          })}
                        </div>
                        <div className="pt-4 flex justify-end">
                          <Button type="button" onClick={() => setStep(2)} icon={<ArrowRight className="w-4 h-4" />}>
                            Next: Timeline & Budget
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div>
                          <label className="text-sm font-bold text-slate-900 dark:text-white block mb-3">Project Timeline</label>
                          <div className="grid grid-cols-2 gap-3">
                            {timelineOptions.map((t) => {
                              const isSelected = formData.timeline === t;
                              return (
                                <button
                                  type="button"
                                  key={t}
                                  onClick={() => setFormData({ ...formData, timeline: t })}
                                  className={`p-3.5 rounded-2xl border text-xs font-semibold transition-all duration-200 flex items-center justify-between ${
                                    isSelected
                                      ? "bg-cyan-50 dark:bg-cyan-950/60 border-cyan-500 text-cyan-700 dark:text-cyan-300 shadow-md shadow-cyan-500/10"
                                      : "bg-slate-50 dark:bg-slate-950/80 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700"
                                  }`}
                                >
                                  <span>{t}</span>
                                  {isSelected && <Check className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        <div>
                          <label className="text-sm font-bold text-slate-900 dark:text-white block mb-3">Budget Range</label>
                          <div className="grid grid-cols-2 gap-3">
                            {budgetOptions.map((b) => {
                              const isSelected = formData.budget === b;
                              return (
                                <button
                                  type="button"
                                  key={b}
                                  onClick={() => setFormData({ ...formData, budget: b })}
                                  className={`p-3.5 rounded-2xl border text-xs font-semibold transition-all duration-200 flex items-center justify-between ${
                                    isSelected
                                      ? "bg-cyan-50 dark:bg-cyan-950/60 border-cyan-500 text-cyan-700 dark:text-cyan-300 shadow-md shadow-cyan-500/10"
                                      : "bg-slate-50 dark:bg-slate-950/80 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700"
                                  }`}
                                >
                                  <span>{b}</span>
                                  {isSelected && <Check className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        <div className="pt-4 flex justify-between">
                          <Button type="button" variant="ghost" onClick={() => setStep(1)} icon={<ArrowLeft className="w-4 h-4" />}>
                            Back
                          </Button>
                          <Button type="button" onClick={() => setStep(3)} icon={<ArrowRight className="w-4 h-4" />}>
                            Next: Contact Details
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <div>
                          <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 block mb-1">
                            Full Name *
                          </label>
                          <Input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Alex Mercer"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 block mb-1">
                            Work Email *
                          </label>
                          <Input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="alex@company.com"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 block mb-1">
                            Company Name
                          </label>
                          <Input
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="Sutryva Partner Inc."
                          />
                        </div>

                        <div>
                          <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 block mb-1">
                            Project Description
                          </label>
                          <Textarea
                            rows={3}
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            placeholder="Describe the application, users, or workflows you want to build..."
                          />
                        </div>

                        <div>
                          <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 block mb-1">
                            Attachment (if applicable)
                          </label>
                          <label
                            htmlFor="attachment"
                            className="flex items-center gap-2 h-11 w-full rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/60 px-4 text-sm text-slate-500 dark:text-slate-400 cursor-pointer hover:border-cyan-500 transition-colors"
                          >
                            <Paperclip className="w-4 h-4 shrink-0" />
                            <span className="truncate">{attachmentName || "Attach a brief, deck or reference file"}</span>
                          </label>
                          <input
                            id="attachment"
                            type="file"
                            className="hidden"
                            onChange={(e) => setAttachmentName(e.target.files?.[0]?.name ?? "")}
                          />
                        </div>

                        <label className="flex items-start gap-2.5 pt-2 cursor-pointer">
                          <input
                            type="checkbox"
                            required
                            checked={formData.consent}
                            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                            className="mt-0.5 w-4 h-4 rounded border-slate-300 dark:border-slate-700 accent-cyan-500 cursor-pointer"
                          />
                          <span className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            I agree to be contacted by Sutryva regarding this enquiry. *
                          </span>
                        </label>

                        <div className="pt-4 flex justify-between">
                          <Button type="button" variant="ghost" onClick={() => setStep(2)} icon={<ArrowLeft className="w-4 h-4" />}>
                            Back
                          </Button>
                          <Button
                            type="submit"
                            disabled={isSubmitting || !formData.consent}
                            icon={isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                          >
                            {isSubmitting ? "Sending..." : "Send Enquiry"}
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
