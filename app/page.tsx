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
     <div className="flex justify-start ">
      <Sidebar/>
      <div className="flex flex-col gap-4 pl-12 w-[50rem]">
        <Skillset/>
        <ComparisonGraph/>
      </div>
      <div className="flex flex-col gap-4  ml-6 mr-5 w-[40rem]">
        <SyllabusAnalysis/>
        <QuestionAnalysis/>
      </div>
     </div>
    </div>
  );
}
