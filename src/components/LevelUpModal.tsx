// src/components/rewards/LevelUpModal.tsx
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export const LevelUpModal = ({ onClose }: { onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "spring", damping: 25 }}
      className="bg-white rounded-3xl p-8 max-w-md w-full relative"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400"
      >
        <X className="w-6 h-6" />
      </button>
      <div className="text-center">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-12 h-12 text-green-600" strokeWidth={3} />
        </div>
        <h2 className="text-3xl font-bold text-purple-600 mb-2">
          Level Up! 🎉
        </h2>
        <div className="text-5xl font-bold text-purple-600 mb-4">+5 Points</div>
        <div className="text-2xl mb-6">✨ 💎 🎯</div>
        <p className="text-gray-700">
          You've claimed your daily points! Come back tomorrow for more!
        </p>
      </div>
    </motion.div>
  </motion.div>
);
