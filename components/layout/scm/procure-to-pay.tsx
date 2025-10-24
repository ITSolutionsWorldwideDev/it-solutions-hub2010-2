// components/layout/scm/procure-to-pay.tsx

import React, { useState, useEffect, useRef } from "react";

interface QuestionData {
  question: string;
  options: [string, number][];
  department: string;
  questionIndex: number;
}

export interface DepartmentData {
  weight: number;
  questions: {
    question: string;
    options: [string, number][];
  }[];
}

export interface SubmitData {
  responses: Record<string, number>;
  departmentScores: Record<string, number>;
  totalScore: number;
  departmentSummaries: Record<string, string>;
}

type Props = {
  onSubmit: (
    responses: SubmitData["responses"],
    departmentScores: SubmitData["departmentScores"],
    totalScore: number,
    departmentSummaries: SubmitData["departmentSummaries"]
  ) => void;
};

// Shuffle function to randomize the questions
const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};
const departmentsData: Record<string, DepartmentData> = {
  Systems: {
    weight: 0.2,
    questions: [
      {
        question:
          "Does your purchasing team have a sourcing database in a system (not excel)?",
        options: [
          ["No, we manage it in excel / manually", 1],
          ["Yes, but it is not fully utilized", 2],
          ["Yes, but changes are not updated immediately", 3],
          ["We are using a data management system to maintain this", 4],
          ["We are managing this through our ERP system", 5],
        ],
      },
      {
        question:
          "Do you have a system to forecast demand (sales) beyond same as last year?",
        options: [
          ["Not really", 1],
          ["We create a forecast in excel once a year", 2],
          ["We create a forecast in excel once a quarter", 3],
          ["We load our forecast to the system", 4],
          ["We are managing our forecast real-time in the system", 5],
        ],
      },
      {
        question: "How do you collaborate with suppliers?",
        options: [
          ["We mainly communicate through phone calls", 1],
          ["We mainly communicate through email, unless there is an issue", 2],
          [
            "We have an automation set up to send orders automatically to suppliers",
            3,
          ],
          ["We have supplier portal implemented for our main suppliers", 4],
          ["We are fully utilizing supplier portal for all our suppliers", 5],
        ],
      },
      {
        question:
          "Do you have an automated three-way match for accounts payable?",
        options: [
          ["We do not use three way matching", 1],
          ["Three-way matching is applied to inventory items", 2],
          [
            "Three-way matching is applied to all orders and validated manually",
            3,
          ],
          [
            "We use a system to check the three-way match, issue solving is done outside of the system",
            4,
          ],
          [
            "We have a fully automated system in place to validate three-way matching",
            5,
          ],
        ],
      },
      {
        question: "How are supplier negotiations and agreements managed?",
        options: [
          ["We don't send a lot of RFQs or Tenders", 1],
          ["RFQs and purchasing agreements are managed outside the system", 2],
          [
            "We are currently implementing a system to manage RFQs and purchasing agreements",
            3,
          ],
          [
            "RFQs are done through emails, purchasing agreements are managed in the system",
            4,
          ],
          [
            "We do every tender / RFQ through the system including creation and management of purchase agreements   in the system",
            5,
          ],
        ],
      },
    ],
  },
  Process: {
    weight: 0.2,
    questions: [
      {
        question: "How easy is it to buy from new suppliers?",
        options: [
          ["We do not have a specific process to onboard suppliers", 1],
          [
            "It depends on the type of supplier, there is no specific timeline",
            2,
          ],
          ["It takes 3 to 6 months to onboard new suppliers", 3],
          ["It takes 1 to 3 months to onboard new suppliers", 4],
          ["It takes less than a month to onboard new suppliers", 5],
        ],
      },
      {
        question: "How are you managing stock levels and expediting materials?",
        options: [
          ["We don't have a process to manage this", 1],
          ["Through emails, phone calls, and excel", 2],
          [
            "Our suppliers send us a weekly report with status of open orders",
            3,
          ],
          [
            "We extract data from warehouse and open purchase orders to check the status",
            4,
          ],
          ["We have WMS and a MRP system to manage supply and demand", 5],
        ],
      },
      {
        question: "How do new employees get introduced to your systems?",
        options: [
          [
            "They usually just start using the system and ask questions when they get stuck",
            1,
          ],
          ["There are user manuals but most are outdated", 2],
          ["They get a on-the-job training from their peer colleagues", 3],
          ["They get user manuals to read through", 4],
          ["They have to follow a training program before getting access", 5],
        ],
      },
      {
        question:
          "Who in your organization own the process of procurement of materials and services?",
        options: [
          [
            "Each department lead or project manager is purchasing their required materials and services directly",
            1,
          ],
          ["The director is doing all the purchasing activities", 2],
          [
            "There is a procurement department, but each department has the flexibility to purchase if required",
            3,
          ],
          [
            "The Procurement department is purchasing materials, HR / subcontracting / facility contracts are managed by someone else",
            4,
          ],
          [
            "There is a dedicated procurement department, only they are allowed to purchase materials and services",
            5,
          ],
        ],
      },
    ],
  },
  Analytics: {
    weight: 0.2,
    questions: [
      {
        question:
          "Are you tracking supplier performance and if yes, are your suppliers improving?",
        options: [
          ["No", 1],
          ["We keep a log file of complaints and discuss it with suppliers", 2],
          ["We extract data once a year to check supplier performance", 3],
          ["We have reports and use it for our top suppliers", 4],
          [
            "We use supplier KPIs measured through our analytics tool. Performance results are frequently discussed and improved",
            5,
          ],
        ],
      },
      {
        question: "How easy is it to extract data from your current systems?",
        options: [
          ["We don't have a system", 1],
          ["There is no possibility to export data from the current system", 2],
          ["It's a nightmare to extract data", 3],
          [
            "Data can be exported, but needs to be modified to make it fit for purpose",
            4,
          ],
          ["Easy, I can get the data I need within a few minutes", 5],
        ],
      },
      {
        question: "How does your weekly and monthly reporting cycle look like?",
        options: [
          ["Not sure", 1],
          ["There are no weekly or monthly reporting cycles in the company", 2],
          [
            "The data we have is not accurate, reporting is created manually",
            3,
          ],
          ["Data is extracted to create weekly / monthly reports", 4],
          [
            "Our reports can be accessed real time through our analytics tool",
            5,
          ],
        ],
      },
      {
        question: "How are you managing your procure-to-pay performance?",
        options: [
          ["We are not actively measuring P2P performance", 1],
          ["We have a log to track issues", 2],
          ["We extract data and update our KPIs manually", 4],
          ["We have KPI dashboards that are updated real-time", 5],
        ],
      },
    ],
  },
  "S&OP": {
    weight: 0.2,
    questions: [
      {
        question: "How often do different departments meet?",
        options: [
          ["Never", 1],
          ["When there are issues", 2],
          ["Monthly", 3],
          ["Weekly", 4],
          ["Daily", 5],
        ],
      },
      {
        question: "How are forecasts shared between departments",
        options: [
          ["Not sure", 1],
          ["There are no weekly or monthly reporting cycles in the company", 2],
          [
            "The data we have is not accurate, reporting is created manually",
            3,
          ],
          ["Data is extracted to create weekly / monthly reports", 4],
          [
            "Our reports can be accessed real time through our analytics tool",
            5,
          ],
        ],
      },
      {
        question: "How many fixed price agreements do you have in place?",
        options: [
          ["We don't have any in our work place.", 1],
          [
            "We currently maintain a portfolio of fixed-price agreements across various categories, including raw materials, services, and indirect spend",
            2,
          ],
          [
            "We have 2 fixed-price agreements for direct materials and 3 agreements for services and indirect procurement",
            3,
          ],
          [
            "We manage equal number of fixed-price agreements, and we regularly assess these agreements to ensure they remain competitive.",
            4,
          ],
          [
            "We have about 3 fixed-price contracts in place, mostly covering high-volume or critical items where cost consistency is essential",
            5,
          ],
        ],
      },
      {
        question:
          "Is your sales and project team made aware of  supplier lead times and stock shortages and if so, how is this communicated?",
        options: [
          ["We are not actively measuring P2P performance", 1],
          ["We have a log to track issues", 2],
          ["We extract data and update our KPIs manually", 4],
          ["We have KPI dashboards that are updated real-time", 5],
        ],
      },
    ],
  },
  "Enviroment & Sustainability": {
    weight: 0.2,
    questions: [
      {
        question:
          "Can you divert shipments without them ever crossing your dock doors?",
        options: [
          ["No", 1],
          ["We keep a log file of complaints and discuss it with suppliers", 2],
          ["We extract data once a year to check supplier performance", 3],
          ["We have reports and use it for our top suppliers", 4],
          [
            "We use supplier KPIs measured through our analytics tool. Performance results are frequently discussed and improved",
            5,
          ],
        ],
      },
      {
        question:
          "What proportion of all the materials your organization purchases, has the manufacturing origin been verified?",
        options: [
          ["Not sure", 1],
          ["There are no weekly or monthly reporting cycles in the company", 2],
          [
            "The data we have is not accurate, reporting is created manually",
            3,
          ],
          ["Data is extracted to create weekly / monthly reports", 4],
          [
            "Our reports can be accessed real time through our analytics tool",
            5,
          ],
        ],
      },
      {
        question:
          "How do you balance sustainability with cost and operational efficiency in Procue-to-Pay Cycle?",
        options: [
          ["We don't have a system", 1],
          [
            "We evaluate suppliers on both sustainability metrics and cost-effectiveness by conducting regular sustainability assessments",
            2,
          ],
          [
            "We use advanced spend analytics to identify areas where we can reduce waste, streamline purchasing, and consolidate orders",
            3,
          ],
          [
            "We look beyond the initial purchase price and consider the Total Cost of Ownership (TCO) when making procurement decisions",
            4,
          ],
          [
            "By collaborating with suppliers, we create mutually beneficial sustainability programs",
            5,
          ],
        ],
      },
      {
        question: "How are you managing your procure-to-pay performance?",
        options: [
          ["We are not actively measuring P2P performance", 1],
          ["We have a log to track issues", 2],
          ["We extract data and update our KPIs manually", 4],
          ["We have KPI dashboards that are updated real-time", 5],
        ],
      },
    ],
  },
};

