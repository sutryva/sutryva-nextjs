import SectionHeader from "@/src/components/ui/SectionHeader";
import FAQAccordion from "@/src/features/faq/FAQAccordion";
import ContactCTA from "@/src/features/contact/ContactCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Frequently asked questions about working with Sutryva Technologies Private Limited.",
};

export default function FAQsPage() {
  return (
    <div className="pt-20">
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            badgeText="FAQs"
            title="Frequently Asked"
            gradientTitle="Questions"
            description="Answers to common questions about working with Sutryva."
          />
          <FAQAccordion />
        </div>
      </section>
      <ContactCTA />
    </div>
  );
}
