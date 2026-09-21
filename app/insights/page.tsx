import SectionHeader from "@/src/components/ui/SectionHeader";
import { Badge } from "@/src/components/ui/badge";
import ContactCTA from "@/src/features/contact/ContactCTA";
import { Newspaper } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Articles, engineering notes and perspectives from Sutryva Technologies Private Limited on AI, SaaS, automation, software development, product design and startup technology.",
};

const TOPICS = ["AI", "SaaS", "Automation", "Software Development", "Product Design", "Startup Technology"];

export default function InsightsPage() {
  return (
    <div className="pt-20">
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            badgeText="Insights"
            title="Perspectives on Software,"
            gradientTitle="AI and Automation"
            description="Articles and engineering notes from the Sutryva team, organized around the topics below."
          />

          {/* Topic Taxonomy */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {TOPICS.map((topic) => (
              <Badge key={topic} variant="secondary">
                {topic}
              </Badge>
            ))}
          </div>

          {/* Article Grid (empty state) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-3 glass-panel rounded-3xl p-10 sm:p-16 border border-slate-200 dark:border-slate-800 text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-50 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mx-auto">
                <Newspaper className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">No articles published yet.</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-md mx-auto">
                We are preparing articles on AI, SaaS, automation, software development, product design and startup technology. Check back soon.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ContactCTA />
    </div>
  );
}
