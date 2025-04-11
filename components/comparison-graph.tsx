"use client";

import { LineChart, Line, XAxis, Tooltip } from "recharts";

const ComparisonGraph = () => {
  const data = [
    { percentile: 0, uv: 4 },
    { percentile: 25, uv: 75 },
    { percentile: 50, uv: 60 },
    { percentile: 75, uv: 40 },
    { percentile: 100, uv: 10 },
  ];

  return (
    <div className="border-2 border-gray-300 rounded-lg pt-4 pl-6">
      <div className="font-bold text-[1.1rem] pb-6">Comparison graph</div>
      <div className="flex justify-between items-center pr-4">
        <div className="font-medium text-gray-500">
          <span className="font-bold text-gray-700">You scored 90% Percentile</span> which is lower than the <br />
          average percentile 72% of all engineers who took the assessment.
        </div>
        <div className="text-[1.5rem] bg-gray-100 rounded-full p-2">📉</div>
      </div>
      <div className="pb-5">
        <LineChart width={600} height={300} data={data}>
            <XAxis dataKey="percentile" stroke="#555" tick={{ fill: "#333", fontSize: 12 }} />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <Tooltip />
        </LineChart>
      </div>
    </div>
  );
};

export default ComparisonGraph;
