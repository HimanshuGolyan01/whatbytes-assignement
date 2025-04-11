import { Progress } from "./ui/progress"

const SyllabusAnalysis = () => {
  return (
    <div className="border-2 border-gray-300 rounded-lg pt-4 mt-22 pl-6 pb-10">
        <div className="font-bold text-[1.1rem] pb-12">
           Syllabus Wise Analysis
        </div>
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-8">
                <div>
                    <div className="font-semibold text-gray-600">
                        HTML Tools, Forms, History
                    </div>
                    <div className="flex justify-between items-center gap-10">
                        <Progress value={30} className="bg-blue-100 [&>div]:bg-blue-600"/>
                        <div className="pr-10 font-semibold text-blue-600 font-bold">
                            30%
                        </div>
                    </div>
                </div>
                <div>
                    <div className="font-semibold text-gray-600">
                        Tags & References in HTML
                    </div>
                    <div className="flex justify-between items-center gap-10">
                        <Progress value={60} className="bg-orange-100 [&>div]:bg-orange-400"/>
                        <div className="pr-10 font-semibold text-orange-400 font-bold">
                            30%
                        </div>
                    </div>
                </div>
                <div>
                    <div className="font-semibold text-gray-600">
                        Tables & References in HTML
                    </div>
                    <div className="flex justify-between items-center gap-10">
                        <Progress value={30} className="bg-red-100 [&>div]:bg-red-600"/>
                        <div className="pr-10 font-semibold text-red-600 font-bold">
                            30%
                        </div>
                    </div>
                </div>
                <div>
                    <div className="font-semibold text-gray-600">
                        Tables & Basic CSS
                    </div>
                    <div className="flex justify-between items-center gap-10">
                        <Progress value={30} className="bg-green-100 [&>div]:bg-green-600"/>
                        <div className="pr-10 font-semibold text-green-600 font-bold">
                            30%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SyllabusAnalysis