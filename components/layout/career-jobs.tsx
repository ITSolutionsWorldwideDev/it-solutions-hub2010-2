// components/layout/career-jobs.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface JobInfo {
  job_info_id: number;
  title: string;
  location: string;
  type: string;
  pdf_url?: any;
  author_username?: string;
  author_email?: string;
  created_at: string;
  updated_at: string;
  published: number;
}

interface ApiResponse {
  items: JobInfo[];
  totalResults: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
}

const PAGE_SIZE = 50;

// Title ko slug mein convert karta hai — [slug]/page.tsx mein bhi
// bilkul yehi function hona chahiye taake match ho
function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

const CareerJobsSection = () => {
  const [JobInfos, setJobInfos] = useState<JobInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  // ✅ Fetch jobsInfo
  const fetchjobsInfo = async (page = 1) => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/jobs-info?page=${page}&limit=${PAGE_SIZE}`,
        {
          cache: "no-store",
        },
      );
      const data: ApiResponse = await res.json();
      setJobInfos(data.items || []);
      setTotalPages(data.totalPages);
      setCurrentPage(data.currentPage);
    } catch (err) {
      console.error("Failed to load jobsInfo", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchjobsInfo(currentPage);
  }, [currentPage]);

  // Filter jobs based on search input and tabs
  const filteredJobs = JobInfos.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.type.toLowerCase().includes(searchQuery.toLowerCase());

    if (activeTab === "All") return matchesSearch;
    return matchesSearch && job.type.toLowerCase() === activeTab.toLowerCase();
  });

  if (loading)
    return (
      <div className="mx-auto w-full max-w-[1180px] px-6 py-12 sm:px-8 lg:px-0 flex flex-col items-center justify-center">
        <p className="text-gray-400 font-medium text-sm">Loading positions...</p>
      </div>
    );

  return (
    <section className="w-full bg-[#FAFCFC] py-16">
      <div
        className="
          mx-auto
          w-full
          max-w-[1180px]
          px-6
          sm:px-8
          lg:px-0
        "
      >

        {/* HEADER SECTION */}
        <div className="text-center mb-10">
          <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#2B8A99] block mb-2">
            OUR WORK · PORTFOLIO
          </span>
          <h2 className="text-[36px] sm:text-[44px] font-extrabold text-[#06282C] tracking-tight">
            Find Your Next <span className="text-[#2B8A99]">Great Role</span>
          </h2>
        </div>

        {/* SEARCH & FILTER BOX */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-gray-100 mb-6">
          <div className="relative mb-4 flex items-center">
            <span className="absolute left-4 flex items-center pointer-events-none text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search by role, skill, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-[#F8FAFA] border border-gray-200/70 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2B8A99]/20 focus:border-[#2B8A99] transition"
            />
          </div>

          <div className="flex flex-wrap gap-2 items-center">
            <button
              onClick={() => setActiveTab("All")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${
                activeTab === "All"
                  ? "bg-[#2B8A99] text-white shadow-sm"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All <span className="ml-1 opacity-90">({JobInfos.length})</span>
            </button>
            {["Full-Time", "Part-Time", "Contract", "Internship"].map((type) => (
              <button
                key={type}
                onClick={() => setActiveTab(type)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${
                  activeTab === type
                    ? "bg-[#2B8A99] text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <p className="text-xs font-medium text-gray-400 mb-4">
          {filteredJobs.length} positions found
        </p>

        {/* JOBS LIST CARDS */}
        <div className="flex flex-col gap-4">
          {filteredJobs.map((job, index) => (
            <div
              key={job.job_info_id || index}
              className="bg-white border border-gray-200/70 rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md transition duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
            >
              {/* Left Details */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 bg-[#E6F4F5] text-[#2B8A99] rounded-full">
                    {job.type}
                  </span>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 bg-[#F3E8FF] text-[#7E22CE] rounded-full">
                    Active
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#06282C] mb-1.5">
                  {job.title}
                </h3>

                <p className="text-xs font-medium text-gray-500 flex items-center gap-1.5 mb-3">
                  <svg className="w-3.5 h-3.5 text-[#2B8A99]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{job.location}</span>
                </p>

                <Link
                  href={`/career/${slugify(job.title)}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#2B8A99] hover:underline"
                >
                  View Job Details →
                </Link>
              </div>

              {/* Right Action Button */}
              <div className="w-full md:w-auto flex items-center justify-between md:justify-end gap-4">
                <Link
                  href="/job-apply"
                  className="w-full md:w-auto text-center bg-[#2B8A99] hover:bg-[#237380] text-white font-semibold text-xs py-2.5 px-6 rounded-xl shadow-sm transition duration-300 ease-in-out"
                >
                  Apply now
                </Link>
              </div>
            </div>
          ))}

          {filteredJobs.length === 0 && (
            <div className="text-center py-12 bg-white rounded-2xl border border-gray-100">
              <p className="text-gray-500 text-sm">No positions found matching your criteria.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default CareerJobsSection;