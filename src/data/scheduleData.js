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

// start: index into times[] array
// day: index into days[] array
export const schedules = [
  // Cardiology - Dr. A. Sharma - Mon (day 0)
  { department: "Cardiology", doctor: "Dr. A. Sharma", day: 0, start: 0, end: 1, label: "OPD • 8:00 AM" },
  { department: "Cardiology", doctor: "Dr. A. Sharma", day: 0, start: 1, end: 2, label: "OPD • 9:00 AM" },
  { department: "Cardiology", doctor: "Dr. A. Sharma", day: 0, start: 3, end: 4, label: "OPD • 11:00 AM" },
  { department: "Cardiology", doctor: "Dr. A. Sharma", day: 0, start: 4, end: 5, label: "OPD • 1:00 PM" },
  { department: "Cardiology", doctor: "Dr. A. Sharma", day: 0, start: 5, end: 6, label: "OPD • 2:00 PM" },

  // Neurology - Dr. R. Singh - Tue (day 1)
  { department: "Neurology", doctor: "Dr. R. Singh", day: 1, start: 2, end: 3, label: "OPD • 10:00 AM" },
  { department: "Neurology", doctor: "Dr. R. Singh", day: 1, start: 4, end: 5, label: "OPD • 1:00 PM" },
  { department: "Neurology", doctor: "Dr. R. Singh", day: 1, start: 5, end: 6, label: "OPD • 2:00 PM" },
  { department: "Neurology", doctor: "Dr. R. Singh", day: 1, start: 6, end: 7, label: "OPD • 3:00 PM" },

  // Orthopedics - Dr. S. Khan - Wed (day 2)
  { department: "Orthopedics", doctor: "Dr. S. Khan", day: 2, start: 1, end: 2, label: "OPD • 9:00 AM" },
  { department: "Orthopedics", doctor: "Dr. S. Khan", day: 2, start: 3, end: 4, label: "OPD • 11:00 AM" },
  { department: "Orthopedics", doctor: "Dr. S. Khan", day: 2, start: 4, end: 5, label: "OPD • 1:00 PM" },
  { department: "Orthopedics", doctor: "Dr. S. Khan", day: 2, start: 6, end: 7, label: "OPD • 3:00 PM" },
  { department: "Orthopedics", doctor: "Dr. S. Khan", day: 2, start: 7, end: 8, label: "OPD • 4:00 PM" },

  // Pediatrics - Dr. M. Patel - Fri (day 3)
  { department: "Pediatrics", doctor: "Dr. M. Patel", day: 3, start: 2, end: 3, label: "OPD • 10:00 AM" },
  { department: "Pediatrics", doctor: "Dr. M. Patel", day: 3, start: 4, end: 5, label: "OPD • 1:00 PM" },
  { department: "Pediatrics", doctor: "Dr. M. Patel", day: 3, start: 5, end: 6, label: "OPD • 2:00 PM" },
  { department: "Pediatrics", doctor: "Dr. R. Iyer", day: 3, start: 6, end: 7, label: "OPD • 3:00 PM" },
  { department: "Pediatrics", doctor: "Dr. R. Iyer", day: 3, start: 7, end: 8, label: "OPD • 4:00 PM" },

  // ENT - Dr. J. Doe - Sat (day 4)
  { department: "ENT", doctor: "Dr. J. Doe", day: 4, start: 1, end: 2, label: "OPD • 9:00 AM" },
  { department: "ENT", doctor: "Dr. J. Doe", day: 4, start: 3, end: 4, label: "OPD • 11:00 AM" },
  { department: "ENT", doctor: "Dr. J. Doe", day: 4, start: 4, end: 5, label: "OPD • 1:00 PM" },
  { department: "ENT", doctor: "Dr. J. Doe", day: 4, start: 5, end: 6, label: "OPD • 2:00 PM" },
  { department: "ENT", doctor: "Dr. J. Doe", day: 4, start: 6, end: 7, label: "OPD • 3:00 PM" },

  // Surgery - Dr. V. Rao - Sun (day 5)
  { department: "Surgery", doctor: "Dr. V. Rao", day: 5, start: 2, end: 3, label: "OPD • 10:00 AM" },
  { department: "Surgery", doctor: "Dr. V. Rao", day: 5, start: 5, end: 6, label: "OPD • 2:00 PM" },
  { department: "Surgery", doctor: "Dr. V. Rao", day: 5, start: 7, end: 8, label: "OPD • 4:00 PM" },

  // Dr. L. Pone - Mon (day 0) - late
  { department: "Cardiology", doctor: "Dr. L. Pone", day: 0, start: 8, end: 9, label: "OPD • 5:00 PM" },]