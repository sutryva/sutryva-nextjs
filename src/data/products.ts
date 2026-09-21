export interface ProductDirection {
  id: string;
  name: string;
  categoryTag: string;
  tagline: string;
  description: string;
  badge: "Product Direction" | "Future Offering" | "Core Architecture";
  capabilities: string[];
  techFocus: string[];
  targetUseCase: string;
  iconName: string;
  accentColor: string;
}

export const PRODUCT_DIRECTIONS: ProductDirection[] = [
  {
    id: "sutryva-ai",
    name: "Sutryva AI",
    categoryTag: "Core Intelligence Layer",
    tagline: "Custom Artificial Intelligence Models & Semantic Engines",
    description: "An architectural foundation for deploying domain-adapted LLMs, RAG knowledge stores, and contextual reasoning engines tailored to enterprise data.",
    badge: "Product Direction",
    capabilities: [
      "Enterprise Retrieval-Augmented Generation (RAG)",
      "Contextual Vector Search Pipelines",
      "Fine-tuned Open & Proprietary LLM Wrappers",
      "Real-time Multimodal Analysis",
    ],
    techFocus: ["Vector Embeddings", "LangChain / LlamaIndex", "Semantic Caching", "Model Fine-tuning"],
    targetUseCase: "Empowering business applications with domain-specific reasoning and context memory.",
    iconName: "Sparkles",
    accentColor: "from-cyan-500 to-blue-600",
  },
  {
    id: "sutryva-flow",
    name: "Sutryva Flow",
    categoryTag: "Process & Workflow Engine",
    tagline: "Intelligent Business Automation & Pipeline Orchestration",
    description: "A resilient workflow orchestration direction designed to automate multi-step business operations, background event queues, and error-tolerant data tasks.",
    badge: "Product Direction",
    capabilities: [
      "Visual & Code-based Workflow Builder",
      "Durable State Machine Execution",
      "Event-Driven Trigger Architecture",
      "Real-time Telemetry & Process Monitoring",
    ],
    techFocus: ["Event Queues", "Temporal / State Machines", "Webhooks Infrastructure", "JSON Schema Validation"],
    targetUseCase: "Eliminating manual data reentry across enterprise departments and legacy tools.",
    iconName: "GitBranch",
    accentColor: "from-blue-600 to-indigo-600",
  },
  {
    id: "sutryva-agents",
    name: "Sutryva Agents",
    categoryTag: "Autonomous Agent System",
    tagline: "Self-Directed Software Agents that Think and Execute",
    description: "A direction focused on goal-seeking autonomous agents capable of dynamic tool calling, system interactions, context synthesis, and goal completion under human guardrails.",
    badge: "Product Direction",
    capabilities: [
      "Model Context Protocol (MCP) Integration",
      "Multi-Agent Collaborative Swarms",
      "Interactive Browser & API Tool Execution",
      "Human-in-the-Loop Feedback Controls",
    ],
    techFocus: ["MCP Architecture", "LangGraph", "Autonomous Agent Frameworks", "Tool Schema Adapters"],
    targetUseCase: "Automating complex research, customer support escalations, and operational decisions.",
    iconName: "Bot",
    accentColor: "from-indigo-600 to-purple-600",
  },
  {
    id: "sutryva-studio",
    name: "Sutryva Studio",
    categoryTag: "Rapid Application Platform",
    tagline: "Accelerated Custom Web & SaaS Development Environment",
    description: "A modular, component-first development environment engineered to rapidly assemble full-stack web applications, dashboards, and internal business tools.",
    badge: "Product Direction",
    capabilities: [
      "Modular SaaS Component Blueprints",
      "Pre-built Authentication & RBAC Modules",
      "Automated Database Schema Generator",
      "Instant Design Token Synchronization",
    ],
    techFocus: ["Next.js App Router", "TypeScript", "Tailwind CSS", "Design Systems"],
    targetUseCase: "Slashing development timelines for early-stage startup MVPs and enterprise tools.",
    iconName: "AppWindow",
    accentColor: "from-purple-600 to-pink-600",
  },
  {
    id: "sutryva-api",
    name: "Sutryva API",
    categoryTag: "Universal Gateway",
    tagline: "Unified Integration & Data Interoperability Layer",
    description: "A high-performance API ecosystem connecting external software services, custom data sources, AI models, and legacy databases into a clean interface.",
    badge: "Future Offering",
    capabilities: [
      "Unified Schema Transformation",
      "High-Throughput Rate Limiting & Auth",
      "Real-time GraphQL & REST Adapter Layer",
      "Developer Sandbox & SDK Generator",
    ],
    techFocus: ["REST / GraphQL / gRPC", "API Gateway Architecture", "OpenAPI Standards", "WebSockets"],
    targetUseCase: "Connecting disparate business software into a single unified API pipeline.",
    iconName: "Network",
    accentColor: "from-cyan-400 to-indigo-500",
  },
  {
    id: "sutryva-cloud",
    name: "Sutryva Cloud",
    categoryTag: "Infrastructure & Hosting Direction",
    tagline: "Scalable, High-Availability Cloud Foundation",
    description: "A cloud deployment pattern engineered for modern AI workloads, serverless execution, container management, and continuous global uptime.",
    badge: "Future Offering",
    capabilities: [
      "Automated Multi-Region Deployment",
      "Zero-Downtime CI/CD Blue/Green Pipelines",
      "Edge Caching & Global CDN Routing",
      "Encrypted At-Rest & In-Transit Data Vaults",
    ],
    techFocus: ["AWS / Docker / Kubernetes", "Edge Computing", "Terraform Infrastructure", "Cloudflare"],
    targetUseCase: "Hosting mission-critical SaaS applications with enterprise security compliance.",
    iconName: "Cloud",
    accentColor: "from-blue-500 to-cyan-400",
  },
];