const ProcureToPay: React.FC<Props> = ({ onSubmit }) => {
  const [responses, setResponses] = useState<Record<string, number>>({});
  const [shuffledQuestions, setShuffledQuestions] = useState<QuestionData[]>(
    []
  );
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [answered, setAnswered] = useState<boolean>(false);

  const questionsPerPage = 5;
  const totalPages = Math.ceil(shuffledQuestions.length / questionsPerPage);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // 🔁 Scroll to top on page change
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [currentPage]);

  // 🎲 Shuffle questions on load
  useEffect(() => {
    const allQuestions = Object.keys(departmentsData).flatMap((department) =>
      departmentsData[department].questions.map((question, index) => ({
        ...question,
        department,
        questionIndex: index,
      }))
    );
    setShuffledQuestions(shuffleArray(allQuestions));
  }, []);

  useEffect(() => {
    const start = currentPage * questionsPerPage;
    const end = start + questionsPerPage;
    const currentQuestions = shuffledQuestions.slice(start, end);

    const allAnswered = currentQuestions.every((q) => {
      const key = `${q.department}-${q.questionIndex}`;
      return responses[key] !== undefined;
    });

    setAnswered(allAnswered);
  }, [responses, currentPage, shuffledQuestions]);

  const handleOptionChange = (
    department: string,
    questionIndex: number,
    value: number
  ) => {
    setResponses((prev) => ({
      ...prev,
      [`${department}-${questionIndex}`]: value,
    }));
  };

  const getDepartmentSummary = (department: string, score: number): string => {
    if (department === "Systems") {
      if (score <= 2)
        return "Systems likely need upgrades to streamline procurement. Investing in digital tools can improve efficiency.";
      if (score <= 3.5)
        return "Acceptable, though updates to systems would boost performance.";
      if (score <= 4.5)
        return "Efficient systems contributing to smooth procurement processes.";
      return "Outstanding systems, ensuring a seamless procure-to-pay cycle.";
    } else if (department === "Process") {
      if (score <= 2)
        return "Processes appear ineffective, potentially causing delays. Streamlining may help.";
      if (score <= 3.5)
        return "Adequate, though refinements could improve flow.";
      if (score <= 4.5) return "Effective processes, with minimal bottlenecks.";
      return "Excellent! Your processes are well-optimized for procurement efficiency.";
    } else if (department === "Analytics") {
      if (score <= 2)
        return "Limited analytics hinder decision-making. Implementing robust analytics is recommended.";
      if (score <= 3.5)
        return "Adequate analytics, though further integration could enhance insights.";
      if (score <= 4.5)
        return "Strong analytics, providing valuable data for procurement.";
      return "Excellent! Data-driven decisions are well-supported by analytics.";
    } else if (department === "S&OP") {
      if (score <= 2)
        return "Sales and operations planning needs restructuring for better procurement alignment.";
      if (score <= 3.5)
        return "Some coordination exists, though further alignment could help.";
      if (score <= 4.5)
        return "Good coordination between S&OP, supporting procurement.";
      return "Excellent! S&OP is highly integrated, fostering seamless operations.";
    } else if (department === "Enviroment & Sustainability") {
      if (score <= 2)
        return "Limited environmental focus. Incorporating sustainability could benefit brand value.";
      if (score <= 3.5)
        return "Average focus on sustainability. Further improvements may help.";
      if (score <= 4.5)
        return "Good commitment to sustainable procurement practices.";
      return "Excellent! Sustainability in procurement is fully optimized.";
    }

    return "No summary available.";
  };

  type Department =
    | "Systems"
    | "Process"
    | "Analytics"
    | "S&OP"
    | "Enviroment & Sustainability";

  type DepartmentScores = Record<Department, number>;
  type DepartmentSummaries = Record<Department, string>;

  const handleSubmit = () => {
    let totalScore = 0;
    const departmentScores: Partial<DepartmentScores> = {};
    const departmentSummaries: Partial<DepartmentSummaries> = {};

    Object.keys(departmentsData).forEach((department) => {
      const { weight, questions } = departmentsData[department as Department];
      let departmentScore = 0;

      questions.forEach((question, index) => {
        const selectedOption = responses[`${department}-${index}`];
        if (selectedOption !== undefined) {
          departmentScore += selectedOption;
        }
      });

      const fixedScore = parseFloat(
        ((departmentScore / (questions.length * 5)) * 5).toFixed(1)
      );

      departmentScores[department as Department] = fixedScore;
      departmentSummaries[department as Department] = getDepartmentSummary(
        department as Department,
        fixedScore
      );
      totalScore += fixedScore / 5;
    });

    const total = parseFloat(totalScore.toFixed(2));
    onSubmit(responses, departmentScores, total, departmentSummaries);
  };

  const progressPercentage = ((currentPage + 1) / totalPages) * 100;

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Procure-To-Pay Questionnaire</h2>

      <div ref={containerRef} className="overflow-y-auto max-h-80">
        {shuffledQuestions
          .slice(
            currentPage * questionsPerPage,
            (currentPage + 1) * questionsPerPage
          )
          .map((questionData, index) => (
            <div key={index} className="mb-4">
              <p className="font-medium mb-2">{questionData.question}</p>
              <div>
                {questionData.options.map(([optionText, optionValue]) => (
                  <label key={optionValue} className="block">
                    <input
                      type="radio"
                      name={`${questionData.department}-${questionData.questionIndex}`}
                      value={optionValue}
                      checked={
                        responses[
                          `${questionData.department}-${questionData.questionIndex}`
                        ] === optionValue
                      }
                      onChange={() =>
                        handleOptionChange(
                          questionData.department,
                          questionData.questionIndex,
                          optionValue
                        )
                      }
                      className="mr-2"
                    />
                    {optionText}
                  </label>
                ))}
              </div>
            </div>
          ))}
      </div>

      <div className="w-full bg-gray-300 h-4 rounded mt-4">
        <div
          className="bg-[#175864] h-4 rounded"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      <div className="mt-6 flex justify-center">
        {currentPage < totalPages - 1 ? (
          <button
            type="button"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={!answered}
            className={`p-2 rounded cursor-pointer ${
              answered ? "bg-[#175864] text-white" : "bg-gray-300 text-gray-500"
            }`}
          >
            Next Page
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!answered}
            className={`p-2 rounded cursor-pointer ${
              answered ? "bg-[#175864] text-white" : "bg-gray-300 text-gray-500"
            }`}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default ProcureToPay;
