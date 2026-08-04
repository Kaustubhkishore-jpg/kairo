import CircularScore from "./CircularScore";
import AnalysisCard from "./AnalysisCard";
import SkillsCard from "./SkillsCard";
import SuggestionsCard from "./SuggestionsCard";
import InterviewCard from "./InterviewCard";
import KeywordCard from "./KeywordCard";
import { Download } from "lucide-react";
import { generateReport } from "../utils/generateReport";
import RecommendedJobsCard from "./RecommendedJobsCard";
import CareerRecommendationCard from "./CareerRecommendationCard";

type DashboardProps = {
  analysis: {
    ats_score: number;
    resume_quality: number;
    job_match: number | null;
    target_role: string;
    alternate_roles: string[];
    strengths: string[];
    weaknesses: string[];
    missing_skills: string[];
    suggestions: string[];
    interview_questions: string[];
    missing_keywords: string[];

    recommended_jobs?: {
      title: string;
      company: string;
      location: string;
      description: string;
      apply_link: string;
      source: string;
      match_score: number;
    }[];
  };
};

function Dashboard({ analysis }: DashboardProps) {
  return (
    <div className="mt-8 md:mt-12 space-y-6 md:space-y-8">
      <div className="text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Resume Analysis Results
        </h2>

        <p className="mt-2 text-sm md:text-base text-slate-500">
          AI-generated insights based on your uploaded resume.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <CircularScore title="ATS Score" score={analysis.ats_score} />
        <CircularScore title="Resume Quality" score={analysis.resume_quality} />
        
        {analysis.job_match !== null &&( 
        <CircularScore 
        title="Job Match" 
        score={analysis.job_match}
        />
        )}
        <CareerRecommendationCard
        targetRole={analysis.target_role}
        alternateRoles={analysis.alternate_roles ??[]} 
        />
      </div>
  
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <AnalysisCard
          title="Strengths"
          items={analysis.strengths}
          type="strength"
        />

        <AnalysisCard
          title="Weaknesses"
          items={analysis.weaknesses}
          type="weakness"
        />
      </div>

      <SkillsCard skills={analysis.missing_skills} />

      {analysis.missing_keywords.length > 0 && ( <KeywordCard keywords={analysis.missing_keywords} />
)}

      <SuggestionsCard suggestions={analysis.suggestions} />

      <InterviewCard questions={analysis.interview_questions} />
      <RecommendedJobsCard
     jobs={analysis.recommended_jobs ?? []}
/>

      <div className="mt-8 md:mt-10 flex justify-center">
        <button
          onClick={() => generateReport(analysis)}
          className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 md:py-4 font-semibold text-white hover:bg-indigo-700 transition"
        >
          <Download size={20} />
          Download Report
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
