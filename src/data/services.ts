export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "ai-machine-intelligence",
    number: "01",
    title: "AI and Machine Intelligence",
    description: "Build AI-powered features, intelligent assistants, recommendation systems, document processing tools and AI-enabled workflows.",
    icon: "BrainCircuit",
  },
  {
    id: "saas-product-development",
    number: "02",
    title: "SaaS Product Development",
    description: "Design and develop secure, scalable and user-friendly SaaS platforms for modern businesses.",
    icon: "Layers",
  },
  {
    id: "business-automation",
    number: "03",
    title: "Business Automation",
    description: "Automate repetitive processes, connect tools and reduce manual work through intelligent workflows.",
    icon: "Workflow",
  },
  {
    id: "custom-software-development",
    number: "04",
    title: "Custom Software Development",
    description: "Create custom web applications, dashboards, portals and internal business systems.",
    icon: "Code2",
  },
  {
    id: "ai-agents",
    number: "05",
    title: "AI Agents",
    description: "Develop task-oriented AI agents that can understand instructions, use tools and support business workflows.",
    icon: "Bot",
  },
  {
    id: "api-integrations",
    number: "06",
    title: "API and Integrations",
    description: "Connect platforms, services and business systems through reliable APIs and integrations.",
    icon: "Network",
  },
  {
    id: "mvp-development",
    number: "07",
    title: "MVP Development",
    description: "Turn early ideas into functional MVPs that can be tested with real users and improved through feedback.",
    icon: "Rocket",
  },
  {
    id: "ui-ux-product-design",
    number: "08",
    title: "UI/UX and Product Design",
    description: "Create clean, accessible and conversion-focused interfaces for web applications and digital products.",
    icon: "Palette",
  },
  {
    id: "cloud-deployment",
    number: "09",
    title: "Cloud and Deployment",
    description: "Prepare software for reliable hosting, deployment, monitoring and future scalability.",
    icon: "Cloud",
  },
  {
    id: "maintenance-improvements",
    number: "10",
    title: "Maintenance and Improvements",
    description: "Improve existing software through bug fixing, performance optimization, new features and technical support.",
    icon: "Wrench",
  },
];
