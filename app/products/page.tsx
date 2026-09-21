import ProductDirectionsSection from "@/src/features/products/ProductDirectionsSection";
import ProjectPlannerForm from "@/src/features/contact/ProjectPlannerForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Architecture Directions",
  description:
    "Discover Sutryva's future product directions and architectural frameworks: Sutryva AI, Sutryva Flow, Sutryva Agents, Sutryva Studio, Sutryva API, and Sutryva Cloud.",
};

export default function ProductsPage() {
  return (
    <div className="pt-20">
      <ProductDirectionsSection />
      <ProjectPlannerForm />
    </div>
  );
}
