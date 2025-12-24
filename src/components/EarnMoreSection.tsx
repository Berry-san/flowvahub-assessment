// src/components/rewards/EarnMoreSection.tsx
import { Star } from "lucide-react";

export const EarnMoreSection = () => (
  <div className="mb-6">
    <h2 className="text-2xl font-bold mb-6 border-l-4 border-purple-600 pl-4 text-left mt-4">
      Earn More Points
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Star className="w-6 h-6 text-purple-600" />
          <h3 className="font-semibold text-lg">
            Refer and win 10,000 points!
          </h3>
        </div>
        <p className="text-gray-700">
          Invite 3 friends by Nov 20 and earn a chance to be one of 5 winners of{" "}
          <span className="text-purple-600 font-semibold">10,000 points</span>.
        </p>
      </div> */}
      <div className="transition-all hover:border-[#9013fe] hover:translate-y-[-5px] hover:shadow-[0_10px_25px_rgba(0,_0,_0,_0.1)] ease-linear duration-200 border border-[#e5e7eb] rounded-xl overflow-hidden">
        <div className="p-[1rem] border border-b-[#f3f4f6] border-t-0 border-r-0 border-l-0 bg-white flex items-center gap-[0.75rem]">
          <div className="w-[40px] h-[40px] rounded-[10px] flex items-center justify-center flex-shrink-0 bg-[rgba(228,144,230,0.1)] text-[#9013fe]">
            <Star className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h3 className="font-semibold">Refer and win 10,000 points!</h3>
          </div>
        </div>
        <div className="p-[1rem]">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm">
                Invite 3 friends by Nov 20 and earn a chance to be one of 5
                winners of <span className="text-[#9013fe]">10,000 points</span>
                . Friends must complete onboarding to qualify.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Share2 className="w-6 h-6 text-purple-600" />
            <div>
              <h3 className="font-semibold text-lg">Share Your Stack</h3>
              <p className="text-sm text-gray-600">Earn +25 pts</p>
            </div>
          </div>
          <button className="text-purple-600 font-semibold flex items-center gap-1">
            <Share2 className="w-5 h-5" /> Share
          </button>
        </div>
      </div> */}
      <div className="transition-all hover:border-[#9013fe] hover:translate-y-[-5px] hover:shadow-[0_10px_25px_rgba(0,_0,_0,_0.1)] ease-linear duration-200 border border-[#e5e7eb] rounded-xl overflow-hidden">
        <div className="p-[1rem] border border-b-[#f3f4f6] border-t-0 border-r-0 border-l-0 bg-white flex items-center gap-[0.75rem]">
          <div className="w-[40px] h-[40px] rounded-[10px] flex items-center justify-center flex-shrink-0 bg-[rgba(144,_19,_254,_0.1)] text-[#9013fe]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-share2"
            >
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
              <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold">Share Your Stack</h3>
            <p className="text-xs text-gray-500">Earn +25 pts</p>
          </div>
        </div>
        <div className="p-[1rem]">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm">Share your tool stack</p>
            </div>
            <button className="bg-[#eef2ff] hover:text-white hover:bg-[#9013fe] text-[#9013fe] py-2 px-4 rounded-full font-semibold text-sm transition-all duration-200 inline-flex items-center gap-2 border-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-share2"
              >
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
              </svg>
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
