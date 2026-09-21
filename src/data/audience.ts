export interface TargetAudience {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  keyBenefits: string[];
  recommendedServices: string[];
  iconName: string;
}

export const AUDIENCE_DATA: TargetAudience[] = [
  {
    id: "startups",
    title: "Startups & Early-Stage Founders",
    subtitle: "Turn concepts into launch-ready MVPs with CTO-level execution speed.",
    description: "Build production-ready MVPs quickly with scalable architecture that impresses investors and early users.",
    keyBenefits: ["Rapid 4-8 week launch windows", "Scalable multi-tenant tech stack", "Cost-effective development roadmap"],
    recommendedServices: ["MVP Development", "SaaS Product Development", "UI/UX and Product Design"],
    iconName: "Rocket",
  },
  {
    id: "smbs",
    title: "Small & Medium Businesses",
    subtitle: "Modernize operations and digitize business workflows to scale faster.",
    description: "Transition legacy processes into automated digital solutions that reduce overhead and increase profit margins.",
    keyBenefits: ["Zero manual data entry", "Custom internal business tools", "Higher operational throughput"],
    recommendedServices: ["Business Automation", "Custom Software Development", "Cloud and Deployment"],
    iconName: "Building2",
  },
  {
    id: "product-teams",
    title: "Product & Engineering Teams",
    subtitle: "Augment engineering capacity with specialized AI & cloud expertise.",
    description: "Accelerate feature delivery, integrate complex AI pipelines, and eliminate technical debt alongside senior engineers.",
    keyBenefits: ["Seamless team integration", "Senior-level AI/LLM engineering", "Clean maintainable codebases"],
    recommendedServices: ["AI and Machine Intelligence", "API and Integrations", "Custom Software Development"],
    iconName: "Users",
  },
  {
    id: "enterprises-automation",
    title: "Enterprises Seeking Automation",
    subtitle: "Deploy autonomous AI agents and enterprise-grade system orchestration.",
    description: "Connect legacy databases and enterprise ERPs with intelligent agent swarms operating under strict governance.",
    keyBenefits: ["Enterprise security compliance", "High throughput event handling", "Autonomous workflow execution"],
    recommendedServices: ["AI Agents", "Business Automation", "Cloud and Deployment"],
    iconName: "Cpu",
  },
  {
    id: "educational-orgs",
    title: "Educational Organizations",
    subtitle: "Build intelligent learning platforms, analytics tools, and AI tutors.",
    description: "Create accessible, interactive digital tools for students, educators, and administrative personnel.",
    keyBenefits: ["Engaging student experiences", "Real-time performance analytics", "Scalable infrastructure for peak usage"],
    recommendedServices: ["Custom Software Development", "AI and Machine Intelligence", "Cloud and Deployment"],
    iconName: "GraduationCap",
  },
  {
    id: "custom-software-buyers",
    title: "Businesses Needing Custom Software",
    subtitle: "Bespoke digital platforms tailored precisely to your operating model.",
    description: "Ditch generic off-the-shelf software and build a custom solution engineered around your unique business advantage.",
    keyBenefits: ["100% tailored functionality", "Complete IP ownership", "Seamless third-party API integration"],
    recommendedServices: ["Custom Software Development", "API and Integrations", "Maintenance and Improvements"],
    iconName: "Wrench",
  },
];
