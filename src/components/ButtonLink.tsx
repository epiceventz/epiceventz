import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = ""
}: ButtonLinkProps) {
  const styles =
    variant === "primary"
      ? "border-gold bg-gold text-carbon shadow-gold hover:bg-gold-soft"
      : "border-white/20 bg-white/5 text-white hover:border-electric/70 hover:bg-electric/10";

  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-12 items-center justify-center rounded-md border px-5 text-sm font-bold transition duration-300 ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}
