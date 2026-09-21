import ComingSoonSection from "@/src/components/ui/ComingSoonSection";
import { SITE_CONFIG } from "@/src/data";
import { LifeBuoy } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
  description: "Get support for an existing project or product from Sutryva Technologies Private Limited.",
};

export default function SupportPage() {
  return (
    <div className="pt-20">
      <ComingSoonSection
        badgeText="Support"
        title="Customer"
        gradientTitle="Support"
        description="Get help with an existing project or product."
        icon={<LifeBuoy className="w-7 h-7" />}
        heading="Need help?"
        body={`Our support team is here to help with any questions about an existing project or product. Reach us at ${SITE_CONFIG.contact.supportEmail} and we'll get back to you soon.`}
        ctaLabel="Email Support"
        ctaHref={`mailto:${SITE_CONFIG.contact.supportEmail}`}
      />
    </div>
  );
}
