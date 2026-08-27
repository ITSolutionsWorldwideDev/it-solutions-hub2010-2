// components/layout/job-detail-page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import {
  MapPin,
  Briefcase,
  DollarSign,
  Clock,
  Share2,
  ArrowRight,
  CheckCircle2,
  Wifi,
  GraduationCap,
  Building2,
  TrendingUp,
  Globe,
  Check,
  MessageCircle,
  Facebook,
  Copy,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* TYPES                                                              */
/* ------------------------------------------------------------------ */

export interface JobDetail {
  slug: string;
  title: string;
  location: string;
  workType: string;

  department?: string;
  seniority?: string;
  postedAgo?: string;
  salaryRange?: string;
  schedule?: string;

  aboutRole?: string[];
  whatYoullDo?: string[];
  whatYoullBring?: string[];
  niceToHave?: string[];

  teamImage?: string;

  keySkills?: string[];

  relatedJobs?: RelatedJob[];
}

interface RelatedJob {
  slug: string;
  title: string;
  department?: string;
  level?: string;
  postedAgo?: string;
  location: string;
  workType: string;
  salaryRange?: string;
  description?: string;
  skills?: string[];
  isExternalLink?: boolean;
  externalUrl?: string;
}

/* ------------------------------------------------------------------ */
/* FALLBACK JOB POOL — sirf tab use hoga jab DB mein enough related    */
/* jobs na milen. Filhaal hub domain pe point karta hai (temporary)    */
/* jab tak ye specific job pages hub pe bhi ban jayen.                 */
/* ------------------------------------------------------------------ */

const RELATED_JOBS_POOL: RelatedJob[] = [
  {
    slug: "finance-specialist",
    title: "Finance Specialist",
    department: "Finance",
    level: "Mid-level",
    location: "Netherlands",
    workType: "Full-time",
    description:
      "Manage financial reporting, reconciliations, and support budgeting cycles.",
    isExternalLink: true,
    externalUrl:
      "https://www.itsolutionshub2010.com/en/career/finance-specialist",
    skills: ["Finance", "Reporting"],
  },
  {
    slug: "hvac-service-technician-cooling-technology",
    title: "HVAC Service Technician",
    department: "Technical",
    level: "Skilled",
    location: "Netherlands",
    workType: "Full-time",
    description:
      "Install, maintain, and repair cooling and HVAC systems for clients.",
    isExternalLink: true,
    externalUrl:
      "https://www.itsolutionshub2010.com/en/career/hvac-service-technician-cooling-technology",
    skills: ["HVAC", "Cooling Tech"],
  },
  {
    slug: "master-data-specialist-sap-s4hana",
    title: "Master Data Specialist (SAP S/4HANA)",
    department: "IT",
    level: "Mid-level",
    location: "Netherlands",
    workType: "Full-time",
    description:
      "Own master data quality and governance within SAP S/4HANA environments.",
    isExternalLink: true,
    externalUrl:
      "https://www.itsolutionshub2010.com/en/career/master-data-specialist-sap-s4hana",
    skills: ["SAP", "S/4HANA"],
  },
  {
    slug: "cyber-security-intern",
    title: "Cyber Security Intern",
    department: "Security",
    level: "Internship",
    location: "Remote",
    workType: "Internship",
    description:
      "Support the security team with monitoring, audits, and vulnerability checks.",
    isExternalLink: true,
    externalUrl:
      "https://www.itsolutionshub2010.com/en/career/cyber-security-intern",
    skills: ["Security", "Monitoring"],
  },
  {
    slug: "backoffice-intern",
    title: "Backoffice Intern",
    department: "Operations",
    level: "Internship",
    location: "Remote",
    workType: "Internship",
    description:
      "Assist with daily administrative operations, data management, and documentation.",
    isExternalLink: true,
    externalUrl:
      "https://www.itsolutionshub2010.com/en/career/backoffice-intern",
    skills: ["Operations", "Admin"],
  },
  {
    slug: "oracle-erp-consultant-specialist",
    title: "Oracle ERP Consultant Specialist",
    department: "IT",
    level: "Senior",
    location: "Netherlands",
    workType: "Full-time",
    description:
      "Implement and optimize Oracle ERP modules for enterprise clients.",
    isExternalLink: true,
    externalUrl:
      "https://www.itsolutionshub2010.com/en/career/oracle-erp-consultant-specialist",
    skills: ["Oracle ERP", "Consulting"],
  },
];

