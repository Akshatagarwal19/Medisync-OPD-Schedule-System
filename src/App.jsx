import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import ScheduleGrid from "./components/schedule/ScheduleGrid";
import EmergencySection from "./components/emergency/EmergencySection";
import DepartmentFilters from "./components/schedule/DepartmentFilters";

function App() {
  return (
    <div className="flex bg-[#F4F7FB] min-h-screen">
      <Sidebar />

      <main className="flex-1 p-6 overflow-hidden">
        <Topbar />

        <div className="mt-6 flex gap-6 items-start">
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-3xl font-bold text-gray-800">
                Weekly Duty Schedule
              </h2>

              <div className="flex items-center gap-3">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl text-sm font-medium transition">
                  Generate Schedule
                </button>

                <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-xl text-sm font-medium transition">
                  Add Duty
                </button>

                <button className="border border-gray-200 px-4 py-3 rounded-xl text-sm font-medium bg-white hover:bg-gray-50">
                  Filters
                </button>
              </div>
            </div>
            <ScheduleGrid />
            <EmergencySection />
          </div>
          <DepartmentFilters />
        </div>
      </main>
    </div>
  );
}

export default App;
