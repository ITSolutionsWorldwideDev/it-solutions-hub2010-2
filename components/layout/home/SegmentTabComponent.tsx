// components/layout/home/SegmentTabComponent.tsx

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Option {
  label: string;
  value: string;
}

const services: Option[] = [
  { label: "Web Development", value: "web-dev" },
  { label: "UI/UX Design", value: "ui-ux" },
  { label: "Digital Marketing", value: "digital-marketing" },
  { label: "PPC Specialist", value: "ppc specialist" },
  { label: "Recruitter", value: "recruitter" },
  { label: "Virtual Assistant", value: "virtual-assistant" },
  { label: "ERP Specialist", value: "erp-specialist" },
  { label: "Supply Chain Automation Consultant", value: "supply-chain" },
  { label: "BI Developer", value: "bi-developer" },
];

const serviceOptions: Record<string, Option[]> = {
  "web-dev": [
    { label: "Frontend", value: "frontend" },
    { label: "Backend", value: "backend" },
    { label: "Full Stack", value: "fullstack" },
    { label: "Mobile Apps", value: "mobile application development" },
    { label: "Custom Tools", value: "customized tool development" },
    { label: "Integrations", value: "integrations" },
    { label: "I'd like your guidance.", value: "req for web-dev advise" },
  ],
  "ui-ux": [
    { label: "Branding", value: "branding" },
    { label: "Marketing Materials", value: "marketing materials" },
    { label: "Website Design", value: "website design" },
    { label: "App Graphics", value: "app graphics" },
    { label: "Image and Video", value: "image and video" },
    { label: "3D modeling", value: "3D modeling" },
    { label: "App Graphics", value: "app graphics" },
    { label: "I'd like your guidance.", value: "req for ui-ux advise" },
  ],
  "digital-marketing": [
    { label: "SEO", value: "seo" },
    { label: "Content Marketing", value: "content" },
  ],
  "ppc specialist": [
    { label: "Linkedin Adds", value: "linkedin adds" },
    { label: "Meta Adds", value: "meta adds" },
    { label: "various", value: "various" },
    { label: "I'd like your guidance.", value: "req for PPC advise" },
  ],
  recruitter: [
    { label: "Engineering", value: "engineering" },
    { label: "Chemicals", value: "chemicals" },
    { label: "Retail", value: "retail" },
    { label: "Ecommerce", value: "ecommerce" },
    { label: "Technology", value: "technology" },
    { label: "Finance", value: "finance" },
    { label: "Healthcare", value: "healthcare" },
    { label: "Hospitality", value: "hospitality" },
    { label: "Other", value: "other" },
    { label: "I'd like your guidance.", value: "req for recruitter advise" },
  ],
  "virtual-assistant": [
    { label: "Customer Services", value: "customer services" },
    { label: "Bookkeeping", value: "bookkeeping" },
    { label: "General Adminsitration", value: "general adminsitration" },
    { label: "Marketing", value: "marketing" },
    { label: "Technical", value: "technical" },
    { label: "Specialized Services", value: "specialized services" },
    { label: "I'd like your guidance.", value: "req for recruitter advise" },
  ],
  "erp-specialist": [
    { label: "SAP", value: "SAP" },
    { label: "ORACLE CLOUD", value: "ORACLE CLOUD" },
    { label: "ODOO", value: "ODOO" },
    { label: "ORACLE EBS", value: "ORACLE EBS" },
    { label: "QUICKBOOKS", value: "QUICKBOOKS" },
    { label: "Microsoft Dynamics", value: "Microsoft dynamics" },
    { label: "Workday", value: "workday" },
    { label: "Monday.com", value: "Monday.com" },
    { label: "Others", value: "others" },
    { label: "I'd like your guidance.", value: "req for recruitter advise" },
  ],
  "supply-chain": [
    { label: "AI Supply Chain Agent", value: "AI supply chain agent" },
    { label: "Warehouse Automation", value: "warehouse automation" },
    { label: "Transport & Logistics", value: "transport & logistics" },
    {
      label: "Robotic Process Automation",
      value: "robotic process automation",
    },
    {
      label: "Procurement & Demand Forecasting",
      value: "procurement & demand forecasting",
    },
    {
      label: "Data and Inetgration Automation",
      value: "data and inetgration automation",
    },
    { label: "I'd like your guidance.", value: "req for recruitter advise" },
  ],
  "bi-developer": [
    { label: "Databases (like SQL Server, Oracle)", value: "databases" },
    {
      label: "ETL tools (such as SSIS, Informatica, Talend)",
      value: "ETL tools",
    },
    {
      label: "BI platforms (Power BI, Tableau, Qlik)",
      value: "BI platforms (Power BI, Tableau, Qlik)",
    },
    {
      label: "Cloud Services (AWS, Azure, GCP)",
      value: "cloud services (AWS, Azure, GCP)",
    },
    {
      label: "Programming Languages (SQL, Python, DAX)",
      value: "programming languages (SQL,Python,DAX)",
    },
    { label: "I'd like your guidance.", value: "req for recruitter advise" },
  ],
};

