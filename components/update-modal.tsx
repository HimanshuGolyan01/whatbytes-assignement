"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useScore } from "../context/score-context";
import { useEffect, useState } from "react";

const UpdateModal = ({ setIsUpdateModalOpen}: {
  setIsUpdateModalOpen: (open: boolean) => void;
  }) => {
  const {
    rank,
    setRank,
    percentile,
    setPercentile,
    currentScore,
    setCurrentScore,
  } = useScore();

  const [localRank, setLocalRank] = useState<string>("");
  const [localPercentile, setLocalPercentile] = useState<string>("");
  const [localScore, setLocalScore] = useState<string>("");

  const [errors, setErrors] = useState({
    rank: "",
    percentile: "",
    currentScore: "",
  });

  const maxScore = 15;

  useEffect(() => {
    setLocalRank(rank.toString());
    setLocalPercentile(percentile.toString());
    setLocalScore(currentScore.toString());
  }, [rank, percentile, currentScore]);

  const validate = () => {
    const newErrors = {
      rank:
        localRank.trim() === "" || isNaN(Number(localRank))
          ? "Required, must be a number."
          : "",
      percentile:
        localPercentile.trim() === "" ||
        isNaN(Number(localPercentile)) ||
        Number(localPercentile) > 100 ||
        Number(localPercentile) < 0
          ? "Required, must be between 0 and 100."
          : "",
      currentScore:
        localScore.trim() === "" ||
        isNaN(Number(localScore)) ||
        Number(localScore) > maxScore
          ? `Required. Current score must be ≤ ${maxScore}.`
          : "",
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((e) => e === "");
  };

  const handleSave = () => {
    if (validate()) {
      setRank(Number(localRank));
      setPercentile(Number(localPercentile));
      setCurrentScore(Number(localScore));
      setIsUpdateModalOpen(false);
    }
  };

  const inputClasses =
    "border border-blue-400 rounded-md px-3 py-2 w-52 outline-none appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]";

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-xl p-6 relative">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold mb-6">Update scores</div>
          <Image
            src="/html.png"
            alt="html logo"
            width={100}
            height={100}
            className="h-[3rem] w-[3rem]"
          />
        </div>
        <div className="mb-4">
          <div className="flex items-center justify-between gap-4 pt-4">
            <label className="text-sm font-medium flex items-center gap-2">
              <span className="bg-blue-800 text-white rounded-full w-6 h-6 text-center text-sm flex items-center justify-center">
                1
              </span>
              Update your <span className="font-bold">Rank</span>
            </label>
            <input
              type="number"
              placeholder="Rank"
              className={inputClasses}
              value={localRank}
              onChange={(e) => setLocalRank(e.target.value)}
            />
          </div>
          {errors.rank && (
            <p className="text-red-600 text-xs mt-1 pl-[20rem]">
              {errors.rank}
            </p>
          )}
        </div>
        <div className="mb-4">
          <div className="flex items-center justify-between gap-4">
            <label className="text-sm font-medium flex items-center gap-2">
              <span className="bg-blue-800 text-white rounded-full w-6 h-6 text-center text-sm flex items-center justify-center">
                2
              </span>
              Update your <span className="font-bold">Percentile</span>
            </label>
            <input
              type="number"
              placeholder="Percentile"
              className={inputClasses}
              value={localPercentile}
              onChange={(e) => setLocalPercentile(e.target.value)}
            />
          </div>
          {errors.percentile && (
            <p className="text-red-600 text-xs mt-1 pl-[20rem]">
              {errors.percentile}
            </p>
          )}
        </div>
        <div className="mb-6">
          <div className="flex items-center justify-between gap-4">
            <label className="text-sm font-medium flex items-center gap-2">
              <span className="bg-blue-800 text-white rounded-full w-6 h-6 text-center text-sm flex items-center justify-center">
                3
              </span>
              Update your{" "}
              <span className="font-bold">Current Score (out of 15)</span>
            </label>
            <input
              type="number"
              placeholder="Current Score"
              className={inputClasses}
              value={localScore}
              onChange={(e) => setLocalScore(e.target.value)}
            />
          </div>
          {errors.currentScore && (
            <p className="text-red-600 text-xs mt-1 pl-[20rem]">
              {errors.currentScore}
            </p>
          )}
        </div>

        <div className="flex justify-end gap-4">
          <button
            className="text-blue-700 font-semibold border rounded-lg border-blue-700 px-3"
            onClick={() => setIsUpdateModalOpen(false)}
          >
            cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-800 text-white px-6 py-2 rounded-md flex items-center gap-2"
          >
            save
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
