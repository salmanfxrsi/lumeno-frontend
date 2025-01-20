import { Outlet } from "react-router-dom";
import Dashboard from "../pages/Shared/Dashboard";

const DashboardLayout = () => {
  return (
    <div className="flex">
      {/* Dashboard */}
      <div className="bg-black w-[350px] min-h-screen hidden lg:block">
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
