import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { PortfolioCard } from "@/components/PortfolioCard";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { Testimonials } from "@/components/Testimonials";
import { createMetadata } from "@/lib/metadata";
import { industries, portfolioProjects, services, trustedBy, whyChoose } from "@/data/site";

export const metadata: Metadata = createMetadata({
  title: "Premium Event Production",
  description:
    "Epic Eventz creates cinematic corporate events, conferences, concerts, cultural programs, live streams, and immersive production experiences."
});

export default function Home() {
  return (
    <>
      <Hero />

      <section className="border-y border-white/10 bg-[#07090d] py-10">
        <div className="section-shell">
          <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.16em] text-white/45">
            Trusted by ambitious organizations
          </p>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {trustedBy.map((logo) => (
              <div
                key={logo}
                className="grid min-h-16 place-items-center rounded-md border border-white/10 bg-white/[0.045] px-4 text-center font-[var(--font-display)] text-sm font-bold text-white/58"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-carbon py-20">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Services"
            title="Production services designed for rooms, stages, streams, and audiences."
            copy="Choose individual technical services or bring Epic Eventz in as your complete production partner."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07090d] py-20">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Why choose us"
            title="A technical team with a producer's mindset."
            copy="Every cue, screen, microphone, light, and camera angle is planned around the experience your guests should feel."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {whyChoose.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="rounded-lg border border-white/10 bg-white/[0.045] p-5">
                  <Icon className="mb-5 text-electric" size={28} />
                  <h3 className="font-[var(--font-display)] text-lg font-bold text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">{feature.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-carbon py-20">
        <div className="section-shell">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Featured portfolio"
              title="Selected sample productions."
              copy="A glimpse at the event formats and production challenges Epic Eventz is built to support."
            />
            <Link
              href="/portfolio"
              className="focus-ring inline-flex min-h-11 items-center rounded-md border border-white/15 px-4 text-sm font-bold text-white/76 transition hover:border-gold/60 hover:text-gold"
            >
              View all projects <ArrowRight className="ml-2" size={17} />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {portfolioProjects.slice(0, 3).map((project) => (
              <PortfolioCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07090d] py-20">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Industries served"
            title="Built for the diverse ways people gather."
            align="center"
          />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <div key={industry.title} className="rounded-lg border border-white/10 bg-white/[0.045] p-5 text-center">
                  <Icon className="mx-auto text-gold" size={28} />
                  <p className="mt-4 font-bold text-white">{industry.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="bg-carbon py-20">
        <div className="section-shell grid gap-5 md:grid-cols-3">
          {["Discovery", "Design", "Delivery"].map((step, index) => (
            <article key={step} className="rounded-lg border border-white/10 bg-white/[0.045] p-6">
              <div className="mb-6 flex items-center justify-between">
                <span className="font-[var(--font-display)] text-4xl font-bold text-white/15">0{index + 1}</span>
                <CheckCircle2 className="text-electric" size={26} />
              </div>
              <h2 className="font-[var(--font-display)] text-xl font-bold text-white">{step}</h2>
              <p className="mt-3 text-sm leading-6 text-white/62">
                {index === 0
                  ? "We learn the audience, event goals, venue, schedule, and technical requirements."
                  : index === 1
                    ? "We shape the production plan, crew, equipment, content flow, and guest experience."
                    : "We execute with clear communication, on-site discipline, and post-event content support."}
              </p>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
