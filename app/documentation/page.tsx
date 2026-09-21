import ComingSoonSection from "@/src/components/ui/ComingSoonSection";
import { BookOpen } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Technical documentation and guides from Sutryva Technologies Private Limited.",
};

export default function DocumentationPage() {
  return (
    <div className="pt-20">
      <ComingSoonSection
        badgeText="Documentation"
        title="Developer"
        gradientTitle="Documentation"
        description="Guides and technical documentation for working with Sutryva."
        icon={<BookOpen className="w-7 h-7" />}
        heading="Documentation is coming soon."
        body="We are preparing technical guides and reference material. Check back soon, or reach out if you need help now."
        ctaLabel="Contact Us"
        ctaHref="/contact"
      />
    </div>
  );
}
