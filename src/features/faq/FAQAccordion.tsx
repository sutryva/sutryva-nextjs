"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What does Sutryva do?",
    answer:
      "Sutryva is an AI-native software and technology company. We build intelligent digital products, SaaS platforms, automation systems and custom software solutions for businesses.",
  },
  {
    question: "What services do you provide?",
    answer:
      "Our services include AI and machine intelligence, SaaS product development, business automation, custom software development, AI agents, API and integrations, MVP development, UI/UX and product design, cloud and deployment, and maintenance and improvements. You can see the full list on our Services page.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes. We work with early-stage founders, growing businesses and enterprise teams, and tailor our approach to the stage and goals of each project.",
  },
  {
    question: "Can you build an MVP?",
    answer:
      "Yes. MVP Development is one of our core services. We help turn early ideas into functional products that can be tested with real users and improved through feedback.",
  },
  {
    question: "Do you develop AI agents?",
    answer:
      "Yes. We develop task-oriented AI agents that can understand instructions, use tools and support business workflows.",
  },
  {
    question: "Can you integrate existing software?",
    answer:
      "Yes. Our API and Integrations service focuses on connecting platforms, services and business systems through reliable APIs and integrations.",
  },
  {
    question: "How can someone contact Sutryva?",
    answer:
      "You can reach us through the form on our Contact page, or email us directly. Our contact details are listed on the Contact page.",
  },
  {
    question: "Do you offer maintenance and support?",
    answer:
      "Yes. Maintenance and Improvements is one of our services, covering bug fixing, performance optimization, new features and technical support.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {FAQ_ITEMS.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="glass-card rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                {item.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200 dark:border-slate-800 pt-4">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
