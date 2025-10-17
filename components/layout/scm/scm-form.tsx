// components/layout/scm/scm-form.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Chart } from "chart.js";
// import initServerI18n from "@/utils/serverTranslation";
import SpiderWebChart from "./spider-web-chart";
import ProcureToPay from "./procure-to-pay";
import Link from "next/link";
import WarehouseQuestionnaire from "./warehouse-questionaaire";
import Transport from "./transport";
import Logistics from "./logistics";

type SCMFormProps = {
  locale: string;
  translations: Record<string, any>;
};

interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  country: string;
  companyName: string;
  position: string;
}

interface PersonalInfoErrors {
  name?: string;
  email?: string;
  phone?: string;
  country?: string;
  companyName?: string;
  position?: string;
}

interface DepartmentScores {
  [department: string]: number;
}

interface DepartmentSummaries {
  [department: string]: string;
}

interface QuestionnaireResponse {
  question: string;
  answer: string;
}

export default function SCMForm({ locale, translations }: SCMFormProps) {
  //   const i18nInstance = await initServerI18n(locale);
  //   const t = await i18nInstance.getFixedT(locale, "common");

  const [step, setStep] = useState(1);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    name: "",
    email: "",
    phone: "",
    country: "",
    companyName: "",
    position: "",
  });
  const [errors, setErrors] = useState<PersonalInfoErrors>({});
  const [responses, setResponses] = useState<Record<string, number>>({});

  const [departmentScores, setDepartmentScores] = useState<DepartmentScores>(
    {}
  );
  const [departmentSummaries, setDepartmentSummaries] =
    useState<DepartmentSummaries>({});
  const [totalScore, setTotalScore] = useState<number>(0);
  const [selectedQuestionnaire, setSelectedQuestionnaire] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailStatus, setEmailStatus] = useState<string | null>(null);
  const [isChartReady, setIsChartReady] = useState(false);
  const chartRef = useRef<Chart | null>(null);

  const validateEmail = (email: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone: string): boolean =>
    /^(\+|±)?\d{1,3}( ?\d{2,3})?( ?\d{3} ?\d{4})$/.test(phone);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handlePersonalInfoSubmit = () => {
    const newErrors: PersonalInfoErrors = {};

    if (!personalInfo.name) newErrors.name = "Name is required";
    if (!personalInfo.email || !validateEmail(personalInfo.email))
      newErrors.email = "Invalid email";
    if (!personalInfo.phone || !validatePhone(personalInfo.phone))
      newErrors.phone = "Invalid phone number";
    if (!personalInfo.country) newErrors.country = "Country is required";
    if (!personalInfo.companyName)
      newErrors.companyName = "Company Name is required";
    if (!personalInfo.position) newErrors.position = "Position is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setStep(2);
    }
  };

  const handleQuestionnaireSelect = (questionnaire: string) => {
    console.log("questionnaire ==== ", questionnaire);
    setSelectedQuestionnaire(questionnaire);
    setStep(3);
  };

  const handleQuestionnaireSubmit = (
    responses: Record<string, number>,
    departmentScores: Record<string, number>,
    totalScore: number,
    departmentSummaries: Record<string, string>
  ): void => {
    setResponses(responses);
    setDepartmentScores(departmentScores);
    setTotalScore(totalScore);
    setDepartmentSummaries(departmentSummaries);
    setStep(4);
    setIsChartReady(false);
  };

  const handleSendToMail = async () => {
    if (chartRef.current && isChartReady) {
      try {
        setIsLoading(true);
        const chartImage = chartRef.current.toBase64Image(); // ✅ Works now

        const response = await fetch(
          "https://us-central1-email-itsww-cedb9.cloudfunctions.net/sendResults",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              personalInfo,
              departmentScores,
              totalScore,
              chartImage,
              selectedDepartment: selectedQuestionnaire,
              departmentSummaries,
            }),
          }
        );

        if (!response.ok) throw new Error("Failed to send email");

        setEmailStatus("Email sent successfully!"); // ✅ Works now
      } catch (error) {
        setEmailStatus("Failed to send email. Please try again later.");
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleRestart = () => {
    setStep(1);
    setPersonalInfo({
      name: "",
      email: "",
      phone: "",
      country: "",
      companyName: "",
      position: "",
    });
    setErrors({});
    setResponses({});
    setDepartmentScores({});
    setTotalScore(0);
    setEmailStatus(null);
  };

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (step === 4 && isChartReady) {
      timeoutId = setTimeout(() => {
        handleSendToMail();
      }, 1000);
    }

    return () => clearTimeout(timeoutId);
  }, [step, isChartReady]);

  return (
    <div className="container mx-auto ">
      <div className="flex-grow flex items-center justify-center p-4 ">
        <div className="lg:p-20 w-full ">
          {step === 1 ? (
            <div>
              <h2 className="text-xl font-bold mb-4">Personal Information</h2>
              <div className="mb-4">
                <label className="block mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={personalInfo.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={personalInfo.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block mb-1">
                  Phone Number (with country code)
                </label>
                <input
                  type="text"
                  name="phone"
                  value={personalInfo.phone}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  placeholder="+31XXXXXXXXXX"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block mb-1">Country</label>
                <input
                  type="text"
                  name="country"
                  value={personalInfo.country}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
                {errors.country && (
                  <p className="text-red-500 text-sm mt-1">{errors.country}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block mb-1">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={personalInfo.companyName}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
                {errors.companyName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.companyName}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label className="block mb-1">Your Role In The Company</label>
                <input
                  type="text"
                  name="position"
                  value={personalInfo.position}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
                {errors.position && (
                  <p className="text-red-500 text-sm mt-1">{errors.position}</p>
                )}
              </div>
              <button
                onClick={handlePersonalInfoSubmit}
                className="bg-[#278083] text-white px-4 py-2 rounded cursor-pointer"
              >
                Proceed To Select Department
              </button>
            </div>
          ) : step === 2 ? (
            <div className=" max-w-3xl m-auto">
              <h2 className="text-xl font-bold mb-10">
                Please Select The Department You Would Like To Conduct A Health
                Check For.
              </h2>

              <div className="flex flex-wrap sm:flex-col">
                <button
                  onClick={() => handleQuestionnaireSelect("Procure-to-pay")}
                  className="bg-[#278083] text-white px-4 py-2 rounded mr-4 mb-3 cursor-pointer"
                >
                  Procure-to-pay
                </button>
                <button
                  onClick={() =>
                    handleQuestionnaireSelect("Transport Management")
                  }
                  className="bg-[#278083] text-white px-4 py-2 rounded mr-4 mb-3 cursor-pointer"
                >
                  Transport Management
                </button>
                <button
                  onClick={() =>
                    handleQuestionnaireSelect("Logistics Planning")
                  }
                  className="bg-[#278083] text-white px-4 py-2 rounded mr-4 mb-3 cursor-pointer"
                >
                  Logistic Planning
                </button>
                <button
                  onClick={() => handleQuestionnaireSelect("Warehousing")}
                  className="bg-[#278083] text-white px-4 py-2 rounded mr-4 mb-3 cursor-pointer"
                >
                  Warehouse Management
                </button>
              </div>
            </div>
          ) : step === 3 ? (
            <>
              {selectedQuestionnaire === "Procure-to-pay" ? (
                <ProcureToPay onSubmit={handleQuestionnaireSubmit} />
              ) : selectedQuestionnaire === "Transport Management" ? (
                <Transport onSubmit={handleQuestionnaireSubmit} />
              ) : selectedQuestionnaire === "Logistics Planning" ? (
                <Logistics onSubmit={handleQuestionnaireSubmit} />
              ) : selectedQuestionnaire === "Warehousing" ? (
                <WarehouseQuestionnaire onSubmit={handleQuestionnaireSubmit} />
              ) : null}
            </>
          ) : (
            <div>
              {/* <SpiderWebChart
                responses={responses}
                departmentScores={departmentScores}
                totalScore={totalScore}
                ref={chartRef}
                selectedDepartment={selectedQuestionnaire}
                onRender={() => setIsChartReady(true)}
              />  */}
              <SpiderWebChart
                departmentScores={departmentScores}
                selectedDepartment="Supply Chain"
                onRender={() => console.log("Chart rendered!")}
                ref={chartRef}
              />
              <p className="mt-4 text-lg font-semibold mb-4">
                Total Score: {totalScore} / 5
              </p>
              <h3 className="font-bold mb-4">Department Summaries:</h3>
              {Object.entries(departmentSummaries).map(
                ([department, summary]) => (
                  <div key={department} className="mb-4">
                    <h4 className="font-bold">{department}</h4>
                    {/* <p>{summary}</p> */}
                  </div>
                )
              )}
              {isLoading && <p>Sending email...</p>}
              {emailStatus && <p>{emailStatus}</p>}
              <p className="mt-4 mb-4 text-gray-500">
                The results of this SCM health check are based on the
                information we received through the questionnaire. In order to
                create a complete tailor-made assessment, we would like to visit
                your site to analyze your departments. The analysis is
                completely free of charge. For the general terms and conditions,
                please get in touch. We appreciate your trust in our services.
              </p>
              <Link href="/supply-health-check">
                <button
                  onClick={handleRestart}
                  className="bg-[#278083] text-white px-4 py-2 rounded mt-4 cursor-pointer"
                >
                  Restart
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
