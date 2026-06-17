type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, copy, align = "left" }: SectionHeaderProps) {
  return (
    <div className={`mb-10 ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="font-[var(--font-display)] text-3xl font-bold leading-tight text-white sm:text-4xl">
        {title}
      </h2>
      {copy ? <p className="mt-4 text-base leading-7 text-white/66">{copy}</p> : null}
    </div>
  );
}
