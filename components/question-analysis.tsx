"use client";

import { PieChart, Pie, Cell } from "recharts";

 const QuestionAnalysis = () => {
    const data = [
        { name: "HTML", value: 70 },
        { name: "CSS", value: 30 },
      ];
    
      const COLORS = ["#1d4ed8", "#dbeafe"];
  return (
    <div className="border-2 border-gray-300 rounded-lg pt-4 pl-6">
        <div className="flex item-center justify-between">
            <div className="font-bold text-[1.1rem] pb-6 flex">
            Question Analysis
            </div>
            <div className="font-bold text-blue-700 pr-4">
                12 / 15
            </div>
        </div>
        <div className="flex justify-between items-center pr-4">
            <div className=" font-medium text-gray-500 ">
                <span className="font-bold text-gray-700">You scored 12 questions correct out of 15.</span> However it still needs some improvement
            </div>
        </div>
        <div className="flex justify-center">
            <PieChart width={300} height={300}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </div>
    </div>
  )
}

export default QuestionAnalysis