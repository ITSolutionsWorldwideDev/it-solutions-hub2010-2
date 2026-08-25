// components/layout/career-open-application.tsx
"use client";

import { useState, useRef } from "react";
import { 
  FiClock, 
  FiUsers, 
  FiAward, 
  FiCoffee, 
  FiGlobe, 
  FiStar, 
  FiBookOpen, 
  FiSend,
  FiUpload,
  FiX,
  FiFile
} from "react-icons/fi";

const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export default function CareerOpenApplication() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    expertise: "",
    message: "",
  });
  const [resume, setResume] = useState<File | null>(null);
  const [coverLetter, setCoverLetter] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const resumeInputRef = useRef<HTMLInputElement>(null);
  const coverLetterInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): string | null => {
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      return "File must be a PDF or Word document.";
    }
    if (file.size > MAX_FILE_SIZE) {
      return "File must be under 5MB.";
    }
    return null;
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const error = validateFile(file);
    if (error) {
      setErrorMessage(`Resume: ${error}`);
      return;
    }

    setErrorMessage("");
    setResume(file);
  };

  const handleCoverLetterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const error = validateFile(file);
    if (error) {
      setErrorMessage(`Cover letter: ${error}`);
      return;
    }

    setErrorMessage("");
    setCoverLetter(file);
  };

  const removeResume = () => {
    setResume(null);
    if (resumeInputRef.current) resumeInputRef.current.value = "";
  };

  const removeCoverLetter = () => {
    setCoverLetter(null);
    if (coverLetterInputRef.current) coverLetterInputRef.current.value = "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage("");

    try {
      const payload = new FormData();
      payload.append("name", formData.fullName);
      payload.append("email", formData.email);
      payload.append("phone", formData.phone);
      payload.append("expertise", formData.expertise);
      payload.append("message", formData.message);
      // Resume aur cover letter dono optional hain — sirf tab append
      // hote hain jab user ne actually file select ki ho
      if (resume) {
        payload.append("resume", resume);
      }
      if (coverLetter) {
        payload.append("coverLetter", coverLetter);
      }

      const response = await fetch("/api/career-application", {
        method: "POST",
        body: payload,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to submit application");
      }

      setSuccess(true);
      setFormData({ fullName: "", email: "", phone: "", expertise: "", message: "" });
      setResume(null);
      setCoverLetter(null);
      if (resumeInputRef.current) resumeInputRef.current.value = "";
      if (coverLetterInputRef.current) coverLetterInputRef.current.value = "";
    } catch (err) {
      console.error("Submission error:", err);
      setErrorMessage("Something went wrong. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto w-full max-w-[1180px] px-6 sm:px-8 lg:px-0">
        
        {/* MAIN CONTAINER CARD */}
        <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* LEFT DARK PANEL */}
          <div className="lg:col-span-5 bg-[#06282C] text-white p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-3.5 py-1.5 bg-white/10 border border-white/10 text-[#5CD2C8] rounded-full mb-6">
                OPEN APPLICATION
              </span>

              <h2 className="text-[28px] sm:text-[34px] font-extrabold tracking-tight leading-[1.15] mb-4">
                Don&apos;t see your <br />perfect role?
              </h2>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-8">
                We hire for talent, not just open headcount. Send us your profile and tell us what you would like to build — we will reach out when the right opportunity opens.
              </p>
            </div>

            {/* BULLET POINTS WITH EXACT TARGET ICON COLORS */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                <FiClock className="w-4 h-4 text-[#5CD2C8] shrink-0" />
                <p className="text-xs text-gray-200">We respond within 5 business days</p>
              </div>
              <div className="flex items-center gap-3">
                <FiUsers className="w-4 h-4 text-[#5CD2C8] shrink-0" />
                <p className="text-xs text-gray-200">Your profile stays active for 6 months</p>
              </div>
              <div className="flex items-center gap-3">
                <FiAward className="w-4 h-4 text-[#5CD2C8] shrink-0" />
                <p className="text-xs text-gray-200">Referral bonus available for successful hires</p>
              </div>
              <div className="flex items-center gap-3">
                <FiCoffee className="w-4 h-4 text-[#5CD2C8] shrink-0" />
                <p className="text-xs text-gray-200">Intro call is always relaxed, no prep needed</p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM PANEL */}
          <div className="lg:col-span-7 p-8 sm:p-12 bg-white flex flex-col justify-center">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-[#06282C]">Send your profile</h3>
              <p className="text-xs text-gray-500 mt-1">
                Takes less than 2 minutes.
              </p>
            </div>

            {success ? (
              <div className="bg-teal-50 border border-teal-200 text-teal-800 p-6 rounded-2xl text-center">
                <h4 className="font-bold text-base mb-1">Application Submitted!</h4>
                <p className="text-xs">Thank you for reaching out. We will get back to you soon.</p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-4 text-xs font-semibold underline text-teal-700 cursor-pointer"
                >
                  Send another application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-xl text-xs">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alexandra Kim"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAFAFA] border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2B8A99]/20 focus:border-[#2B8A99] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAFAFA] border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2B8A99]/20 focus:border-[#2B8A99] transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+31 6 1234 5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAFAFA] border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2B8A99]/20 focus:border-[#2B8A99] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Area of Expertise
                    </label>
                    <select
                      required
                      value={formData.expertise}
                      onChange={(e) => setFormData({ ...formData, expertise: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAFAFA] border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2B8A99]/20 focus:border-[#2B8A99] transition"
                    >
                      <option value="" disabled>Select your field...</option>
                      <option value="Engineering">Engineering</option>
                      <option value="Design">Design</option>
                      <option value="Sales">Sales</option>
                      <option value="Operations">Operations</option>
                      <option value="Support">Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Tell us about yourself
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe your experience, what kind of role you're looking for, and what excites you about IT Solutions Worldwide..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAFAFA] border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2B8A99]/20 focus:border-[#2B8A99] transition resize-none"
                  />
                </div>

                {/* RESUME UPLOAD — optional */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Resume / CV <span className="normal-case font-normal text-gray-400">(PDF or Word, max 5MB)</span>
                  </label>

                  {!resume ? (
                    <label className="flex items-center justify-center gap-2 w-full px-4 py-4 bg-[#FAFAFA] border border-dashed border-gray-300 rounded-xl text-xs sm:text-sm text-gray-500 cursor-pointer hover:border-[#2B8A99] hover:text-[#2B8A99] transition">
                      <FiUpload className="w-4 h-4" />
                      <span>Click to upload your resume</span>
                      <input
                        ref={resumeInputRef}
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleResumeChange}
                        className="hidden"
                      />
                    </label>
                  ) : (
                    <div className="flex items-center justify-between w-full px-4 py-3 bg-[#FAFAFA] border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-700">
                      <div className="flex items-center gap-2 truncate">
                        <FiFile className="w-4 h-4 text-[#2B8A99] shrink-0" />
                        <span className="truncate">{resume.name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={removeResume}
                        className="text-gray-400 hover:text-red-500 transition shrink-0 ml-2 cursor-pointer"
                      >
                        <FiX className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

                {/* COVER LETTER UPLOAD — optional */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Cover Letter <span className="normal-case font-normal text-gray-400">(PDF or Word, max 5MB)</span>
                  </label>

                  {!coverLetter ? (
                    <label className="flex items-center justify-center gap-2 w-full px-4 py-4 bg-[#FAFAFA] border border-dashed border-gray-300 rounded-xl text-xs sm:text-sm text-gray-500 cursor-pointer hover:border-[#2B8A99] hover:text-[#2B8A99] transition">
                      <FiUpload className="w-4 h-4" />
                      <span>Click to upload your cover letter</span>
                      <input
                        ref={coverLetterInputRef}
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleCoverLetterChange}
                        className="hidden"
                      />
                    </label>
                  ) : (
                    <div className="flex items-center justify-between w-full px-4 py-3 bg-[#FAFAFA] border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-700">
                      <div className="flex items-center gap-2 truncate">
                        <FiFile className="w-4 h-4 text-[#2B8A99] shrink-0" />
                        <span className="truncate">{coverLetter.name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={removeCoverLetter}
                        className="text-gray-400 hover:text-red-500 transition shrink-0 ml-2 cursor-pointer"
                      >
                        <FiX className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 px-6 bg-[#2B8A99] hover:bg-[#237380] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-sm transition duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <span>{submitting ? "Submitting..." : "Submit Application"}</span>
                  {!submitting && <FiSend className="w-4 h-4" />}
                </button>

                <p className="text-[11px] text-center text-gray-400 mt-2">
                  We respect your privacy. Your info is never sold or shared.
                </p>
              </form>
            )}
          </div>

        </div>

        {/* BOTTOM STATS ROW */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-white border border-gray-200/70 p-4 rounded-2xl shadow-sm flex items-center gap-3">
            <FiGlobe className="w-5 h-5 text-[#2B8A99] shrink-0" />
            <span className="text-xs font-semibold text-gray-800">Netherlands</span>
          </div>
          <div className="bg-white border border-gray-200/70 p-4 rounded-2xl shadow-sm flex items-center gap-3">
            <FiUsers className="w-5 h-5 text-[#2B8A99] shrink-0" />
            <span className="text-xs font-semibold text-gray-800">40+ Employees</span>
          </div>
          <div className="bg-white border border-gray-200/70 p-4 rounded-2xl shadow-sm flex items-center gap-3">
            <FiStar className="w-5 h-5 text-[#2B8A99] shrink-0" />
            <span className="text-xs font-semibold text-gray-800">4.8 Glassdoor</span>
          </div>
          <div className="bg-white border border-gray-200/70 p-4 rounded-2xl shadow-sm flex items-center gap-3">
            <FiBookOpen className="w-5 h-5 text-[#2B8A99] shrink-0" />
            <span className="text-xs font-semibold text-gray-800">Certified</span>
          </div>
        </div>

      </div>
    </section>
  );
}