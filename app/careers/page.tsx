import ComingSoonSection from "@/src/components/ui/ComingSoonSection";
import { Users2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Careers and open roles at Sutryva Technologies Private Limited.",
};

export default function CareersPage() {
  return (
    <div className="pt-20">
      <ComingSoonSection
        badgeText="Careers"
        title="Build the future"
        gradientTitle="with Sutryva."
        description="We are building a technology company focused on intelligent software, automation and digital products."
        icon={<Users2 className="w-7 h-7" />}
        heading="No open positions at the moment."
        body="Please check back soon. If you'd like to introduce yourself in the meantime, feel free to reach out."
        ctaLabel="Get in Touch"
        ctaHref="/contact"
      />
    </div>
  );
}
