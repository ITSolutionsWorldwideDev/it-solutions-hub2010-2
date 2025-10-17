// components/layout/scm/transport.tsx

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
            "Have you implemented any systems to manage your transport management (TMS)?",
          options: [
            ["No", 1],
            ["We are looking for options", 2],
            ["Yes, but it is not utilized to it's full capacity yet", 3],
            ["Yes, for sure!", 5],
          ],
        },
        {
          question:
            "How easily can your current system adapt to sudden changes in demand or new business models (e.g., e-commerce expansion)?",
          options: [
            [
              "Our system struggles to adapt to changes and is not designed for flexibility, requiring major overhauls or workarounds",
              2,
            ],
            [
              "Our system can handle changes, but it requires significant effort and manual processes to adjust",
              3,
            ],
            [
              "Our system can adapt to changes with minor adjustments, but it may require some manual intervention",
              4,
            ],
            [
              "Our system is fully flexible and can quickly adapt to any changes without significant effort",
              5,
            ],
          ],
        },
        {
          question:
            "How do you track vehicle location and driver performance in real-time?",
          options: [
            ["We don't have a system in place", 1],
            ["Drivers have to fill in a daily log file", 2],
            ["We use a tracking device and extract data when required", 3],
            ["We use a tracking device, integrated with our TMS", 5],
          ],
        },
        {
          question:
            "Do you use any data analysis tools for decison-making,route planning and performance measurement?",
          options: [
            ["No, we manually extract data to create reports", 1],
            ["Not yet, but we want to implement", 2],
            [
              "We use data analysis tools occasionally, mainly for performance measurement or route planning, but not consistently for decision-making.",
              3,
            ],
            [
              "We have a data warehouse that integrates data from all various systems into one reporting layer",
              5,
            ],
          ],
        },
      ],
    },
    "Fleet Management": {
      weight: 0.2,
      questions: [
        {
          question:
            "How much time do you spend on manual tasks like scheduling, routing, and tracking vehicles?",
          options: [
            [
              "These tasks are fully manual and take up a large portion of our daily operations.",
              1,
            ],
            [
              "We spend some time on these tasks, but a mix of manual and automated processes helps manage them.",
              3,
            ],
            [
              "We spend very little time on these tasks as most are automated.",
              5,
            ],
          ],
        },
        {
          question:
            "Are you able to quickly locate vehicles or drivers at any given time?",
          options: [
            [
              "We do not have tracking systems in place and rely on drivers to communicate their locations.",
              1,
            ],
            [
              "We can sometimes locate vehicles or drivers, but the process is inconsistent or unreliable.",
              3,
            ],
            [
              "We have real-time tracking capabilities that allow us to locate vehicles and drivers instantly.",
              5,
            ],
          ],
        },
        {
          question:
            "How do you ensure that your vehicles and drivers are compliant with regulations (e.g., hours of service, vehicle inspections)?",
          options: [
            ["Currently, there is no process in place to check this", 1],
            [
              "Compliance is tracked manually through paperwork and reports, with no digital or automated support.",
              2,
            ],
            [
              "We have technology in place to automatically track and ensure compliance with all regulations, including hours of service and inspections.",
              4,
            ],
          ],
        },
      ],
    },
    "Maintaince & Repairs": {
      weight: 0.2,
      questions: [
        {
          question: "How do you manage vehicle maintenance schedules?",
          options: [
            ["Manual (through paperwork and excel)", 1],
            [
              "We are currently maintaining this in excel but want to move this to a system",
              2,
            ],
            [
              "We use an automated system that tracks and schedules maintenance",
              5,
            ],
          ],
        },
        {
          question: "How do you handle unexpected vehicle breakdowns?",
          options: [
            [
              "We try to repair it on the spot, but there is no specific plan in place",
              1,
            ],
            ["We request an urgent rental vehicle or use our spare vehicle", 2],
            ["We rely on an external party ", 3],
            [
              "We have a dedicated team and procedures in place to quickly address vehicle breakdowns at any time.",
              5,
            ],
          ],
        },
        {
          question:
            "Are you able to track maintenance costs for each vehicle accurately?",
          options: [
            ["Not Really", 1],
            ["We use an average estimate", 2],
            ["We back-track this through invoices", 3],
            [
              "We track every maintenance cost including repairs in our maintenance system",
              5,
            ],
          ],
        },
        {
          question: "How do you track maintenance and repairs status?",
          options: [
            ["No formal tracking system in place", 1],
            ["Manual tracking with logs or spreadsheets", 3],
            ["Automated maintenance management system", 5],
          ],
        },
        {
          question: "Have you implemented a preventive maintenance program?",
          options: [
            ["We don't have one", 1],
            ["This is outsourced", 2],
            ["We have a maintenance schedule in excel, based on logs etc", 3],
            [
              "Our system automatically schedules and tracks preventive maintenance based on usage, mileage, or time intervals.",
              5,
            ],
          ],
        },
      ],
    },
    Cost: {
      weight: 0.2,
      questions: [
        {
          question:
            "Are you using any cost saving strategies to save on transportation costs?",
          options: [
            [
              "We do not currently have formal cost-saving strategies in place",
              1,
            ],
            ["We are exploring cost-saving strategies for transportation", 2],
            [
              "We use manual cost-saving strategies, but they are not fully automated",
              4,
            ],
            [
              "We actively use cost-saving strategies like fuel-efficient vehicles and route optimization",
              5,
            ],
          ],
        },
        {
          question: "How are you mitigating fluctuation in fuel prices?",
          options: [
            [
              "We have not implemented a strategy to deal with fluctuating fuel prices",
              1,
            ],
            [
              "We focus on route optimization to lower fuel usage and mitigate costs",
              3,
            ],
            [
              "We have agreements or fuel cards to reduce the impact of fluctuating prices",
              4,
            ],
            ["We use fuel hedging or contracts to lock in prices", 5],
          ],
        },
        {
          question: "How do you track fuel efficiency?",
          options: [
            ["Not tracked", 1],
            ["Manually", 3],
            ["Through onboard telematics or fuel tracking software", 5],
          ],
        },
        {
          question: "Are you using any capacity management tools?",
          options: [
            ["We do not have a tool / system in place", 1],
            ["We are considering to implement a system", 2],
            ["Manually managed", 3],
            ["We have a dedicated software", 5],
          ],
        },
      ],
    },
    "Enviroment & Sustainability": {
      weight: 0.2,
      questions: [
        {
          question:
            "How do you implement eco-friendly practices in your transport?",
          options: [
            ["Not yet, but we want to implement", 1],
            [
              "We participate in carbon offset initiatives to neutralize the emissions from our transportation activities",
              2,
            ],
            [
              "We maintain our vehicles regularly to ensure they operate at peak efficiency, minimizing fuel consumption.",
              3,
            ],
            [
              "We have started using alternative fuels to lower our environmental impact",
              4,
            ],
            [
              "We participate in carbon offset initiatives to neutralize the emissions from our transportation activities",
              5,
            ],
          ],
        },
        {
          question:
            "How do you track and measure the environmental impact of your fleet operations?",
          options: [
            ["We don't have a way to track this", 1],
            [
              "We track our environmental impact manually by calculating emissions based on fuel usage data",
              2,
            ],
            [
              "We rely on third-party services or consultants to measure environmental impact",
              3,
            ],
            [
              "We use an integrated software to track emissions and fuel efficiency",
              5,
            ],
          ],
        },
        {
          question:
            "What steps are you taking to reduce your carbon footprint?",
          options: [
            [
              "We are not currently taking any steps to reduce our carbon footprint.",
              1,
            ],
            [
              "We haven’t taken any steps yet, but we are developing a plan to reduce our carbon footprint.",
              2,
            ],
            [
              "We focus on optimizing transportation routes and maximizing load efficiency to minimize fuel consumption and emissions.",
              3,
            ],
            [
              "We are using energy-efficient vehicles, alternative fuels, or renewable energy sources in our operations.",
              5,
            ],
          ],
        },
        {
          question: "Which statement is correct?",
          options: [
            [
              "We don't have time or money to invest in environmental friendly solutions",
              1,
            ],
            [
              "We understand the importance of eco-friendly solutions, however not sure where to start",
              2,
            ],
            [
              "While we made some efforts to implement eco-friendly solutions, we can do a lot more",
              3,
            ],
            [
              "We are fully on board and have reduced our carbon footprint significantly over the past years",
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
          className="bg-[#12E193] h-4 rounded"
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
              answered ? "bg-[#12E193] text-white" : "bg-gray-300 text-gray-500"
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
              answered ? "bg-[#12E193] text-white" : "bg-gray-300 text-gray-500"
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
