"use client";

import HeroSection from "@/src/features/hero/HeroSection";
import TrustStatement from "@/src/features/trust/TrustStatement";
import PhilosophySection from "@/src/features/philosophy/PhilosophySection";
import ServicesGrid from "@/src/features/services/ServicesGrid";
import WhySection from "@/src/features/why/WhySection";
import ProcessSection from "@/src/features/process/ProcessSection";
import ProductCategoriesSection from "@/src/features/products/ProductCategoriesSection";
import PortfolioShowcase from "@/src/features/portfolio/PortfolioShowcase";
import AboutPreviewSection from "@/src/features/about/AboutPreviewSection";
import ContactCTA from "@/src/features/contact/ContactCTA";
import { TracingBeam } from "@/src/components/ui/tracing-beam";

const HOMEPAGE_SERVICE_IDS = [
  "ai-machine-intelligence",
  "saas-product-development",
  "business-automation",
  "ai-agents",
  "custom-software-development",
  "api-integrations",
  "mvp-development",
  "ui-ux-product-design",
];

export default function Home() {
  return (
    <div className="space-y-0">
      <HeroSection />
      <TracingBeam className="px-4">
        <TrustStatement />
        <PhilosophySection />
        <ServicesGrid
          ids={HOMEPAGE_SERVICE_IDS}
          title="Solutions built around"
          gradientTitle="your business."
          description="A look at how Sutryva helps teams design, develop and improve digital products."
          showViewAll
        />
        <WhySection />
        <ProcessSection />
        <ProductCategoriesSection />
        <PortfolioShowcase />
        <AboutPreviewSection />
        <ContactCTA />
      </TracingBeam>
    </div>
  );
}
