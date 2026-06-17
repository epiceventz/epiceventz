import Image from "next/image";
import { ArrowRight, PlayCircle } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[92vh] items-end overflow-hidden pt-28">
      <Image
        src="/images/hero-event.jpg"
        alt="Professional conference audience facing a stage with a large presentation screen and production lighting"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-carbon/76 via-carbon/54 to-carbon" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,6,8,.9)_0%,rgba(5,6,8,.62)_45%,rgba(5,6,8,.28)_100%)]" />

      <div className="section-shell relative z-10 grid gap-10 pb-16 pt-20 lg:grid-cols-[1.08fr_.7fr] lg:items-end">
        <div className="animate-rise max-w-4xl">
          <p className="eyebrow mb-5">Epic Eventz</p>
          <h1 className="font-[var(--font-display)] text-5xl font-bold leading-[1.03] text-white sm:text-6xl lg:text-7xl">
            Creating Extraordinary Event Experiences
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">
            From corporate conferences and cultural celebrations to concerts and festivals, Epic Eventz delivers immersive event production powered by technology, creativity, and flawless execution.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">
              Get a Quote <ArrowRight className="ml-2" size={18} />
            </ButtonLink>
            <ButtonLink href="/portfolio" variant="secondary">
              View Portfolio
            </ButtonLink>
          </div>
        </div>

        <div className="glass-panel rounded-lg p-5">
          <div className="flex items-center gap-3 text-gold">
            <PlayCircle size={28} />
            <span className="text-sm font-bold uppercase tracking-[0.14em]">Live-ready production</span>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {["LED", "Audio", "Light"].map((item) => (
              <div key={item} className="rounded-md border border-white/10 bg-white/6 p-4 text-center">
                <p className="font-[var(--font-display)] text-2xl font-bold text-white">{item}</p>
                <p className="mt-1 text-xs text-white/50">Systems</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
