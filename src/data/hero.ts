export interface HeroData {
  statusBadge: string;
  titlePrimary: string;
  titleGradient: string;
  alternativeHeading: string;
  description: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  developerMetrics: Array<{ label: string; color: string }>;
  brandBannerTitle: string;
  brandBannerVersion: string;
  marqueeTechItems: Array<{ name: string; tag: string }>;
}

export const HERO_DATA: HeroData = {
  statusBadge: "Full-Stack & AI Systems Engineering Studio",
  titlePrimary: "Intelligence.",
  titleGradient: "Connected.",
  alternativeHeading: "Turning Ideas into Intelligent Digital Solutions.",
  description:
    "Sutryva builds AI-powered software, SaaS products and automation solutions that help businesses think smarter, connect better and act faster.",
  ctaPrimary: { label: "Start a Project", href: "/contact" },
  ctaSecondary: { label: "Explore Our Services", href: "/services" },
  developerMetrics: [
    { label: "Modern Engineering Practices", color: "text-emerald-400" },
    { label: "Strict TypeScript Codebases", color: "text-cyan-400" },
    { label: "MCP-Ready AI Agents", color: "text-purple-400" },
  ],
  brandBannerTitle: "Official Brand System",
  brandBannerVersion: "v2.4 Production",
  marqueeTechItems: [
    { name: "Next.js 16 (App Router)", tag: "Frontend Framework" },
    { name: "TypeScript 5.5", tag: "Strict Type Safety" },
    { name: "Model Context Protocol (MCP)", tag: "AI Agent Standard" },
    { name: "Python 3.12 & PyTorch", tag: "ML & Semantic Search" },
    { name: "Node.js & Fastify", tag: "High Throughput APIs" },
    { name: "PostgreSQL & Prisma", tag: "Relational Storage" },
    { name: "Temporal.io & BullMQ", tag: "Durable Workflows" },
    { name: "Docker & Kubernetes", tag: "Cloud Orchestration" },
  ],
};
