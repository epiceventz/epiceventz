import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PortfolioCard } from "@/components/PortfolioCard";
import { SectionHeader } from "@/components/SectionHeader";
import { portfolioProjects } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Portfolio",
  description:
    "View sample Epic Eventz projects across corporate summits, cultural festivals, live concerts, awards galas, and hybrid conferences.",
  path: "/portfolio"
});

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-radial-stage pb-16 pt-36">
        <div className="section-shell">
          <p className="eyebrow mb-4">Portfolio</p>
          <h1 className="max-w-4xl font-[var(--font-display)] text-5xl font-bold leading-tight text-white md:text-6xl">
            Event experiences with scale, clarity, and atmosphere.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
            Explore representative projects showing how Epic Eventz supports different audiences, venues, and production goals.
          </p>
        </div>
      </section>

      <section className="bg-carbon py-20">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Sample projects"
            title="Production work across corporate, cultural, entertainment, nonprofit, and hybrid formats."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {portfolioProjects.map((project) => (
              <PortfolioCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
