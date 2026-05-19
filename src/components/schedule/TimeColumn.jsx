import React from "react";

const TimeColumn = ({ times }) => {
  return (
    <div className="flex flex-col gap-3">
      {times.map((time) => (
        <div
          key={time}
          className="h-24 flex items-start justify-center text-sm font-medium text-gray-500 pt-2"
        >
          {time}
        </div>
      ))}
    </div>
  );
};

export default TimeColumn;