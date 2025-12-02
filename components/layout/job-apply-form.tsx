// components/layout/job-apply-form.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Loader from "@/components/ui/Loader";

type JobApplyFormProps = {
  translations: {
    heading: string;
    submit: string;
    success: string;
    requiredFieldsError: string;
    fileTooLarge: string;
  };
  locale: string;
};

const strapiUrl =
  process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1338";

const PAGE_SIZE = 50;

export default function JobApplyForm({ translations }: JobApplyFormProps) {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categoryTitle, setCategoryTitle] = useState("");
  const [hearAbout, setHearAbout] = useState("");
  const [message, setMessage] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [jobs, setJobs] = useState<any[]>([]);

  const [sending, setSending] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  /* useEffect(() => {
    const fetchJobs = async (page = 1) => {
      try {
        const res = await fetch(`/api/jobs-info?page=${page}&limit=${PAGE_SIZE}`,
          {
            cache: "no-store",
          },
        );
        const data = await res.json();
        setJobs(data.data);
      } catch (err) {
        console.error("Failed to load jobs");
      }
    };
    fetchJobs();
  }, []); */

  const PAGE_SIZE = 124;

  const fetchjobsInfo = async (page = 1) => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/jobs-info?page=${page}&limit=${PAGE_SIZE}`,
        {
          cache: "no-store",
        }
      );
      const data = await res.json();
      setJobs(data.items || []);
    } catch (err) {
      console.error("Failed to load jobsInfo", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchjobsInfo(1);
  }, [1]);

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setResume(e.target.files[0]);
    }
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = e.target.value;
    setCategoryId(selectedId);

    // Find the matching job title
    const selectedJob = jobs.find((job) => job.job_info_id == selectedId);
    setCategoryTitle(selectedJob ? selectedJob.title : "");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.persist();
    setSending(true);
    setResponseMessage("");

    if (!hearAbout || !categoryId || !resume) {
      setResponseMessage("Please fill in all required fields.");
      setSending(false);
      return;
    }

    if (resume.size > 10 * 1024 * 1024) {
      setResponseMessage("Resume file is too large (max 10MB).");
      setSending(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("address", address);
      formData.append("hear", hearAbout);
      formData.append("message", message);
      formData.append("job_category_id", categoryId);
      formData.append("job_category", categoryTitle);
      formData.append("resume", resume, resume.name);

      const res = await fetch("/api/job-applications", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      // console.log('data === ',data);
      // console.log('res.ok === ',res.ok);

      if (!res.ok)
        throw new Error(data.error || "Failed to submit application.");

      setResponseMessage("Application submitted successfully!");
      // e.currentTarget.reset();
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
      setCategoryId("");
      setCategoryTitle("");
      setHearAbout("");
      setMessage("");
      setResume(null);
    } catch (err: any) {
      setResponseMessage(err.message || "Something went wrong.");
    } finally {
      setSending(false);
    }

    /* try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("address", address);
      formData.append("hear", hearAbout);
      formData.append("message", message);
      formData.append("job_category_id", categoryId);
      formData.append("job_category", categoryTitle);
      formData.append("resume", resume, resume.name);

      const uploadRes = await fetch(`${strapiUrl}/api/upload`, {
        method: "POST",
        body: fileFormData,
      });

      if (!uploadRes.ok) throw new Error("Failed to upload resume.");

      const uploadData = await uploadRes.json();
      const resumeFileId = uploadData[0]?.id;
      const resumeUrl = `${strapiUrl}${uploadData[0]?.url}`;

      const applicationData = {
        name,
        email,
        phone,
        address,
        job_category_id: selectedJob.id,
        hear: hearAbout,
        message,
        resume: resumeFileId,
      };

      const applicationRes = await fetch(`${strapiUrl}/api/job-applications`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: applicationData }),
      });

      if (!applicationRes.ok) throw new Error("Failed to submit application.");

      await Promise.all([
        fetch(`${strapiUrl}/api/send-application-email`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            name,
            jobTitle: selectedJob.attributes.title,
            phone,
            address,
            hear: hearAbout,
            message,
            resume: resumeUrl,
            email_subject: `Thank You for Reaching Out to IT Solutions Hub2010`,
            email_hr: "info@itsolutionshub2010.com",
            type: 1,
          }),
        }),
        fetch(`${strapiUrl}/api/send-application-email`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            name,
            jobTitle: selectedJob.attributes.title,
            phone,
            address,
            hear: hearAbout,
            message,
            resume: resumeUrl,
            email_subject: `Job application for ${selectedJob.attributes.title}`,
            email_hr: "info@itsolutionshub2010.com",
            type: 2,
          }),
        }),
      ]);

      setResponseMessage("Application submitted successfully!");
      e.currentTarget.reset();
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
      setCategory("");
      setHearAbout("");
      setMessage("");
      setResume(null);
    } catch (err: any) {
      setResponseMessage(err.message || "Something went wrong.");
    } finally {
      setSending(false);
    } */
  };

  if (loading) return <Loader message="Loading Jobs Info..." />;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="w-full">
        <div className="flex justify-center items-center">
          <Link href="/">
            <img
              src="/assets/images/main-logo.svg"
              alt="Logo"
              className="h-12 md:h-16"
            />
          </Link>
        </div>
      </div>

      <div className="max-w-md w-full mt-8 space-y-8 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-center text-3xl font-extrabold text-teal-900">
          Apply Now
        </h2>

        <form
          className="mt-8 space-y-6"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="Full Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm mt-2"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm mt-2"
                placeholder="Phone Number"
              />
            </div>
            <div>
              <label htmlFor="address" className="sr-only">
                Address
              </label>
              <textarea
                id="address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm mt-2"
                placeholder="Address"
              ></textarea>
            </div>
            <div>
              <label htmlFor="category" className="sr-only">
                Job Type
              </label>

              <select
                id="category"
                name="category"
                required
                value={categoryId}
                onChange={handleCategoryChange}
                // onChange={handleCategoryChange}
                // onChange={(e) => setCategory(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm mt-2"
              >
                <option value="">Select Job Type</option>
                {jobs &&
                  jobs.map((job, index) => (
                    <option key={index} value={job?.job_info_id}>
                      {job?.title}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <label htmlFor="hearAbout" className="sr-only">
                How did you hear about us?
              </label>
              <select
                id="hearAbout"
                name="hearAbout"
                value={hearAbout}
                onChange={(e) => setHearAbout(e.target.value)} // ✅ correct
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm mt-2"
              >
                <option value="">How did you hear about us?</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Facebook">Facebook</option>
                <option value="Twitter">Twitter</option>
                <option value="Friend/Family">Friend/Family</option>
                <option value="Website">Website</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Cover Letter
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm mt-2"
                placeholder="Cover Letter (Optional)"
              ></textarea>
            </div>

            <div className="pt-3">
              <label htmlFor="resume">
                Upload CV/Resume (.pdf, .doc, .docx) - (max 10MB)
              </label>
              <input
                id="resume"
                name="resume"
                type="file"
                onChange={handleResumeChange}
                accept=".pdf,.doc,.docx"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm mt-2"
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={sending}
                className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600  hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 mt-4 ${
                  sending ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                }`}
              >
                {sending ? "Submitting..." : "Send Now"}
              </button>
            </div>
          </div>
        </form>

        {responseMessage && (
          <p className="text-center text-sm text-gray-600 mt-4">
            {responseMessage}
          </p>
        )}
      </div>
    </div>
  );
}
