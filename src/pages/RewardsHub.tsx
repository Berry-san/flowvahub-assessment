// src/pages/RewardsHub.tsx
import { DailyStreakCard } from "@/components/DailyStreakCard";
import { EarnMoreSection } from "@/components/EarnMoreSection";
import { FeaturedToolCard } from "@/components/FeaturedToolCard";
import { Header } from "@/components/Header";
import { LevelUpModal } from "@/components/LevelUpModal";
import { PointsBalanceCard } from "@/components/PointsBalanceCard";
import { ReferAndEarnSection } from "@/components/ReferAndEarnSection";
import { RewardsGrid } from "@/components/RewardsGrid";
import { Tabs } from "@/components/Tabs";
import { useRewards } from "@/hooks/useRewards";
import { supabase } from "@/lib/supabase";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function RewardsHub() {
  const [activeTab, setActiveTab] = useState<"earn" | "redeem">("earn");
  const [showLevelUp, setShowLevelUp] = useState(false);
  const { user, rewards, loading, error, claimDaily } = useRewards();

  useEffect(() => {
    if (showLevelUp) {
      const timer = setTimeout(() => setShowLevelUp(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showLevelUp]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-10 h-10 border-4 border-purple-600 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-6 bg-white rounded-xl shadow">
          <h2 className="text-xl text-red-600">Authentication Required</h2>
          <button
            onClick={() =>
              supabase.auth.signInWithOAuth({ provider: "google" })
            }
            className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Sign In to Continue
          </button>
        </div>
      </div>
    );
  }

  const handleClaimDaily = async () => {
    await claimDaily();
    setShowLevelUp(true);
  };

  const canClaimToday = () => {
    if (!user.last_claim) return true;
    const last = new Date(user.last_claim);
    const today = new Date();
    return last.toDateString() !== today.toDateString();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-10">
        <Header />
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <AnimatePresence mode="wait">
          {activeTab === "earn" ? (
            <motion.div
              key="earn"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6 border-l-4 text-left border-purple-600 pl-4">
                Your Rewards Journey
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <PointsBalanceCard points={user.points} />
                <DailyStreakCard
                  streak={user.streak}
                  canClaim={canClaimToday()}
                  onClaim={handleClaimDaily}
                />
                <FeaturedToolCard />
              </div>
              <EarnMoreSection />
              <ReferAndEarnSection
                referralCode={user.referral_code || "FLO-DEMO"}
              />
            </motion.div>
          ) : (
            <motion.div
              key="redeem"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <RewardsGrid rewards={rewards} userPoints={user.points} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {showLevelUp && <LevelUpModal onClose={() => setShowLevelUp(false)} />}
      </AnimatePresence>
    </div>
  );
}
