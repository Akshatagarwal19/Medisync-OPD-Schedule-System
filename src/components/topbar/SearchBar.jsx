import React from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 w-[420px]">
      <Search size={18} className="text-gray-400" />

      <input
        type="text"
        placeholder="Search doctor by name or ID..."
        className="flex-1 outline-none text-sm text-gray-700 placeholder:text-gray-400 bg-transparent"
      />
    </div>
  );
};

export default SearchBar;