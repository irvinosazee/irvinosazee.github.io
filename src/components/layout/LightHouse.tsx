"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type lighthouseMetrics = {
  name: string;
  score: number;
};

const lighthouseReport: lighthouseMetrics[] = [
  {
    name: "Performance",
    score: 99,
  },
  {
    name: "Accessibility",
    score: 96,
  },
  {
    name: "Best Practices",
    score: 100,
  },
  {
    name: "SEO",
    score: 100,
  },
];

const generateClasses = (score: number) => {
  if (score >= 90) {
    return {
      container: "bg-green-300 border-green-500 text-green-500",
      text: "text-green-500",
    };
  } else if (score >= 50) {
    return {
      container: "bg-yellow-300 border-yellow-500 text-yellow-500",
      text: "text-yellow-500",
    };
  } else {
    return {
      container: "bg-red-300 border-red-500 text-red-500",
      text: "text-red-500",
    };
  }
};

export default function LightHouse() {
  const [scores, setScores] = useState<number[]>([]);

  useEffect(() => {
    const interval = setTimeout(() => {
      setScores(lighthouseReport.map((report) => report.score));
    }, 300);

    return () => clearTimeout(interval);
  }, []);

  return (
    <div className="absolute bottom-8 right-4 p-2 flex justify-center items-center">
      <ul className="flex flex-row justify-center items-center space-x-3">
        {lighthouseReport.map((report, index) => {
          const { container, text } = generateClasses(report.score);
          return (
            <li
              className="flex flex-col items-center gap-2 text-center"
              key={report.name}
            >
              <motion.div
                className={cn(
                  "grid place-items-center md:size-10 lg:size-12 border-4 font-mono rounded-full",
                  container
                )}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.8 }}
                >
                  {scores[index]}
                </motion.span>
              </motion.div>
              <div className={cn(`text-xs`, text)}>
                <sup>{report.name}</sup>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
