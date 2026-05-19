import React from "react";

const ScheduleHeader = ({ days }) => {
  return (
    <>
      {days.map((day) => (
        <div
          key={day}
          className="bg-white rounded-xl py-4 text-center border border-gray-200 font-semibold text-gray-700 shadow-sm"
        >
          {day}
        </div>
      ))}
    </>
  );
};

export default ScheduleHeader;