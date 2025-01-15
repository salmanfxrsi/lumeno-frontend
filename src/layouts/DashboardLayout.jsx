import { Outlet } from "react-router-dom";
import Dashboard from "../pages/Shared/Dashboard";

const DashboardLayout = () => {
  return (
    <div className="flex">
      {/* Dashboard */}
      <div className="bg-[#ABEF5F] w-[350px] min-h-screen">
        <Dashboard></Dashboard>
      </div>
      {/* Dashboard Outlet */}
      <div className="w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
