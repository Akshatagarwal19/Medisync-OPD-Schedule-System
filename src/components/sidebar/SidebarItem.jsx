import React from "react";

const SidebarItem = ({ icon: Icon, label, active }) => {
  return (
    <button
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
        ${
          active
            ? "bg-[#1B2A52] text-white shadow-md"
            : "text-gray-300 hover:bg-[#162447] hover:text-white"
        }`}
    >
      <Icon size={20} />
      <span className="text-sm font-medium">{label}</span>

      {active && (
        <span className="ml-auto text-[10px] bg-green-500 text-white px-2 py-[2px] rounded-full">
          Active
        </span>
      )}
    </button>
  );
};

export default SidebarItem;