import AboutCompanySection from "@/src/features/about/AboutCompanySection";
import PhilosophySection from "@/src/features/philosophy/PhilosophySection";
import AudienceSection from "@/src/features/audience/AudienceSection";
import ProjectPlannerForm from "@/src/features/contact/ProjectPlannerForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sutryva",
  description:
    "Sutryva is an AI-native software and technology company focused on building intelligent digital products, SaaS platforms, automation systems and custom software solutions.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutCompanySection />
      <PhilosophySection />
      <AudienceSection />
      <ProjectPlannerForm />
    </div>
  );
}
