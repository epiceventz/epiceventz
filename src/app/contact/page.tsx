import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Epic Eventz to request a quote for event production, LED walls, audio, lighting, live streaming, photography, and videography.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-radial-stage pb-16 pt-36">
        <div className="section-shell">
          <p className="eyebrow mb-4">Contact</p>
          <h1 className="max-w-4xl font-[var(--font-display)] text-5xl font-bold leading-tight text-white md:text-6xl">
            Let’s shape the production plan for your next event.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
            Share the essentials and Epic Eventz will respond with the next steps for planning, scope, and production support.
          </p>
        </div>
      </section>

      <section className="bg-carbon py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[.7fr_1fr]">
          <aside>
            <h2 className="font-[var(--font-display)] text-3xl font-bold text-white">Get a Quote</h2>
            <p className="mt-4 text-base leading-7 text-white/64">
              The more context you can share, the faster we can recommend the right crew, systems, and production path.
            </p>
            <div className="mt-8 grid gap-4">
              <a className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.045] p-4 text-white/70 transition hover:border-gold/45 hover:text-gold" href={`mailto:${siteConfig.email}`}>
                <Mail size={20} /> {siteConfig.email}
              </a>
              <a className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.045] p-4 text-white/70 transition hover:border-gold/45 hover:text-gold" href={`tel:${siteConfig.phone}`}>
                <Phone size={20} /> {siteConfig.phone}
              </a>
              <div className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.045] p-4 text-white/70">
                <MapPin size={20} /> Serving events nationwide
              </div>
            </div>
          </aside>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
