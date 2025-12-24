import { motion } from "framer-motion";
import { Award, Star } from "lucide-react";

export const PointsBalanceCard = ({ points }: { points: number }) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="bg-white rounded-2xl shadow-sm"
  >
    <div className="flex items-center gap-3 mb-6 bg-[#eef2ff] p-6 rounded-t-2xl">
      <Award className="w-6 h-6 text-purple-600" />
      <h3 className="font-semibold text-lg">Points Balance</h3>
    </div>
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-3xl md:text-4xl font-bold text-purple-600">
          {points}
        </span>
        <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
          <Star className="w-8 h-8 text-yellow-600" fill="currentColor" />
        </div>
      </div>
      <div className="text-sm text-gray-600 mb-2">Progress to $5 Gift Card</div>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
        <div
          className="bg-purple-600 h-2 rounded-full transition-all duration-700"
          style={{ width: `${Math.min(100, (points / 5000) * 100)}%` }}
        />
      </div>
      <div className="text-sm text-gray-500">{points}/5000</div>
    </div>
  </motion.div>
);
