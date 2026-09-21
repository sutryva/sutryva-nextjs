import ComingSoonSection from "@/src/components/ui/ComingSoonSection";
import { Cookie } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy of Sutryva Technologies Private Limited.",
};

export default function CookiePolicyPage() {
  return (
    <div className="pt-20">
      <ComingSoonSection
        badgeText="Legal"
        title="Cookie"
        gradientTitle="Policy"
        icon={<Cookie className="w-7 h-7" />}
        heading="This page is being finalized."
        body="Our Cookie Policy will be published here once it is finalized. If you have questions in the meantime, please contact us."
        ctaLabel="Contact Us"
        ctaHref="/contact"
      />
    </div>
  );
}
