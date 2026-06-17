import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/constants";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030405]">
      <div className="section-shell grid gap-10 py-14 lg:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <div className="mb-4">
            <Logo variant="footer" />
          </div>
          <p className="max-w-md text-sm leading-6 text-white/62">
            Premium event production for organizations that need a composed team, powerful technology, and polished execution.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-gold">Explore</h2>
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-white/64 transition hover:text-gold">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-gold">Contact</h2>
          <div className="grid gap-3 text-sm text-white/64">
            <a className="flex items-center gap-2 transition hover:text-gold" href={`mailto:${siteConfig.email}`}>
              <Mail size={16} /> {siteConfig.email}
            </a>
            <a className="flex items-center gap-2 transition hover:text-gold" href={`tel:${siteConfig.phone}`}>
              <Phone size={16} /> {siteConfig.phone}
            </a>
            <p className="flex items-center gap-2">
              <MapPin size={16} /> Serving events nationwide
            </p>
          </div>
          <div className="mt-5 flex gap-3">
            {[Instagram, Facebook, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                aria-label="Social profile"
                className="focus-ring grid size-10 place-items-center rounded-md border border-white/12 bg-white/5 text-white/68 transition hover:border-gold/60 hover:text-gold"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="section-shell flex flex-col gap-2 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Epic Eventz. All rights reserved.</p>
          <p>Production-ready for Vercel deployment.</p>
        </div>
      </div>
    </footer>
  );
}
