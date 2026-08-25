// app/[locale]/career/[slug]/page.tsx
"use client";
import { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import JobDetailPage, { JobDetail } from "@/components/layout/job-detail-page";
import { parseJobContent } from "@/lib/parse-job-content";


interface ApiJob {
  job_info_id: number;
  title: string;
  location: string;
  type: string;
  content?: string | null;
  created_at: string;
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

function timeAgo(dateStr: string): string {
  const diffMs = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (days <= 0) return "Posted today";
  if (days === 1) return "Posted 1 day ago";
  return `Posted ${days} days ago`;
}

function contentToParagraphs(content: string): string[] {
  return content
    .split(/\r?\n\s*\r?\n|\r?\n/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0);
}

export default function Page() {
  const params = useParams<{ slug: string }>();
  const [job, setJob] = useState<JobDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const res = await fetch(`/api/jobs-info?page=1&limit=1000`, { cache: "no-store" });
        const data = await res.json();
        const items: ApiJob[] = data.items || [];
        const match = items.find((j) => slugify(j.title) === params.slug);
        if (!match) {
          if (!cancelled) {
            setFailed(true);
            setLoading(false);
          }
          return;
        }
        const baseJob: JobDetail = {
          slug: slugify(match.title),
          title: match.title,
          location: match.location,
          workType: match.type,
          postedAgo: timeAgo(match.created_at),
        };
      if (match.content && match.content.trim().length > 0) {
  const parsed = parseJobContent(match.content);
  setJob({
    ...baseJob,
    aboutRole: parsed.aboutRole,
    whatYoullDo: parsed.whatYoullDo,
    whatYoullBring: parsed.whatYoullBring,
    niceToHave: parsed.niceToHave,
  });
} else {
  setJob(baseJob);
}
        if (!cancelled) setLoading(false);
      } catch (err) {
        console.error("Failed to load job detail", err);
        if (!cancelled) {
          setFailed(true);
          setLoading(false);
        }
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400 text-sm">Loading job details...</p>
      </div>
    );
  }

  if (failed || !job) {
    notFound();
  }

  return <JobDetailPage job={job} />;
}