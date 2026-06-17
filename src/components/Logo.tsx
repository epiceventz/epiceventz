import Link from "next/link";

type LogoProps = {
  variant?: "header" | "footer";
  onClick?: () => void;
};

export function Logo({ variant = "header", onClick }: LogoProps) {
  const imageClass = variant === "header" ? "h-12 w-auto sm:h-14" : "h-16 w-auto";

  return (
    <Link href="/" className="focus-ring inline-flex items-center rounded-md" aria-label="Epic Eventz home" onClick={onClick}>
      {/* SVG logo renders directly to avoid Next image optimizer issues in dev. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/epic-eventz-logo.svg"
        alt="Epic Eventz - Born to Amaze"
        className={imageClass}
      />
    </Link>
  );
}
