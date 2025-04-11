"use client";

import { useState } from "react";
import Image from "next/image";

const UpdateModal = () => {
  const [rank, setRank] = useState("");
  const [percentile, setPercentile] = useState("");
  const [score, setScore] = useState("");
  const [error, setError] = useState("");

  const handleSave = () => {
    if (percentile === "" || isNaN(Number(percentile)) || Number(percentile) < 0 || Number(percentile) > 100) {
      setError("required | percentile 0-100");
      return;
    }
    setError("");
    console.log({ rank, percentile, score });
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-xl p-6 relative">
            <Image
                src="/html.png"
                alt="html logo"
                width={100}
                height={100}
                className="h-[4rem] w-[4rem]"
            />
        <h2 className="text-2xl font-semibold mb-6">Update scores</h2>
        <div className="mb-4">
          <label className="text-sm font-medium flex items-center gap-2">
            <span className="bg-blue-800 text-white rounded-full w-6 h-6 text-center text-sm">1</span>
            Update your <span className="font-bold">Rank</span>
          </label>
          <input
            type="number"
            className="mt-2 border border-blue-400 rounded-md px-3 py-2 w-full outline-none"
            value={rank}
            onChange={(e) => setRank(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="text-sm font-medium flex items-center gap-2">
            <span className="bg-blue-800 text-white rounded-full w-6 h-6 text-center text-sm">2</span>
            Update your <span className="font-bold">Percentile</span>
          </label>
          <input
            type="text"
            placeholder="Percentile"
            className={`mt-2 border ${
              error ? "border-red-500" : "border-blue-400"
            } rounded-md px-3 py-2 w-full outline-none`}
            value={percentile}
            onChange={(e) => setPercentile(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
        <div className="mb-6">
          <label className="text-sm font-medium flex items-center gap-2">
            <span className="bg-blue-800 text-white rounded-full w-6 h-6 text-center text-sm">3</span>
            Update your <span className="font-bold">Current Score (out of 15)</span>
          </label>
          <input
            type="number"
            className="mt-2 border border-blue-400 rounded-md px-3 py-2 w-full outline-none"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </div>
        <div className="flex justify-end gap-4">
          <button className="text-blue-700 font-semibold hover:underline">cancel</button>
          <button
            className="bg-blue-800 text-white px-6 py-2 rounded-md flex items-center gap-2"
            onClick={handleSave}
          >
            save <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
