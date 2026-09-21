import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import { SITE_CONFIG } from "@/src/data";
import { ThemeProvider } from "@/src/context/ThemeContext";

const siteUrl = "https://sutryva.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sutryva Technologies | AI Software, SaaS and Automation Solutions",
    template: "%s | Sutryva Technologies Private Limited",
  },
  description:
    "Sutryva is an AI-native software and technology company building intelligent SaaS products, automation systems and custom digital solutions for modern businesses.",
  keywords: [
    "Sutryva",
    "Sutryva Technologies",
    "AI software development",
    "SaaS development",
    "AI automation",
    "AI agents",
    "custom software development",
    "business process automation",
    "MVP development",
    "digital solutions",
    "software development company",
  ],
  authors: [{ name: SITE_CONFIG.legalName }],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: SITE_CONFIG.legalName,
    title: "Sutryva — Intelligence. Connected.",
    description: "Building intelligent software, AI-powered automation and digital solutions that turn ideas into impact.",
    images: [
      {
        url: "/images/sutryva-banner.png",
        width: 1024,
        height: 381,
        alt: "Sutryva AI software solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sutryva — Intelligence. Connected.",
    description: "Building intelligent software, AI-powered automation and digital solutions that turn ideas into impact.",
    images: [
      {
        url: "/images/sutryva-banner.png",
        alt: "Sutryva AI software solutions",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  name: SITE_CONFIG.legalName,
  alternateName: SITE_CONFIG.name,
  url: siteUrl,
  logo: `${siteUrl}/images/sutryva-logo.png`,
  image: `${siteUrl}/images/sutryva-banner.png`,
  description: SITE_CONFIG.companyDescription,
  slogan: SITE_CONFIG.primaryTagline,
  knowsAbout: [
    "AI-powered software development",
    "SaaS product development",
    "Business process automation",
    "AI agents and intelligent assistants",
    "Custom web application development",
    "API and system integrations",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth dark" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
