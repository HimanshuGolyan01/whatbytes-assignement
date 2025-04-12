"use client";

import { LineChart, Line, XAxis, ReferenceLine } from "recharts";
import { useScore } from "@/context/score-context";
import { useMemo } from "react";

const ComparisonGraph = () => {
  const { percentile } = useScore();

  const baseData = [
    { percentile: 0, uv: 4 },
    { percentile: 25, uv: 75 },
    { percentile: 50, uv: 20 },
    { percentile: 75, uv: 40 },
    { percentile: 100, uv: 10 },
  ];
  const graphData = useMemo(() => {
    const currentPoint = {
      percentile,
      uv: Math.floor(Math.random() * 80 + 10),
    };

    const combined = [...baseData, currentPoint];
    const unique = Object.values(
      combined.reduce((acc, item) => {
        acc[item.percentile] = item;
        return acc;
      }, {} as Record<number, { percentile: number; uv: number }>)
    );

    return unique.sort((a, b) => a.percentile - b.percentile);
  }, [percentile]);

  return (
    <div className="border-2 border-gray-300 rounded-lg pt-4 pl-6">
      <div className="font-bold text-[1.1rem] pb-6">Comparison graph</div>
      <div className="flex justify-between items-center pr-4">
        <div className="font-medium text-gray-500">
          <span className="font-bold text-gray-700">You scored {percentile} Percentile</span> which is{" "}
          {percentile < 72 ? "lower" : percentile > 72 ? "higher" : "equal"} than the <br />
          average percentile 72% of all engineers who took the assessment.
        </div>
        <div className="text-[1.5rem] bg-gray-100 rounded-full p-2">📉</div>
      </div>
      <div className="pb-5">
      <LineChart width={600} height={300} data={graphData}>
        <XAxis
          dataKey="percentile"
          stroke="#555"
          tick={{ fill: "#333", fontSize: 12 }}
          ticks={graphData.map((d) => d.percentile)}
        />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" dot />
        <ReferenceLine
          x={percentile}
          stroke="gray"
          strokeDasharray="6 6"
          label={{
            value: `You`,
            fill: "#888",
            fontSize: 12,
            position: "top",
          }}
        />
      </LineChart>

      </div>
    </div>
  );
};

export default ComparisonGraph;
