// src/components/rewards/RewardsGrid.tsx
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Reward {
  id: string;
  name: string;
  description: string;
  points_cost: number;
  icon: string;
  is_locked: boolean;
}

export const RewardsGrid = ({
  rewards,
  userPoints,
}: {
  rewards: Reward[];
  userPoints: number;
}) => (
  <div className="mb-6">
    <h2 className="text-2xl font-bold mb-6 border-l-4 border-purple-600 pl-4">
      Redeem Your Points
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {rewards.map((reward) => (
        <motion.div
          key={reward.id}
          whileHover={{ y: -4 }}
          className="bg-white rounded-2xl p-6 shadow-sm"
        >
          <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">{reward.icon}</span>
          </div>
          <h3 className="text-lg font-bold text-center mb-2">{reward.name}</h3>
          <p className="text-sm text-gray-600 text-center mb-4">
            {reward.description}
          </p>
          <div className="flex items-center justify-center gap-1 mb-4">
            <Star className="w-5 h-5 text-yellow-500" fill="currentColor" />
            <span className="font-semibold text-purple-600">
              {reward.points_cost} pts
            </span>
          </div>
          <button
            disabled={reward.is_locked || userPoints < reward.points_cost}
            className={`w-full py-3 rounded-xl font-semibold ${
              reward.is_locked || userPoints < reward.points_cost
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-purple-600 text-white hover:bg-purple-700"
            }`}
          >
            {reward.is_locked
              ? "Locked"
              : userPoints < reward.points_cost
              ? "Not enough points"
              : "Redeem"}
          </button>
        </motion.div>
      ))}
    </div>
  </div>
);
