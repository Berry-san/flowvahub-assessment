// src/components/rewards/NotificationDropdown.tsx
import { AnimatePresence, motion } from "framer-motion";
import { Bell, X } from "lucide-react";

interface NotificationDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotificationDropdown = ({
  isOpen,
  onClose,
}: NotificationDropdownProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ type: "spring", damping: 25 }}
          className="absolute right-0 top-12 w-96 bg-white rounded-xl shadow-lg border border-gray-200 z-50"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 px-4 py-3 text-white flex justify-between items-center rounded-t-xl">
            <h3 className="font-bold text-sm">Notifications</h3>
            <button
              onClick={onClose}
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4">
            <div className="text-center py-6">
              <Bell className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
              <p className="text-gray-600 font-medium mb-1">No notifications</p>
              <p className="text-xs text-gray-500">You're all caught up!</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
