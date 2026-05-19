import React from "react";
import { CalendarDays, ChevronDown } from "lucide-react";

import SearchBar from "./SearchBar";
import ProfileMenu from "./ProfileMenu";

const Topbar = () => {
  return (
    <header className="w-full bg-white rounded-2xl px-6 py-4 flex items-center justify-between border border-gray-200">
      
      {/* Left */}
      <div className="flex items-center gap-6">
        
        {/* Brand */}
        <h1 className="text-2xl font-bold text-gray-800">
          MediSync Health
        </h1>

        {/* Date Selector */}
        <button className="flex items-center gap-3 border border-gray-200 px-4 py-3 rounded-xl hover:bg-gray-50 transition">
          <CalendarDays size={18} className="text-gray-500" />

          <span className="text-sm font-medium text-gray-700">
            Mon, Oct 23 - Sun, Oct 29, 2023
          </span>

          <ChevronDown size={18} className="text-gray-500" />
        </button>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        <SearchBar />
        <ProfileMenu />
      </div>
    </header>
  );
};

export default Topbar;