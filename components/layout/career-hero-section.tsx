// components/layout/career-hero-section.tsx
import Link from "next/link";

type Breadcrumb = {
  label: string;
  href?: string;
};

type CareerHeroSectionProps = {
  eyebrow?: string;
  heading: string;
  subtext?: string;
  tags?: string[];
  breadcrumbs?: Breadcrumb[];
  /**
   * Optional: pass a real background image path (e.g. "/assets/images/career-hero-bg.webp").
   * If omitted, an SVG wave pattern (matching the reference design) is rendered instead.
   */
  backgroundImage?: string;
};

export default function CareerHeroSection({
  eyebrow = "Join Our Team",
  heading,
  subtext,
  tags = [],
  breadcrumbs = [{ label: "Home", href: "/" }, { label: "Careers" }],
  backgroundImage,
}: CareerHeroSectionProps) {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#050b0d] text-white"
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {/* Wave pattern fallback background (used only when no backgroundImage prop is passed) */}
      {!backgroundImage && (
        <div className="absolute inset-0 -z-10">
          <svg
            className="h-full w-full opacity-70"
            viewBox="0 0 1440 480"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="careerWaveStroke" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#00A896" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#00A896" stopOpacity="0" />
              </linearGradient>
            </defs>
            {Array.from({ length: 16 }).map((_, i) => (
              <path
                key={i}
                d={`M ${-150 + i * 45} -20 C ${320 + i * 22} ${100 + i * 16}, ${
                  780 - i * 12
                } ${210 - i * 9}, 1650 ${400 - i * 12}`}
                stroke="url(#careerWaveStroke)"
                strokeWidth="1"
                fill="none"
              />
            ))}
          </svg>
        </div>
      )}

      {/* Subtle overlay keeps text readable without hiding the background image */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 py-24 text-center sm:py-28 lg:py-32">
        {/* Eyebrow */}
        <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#00A896]">
          <span className="h-px w-8 bg-[#00A896]/60" />
          {eyebrow}
          <span className="h-px w-8 bg-[#00A896]/60" />
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
          {heading}
        </h1>

        {/* Subtext */}
        {subtext && (
          <p className="mt-5 max-w-2xl text-sm text-gray-300 sm:text-base">
            {subtext}
          </p>
        )}

        {/* Tags row */}
        {tags.length > 0 && (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-wider text-[#00A896] sm:text-sm">
            {tags.map((tag, index) => (
              <span key={tag} className="flex items-center gap-3">
                {tag}
                {index < tags.length - 1 && (
                  <span className="text-white/30">|</span>
                )}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Breadcrumb strip */}
      {breadcrumbs.length > 0 && (
        <div className="relative border-t border-white/10 bg-black/30 py-3">
          <div className="mx-auto flex max-w-5xl items-center justify-center gap-2 px-4 text-xs font-medium uppercase tracking-wide text-gray-300">
            {breadcrumbs.map((crumb, index) => (
              <span key={crumb.label} className="flex items-center gap-2">
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="transition hover:text-[#00A896]"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#00A896]">{crumb.label}</span>
                )}
                {index < breadcrumbs.length - 1 && (
                  <span className="text-white/30">/</span>
                )}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}