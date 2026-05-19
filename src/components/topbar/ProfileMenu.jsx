import React from "react";
import { Bell } from "lucide-react";

const ProfileMenu = () => {
  return (
    <div className="flex items-center gap-5">
      
      {/* Notification */}
      <div className="relative cursor-pointer">
        <Bell size={22} className="text-gray-600" />

        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
          3
        </span>
      </div>

      {/* Profile */}
      <div className="flex items-center gap-3 cursor-pointer">
        <img
          src="https://i.pravatar.cc/100"
          alt="profile"
          className="w-11 h-11 rounded-full object-cover"
        />

        <div>
          <h3 className="text-sm font-semibold text-gray-800">
            Dr. Jhanvi Sharma
          </h3>

          <p className="text-xs text-gray-500">Admin</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;