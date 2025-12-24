// src/components/rewards/FeaturedToolCard.tsx
import { motion } from "framer-motion";
import { Calendar, Gift, Users } from "lucide-react";

export const FeaturedToolCard = () => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-white shadow-lg rounded-2xl"
  >
    <div className="p-4 bg-[linear-gradient(135deg,#9013FE_0%,#70D6FF_100%)] text-white relative overflow-hidden rounded-t-2xl">
      <div className="flex items-center justify-between">
        <div>
          <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm mb-4">
            Featured
          </span>
          <h3 className="text-xl md:text-2xl font-bold mb-3">
            Top Tool Spotlight
          </h3>
          <h4 className="text-lg font-bold mb-3">Reclaim</h4>
        </div>
        <div className="overflow-hidden relative rounded-full size-10 md:size-16">
          <img src="https://api.flowvahub.com/storage/v1/object/public/icons//reclaim%20(1).png" />
        </div>
      </div>
    </div>

    <div className="p-6">
      <div className="flex items-start gap-3 mb-4">
        <Calendar className="w-5 h-5 mt-0.5 shrink-0" />
        <p className="text-sm">
          Reclaim.ai is an AI-powered calendar assistant that automatically
          schedules your tasks, meetings, and breaks to boost productivity. Free
          to try — earn Flowva Points when you sign up!
        </p>
      </div>
      <div className="flex gap-2 mt-4 items-center justify-between">
        <button className="text-white bg-purple-600 py-2 w-fit px-3 rounded-full font-semibold text-sm">
          <Users className="w-4 h-4 inline mr-1" /> Sign up
        </button>
        <button className="bg-[linear-gradient(45deg,#9013FE,#FF8687)] text-white  py-2 px-4 rounded-full font-semibold text-sm">
          <Gift className="w-4 h-4 inline mr-1" /> Claim 50 pts
        </button>
      </div>
    </div>
  </motion.div>
);
