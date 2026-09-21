export interface SiteConfig {
  name: string;
  legalName: string;
  category: string;
  primaryTagline: string;
  secondaryTagline: string;
  brandPromise: string;
  shortDescription: string;
  companyDescription: string;
  contact: {
    email: string;
    officialEmail: string;
    supportEmail: string;
    location: string;
    status: string;
  };
  navLinks: Array<{ label: string; href: string }>;
  coreValues: Array<{ title: string; icon: string; color: string }>;
}

export const SITE_CONFIG: SiteConfig = {
  name: "Sutryva",
  legalName: "Sutryva Technologies Private Limited",
  category: "AI Software Company, SaaS, Software Development, Automation, Digital Products and Technology Solutions",
  primaryTagline: "Intelligence. Connected.",
  secondaryTagline: "Ideas to Impact.",
  brandPromise: "Building intelligent software, AI-powered automation and digital solutions.",
  shortDescription:
    "Sutryva builds intelligent software, AI-powered automation and digital solutions that connect people, products and possibilities.",
  companyDescription:
    "Sutryva is an AI-native software and technology company building intelligent digital products, SaaS platforms, automation systems and scalable software solutions for modern businesses. We connect ideas, technology and workflows to help businesses operate smarter, move faster and create measurable impact.",
  contact: {
    email: "hello@sutryva.com",
    officialEmail: "vikash@sutryva.com",
    supportEmail: "support@sutryva.com",
    location: "India & Worldwide Remote",
    status: "Accepting Q3/Q4 Project Inquiries",
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Work", href: "/work" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
  coreValues: [
    { title: "Innovate", icon: "Lightbulb", color: "text-cyan-400" },
    { title: "Develop", icon: "Code2", color: "text-blue-400" },
    { title: "Scale", icon: "TrendingUp", color: "text-purple-400" },
    { title: "Together", icon: "Users", color: "text-pink-400" },
  ],
};
