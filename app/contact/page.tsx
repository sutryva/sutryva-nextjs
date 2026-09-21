import ProjectPlannerForm from "@/src/features/contact/ProjectPlannerForm";
import ContactInfoPanel from "@/src/features/contact/ContactInfoPanel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Whether you are planning a new product, improving an existing system or exploring AI automation, we would love to understand your requirements. Get in touch with Sutryva Technologies Private Limited.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ProjectPlannerForm
        title="Let's start a"
        gradientTitle="conversation."
        description="Whether you are planning a new product, improving an existing system or exploring AI automation, we would love to understand your requirements."
        leftPanel={<ContactInfoPanel />}
      />
    </div>
  );
}
