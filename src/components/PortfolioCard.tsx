import Image from "next/image";
import type { PortfolioProject } from "@/data/site";

type PortfolioCardProps = {
  project: PortfolioProject;
};

export function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] transition duration-300 hover:-translate-y-1 hover:border-electric/45 hover:shadow-glow">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 rounded-md border border-gold/40 bg-carbon/75 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-gold backdrop-blur">
          {project.category}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-[var(--font-display)] text-xl font-bold text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-white/62">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.metrics.map((metric) => (
            <span key={metric} className="rounded-md border border-white/10 bg-white/6 px-3 py-1 text-xs text-white/64">
              {metric}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
