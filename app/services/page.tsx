import ServicesGrid from "@/src/features/services/ServicesGrid";
import ProjectPlannerForm from "@/src/features/contact/ProjectPlannerForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We Build",
  description:
    "From early-stage ideas to business-critical systems, Sutryva helps teams design, develop and improve digital products across AI, SaaS, automation, custom software and more.",
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <ServicesGrid />
      <ProjectPlannerForm />
    </div>
  );
}