/* ------------------------------------------------------------------ */
/* SHUFFLE HELPER                                                     */
/* ------------------------------------------------------------------ */

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

/* ------------------------------------------------------------------ */
/* STATIC — company perks                                             */
/* ------------------------------------------------------------------ */

const COMPANY_PERKS: {
  icon: "wifi" | "cert" | "building" | "pay";
  title: string;
  description: string;
}[] = [
  {
    icon: "wifi",
    title: "Remote-First",
    description:
      "Full flexibility — work from wherever you do your best thinking.",
  },
  {
    icon: "cert",
    title: "Cert Budget",
    description:
      "Yearly budget to spend on courses, conferences, and certifications.",
  },
  {
    icon: "building",
    title: "Job Stability",
    description:
      "15 years in operation, zero layoffs, 200+ enterprise clients.",
  },
  {
    icon: "pay",
    title: "Competitive Pay",
    description:
      "Market-leading base + performance bonus for the right candidate.",
  },
];

/* ------------------------------------------------------------------ */
/* SMALL HELPERS                                                      */
/* ------------------------------------------------------------------ */

function SectionNumber({ n }: { n: string }) {
  return (
    <span
      className="text-5xl font-black leading-none select-none shrink-0"
      style={{
        WebkitTextStroke: "1.5px #1C8C93",
        color: "transparent",
        opacity: 0.35,
      }}
    >
      {n}
    </span>
  );
}

function PerkIcon({
  icon,
}: {
  icon: "wifi" | "cert" | "building" | "pay";
}) {
  const cls = "w-4 h-4 text-[#1C8C93]";

  switch (icon) {
    case "wifi":
      return <Wifi className={cls} />;
    case "cert":
      return <GraduationCap className={cls} />;
    case "building":
      return <Building2 className={cls} />;
    case "pay":
      return <TrendingUp className={cls} />;
    default:
      return null;
  }
}

/* ------------------------------------------------------------------ */
/* MAIN COMPONENT                                                     */
/* ------------------------------------------------------------------ */

