export interface PhilosophyPillarData {
  id: string;
  pillarNumber: string;
  name: string;
  description: string;
  iconName: "BrainCircuit" | "Network" | "Zap";
  accentColor: "cyan" | "blue" | "purple";
}

export interface PhilosophyConfig {
  badgeText: string;
  title: string;
  gradientTitle: string;
  description: string;
  pillars: PhilosophyPillarData[];
}

export const PHILOSOPHY_CONFIG: PhilosophyConfig = {
  badgeText: "Our Philosophy",
  title: "Think.",
  gradientTitle: "Connect. Act.",
  description: "How our senior engineering team deconstructs complex business challenges into production-ready software systems.",
  pillars: [
    {
      id: "think",
      pillarNumber: "01",
      name: "THINK",
      description: "Understand challenges and discover intelligent possibilities.",
      iconName: "BrainCircuit",
      accentColor: "cyan",
    },
    {
      id: "connect",
      pillarNumber: "02",
      name: "CONNECT",
      description: "Bring people, systems, data and workflows together.",
      iconName: "Network",
      accentColor: "blue",
    },
    {
      id: "act",
      pillarNumber: "03",
      name: "ACT",
      description: "Turn ideas into reliable software and measurable outcomes.",
      iconName: "Zap",
      accentColor: "purple",
    },
  ],
};
