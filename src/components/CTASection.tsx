import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";

type CTASectionProps = {
  title?: string;
  copy?: string;
};

export function CTASection({
  title = "Ready to build an event that feels unforgettable?",
  copy = "Tell us what you are planning and Epic Eventz will help shape the production, technology, and execution plan."
}: CTASectionProps) {
  return (
    <section className="bg-radial-stage py-20">
      <div className="section-shell">
        <div className="grid gap-8 rounded-lg border border-white/12 bg-carbon/70 p-7 shadow-glow md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <p className="eyebrow mb-3">Start the conversation</p>
            <h2 className="font-[var(--font-display)] text-3xl font-bold leading-tight text-white md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/66">{copy}</p>
          </div>
          <ButtonLink href="/contact" className="w-full md:w-auto">
            Get a Quote <ArrowRight className="ml-2" size={18} />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