export default function JobDetailPage({
  job,
  locale = "en",
}: {
  job: JobDetail;
  locale?: string;
}) {
  const [currentUrl, setCurrentUrl] = useState("");
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleShareClick = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: job.title,
          text: `Check out this job opening: ${job.title}`,
          url: currentUrl,
        });

        return;
      } catch (err) {
        // Fallback to custom menu if user cancels or API fails
      }
    }

    setShowShareMenu(!showShareMenu);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy URL:", error);
    }
  };

  let sectionCount = 0;

  const nextNumber = () => String(++sectionCount).padStart(2, "0");

  const hasAboutContent = !!(
    job.aboutRole && job.aboutRole.length > 0
  );

  const hasWhatYoullDo = !!(
    job.whatYoullDo && job.whatYoullDo.length > 0
  );

  const hasWhatYoullBring = !!(
    job.whatYoullBring && job.whatYoullBring.length > 0
  );

  const hasNiceToHave = !!(
    job.niceToHave && job.niceToHave.length > 0
  );

  const hasKeySkills = !!(
    job.keySkills && job.keySkills.length > 0
  );

  /* -------------------------------------------------------------- */
  /* RELATED JOBS                                                   */
  /* -------------------------------------------------------------- */

  const basePool = useMemo(() => {
    const pool: RelatedJob[] =
      job.relatedJobs && job.relatedJobs.length > 0
        ? job.relatedJobs
        : RELATED_JOBS_POOL;

    return pool.filter((rj) => rj.slug !== job.slug);
  }, [job.relatedJobs, job.slug]);

  const [displayCards, setDisplayCards] = useState<RelatedJob[]>(() =>
    basePool.slice(0, 3)
  );

  useEffect(() => {
    setDisplayCards(shuffleArray(basePool).slice(0, 3));
  }, [basePool]);

  const applyHref = `/${locale}/job-apply?slug=${job.slug}`;
  return (
    <div className="bg-[#FAFCFC] min-h-screen">
      {/* ============ HERO BAND ============ */}

      <div className="bg-[#0A2220] text-white">
        <div className="mx-auto w-full max-w-[1180px] px-6 sm:px-8 lg:px-0 pt-12 pb-10">
          <div className="flex items-center gap-3 mb-5">
            {job.department && (
              <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-[#1C8C93]/20 text-[#3FC6CC] border border-[#1C8C93]/30">
                {job.department}
              </span>
            )}

            {job.seniority && (
              <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-white/10 text-white/80">
                {job.seniority}
              </span>
            )}
          </div>

          <h1 className="text-[34px] sm:text-[42px] font-extrabold tracking-tight leading-[1.1] mb-8 max-w-2xl">
            {job.title}
          </h1>

          <div className="flex flex-wrap gap-x-14 gap-y-5">
            <div>
              <div className="flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.12em] uppercase text-white/40 mb-1.5">
                <MapPin className="w-3 h-3" />
                Location
              </div>

              <p className="text-sm font-bold">{job.location}</p>
            </div>

            <div>
              <div className="flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.12em] uppercase text-white/40 mb-1.5">
                <Briefcase className="w-3 h-3" />
                Work Type
              </div>

              <p className="text-sm font-bold">{job.workType}</p>
            </div>

            {job.salaryRange && (
              <div>
                <div className="flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.12em] uppercase text-white/40 mb-1.5">
                  <DollarSign className="w-3 h-3" />
                  Salary
                </div>

                <p className="text-sm font-bold">
                  {job.salaryRange}
                </p>
              </div>
            )}

            {job.schedule && (
              <div>
                <div className="flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.12em] uppercase text-white/40 mb-1.5">
                  <Clock className="w-3 h-3" />
                  Schedule
                </div>

                <p className="text-sm font-bold">{job.schedule}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ============ MOBILE APPLY NOW BAR ============ */}

      <div className="lg:hidden bg-white border-b border-gray-200/70 px-6 py-3 sticky top-0 z-30 shadow-sm">
        <Link
          href="/en/career#career-open-application"
          className="w-full flex items-center justify-center gap-2 bg-[#06282C] hover:bg-[#0A3438] text-white font-semibold text-sm py-3 rounded-xl transition"
        >
          Apply Now
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* ============ BODY ============ */}

      <div className="mx-auto w-full max-w-[1180px] px-6 sm:px-8 lg:px-0 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start">
          {/* ---------------- LEFT COLUMN ---------------- */}

          <div>
            {hasAboutContent && (
              <section className="flex gap-4 mb-12">
                <SectionNumber n={nextNumber()} />

                <div className="flex-1 pt-1.5">
                  <h2 className="text-xl font-bold text-[#06282C] mb-3">
                    About the Role
                  </h2>

                  <div className="space-y-3 mb-4">
                    {job.aboutRole!.map((p, i) => (
                      <p
                        key={i}
                        className="text-sm text-gray-500 leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {hasWhatYoullDo && (
              <section className="flex gap-4 mb-12">
                <SectionNumber n={nextNumber()} />

                <div className="flex-1 pt-1.5">
                  <h2 className="text-xl font-bold text-[#06282C] mb-4">
                    What You&apos;ll Do
                  </h2>

                  <ul className="space-y-3">
                    {job.whatYoullDo!.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm text-gray-500 leading-relaxed"
                      >
                        <span className="text-[#1C8C93] font-bold text-xs pt-0.5 shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {hasWhatYoullBring && (
              <section className="flex gap-4 mb-12">
                <SectionNumber n={nextNumber()} />

                <div className="flex-1 pt-1.5">
                  <h2 className="text-xl font-bold text-[#06282C] mb-4">
                    What You&apos;ll Bring
                  </h2>

                  <ul className="space-y-3">
                    {job.whatYoullBring!.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm text-gray-500 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#1C8C93] shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {hasNiceToHave && (
              <section className="flex gap-4 mb-12">
                <SectionNumber n={nextNumber()} />

                <div className="flex-1 pt-1.5">
                  <h2 className="text-xl font-bold text-[#06282C] mb-4">
                    Nice to Have
                  </h2>

                  <div className="bg-[#EEF8F7] rounded-2xl p-5">
                    <ul className="space-y-2.5">
                      {job.niceToHave!.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm text-gray-600 leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1C8C93] mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            )}

            <section className="flex gap-4 mb-10">
              <SectionNumber n={nextNumber()} />

              <div className="flex-1 pt-1.5">
                <h2 className="text-xl font-bold text-[#06282C] mb-5">
                  Why IT Solutions Worldwide
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {COMPANY_PERKS.map((perk, i) => (
                    <div
                      key={i}
                      className="bg-white border border-gray-200/70 rounded-2xl p-4 flex gap-3 items-start"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#EEF8F7] flex items-center justify-center shrink-0">
                        <PerkIcon icon={perk.icon} />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-[#06282C] mb-0.5">
                          {perk.title}
                        </p>

                        <p className="text-xs text-gray-500 leading-relaxed">
                          {perk.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <div className="rounded-3xl overflow-hidden relative w-full h-[280px] shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Team collaborating"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* ---------------- RIGHT SIDEBAR (desktop) ---------------- */}

          <div className="h-fit space-y-4">
            <div className="rounded-2xl overflow-hidden border border-gray-200/70">
              <div className="bg-[#1C8C93] text-white p-5">
                <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-white/70 mb-1.5">
                  Ready to apply?
                </p>

                <p className="text-lg font-extrabold mb-1">
                  Only Takes 1 minute.
                </p>

                <p className="text-[11px] text-white/70"></p>
              </div>

              <div className="p-3 space-y-2 bg-white relative">
         <Link
  href={applyHref}
  className="w-full flex items-center justify-center gap-2 bg-[#06282C] hover:bg-[#0A3438] text-white font-semibold text-sm py-3 rounded-xl transition"
>
  Apply for This Role
  <ArrowRight className="w-4 h-4" />
</Link>

                <div className="relative">
                  <button
                    onClick={handleShareClick}
                    className="w-full flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 text-[#06282C] font-semibold text-sm py-3 rounded-xl transition"
                  >
                    <Share2 className="w-4 h-4" />
                    Share This Job
                  </button>

                  {/* SHARE OPTIONS POPUP */}

                  {showShareMenu && (
                    <div className="absolute left-0 right-0 bottom-full mb-2 bg-white border border-gray-200 rounded-xl shadow-lg p-3 z-20 space-y-2 animate-in fade-in slide-in-from-bottom-2">
                      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                        Share via
                      </p>

                      <Link
                        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                          `Check out this job: ${job.title} - ${currentUrl}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition"
                      >
                        <MessageCircle className="w-4 h-4 text-emerald-500" />
                        WhatsApp
                      </Link>

                      <Link
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                          currentUrl
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                      >
                        <Facebook className="w-4 h-4 text-blue-600" />
                        Facebook
                      </Link>

                      <button
                        onClick={copyToClipboard}
                        className="w-full flex items-center justify-between px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition"
                      >
                        <span className="flex items-center gap-2">
                          {copied ? (
                            <Check className="w-4 h-4 text-green-500" />
                          ) : (
                            <Copy className="w-4 h-4 text-gray-500" />
                          )}

                          {copied ? "Copied Link!" : "Copy Link"}
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200/70 rounded-2xl p-5">
              <h4 className="text-sm font-bold text-[#06282C] mb-4">
                Role Details
              </h4>

              <dl className="space-y-4 text-xs">
                {job.salaryRange && (
                  <div className="flex items-center justify-between">
                    <dt className="flex items-center gap-2 text-gray-400">
                      <DollarSign className="w-3.5 h-3.5" />
                      Salary
                    </dt>

                    <dd className="font-semibold text-[#06282C]">
                      {job.salaryRange}
                    </dd>
                  </div>
                )}

                {/* Location row with smart alignment */}

                <div className="flex items-start justify-between gap-4">
                  <dt className="flex items-center gap-2 text-gray-400 shrink-0 pt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                    Location
                  </dt>

                  <dd className="font-semibold text-[#06282C] text-right leading-relaxed max-w-[180px]">
                    {job.location}
                  </dd>
                </div>

                <div className="flex items-center justify-between">
                  <dt className="flex items-center gap-2 text-gray-400">
                    <Briefcase className="w-3.5 h-3.5" />
                    Work Type
                  </dt>

                  <dd className="font-semibold text-[#06282C]">
                    {job.workType}
                  </dd>
                </div>

                {job.seniority && (
                  <div className="flex items-center justify-between">
                    <dt className="flex items-center gap-2 text-gray-400">
                      <TrendingUp className="w-3.5 h-3.5" />
                      Seniority
                    </dt>

                    <dd className="font-semibold text-[#06282C]">
                      {job.seniority}
                    </dd>
                  </div>
                )}

                {job.department && (
                  <div className="flex items-center justify-between">
                    <dt className="flex items-center gap-2 text-gray-400">
                      <Building2 className="w-3.5 h-3.5" />
                      Department
                    </dt>

                    <dd className="font-semibold text-[#06282C]">
                      {job.department}
                    </dd>
                  </div>
                )}
              </dl>
            </div>

            {hasKeySkills && (
              <div className="bg-white border border-gray-200/70 rounded-2xl p-5">
                <h4 className="text-sm font-bold text-[#06282C] mb-4">
                  Key Skills
                </h4>

                <div className="flex flex-wrap gap-2">
                  {job.keySkills!.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-semibold px-3 py-1 bg-[#EEF8F7] text-[#1C8C93] border border-[#1C8C93]/20 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

   {/* ============ FULL-WIDTH CENTERED RELATED CARDS SECTION ============ */}

        <div className="mt-20 pt-12 border-t border-gray-200/60 w-full flex flex-col items-center">
          <div className="text-center mb-8">
            <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-2">
              Explore More
            </p>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#06282C]">
              You might also like
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1000px]">
            {[
              {
                title: "SEO Specialist",
                department: "Marketing",
                level: "Mid",
                location: "Remote",
                workType: "Full-time",
                url: "https://www.itsolutionshub2010.com/en/career/seo-specialist",
              },
              {
                title: "Junior Graphic Designer",
                department: "Design",
                level: "Junior",
                location: "Remote",
                workType: "Full-time",
                url: "https://www.itsolutionshub2010.com/en/career/junior-graphic-designer",
              },
              {
                title: "Full Stack Developer (PERN)",
                department: "Engineering",
                level: "Mid",
                location: "Remote",
                workType: "Full-time",
                url: "https://www.itsolutionshub2010.com/en/career/full-stack-developer-pern",
              },
            ].map((rj) => (
              <div
                key={rj.url}
                className="bg-white border border-gray-200/70 rounded-2xl p-5 flex flex-col justify-between hover:border-[#1C8C93] transition shadow-sm w-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex gap-1.5">
                      <span className="text-[10px] font-semibold px-2 py-0.5 bg-[#EEF8F7] text-[#1C8C93] rounded-full">
                        {rj.department}
                      </span>

                      <span className="text-[10px] font-semibold px-2 py-0.5 bg-[#F3E8FF] text-[#7E22CE] rounded-full">
                        {rj.level}
                      </span>
                    </div>
                  </div>

                  <h4 className="text-sm font-bold text-[#06282C] mb-2">
                    {rj.title}
                  </h4>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {rj.location}
                    </span>

                    <span>{rj.workType}</span>
                  </div>
                </div>

                <a
                  href={rj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#1C8C93] hover:underline flex items-center gap-1 pt-2 border-t border-gray-100"
                >
                  View Role
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}