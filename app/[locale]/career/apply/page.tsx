"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function CareerApplyPage() {
  const searchParams = useSearchParams();
  const job = searchParams.get("job") || "";

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/career-application", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setSuccess("Application submitted successfully!");
      form.reset();
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold text-[#1C8C93] mb-2">
            Career Application
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-[#06282C]">
            Apply for this job
          </h1>

          {job && (
            <p className="mt-3 text-gray-600">
              Position: <strong>{job}</strong>
            </p>
          )}
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 space-y-6 shadow-sm"
        >
          <input type="hidden" name="job" value={job} />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>

            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#1C8C93]"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>

            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#1C8C93]"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone
            </label>

            <input
              type="tel"
              name="phone"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#1C8C93]"
              placeholder="+31 ..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Area of Expertise
            </label>

            <input
              type="text"
              name="expertise"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#1C8C93]"
              placeholder="e.g. Engineering, Marketing, IT"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>

            <textarea
              name="message"
              rows={6}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#1C8C93]"
              placeholder="Tell us about yourself..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cover Letter
            </label>

            <input
              type="file"
              name="coverLetter"
              accept=".pdf,.doc,.docx"
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />
          </div>

          {success && (
            <div className="p-4 rounded-lg bg-green-50 text-green-700">
              {success}
            </div>
          )}

          {error && (
            <div className="p-4 rounded-lg bg-red-50 text-red-700">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1C8C93] text-white rounded-lg px-6 py-3 font-semibold hover:bg-[#15757B] transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </main>
  );
}