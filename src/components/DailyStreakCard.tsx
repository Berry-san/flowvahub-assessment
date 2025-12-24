// src/components/rewards/DailyStreakCard.tsx
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"];
const todayIndex = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;

export const DailyStreakCard = ({
  streak,
  canClaim,
  onClaim,
}: {
  streak: number;
  canClaim: boolean;
  onClaim: () => void;
}) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="bg-white rounded-2xl shadow-sm"
  >
    <div className="flex items-center gap-3 mb-6 bg-[#eef2ff] p-6 rounded-t-2xl">
      <Calendar className="w-6 h-6 text-blue-500" />
      <h3 className="font-semibold text-lg">Daily Streak</h3>
    </div>
    <div className="p-6">
      {" "}
      <div className="text-center mb-6">
        <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
          {streak} day{streak !== 1 ? "s" : ""}
        </div>
        <div className="flex justify-center gap-2 mb-6 mt-4">
          {daysOfWeek.map((day, idx) => (
            <div
              key={idx}
              className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 bg-gray-300 text-gray-500 ${
                idx === todayIndex ? "ring-2 ring-[#9013fe] ring-offset-2 " : ""
              }`}
            >
              {day}
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Check in daily to earn +5 points
        </p>
      </div>
      <button
        onClick={onClaim}
        disabled={!canClaim}
        className={`w-full py-3 rounded-xl font-semibold transition-all ${
          canClaim
            ? "bg-purple-600 text-white hover:bg-purple-700"
            : "bg-gray-200 text-gray-500 cursor-not-allowed"
        }`}
      >
        {canClaim ? "⚡ Claim Daily Points" : "✓ Claimed Today"}
      </button>
    </div>
  </motion.div>
);
