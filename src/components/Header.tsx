// import { Bell } from "lucide-react";

// export const Header = () => (
//   <div className="flex justify-between items-start mb-6 pt-4 pb-2 sticky top-0 z-10 bg-gray-50">
//     <div>
//       <h1 className="text-3xl md:text-4xl font-bold mb-2">Rewards Hub</h1>
//       <p className="text-gray-600">
//         Earn points, unlock rewards, and celebrate your progress!
//       </p>
//     </div>
//     <div className="relative">
//       <Bell className="w-6 h-6 text-gray-700" />
//       {/* <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//         2
//       </span> */}
//     </div>
//   </div>
// );

// src/components/rewards/Header.tsx
import { Bell } from "lucide-react";
import { useState } from "react";
import { NotificationDropdown } from "./NotificationDropdown";

export const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="flex justify-between items-start mb-6 pt-4 pb-2 sticky top-0 z-10 bg-gray-50">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Rewards Hub</h1>
        <p className="text-gray-600">
          Earn points, unlock rewards, and celebrate your progress!
        </p>
      </div>
      <div className="relative">
        <button
          onClick={() => setShowNotifications(!showNotifications)}
          className="p-2 hover:bg-gray-200 rounded-full transition-colors relative"
        >
          <Bell className="w-6 h-6 text-gray-700" />
          {/* Optional: Add badge if you have real notifications */}
          {/* <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            2
          </span> */}
        </button>

        {/* Dropdown */}
        <NotificationDropdown
          isOpen={showNotifications}
          onClose={() => setShowNotifications(false)}
        />
      </div>
    </div>
  );
};
