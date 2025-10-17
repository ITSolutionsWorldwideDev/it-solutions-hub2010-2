// app\[locale]\supply-health-check\warehouse-questionaaire.tsx

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
        question: "How do you track your incoming and outgoing materials?",
        options: [
          ["We do not have a specified way to track this", 1],
          ["We are tracking this in excel", 2],
          [
            "We do a stock check every month to update our stock levels in our WMS/ERP",
            3,
          ],
          [
            "We are using our WMS / ERP system actively, updating every movement real time",
            4,
          ],
          ["We use RFID, drones, robotics, and/or other smart solutions", 5],
        ],
      },
      {
        question: "How are picking requests sent to the warehouse?",
        options: [
          ["Email, written notes and phone calls", 1],
          ["Excel / shared document", 2],
          ["Printed pick slips", 3],
          ["RF scanners / mobile devices", 4],
          ["We use RFID, drones, robotics, and/or other smart solutions", 5],
        ],
      },
      {
        question:
          "How do you plan your resource capacity for the coming days / weeks?",
        options: [
          ["Manual, based on experience", 1],
          ["Manual, based on updates we receive now and then", 2],
          ["Manual, based on growth expectation", 3],
          [
            "Through reports, based on sales/procurement forecasts and trends",
            4,
          ],
          ["MRP / MES", 5],
        ],
      },
      {
        question: "Are you using any smart technologies in your warehouse?",
        options: [
          ["Not yet, there is no budget", 1],
          ["We are exploring options", 2],
          ["We have implemented  some smart technologies, but can do more", 4],
          ["We have a fully automated warehouse", 5],
        ],
      },
    ],
  },
  Process: {
    weight: 0.2,
    questions: [
      {
        question: "How are tasks in the warehouse executed?",
        options: [
          ["Based on supervisor instructions of the day", 0],
          ["We are using task boards to divide tasks", 2],
          [
            "We have a WMS that shows the assigned user tasks and tracks progress",
            4,
          ],
          ["Our warehouse is fully automated", 5],
        ],
      },
      {
        question: "What happens when a task cannot be completed?",
        options: [
          [
            "Try to find a way to complete the task, we have to complete jobs fast!",
            1,
          ],
          ["Call supervisor to decide next steps", 2],
          ["Depends on the situation", 3],
          ["Leave the task open and continue with next task", 4],
          [
            "There are predefined system and physical processes that need to be followed in case of exception",
            5,
          ],
        ],
      },
      {
        question: "How are stock outs handled?",
        options: [
          [
            "Find stock from another location, we have to complete jobs fast!",
            1,
          ],
          ["Call supervisor to decide next steps", 2],
          ["Depends on the situation", 3],
          ["There is a predefined process to follow", 5],
        ],
      },
      {
        question: "How do you manage your docks?",
        options: [
          [
            "We manage our docks manually, with workers physically overseeing the loading and unloading of trucks.",
            1,
          ],
          [
            "We use paper logs where we record each truck's expected arrival and departure for Dock appointments",
            2,
          ],
          [
            "We use the WMS to track truck arrivals, assign dock doors and notify staff of incoming shipments.",
            3,
          ],
          [
            "We use a dock appointment scheduling system that allows carriers to book dock slots online.",
            4,
          ],
          [
            "We use RFID tags to track trucks and shipments as they enter and leave the docks, automating dock management and improving accuracy",
            5,
          ],
        ],
      },
    ],
  },
  Safety: {
    weight: 0.2,
    questions: [
      {
        question: "Is your warehouse equipment safely handled?",
        options: [
          [
            "Yes, we have strict safety protocols in place for handling all warehouse equipment, including forklifts, pallet jacks, and conveyors",
            1,
          ],
          [
            "Yes, all our employees undergo regular safety training, including equipment handling and proper use.",
            2,
          ],
          [
            "Yes, only certified personnel are allowed to handle equipment like forklifts and order pickers to minimize safety risks",
            3,
          ],
          [
            "Yes, our warehouse team performs pre-use checks on all equipment",
            4,
          ],
          [
            "Yes, we conduct regular in-house trainings for warehouse workers to handle the equipments.",
            5,
          ],
        ],
      },
      {
        question: "Are employees aware of what to do in times of emergency?",
        options: [
          ["We don't have emergency procedures documented", 1],
          [
            "Yes, we have documented emergency procedures posted throughout the workplace",
            3,
          ],
          [
            "We hold monthly fire drills and all employees are familiar with the evacuation routes and where to meet outside the building",
            5,
          ],
        ],
      },
      {
        question: "How are employees made aware of the safety rules?",
        options: [
          ["Employee Handbook", 1],
          ["Visuals", 3],
          ["Monthly Safety trainings and visuals", 5],
        ],
      },
      {
        question: "How are goods stored in the warehouse?",
        options: [
          ["Where ever there is space", 1],
          ["Based on ABC classifications", 2],
          ["Based on weight and dimensions", 3],
          [
            "Following hazardous goods and fire safety regulations such as ISO 45001",
            5,
          ],
        ],
      },
    ],
  },
  "Lean & Quality": {
    weight: 0.2,
    questions: [
      {
        question:
          "How often do you have damages to equipment or materials in the warehouse?",
        options: [
          ["More than 4 times per year", 1],
          ["2 - 4 times per year", 2],
          ["1 - 2  times per year", 3],
        ],
      },
      {
        question: "Is your current warehouse lay out still suitable?",
        options: [
          ["Not really, but it works", 1],
          ["We are investigating options for a new lay out", 2],
          [
            "We are ready to invest in innovative solutions to have the best possible lay out",
            3,
          ],
          [
            "We have an efficient warehouse lay out providing us the shortest receiving and picking lead times",
            5,
          ],
        ],
      },
      {
        question:
          "How many issues do you have on weekly basis related to receiving errors, quality errors, or picking errors?",
        options: [
          ["> 15% of all processed order lines", 1],
          ["10 to 15% of all processed order lines", 2],
          ["5 to 10% of all processed order lines", 3],
          ["1 to 5% of all processed order lines", 4],
          ["< 1% of all processed order lines", 5],
        ],
      },
      {
        question: "How easy is it for new warehouse employees to start up?",
        options: [
          ["Upto 2 weeks", 1],
          [
            "The WMS is easy to follow, they are fully operational within a few days",
            3,
          ],
          ["They follow an organized training program", 5],
        ],
      },
    ],
  },
  "Enviroment & Sustainability": {
    weight: 0.2,
    questions: [
      {
        question:
          "Are you using any of these initiatives to reduce the carbon footprint?",
        options: [
          [
            "Reducing waste by implementing recycling programs and minimizing single-use plastics in your operations",
            1,
          ],
          ["Optimized warehouse lay outs and warehouse procedures", 2],
          [
            "Upgrading your equipment to energy-efficient models and optimizing your energy usage in the warehouse",
            3,
          ],
          ["Renewable energy options such as installing solar panels", 4],
          ["All of the above", 5],
        ],
      },
      {
        question: "Which of these statements applies to your organization?",
        options: [
          [
            "We are exploring opportunities to improve our sustainability practices",
            1,
          ],
          [
            "Our focus is primarily on compliance with environmental regulations",
            2,
          ],
          [
            "We recognize the importance of sustainability and have set specific goals to improve our environmental practices",
            3,
          ],
          [
            "We are implementing multiple sustainability initiatives, including using eco-friendly materials and optimizing our supply chain to reduce emissions",
            4,
          ],
          [
            "Sustainability is a core value for us, and we actively pursue projects that reduce our carbon footprint",
            5,
          ],
        ],
      },
      {
        question:
          "How do you integrate sustainability in your picking strategies?",
        options: [
          ["We work paperless", 2],
          ["We utilize totes, bins, and dividers", 3],
          [
            "We use advanced technologies like AutoStore, automated guided vehicles (AGVs) and wearable tech",
            5,
          ],
        ],
      },
      {
        question: "How do you handle the waste in your warehouse?",
        options: [
          [
            "We have placed random waste-bins to handle waste in our warehouse",
            1,
          ],
          ["Our warehouse is equipped with designated recycling bins", 2],
          [
            "Our warehouse has protocols in place for managing hazardous materials, including specialized training for employees",
            3,
          ],
          [
            "Whenever possible, we reuse materials such as pallets and containers to reduce waste",
            4,
          ],
          [
            "Our team is trained on sustainability practices, including effective waste handling and recycling techniques",
            5,
          ],
        ],
      },
    ],
  },
};

const WarehouseQuestionnaire: React.FC<Props> = ({ onSubmit }) => {
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

export default WarehouseQuestionnaire;