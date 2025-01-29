import { useState } from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "../pages/Shared/Dashboard";
import { MdOutlineDashboard } from "react-icons/md";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex">
      <div
        className={`bg-black w-[350px] min-h-screen fixed lg:static transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 z-50`}
      >
        <Dashboard />
      </div>

      {!isOpen && (
        <button
          className="lg:hidden absolute top-4 left-6 z-50 bg-[#ABEF5F] text-black px-4 py-2 rounded flex items-center gap-2 font-bold"
          onClick={toggleSidebar}
        >
          <MdOutlineDashboard /> <h1>Dashboard</h1>
        </button>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      <div className="w-full mt-12">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
