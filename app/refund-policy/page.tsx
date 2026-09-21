import ComingSoonSection from "@/src/components/ui/ComingSoonSection";
import { Receipt } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Refund Policy of Sutryva Technologies Private Limited.",
};

export default function RefundPolicyPage() {
  return (
    <div className="pt-20">
      <ComingSoonSection
        badgeText="Legal"
        title="Refund"
        gradientTitle="Policy"
        icon={<Receipt className="w-7 h-7" />}
        heading="This page is being finalized."
        body="Our Refund Policy will be published here once it is finalized. If you have questions about an existing engagement, please contact us."
        ctaLabel="Contact Us"
        ctaHref="/contact"
      />
    </div>
  );
}
