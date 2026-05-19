import React from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

export const days = [
  "Mon Oct 23",
  "Tue Oct 24",
  "Wed Oct 25",
  "Fri Oct 27",
  "Sat Oct 28",
  "Sun Oct 29",
];

export const times = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
];

// Department header row — one entry per day column (index matches days[])
export const departmentHeaders = [
  { department: "Cardiology",  doctor: "Dr. A. Sharma", dayIndex: 0 },
  { department: "Neurology",   doctor: "Dr. R. Singh",  dayIndex: 1 },
  { department: "Orthopedics", doctor: "Dr. S. Khan",   dayIndex: 2 },
  { department: "Pediatrics",  doctor: "Dr. M. Patel",  dayIndex: 3 },
  { department: "ENT",         doctor: "Dr. J. Doe",    dayIndex: 4 },
  { department: "Surgery",     doctor: "Dr. V. Rao",    dayIndex: 5 },
];

// Individual duty blocks
// start / end = index into times[]
export const schedules = [
  // Mon – Cardiology
  { doctor: "Dr. A. Sharma", dayIndex: 0, startSlot: 0, endSlot: 1, label: "OPD • 8:00 AM" },
  { doctor: "Dr. A. Sharma", dayIndex: 0, startSlot: 1, endSlot: 2, label: "OPD • 9:00 AM" },
  { doctor: "Dr. A. Sharma", dayIndex: 0, startSlot: 3, endSlot: 4, label: "OPD • 11:00 AM" },
  { doctor: "Dr. A. Sharma", dayIndex: 0, startSlot: 4, endSlot: 5, label: "OPD • 1:00 PM" },
  { doctor: "Dr. A. Sharma", dayIndex: 0, startSlot: 5, endSlot: 6, label: "OPD • 2:00 PM" },
  { doctor: "Dr. L. Pone",   dayIndex: 0, startSlot: 8, endSlot: 9, label: "OPD • 5:00 PM" },

  // Tue – Neurology
  { doctor: "Dr. R. Singh", dayIndex: 1, startSlot: 2, endSlot: 3, label: "OPD • 10:00 AM" },
  { doctor: "Dr. R. Singh", dayIndex: 1, startSlot: 4, endSlot: 5, label: "OPD • 1:00 PM" },
  { doctor: "Dr. R. Singh", dayIndex: 1, startSlot: 5, endSlot: 6, label: "OPD • 2:00 PM" },
  { doctor: "Dr. R. Singh", dayIndex: 1, startSlot: 6, endSlot: 7, label: "OPD • 3:00 PM" },

  // Wed – Orthopedics
  { doctor: "Dr. S. Khan", dayIndex: 2, startSlot: 1, endSlot: 2, label: "OPD • 9:00 AM" },
  { doctor: "Dr. S. Khan", dayIndex: 2, startSlot: 3, endSlot: 4, label: "OPD • 11:00 AM" },
  { doctor: "Dr. S. Khan", dayIndex: 2, startSlot: 4, endSlot: 5, label: "OPD • 1:00 PM" },
  { doctor: "Dr. S. Khan", dayIndex: 2, startSlot: 6, endSlot: 7, label: "OPD • 3:00 PM" },
  { doctor: "Dr. S. Khan", dayIndex: 2, startSlot: 7, endSlot: 8, label: "OPD • 4:00 PM" },

  // Fri – Pediatrics
  { doctor: "Dr. M. Patel", dayIndex: 3, startSlot: 2, endSlot: 3, label: "OPD • 10:00 AM" },
  { doctor: "Dr. M. Patel", dayIndex: 3, startSlot: 4, endSlot: 5, label: "OPD • 1:00 PM" },
  { doctor: "Dr. M. Patel", dayIndex: 3, startSlot: 5, endSlot: 6, label: "OPD • 2:00 PM" },
  { doctor: "Dr. R. Iyer",  dayIndex: 3, startSlot: 6, endSlot: 7, label: "OPD • 3:00 PM" },
  { doctor: "Dr. R. Iyer",  dayIndex: 3, startSlot: 7, endSlot: 8, label: "OPD • 4:00 PM" },

  // Sat – ENT
  { doctor: "Dr. J. Doe", dayIndex: 4, startSlot: 1, endSlot: 2, label: "OPD • 9:00 AM" },
  { doctor: "Dr. J. Doe", dayIndex: 4, startSlot: 3, endSlot: 4, label: "OPD • 11:00 AM" },
  { doctor: "Dr. J. Doe", dayIndex: 4, startSlot: 4, endSlot: 5, label: "OPD • 1:00 PM" },
  { doctor: "Dr. J. Doe", dayIndex: 4, startSlot: 5, endSlot: 6, label: "OPD • 2:00 PM" },
  { doctor: "Dr. J. Doe", dayIndex: 4, startSlot: 6, endSlot: 7, label: "OPD • 3:00 PM" },

  // Sun – Surgery
  { doctor: "Dr. V. Rao", dayIndex: 5, startSlot: 2, endSlot: 3, label: "OPD • 10:00 AM" },
  { doctor: "Dr. V. Rao", dayIndex: 5, startSlot: 5, endSlot: 6, label: "OPD • 2:00 PM" },
  { doctor: "Dr. V. Rao", dayIndex: 5, startSlot: 7, endSlot: 8, label: "OPD • 4:00 PM" },
];

// ─── STYLES ──────────────────────────────────────────────────────────────────

