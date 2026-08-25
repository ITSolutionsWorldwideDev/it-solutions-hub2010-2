import { Metadata } from "next";
import CareerOpenApplication from "@/components/layout/career-open-application";

export const metadata: Metadata = {
  title: "Apply Now – IT Solutions Hub",
  description: "Submit your job application to IT Solutions Hub today.",
};

export default async function JobApplyPage() {
  return (
    <main className="bg-gray-50 py-8">
      <CareerOpenApplication />
    </main>
  );
}