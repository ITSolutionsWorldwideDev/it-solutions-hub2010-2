// components/layout/career-jobs.tsx
'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
// import { jobsData } from "@/lib/jobsData";
import PdfViewer from "@/components/ui/pdf-viewer";


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

const PAGE_SIZE = 10;

const CareerJobsSection = () => {
  

  const [JobInfos, setJobInfos] = useState<JobInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected_job_info, set_selected_job_info] = useState<JobInfo | null>(
    null,
  );
  const [deleting, setDeleting] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);


  

  // ✅ Fetch jobsInfo
  const fetchjobsInfo = async (page = 1) => {
    setLoading(true);
    try {

      const res = await fetch(
        `/api/jobs-info?page=${page}&limit=${PAGE_SIZE}`,
        {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
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

   if (loading) return <p>Loading Jobs Info...</p>;

  return (
    <div className="container mt-20 max-w-sm sm:max-w-4xl gap-3 sm:gap-0 mx-auto flex flex-col">

        
        {JobInfos.map((job, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center mb-6"
          >
            <div className="md:w-3/4">
              <h3 className="text-lg font-semibold text-left">{job.title}</h3>
              <p className="text-sm font-semibold text-left mt-1 text-gray-700">
                {job.type} -{" "}
                <span className="text-purple-600">{job.location}</span>
              </p>
              <PdfViewer key={index} pdfUrl={job.pdf_url} />
            </div>
            <div className="md:w-1/4 flex items-end justify-end">
              <Link
                href="/job-apply"
                className="btn mt-2 md:mt-4 inline-block bg-teal-600 text-white font-semibold py-2 px-4 rounded hover:bg-teal-700 transition duration-300 ease-in-out"
              >
                <span>Apply now</span>
              </Link>
            </div>
          </div>
        ))}
        <hr className="mt-4" />
      </div>
  );
};

export default CareerJobsSection;
