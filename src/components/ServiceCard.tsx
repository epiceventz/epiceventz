import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/site";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Link
      href={`/services#${service.slug}`}
      className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] transition duration-300 hover:-translate-y-1 hover:border-gold/45 hover:bg-white/[0.07] hover:shadow-gold"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon/75 to-transparent" />
      </div>
      <div className="p-5">
        <div className="mb-4 flex items-center justify-between">
          <span className="grid size-11 place-items-center rounded-md border border-electric/35 bg-electric/12 text-electric">
            <Icon size={21} />
          </span>
          <ArrowUpRight className="text-white/35 transition group-hover:text-gold" size={20} />
        </div>
        <h3 className="font-[var(--font-display)] text-xl font-bold text-white">{service.title}</h3>
        <p className="mt-3 text-sm leading-6 text-white/62">{service.summary}</p>
      </div>
    </Link>
  );
}
