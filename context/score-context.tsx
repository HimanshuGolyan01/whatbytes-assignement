"use client";

import { createContext, useContext, useState } from "react";

type ScoreContextType = {
  rank: number;
  percentile: number;
  currentScore: number;
  setRank: (val: number) => void;
  setPercentile: (val: number) => void;
  setCurrentScore: (val: number) => void;
};

const ScoreContext = createContext<ScoreContextType | undefined>(undefined);

export const ScoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [rank, setRank] = useState<number>(20);
  const [percentile, setPercentile] = useState<number>(50);
  const [currentScore, setCurrentScore] = useState<number>(10);

  return (
    <ScoreContext.Provider
      value={{ rank, setRank, percentile, setPercentile, currentScore, setCurrentScore }}
    >
      {children}
    </ScoreContext.Provider>
  );
};

export const useScore = () => {
  const context = useContext(ScoreContext);
  if (!context) throw new Error("useScore must be used within ScoreProvider");
  return context;
};
