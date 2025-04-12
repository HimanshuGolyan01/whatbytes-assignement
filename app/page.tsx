import ComparisonGraph from "@/components/comparison-graph";
import Navbar from "@/components/navbar";
import QuestionAnalysis from "@/components/question-analysis";
import Sidebar from "@/components/sidebar";
import Skillset from "@/components/skillset";
import SyllabusAnalysis from "@/components/syllabus-analysis";


export default function Home() {
  return (
    <div>
     <div>
      <Navbar/>
     </div>
     <div className="flex justify-start">
      <div className="border-r border-gray-400">
        <Sidebar/>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col gap-4 pl-12 pr-10">
          <Skillset/>
          <ComparisonGraph/>
        </div>
        <div className="flex flex-col gap-4  ml-6 pr-10">
          <SyllabusAnalysis/>
          <QuestionAnalysis/>
        </div>
      </div>
     </div>
    </div>
  );
}
