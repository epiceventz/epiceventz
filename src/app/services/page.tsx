import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { SectionHeader } from "@/components/SectionHeader";
import { services } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Services",
  description:
    "Explore Epic Eventz services including event production, LED walls, audio solutions, lighting design, live streaming, and photography and videography.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <>
      <section className="bg-radial-stage pb-16 pt-36">
        <div className="section-shell">
          <p className="eyebrow mb-4">Services</p>
          <h1 className="max-w-4xl font-[var(--font-display)] text-5xl font-bold leading-tight text-white md:text-6xl">
            Technical production services with premium polish.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
            Epic Eventz supports the full event lifecycle, from concept and technical planning to show-day execution and content capture.
          </p>
        </div>
      </section>

      <section className="bg-carbon py-20">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Capabilities"
            title="Choose focused support or complete production management."
          />
          <div className="grid gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  id={service.slug}
                  key={service.title}
                  className="grid scroll-mt-28 overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] lg:grid-cols-2"
                >
                  <div className={`relative min-h-72 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-carbon/72 to-transparent" />
                  </div>
                  <div className="p-6 md:p-9">
                    <div className="mb-5 grid size-12 place-items-center rounded-md border border-electric/35 bg-electric/12 text-electric">
                      <Icon size={24} />
                    </div>
                    <h2 className="font-[var(--font-display)] text-3xl font-bold text-white">{service.title}</h2>
                    <p className="mt-4 text-base leading-7 text-white/68">{service.description}</p>

                    <div className="mt-7 grid gap-6 md:grid-cols-2">
                      <div>
                        <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-gold">Benefits</h3>
                        <ul className="grid gap-3">
                          {service.benefits.map((benefit) => (
                            <li key={benefit} className="flex gap-3 text-sm text-white/66">
                              <Check className="mt-0.5 shrink-0 text-gold" size={17} />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-gold">Use cases</h3>
                        <div className="flex flex-wrap gap-2">
                          {service.useCases.map((useCase) => (
                            <span key={useCase} className="rounded-md border border-white/10 bg-white/6 px-3 py-1 text-xs text-white/64">
                              {useCase}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <ButtonLink href="/contact" className="mt-8">
                      Request this service <ArrowRight className="ml-2" size={18} />
                    </ButtonLink>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection title="Need a complete production package?" />
    </>
  );
}