const euCountries = [
  "Netherlands",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Belgium",
  "Austria",
  "Sweden",
];

export default function SegmentTabs() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    country: "Netherlands",
    city: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);
  const handleSkip = () => setStep((prev) => prev + 1);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) {
      alert("Email is mandatory!");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          service: selectedService,
          option: selectedOption,
        }),
      });
      if (res.ok) {
        setSuccess(true);
        setFormData({
          email: "",
          name: "",
          phone: "",
          country: "Netherlands",
          city: "",
        });
      } else alert("Failed to send enquiry. Please try again.");
    } catch (err) {
      console.error(err);
      alert("Error sending enquiry.");
    } finally {
      setLoading(false);
    }
  };

  const steps = ["Service", "Option", "Enquiry"];

  return (
    <div className="w-full mt-20 max-w-3xl mx-auto bg-white text-[#356666] opacity-90 p-8 rounded-xl shadow-lg">
      <div>
        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-8 relative">
          {steps.map((s, i) => (
            <div key={s} className="flex-1 flex items-center relative">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center z-10 font-semibold  text-white ${
                  step > i ? "bg-[#467a7e]" : "bg-gray-300"
                }`}
              >
                {i + 1}
              </div>
              {i !== steps.length - 1 && (
                <div
                  className={`absolute top-3.5 left-10 h-1 flex-1 ${
                    step > i + 1 ? "bg-[#467a7e]" : "bg-gray-300"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {/* Step 1: Service */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-4"
            >
              <h2 className="text-2xl font-semibold">Select a Service</h2>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="border px-3 py-2 rounded shadow-sm focus:ring-2 focus:ring-[#467a7e]"
              >
                <option value="">-- Select Service --</option>
                {services.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
              <div className="flex justify-between mt-4">
                <button
                  onClick={handleSkip}
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                  Skip
                </button>
                <button
                  disabled={!selectedService}
                  onClick={handleNext}
                  className={`px-4 py-2 bg-[#467a7e] text-white rounded ${
                    !selectedService
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-[#356666]"
                  }`}
                >
                  Continue
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 2: Option */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-4"
            >
              <h2 className="text-2xl font-semibold">Select Option</h2>
              <select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="border px-3 py-2 rounded shadow-sm focus:ring-2 focus:ring-[#467a7e]"
              >
                <option value="">-- Select Option --</option>
                {selectedService &&
                  serviceOptions[selectedService].map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
              </select>
              <div className="flex justify-between mt-4">
                <button
                  onClick={handleBack}
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                  Go Back
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={handleSkip}
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    Skip
                  </button>
                  <button
                    disabled={!selectedOption}
                    onClick={handleNext}
                    className={`px-4 py-2 bg-[#467a7e] text-white rounded ${
                      !selectedOption
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-[#356666]"
                    }`}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Enquiry Form */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-4"
            >
              <h2 className="text-2xl font-semibold">Enquiry Form</h2>
              {success && (
                <div className="p-4 bg-green-100 text-green-800 rounded">
                  Enquiry sent successfully!
                </div>
              )}
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email (required)"
                  required
                  value={formData.email}
                  onChange={handleFormChange}
                  className="border px-3 py-2 rounded shadow-sm focus:ring-2 focus:ring-[#467a7e]"
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="border px-3 py-2 rounded shadow-sm focus:ring-2 focus:ring-[#467a7e]"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  className="border px-3 py-2 rounded shadow-sm focus:ring-2 focus:ring-[#467a7e]"
                />
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleFormChange}
                  className="border px-3 py-2 rounded shadow-sm focus:ring-2 focus:ring-[#467a7e]"
                >
                  {euCountries.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleFormChange}
                  className="border px-3 py-2 rounded shadow-sm focus:ring-2 focus:ring-[#467a7e]"
                />
                <div className="flex justify-between mt-2">
                  <button
                    onClick={handleBack}
                    type="button"
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    Go Back
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-4 py-2 bg-[#467a7e] text-white rounded hover:bg-[#356666]"
                  >
                    {loading ? "Sending..." : "Submit"}
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* "use client";
import { useState } from "react";

interface Option {
  label: string;
  value: string;
}

const services: Option[] = [
  { label: "Web Development", value: "web-dev" },
  { label: "UI/UX Design", value: "ui-ux" },
  { label: "Digital Marketing", value: "digital-marketing" },
];

const serviceOptions: Record<string, Option[]> = {
  "web-dev": [
    { label: "Frontend", value: "frontend" },
    { label: "Backend", value: "backend" },
    { label: "Full Stack", value: "fullstack" },
  ],
  "ui-ux": [
    { label: "Wireframing", value: "wireframing" },
    { label: "Prototyping", value: "prototyping" },
  ],
  "digital-marketing": [
    { label: "SEO", value: "seo" },
    { label: "Content Marketing", value: "content" },
  ],
};

const euCountries = [
  "Netherlands",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Belgium",
  "Austria",
  "Sweden",
];

export default function SegmentTabs() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    country: "Netherlands",
    city: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleSkip = () => setStep((prev) => prev + 1);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) {
      alert("Email is mandatory!");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, service: selectedService, option: selectedOption }),
      });
      if (res.ok) {
        setSuccess(true);
        setFormData({ email: "", name: "", phone: "", country: "Netherlands", city: "" });
      } else {
        alert("Failed to send enquiry. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending enquiry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
    //  Step 1: Select Service
      {step === 1 && (
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Select a Service</h2>
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="border px-3 py-2 rounded"
          >
            <option value="">-- Select Service --</option>
            {services.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
          <div className="flex justify-between mt-4">
            <button
              onClick={handleSkip}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Skip
            </button>
            <button
              disabled={!selectedService}
              onClick={handleNext}
              className={`px-4 py-2 bg-[#467a7e] text-white rounded ${
                !selectedService ? "opacity-50 cursor-not-allowed" : "hover:bg-[#356666]"
              }`}
            >
              Continue
            </button>
          </div>
        </div>
      )}

      // Step 2: Select Option
      {step === 2 && (
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Select Option</h2>
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="border px-3 py-2 rounded"
          >
            <option value="">-- Select Option --</option>
            {selectedService &&
              serviceOptions[selectedService].map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
          </select>
          <div className="flex justify-between mt-4">
            <button
              onClick={handleSkip}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Skip
            </button>
            <button
              disabled={!selectedOption}
              onClick={handleNext}
              className={`px-4 py-2 bg-[#467a7e] text-white rounded ${
                !selectedOption ? "opacity-50 cursor-not-allowed" : "hover:bg-[#356666]"
              }`}
            >
              Continue
            </button>
          </div>
        </div>
      )}

      // Step 3: Enquiry Form 
      {step === 3 && (
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Enquiry Form</h2>
          {success && (
            <div className="p-4 bg-green-100 text-green-800 rounded">Enquiry sent successfully!</div>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="email"
              name="email"
              placeholder="Email (required)"
              required
              value={formData.email}
              onChange={handleFormChange}
              className="border px-3 py-2 rounded"
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleFormChange}
              className="border px-3 py-2 rounded"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleFormChange}
              className="border px-3 py-2 rounded"
            />
            <select
              name="country"
              value={formData.country}
              onChange={handleFormChange}
              className="border px-3 py-2 rounded"
            >
              {euCountries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleFormChange}
              className="border px-3 py-2 rounded"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-[#467a7e] text-white rounded hover:bg-[#356666]"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
} */
