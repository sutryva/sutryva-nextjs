import ComingSoonSection from "@/src/components/ui/ComingSoonSection";
import { AlertTriangle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Disclaimer of Sutryva Technologies Private Limited.",
};

export default function DisclaimerPage() {
  return (
    <div className="pt-20">
      <ComingSoonSection
        badgeText="Legal"
        title="Disclaimer"
        icon={<AlertTriangle className="w-7 h-7" />}
        heading="This page is being finalized."
        body="Our Disclaimer will be published here once it is finalized. If you have questions in the meantime, please contact us."
        ctaLabel="Contact Us"
        ctaHref="/contact"
      />
    </div>
  );
}
