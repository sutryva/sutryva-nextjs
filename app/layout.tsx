import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://sutryva.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sutryva Technologies | Full-Stack & AI SaaS Engineering Studio",
    template: "%s | Sutryva Technologies",
  },
  description:
    "Sutryva Technologies builds production-grade, AI-integrated SaaS systems for early-stage founders — MERN, Next.js, and MCP-native AI, shipped with CTO-level ownership from architecture to scale.",
  keywords: [
    "Sutryva",
    "Sutryva Technologies",
    "AI SaaS development",
    "full stack development India",
    "MERN stack developer",
    "Next.js development",
    "MCP AI integration",
    "startup CTO service",
    "software development studio",
  ],
  authors: [{ name: "Sutryva Technologies Pvt Ltd" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Sutryva Technologies",
    title: "Sutryva Technologies | Full-Stack & AI SaaS Engineering Studio",
    description:
      "Production-grade, AI-integrated SaaS systems for early-stage founders — built with CTO-level ownership from architecture to scale.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sutryva Technologies | Full-Stack & AI SaaS Engineering Studio",
    description: "Production-grade, AI-integrated SaaS systems for early-stage founders.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sutryva Technologies Pvt Ltd",
  url: siteUrl,
  description:
    "Full-stack engineering and AI-integration studio building production-grade SaaS systems for early-stage founders.",
  founder: {
    "@type": "Person",
    name: "Vikash Kumar",
  },
  sameAs: [
    "https://www.linkedin.com/company/sutryva",
    "https://github.com/sutryva",
    "https://x.com/sutryva",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
