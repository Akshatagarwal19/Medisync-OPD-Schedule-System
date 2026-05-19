import React from "react";

const emergencyDoctors = [
  {
    name: "Dr. L. Fernandez",
    shift: "8PM - 8AM",
  },
  {
    name: "Dr. K. Gupta",
    shift: "8PM - 8AM",
  },
  {
    name: "Dr. R. Iyer",
    shift: "8PM - 8AM",
  },
  {
    name: "Dr. K. Gupta",
    shift: "8PM - 8AM",
  },
];

const EmergencySection = () => {
  return (
    <div className="mt-6 bg-[#FFF8E8] border border-orange-200 rounded-3xl p-5 shadow-sm">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        
        <h2 className="text-2xl font-bold text-gray-800">
          Emergency On-Call Duty
        </h2>

        <button className="bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-50 transition">
          Generate Schedule
        </button>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-5 bg-white rounded-2xl px-4 py-3 border border-gray-200 mb-3">
        
        <p className="text-sm font-semibold text-gray-600">
          On-Call Doctor
        </p>

        <p className="text-sm font-semibold text-gray-600">
          Night Shift
        </p>

        <p className="text-sm font-semibold text-gray-600">
          Night Shift
        </p>

        <p className="text-sm font-semibold text-gray-600">
          Night Shifts
        </p>

        <p className="text-sm font-semibold text-gray-600">
          Availability
        </p>
      </div>

      {/* Doctors Row */}
      <div className="grid grid-cols-5 gap-3">
        
        {emergencyDoctors.map((doctor, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-200 p-4"
          >
            <div className="flex items-center gap-3">
              
              <img
                src={`https://i.pravatar.cc/150?img=${index + 10}`}
                alt="doctor"
                className="w-10 h-10 rounded-full"
              />

              <div>
                <h3 className="text-sm font-semibold text-gray-800">
                  {doctor.name}
                </h3>

                <p className="text-xs text-gray-500">
                  {doctor.shift}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Availability Badge */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 flex items-center">
          
          <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
            Emergency
          </span>
        </div>
      </div>
    </div>
  );
};

export default EmergencySection;