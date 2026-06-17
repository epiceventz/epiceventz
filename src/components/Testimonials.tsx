import { Quote } from "lucide-react";
import { testimonials } from "@/data/site";
import { SectionHeader } from "@/components/SectionHeader";

export function Testimonials() {
  return (
    <section className="bg-[#07090d] py-20">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Client perspective"
          title="Trusted by teams who need the show to feel effortless."
          align="center"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-lg border border-white/10 bg-white/[0.045] p-6">
              <Quote className="text-gold" size={28} />
              <p className="mt-5 text-base leading-7 text-white/75">“{item.quote}”</p>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="font-bold text-white">{item.name}</p>
                <p className="mt-1 text-sm text-white/52">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
