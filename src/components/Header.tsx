"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/constants";
import { ButtonLink } from "@/components/ButtonLink";
import { Logo } from "@/components/Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-carbon/82 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between">
        <Logo onClick={() => setOpen(false)} />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`focus-ring rounded-md text-sm font-semibold transition hover:text-gold ${
                  active ? "text-gold" : "text-white/72"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/contact">Get a Quote</ButtonLink>
        </div>

        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="focus-ring grid size-11 place-items-center rounded-md border border-white/15 bg-white/7 text-white lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-carbon/96 lg:hidden">
          <nav className="section-shell flex flex-col gap-2 py-5" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-md px-3 py-3 text-base font-semibold text-white/78 hover:bg-white/7 hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink href="/contact" className="mt-2 w-full">
              Get a Quote
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