// Solid header colours  (bg, text, border-left for duty blocks)
const DEPT_COLORS = [
  { header: "bg-blue-500",   block: "bg-blue-100   border-blue-400",   text: "text-blue-800"   }, // Cardiology
  { header: "bg-green-500",  block: "bg-green-100  border-green-400",  text: "text-green-800"  }, // Neurology
  { header: "bg-teal-500",   block: "bg-teal-100   border-teal-400",   text: "text-teal-800"   }, // Orthopedics
  { header: "bg-orange-400", block: "bg-orange-100 border-orange-400", text: "text-orange-800" }, // Pediatrics
  { header: "bg-cyan-500",   block: "bg-cyan-100   border-cyan-400",   text: "text-cyan-800"   }, // ENT
  { header: "bg-purple-500", block: "bg-purple-100 border-purple-400", text: "text-purple-800" }, // Surgery
];

// Map dayIndex → colour index (matches departmentHeaders order)
const dayColorIndex = Object.fromEntries(
  departmentHeaders.map((h, i) => [h.dayIndex, i])
);

// ─── LAYOUT CONSTANTS ────────────────────────────────────────────────────────

const CELL_HEIGHT  = 44;   // px per time slot row
const TIME_WIDTH   = 92;   // px for the time label column

// ─── COMPONENT ───────────────────────────────────────────────────────────────

const ScheduleGrid = () => {
  const colTemplate = `${TIME_WIDTH}px repeat(${days.length}, 1fr)`;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden select-none">

      {/* ── Row 1: Day headers ── */}
      <div
        className="grid border-b border-gray-200"
        style={{ gridTemplateColumns: colTemplate }}
      >
        <div className="h-12 flex items-center justify-center text-sm font-semibold text-gray-500 border-r border-gray-200 bg-gray-50">
          Days
        </div>
        {days.map((day) => (
          <div key={day} className="border-r border-gray-200 bg-gray-50 p-2 last:border-r-0">
            <div className="h-8 rounded-md bg-white border border-gray-200 flex items-center justify-center text-xs font-semibold text-gray-700">
              {day}
            </div>
          </div>
        ))}
      </div>

      {/* ── Row 2: Department + doctor banners ── */}
      <div
        className="grid border-b border-gray-200"
        style={{ gridTemplateColumns: colTemplate }}
      >
        <div className="border-r border-gray-200 bg-white" />

        {days.map((_, colIndex) => {
          const hdr      = departmentHeaders.find((h) => h.dayIndex === colIndex);
          const colorIdx = dayColorIndex[colIndex];
          const colors   = DEPT_COLORS[colorIdx];

          return (
            <div key={colIndex} className="p-1.5 border-r border-gray-200 bg-white last:border-r-0">
              {hdr ? (
                <div
                  className={`${colors.header} h-11 rounded-lg px-3 flex flex-col justify-center text-white`}
                >
                  <p className="text-xs font-bold leading-none">{hdr.department}</p>
                  <p className="text-[10px] opacity-85 mt-1 leading-none">{hdr.doctor}</p>
                </div>
              ) : (
                <div className="h-11" />
              )}
            </div>
          );
        })}
      </div>

      {/* ── Body: time rows + duty blocks ── */}
      <div className="relative">

        {/* Background grid */}
        <div
          className="grid"
          style={{ gridTemplateColumns: colTemplate }}
        >
          {times.map((time, rowIndex) => (
            <React.Fragment key={time}>
              {/* Time label */}
              <div
                className="flex items-center justify-center text-xs text-gray-400 border-r border-b border-gray-100 bg-white font-medium"
                style={{ height: CELL_HEIGHT }}
              >
                {time}
              </div>

              {/* Empty day cells */}
              {days.map((_, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className="border-r border-b border-gray-100 bg-gray-50/40 last:border-r-0"
                  style={{ height: CELL_HEIGHT }}
                />
              ))}
            </React.Fragment>
          ))}
        </div>

        {/* Duty blocks — absolutely positioned over the grid */}
        <div className="absolute inset-0 pointer-events-none">
          {schedules.map((event, idx) => {
            const colorIdx = dayColorIndex[event.dayIndex];
            const colors   = DEPT_COLORS[colorIdx];
            const spanRows = event.endSlot - event.startSlot;

            /*
             * Horizontal position:
             *   left  = TIME_WIDTH + colIndex * colWidth + padding
             *   width = colWidth - 2*padding
             * We use calc() so it works with the fluid 1fr columns.
             */
            const colFrac   = `(100% - ${TIME_WIDTH}px) / ${days.length}`;
            const leftEdge  = `${TIME_WIDTH}px + ${event.dayIndex} * (${colFrac})`;
            const blockW    = `(${colFrac}) - 8px`;

            return (
              <div
                key={idx}
                className={`absolute ${colors.block} border-l-4 rounded-md px-2 flex flex-col justify-center`}
                style={{
                  top:    event.startSlot * CELL_HEIGHT + 3,
                  left:   `calc(${leftEdge} + 4px)`,
                  width:  `calc(${blockW})`,
                  height: spanRows * CELL_HEIGHT - 6,
                }}
              >
                <p className={`text-[11px] font-semibold leading-none ${colors.text}`}>
                  {event.doctor}
                </p>
                <p className={`text-[10px] mt-1 leading-none ${colors.text} opacity-70`}>
                  {event.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ScheduleGrid;