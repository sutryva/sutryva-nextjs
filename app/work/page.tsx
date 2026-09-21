import PortfolioShowcase from "@/src/features/portfolio/PortfolioShowcase";
import ProjectPlannerForm from "@/src/features/contact/ProjectPlannerForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies & Work",
  description:
    "Review proof of work, client case studies, impact metrics, and software solutions built by Sutryva Technologies Private Limited.",
};

export default function WorkPage() {
  return (
    <div className="pt-20">
      <PortfolioShowcase />
      <ProjectPlannerForm />
    </div>
  );
}
