import React from "react";

const ScheduleCard = ({ item }) => {
  return (
    <div
      className={`${item.color} text-white rounded-lg p-3 h-full shadow-sm`}
    >
      <h3 className="font-semibold text-sm">
        {item.department}
      </h3>

      <p className="text-xs mt-1 opacity-90">
        {item.doctor}
      </p>
    </div>
  );
};

export default ScheduleCard;