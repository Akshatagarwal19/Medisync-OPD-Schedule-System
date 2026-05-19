import React from "react";
import { Check } from "lucide-react";

const departments = [
  {
    name: "Cardiology",
    color: "bg-blue-500",
  },
  {
    name: "Orthopedics",
    color: "bg-green-500",
  },
  {
    name: "ENT",
    color: "bg-emerald-400",
  },
  {
    name: "Pediatrics",
    color: "bg-orange-400",
  },
  {
    name: "Neurology",
    color: "bg-violet-500",
  },
  {
    name: "Surgery",
    color: "bg-pink-400",
  },
];

const DepartmentFilters = () => {
  return (
    <div className="w-[260px] flex flex-col gap-5">
      {/* Filter Card */}
      <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-5">
          Department Filter
        </h3>

        <div className="flex flex-col gap-4">
          {departments.map((dept) => (
            <label
              key={dept.name}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div
                className={`w-4 h-4 rounded ${dept.color} flex items-center justify-center`}
              >
                <Check size={12} className="text-white" />
              </div>

              <span className="text-sm text-gray-700">{dept.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Selected Departments */}
      <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Departments
        </h3>

        <p className="text-sm text-gray-500 leading-6">
          <span className="text-blue-600 font-medium">Cardiology</span>,
          Orthopedics, Neurology
        </p>
      </div>
    </div>
  );
};

export default DepartmentFilters;
