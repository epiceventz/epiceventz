import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { SectionHeader } from "@/components/SectionHeader";
import { values } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Learn about Epic Eventz mission, vision, values, technology-driven production approach, customer focus, and reliable event execution.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <section className="bg-radial-stage pb-16 pt-36">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_.78fr] lg:items-center">
          <div>
            <p className="eyebrow mb-4">About Epic Eventz</p>
            <h1 className="max-w-4xl font-[var(--font-display)] text-5xl font-bold leading-tight text-white md:text-6xl">
              Production expertise for moments that need to land perfectly.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
              Epic Eventz brings together technical systems, creative direction, and disciplined production management to help organizations host standout events.
            </p>
          </div>
          <div className="relative min-h-80 overflow-hidden rounded-lg border border-white/10 shadow-glow">
            <Image
              src="/images/team-production.jpg"
              alt="Abstract Epic Eventz production team silhouettes in cinematic blue and gold stage lighting"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-carbon py-20">
        <div className="section-shell grid gap-5 md:grid-cols-2">
          <article className="rounded-lg border border-white/10 bg-white/[0.045] p-7">
            <p className="eyebrow mb-3">Mission</p>
            <h2 className="font-[var(--font-display)] text-3xl font-bold text-white">
              Create extraordinary event experiences through technology, creativity, and flawless execution.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/64">
              We help teams turn important gatherings into polished experiences that connect audiences, elevate brands, and support meaningful outcomes.
            </p>
          </article>
          <article className="rounded-lg border border-white/10 bg-white/[0.045] p-7">
            <p className="eyebrow mb-3">Vision</p>
            <h2 className="font-[var(--font-display)] text-3xl font-bold text-white">
              Be the trusted production partner for organizations building premium live and hybrid events.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/64">
              We envision event environments where every guest, speaker, performer, sponsor, and remote attendee feels fully considered.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-[#07090d] py-20">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Values"
            title="Clear priorities guide every production."
            copy="The best event teams combine creativity with operational discipline. Epic Eventz is built around both."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <article key={value.title} className="rounded-lg border border-white/10 bg-white/[0.045] p-6">
                  <Icon className="mb-5 text-gold" size={30} />
                  <h3 className="font-[var(--font-display)] text-xl font-bold text-white">{value.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/62">{value.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection title="Bring a production partner into the planning process early." />
    </>
  );
}
