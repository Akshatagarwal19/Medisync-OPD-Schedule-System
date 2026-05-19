import React from "react";
import SidebarItem from "./SidebarItem";

import {
  LayoutDashboard,
  Building2,
  Users,
  CalendarDays,
  ShieldAlert,
  Settings,
  HeartPulse,
} from "lucide-react";

const navItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  {
    label: "Departments",
    icon: Building2,
  },
  {
    label: "Doctors",
    icon: Users,
  },
  {
    label: "Weekly Schedule",
    icon: CalendarDays,
  },
  {
    label: "Emergency Duty",
    icon: ShieldAlert,
  },
];

const Sidebar = () => {
  return (
    <aside className="w-[260px] min-h-screen bg-gradient-to-b from-[#0B1736] to-[#071224] text-white flex flex-col p-5">
      
      {/* Logo Section */}
      <div className="flex items-center gap-3 mb-10">
        <div className="w-12 h-12 rounded-xl bg-[#11204A] flex items-center justify-center">
          <HeartPulse size={24} />
        </div>

        <div>
          <h1 className="font-semibold text-lg">Hospital Name</h1>
          <p className="text-xs text-gray-400">Healthcare Dashboard</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-col gap-2 flex-1">
        {navItems.map((item) => (
          <SidebarItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            active={item.active}
          />
        ))}
      </div>

      {/* Bottom Settings */}
      <div className="pt-4 border-t border-[#1E2D56]">
        <SidebarItem icon={Settings} label="Settings" />
      </div>
    </aside>
  );
};

export default Sidebar;