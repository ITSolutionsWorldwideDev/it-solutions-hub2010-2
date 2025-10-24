// components/layout/scm/logistics.tsx

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
            "How easily can your current system integrate with new automation tools (e.g., AI-based forecasting, robotic process automation)?",
          options: [
            [
              "Very difficult, our systems are not compatible with advanced tools",
              1,
            ],
            ["Challenging, we would need significant upgrades", 2],
            ["Moderately, some systems will need updates", 3],
            ["Easily, we are ready to integrate with new tools", 4],
          ],
        },
        {
          question:
            "What level of technology is used in your logistics planning processes?",
          options: [
            ["Entirely manual / excel based", 1],
            ["Mostly manual / basic software", 2],
            ["Partially automated", 3],
            ["Fully automated", 4],
          ],
        },
        {
          question: "How accurate are your demand forecasts?",
          options: [
            ["< 60%", 1],
            ["60 - 80%", 2],
            ["80 - 90%", 3],
            ["> 90%", 5],
          ],
        },
        {
          question:
            "How do you handle data analysis and decision-making in logistics planning?",
          options: [
            ["Entirely manual, based on rough estimates", 1],
            ["Mostly manual, with basic analytics tools", 2],
            ["Partially automated", 3],
            ["Fully automated, with data-driven decision-making", 5],
          ],
        },
        {
          question:
            "How much time do your employees spend on repetitive tasks that could be automated (e.g., data entry, manual inventory checks)?",
          options: [
            ["> 50%", 1],
            ["25 - 50%", 2],
            ["10 - 25%", 3],
            ["< 10%", 5],
          ],
        },
      ],
    },
    "Internal Processes": {
      weight: 0.2,
      questions: [
        {
          question:
            "Which part of your logistics planning process is most prone to delays or errors?",
          options: [
            ["Demand Forecasting", 1],
            ["Scheduling", 2],
            ["Inventory Management", 3],
            ["Data transparency", 4],
            ["Automation", 5],
          ],
        },
        {
          question:
            "How often do you face communication gaps between departments (e.g., procurement, warehouse, transportation)?",
          options: [
            ["Very often", 1],
            ["Occasionally", 3],
            ["Communication is smooth", 5],
          ],
        },
        {
          question:
            "How effectively do you manage your inventory levels to meet customer demand?",
          options: [
            [
              "We cannot commit fixed lead times due to uncertain lead times",
              1,
            ],
            ["It fluctuates", 2],
            ["Usually meet demand, but we end up with overstock", 4],
            ["Always meet demand with minimal overstock/understock", 5],
          ],
        },
      ],
    },
    "Transport Scheduling and Cost": {
      weight: 0.2,
      questions: [
        {
          question:
            "How do you control and review transportation and logistics costs?",
          options: [
            ["Difficult to control", 1],
            ["We update the budgets regularly to control this", 2],
            ["Costs are consistently optimized and within budget", 4],
          ],
        },
        {
          question:
            "How often do you face logistics errors causing customer impact?",
          options: [
            ["More than 1 time per month", 1],
            ["2 - 4 times per quarter", 3],
            ["2 - 4 times per year", 5],
          ],
        },
        {
          question:
            "What is the frequency of delivery issues, such as shipping incorrect items or receiving damaged products, in customer orders?",
          options: [
            ["More than 1 time per month", 1],
            ["2 - 4 times per quarter", 4],
            ["2 - 4 times per year", 5],
          ],
        },
        {
          question:
            "Are your transportation routes planned to maximize efficiency and minimize costs?",
          options: [
            ["Yes, we have had the best possible routes planned for years", 1],
            ["Our planner looks at the best possible routes", 3],
            ["We continuously look for ways to improve", 4],
          ],
        },
        {
          question:
            "How do you handle disruptions in the supply chain (e.g., supplier delays, transportation strikes)?",
          options: [
            [
              "It is not possible to plan for this, we handle this as it occurs",
              1,
            ],
            ["We have some scenarios planned in our contingency plans", 2],
            ["We have contingency plans for most of our scenarios", 5],
          ],
        },
      ],
    },
    "Supplier Collaboration": {
      weight: 0.2,
      questions: [
        {
          question:
            "How often do you experience issues with the quality of goods received from suppliers (e.g., damaged or incorrect items)?",
          options: [
            [">10% of the shipments", 1],
            ["5-10% of the shipments", 2],
            ["1-5% of the shipments", 3],
            ["< 1% of the shipments", 5],
          ],
        },
        {
          question: "Are your suppliers reliable in delivering goods on time?",
          options: [
            ["It's a surprise most of the times", 1],
            ["Depends on the product, there are some delays", 2],
            [
              "Most of the suppliers have fixed delivery dates and meet their delivery dates",
              4,
            ],
          ],
        },
        {
          question:
            "What is the primary cause of delays in your supplier deliveries?",
          options: [
            ["Inconsistent planning", 1],
            ["Communication issues", 2],
            ["Capacity issues", 3],
            ["External factors (weather, etc)", 5],
          ],
        },
      ],
    },
    "Environment & Sustainability": {
      weight: 0.2,
      questions: [
        {
          question:
            "What measures do you take to reduce the carbon footprint of your transportation fleet?",
          options: [
            ["No specific measures", 1],
            ["Regularly optimize routes and use fuel-efficient vehicles", 3],
            [
              "Use electric or hybrid vehicles and optimize routes for minimal emissions",
              5,
            ],
          ],
        },
        {
          question:
            "Do you use any eco-friendly or sustainable packaging materials for shipments?",
          options: [
            ["We use regular packaging materials", 1],
            ["Some of our packaging materials are recyclable", 3],
            ["Only biodegradable or recyclable materials", 5],
          ],
        },
        {
          question:
            "How do you manage and minimize waste in your logistics processes (e.g., packaging waste, damaged goods)?",
          options: [
            ["We are thinking about implementing this", 1],
            ["We split waste for recycling purposes", 2],
            ["We have some recycling and waste reduction programs in place", 3],
            [
              "Go Green! We have a big focus on recycling and waste reduction programs",
              5,
            ],
          ],
        },
        {
          question:
            "How do you handle returned products and materials in terms of environmental responsibility?",
          options: [
            ["We manage returns in the traditional way we have for years", 1],
            ["We review returns before disposing them", 2],
            [
              "We recycle, reuse, or responsibly dispose of all returned products",
              5,
            ],
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
