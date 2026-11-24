// The "To" monogram, from the masters in docs/brand/tolulope-brand-2026-11-24
// (01-Logo-Masters/tolulope-mark-*.svg). Geometry must stay identical to the
// masters: 64-unit grid, stroke 7, gap 5. See docs/brand/README.md.
export const BRAND = {
  ink: "#0B0C0E",
  paper: "#F4F7FA",
  accent: "#455CE9",
};

export function LogoMark({ tone = "ink", className = "", title }) {
  const t = tone === "paper" ? BRAND.paper : BRAND.ink;
  return (
    <svg
      viewBox="10 13 44 38"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      focusable="false"
    >
      <rect x="10" y="13" width="44" height="7" fill={t} />
      <rect x="16" y="13" width="7" height="38" fill={t} />
      <circle
        cx="41"
        cy="38"
        r="9.5"
        fill="none"
        stroke={BRAND.accent}
        strokeWidth="7"
      />
    </svg>
  );
}

// Mark + live-text name. The name is real text (not outlined) so it stays
// crawlable and readable by assistive tech.
export default function Logo({ tone = "ink", className = "" }) {
  const text = tone === "paper" ? "text-[#F4F7FA]" : "text-[#0B0C0E]";
  return (
    <span className={`inline-flex items-center gap-[0.6em] ${className}`}>
      <LogoMark tone={tone} className="h-[1.35em] w-auto shrink-0" />
      <span className={`font-display font-[700] tracking-[-0.01em] ${text}`}>
        Tolulope Olatunji
      </span>
    </span>
  );
}
