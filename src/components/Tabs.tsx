// src/components/rewards/Tabs.tsx
export const Tabs = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: "earn" | "redeem";
  setActiveTab: (tab: "earn" | "redeem") => void;
}) => (
  <div className="flex gap-8 mb-8 border-b-2">
    <button
      onClick={() => setActiveTab("earn")}
      className={`pb-3 px-1 font-semibold transition-colors ${
        activeTab === "earn"
          ? "text-purple-600 border-b-4 border-purple-600 bg-purple-100 rounded-t-2xl py-2 px-4"
          : "text-gray-500"
      }`}
    >
      Earn Points
    </button>
    <button
      onClick={() => setActiveTab("redeem")}
      className={`pb-3 px-1 font-semibold transition-colors ${
        activeTab === "redeem"
          ? "text-purple-600 border-b-4 border-purple-600 bg-purple-100 rounded-t-2xl py-2 px-4"
          : "text-gray-500"
      }`}
    >
      Redeem Rewards
    </button>
  </div>
);
