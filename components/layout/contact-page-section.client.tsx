// components/layout/contact-page-section.client.tsx
"use client";
import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";

type Props = {
  translations: Record<string, string>;
};

export default function ContactCardClient({ translations }: Props) {
  const t = translations;
  const router = useRouter();

  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  // Safe environment site key check
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  // reCAPTCHA state tracking
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState(false);

  const [sending, setSending] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => router.push("/"), 8000);
      return () => clearTimeout(timer);
    }
  }, [showModal, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verify if CAPTCHA was solved only if siteKey exists
    if (siteKey && !captchaToken && !captchaError) {
      alert("Please complete the reCAPTCHA verification.");
      return;
    }

    setSending(true);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("subject", subject);
      formData.append("message", message);
      
      if (captchaToken) {
        formData.append("g-recaptcha-response", captchaToken);
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send message.");

      setShowModal(true);
      setStatus("success");

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setCaptchaToken(null);
    } catch (err: any) {
      setStatus("error");
      setResponseMessage(err.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full text-center">
            <h2 className="text-xl font-semibold mb-3">Thank You 🎉</h2>
            <p>Your message has been sent!</p>
            <p className="text-sm text-gray-500 mt-2">
              Redirecting to Home page...
            </p>
            <button
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
              onClick={() => router.push("/")}
            >
              Go Now
            </button>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-xl flex flex-wrap lg:flex-nowrap">
          {/* Left Side */}
          <div className="w-full lg:w-1/2 bg-[#278083] text-white p-8 flex flex-col justify-center rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {t.contactheading}
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="bg-[#29A1B6] p-3 rounded-full hover:bg-[#236b7a] transition">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm">{t.contactemail}</p>
                    <p className="font-medium break-all">
                      <Link
                        href="mailto:info@itsolutionshub2010.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        info@itsolutionshub2010.com
                      </Link>
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <div className="bg-[#29A1B6] p-3 rounded-full hover:bg-[#236b7a] transition">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm">{t.contactephone}</p>
                    <p className="font-medium">
                      <Link
                        href="https://wa.me/+31107660786"
                        target="_blank"
                        rel="noreferrer"
                      >
                        +31 10 766 0786
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-6">
                <p className="text-sm mb-2">{t.contactconnect}</p>
                <div className="flex space-x-4">
                  {[
                    {
                      href: "https://www.facebook.com/people/It-Solutions-Hub-2010-PVT-Ltd/100095307775094/?mibextid=kFxxJD",
                      Icon: Facebook,
                      label: "Facebook",
                    },
                    {
                      href: "https://x.com/ITSolution2010",
                      Icon: Twitter,
                      label: "Twitter",
                    },
                    {
                      href: "https://www.linkedin.com/company/it-solutions-hub-2010/",
                      Icon: Linkedin,
                      label: "LinkedIn",
                    },
                    {
                      href: "https://www.instagram.com/itsolutionshub2010/?hl=en",
                      Icon: Instagram,
                      label: "Instagram",
                    },
                  ].map(({ href, Icon, label }) => (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="p-2 bg-[#29A1B6] rounded-full hover:bg-[#236b7a] transition"
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="w-full lg:w-1/2 bg-white p-8 rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none shadow-lg">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center lg:text-left">
              {t.contactform}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-gray-700"
                  >
                    {t.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#278083] transition"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-gray-700"
                  >
                    {t.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#278083] transition"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-lg font-medium text-gray-700"
                >
                  {t.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#278083] transition"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-700"
                >
                  {t.message}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#278083] transition"
                  required
                ></textarea>
              </div>

              {/* Google reCAPTCHA Widget with Safe Fallback */}
              <div className="flex flex-col items-center lg:items-start space-y-2">
                {siteKey && !captchaError ? (
                  <ReCAPTCHA
                    sitekey={siteKey}
                    onChange={(token) => setCaptchaToken(token)}
                    onErrored={() => setCaptchaError(true)}
                  />
                ) : (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg w-full">
                    <p>
                      ⚠️ reCAPTCHA is not configured or failed to load.
                    </p>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full md:w-auto bg-[#278083] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#1f6f69] transition duration-300 transform hover:scale-105 cursor-pointer disabled:opacity-50"
              >
                {sending ? (t.sending || "Sending...") : t.sendmessage}
              </button>
            </form>

            {status === "success" && (
              <p className="mt-4 text-green-600 font-semibold">
                Your message has been sent!
              </p>
            )}

            {status === "error" && (
              <p className="mt-4 text-red-600 font-semibold">
                {responseMessage || "Something went wrong. Please try again."}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}