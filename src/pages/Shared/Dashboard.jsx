import { FaUsersGear } from "react-icons/fa6";
import { GiMaterialsScience, GiNotebook } from "react-icons/gi";
import { TbBrandBooking } from "react-icons/tb";
import { IoIosHome } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import useRole from "../../hooks/useRole";
import {
  MdAddChart,
  MdEventNote,
  MdNoteAlt,
  MdOutlineCloudUpload,
  MdOutlineManageAccounts,
} from "react-icons/md";
import { SiMaterialformkdocs } from "react-icons/si";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
  const { signOut } = useAuth();
  const [isLoading, role] = useRole();

  if (isLoading) return;

  return (
    <div className="mt-[50px] ml-[35px]">
      <Helmet>
        <title>
          {role.charAt(0).toUpperCase() + role.slice(1)} Dashboard | Lumeno{" "}
        </title>
      </Helmet>
      {/* Dashboard Heading */}
      <Link to="/">
        <h1 className="uppercase font-black text-white text-2xl">Lumenooo</h1>
        <p className="text-white uppercase font-bold text-lg">
          {role} Dashboard
        </p>
      </Link>
      {/* User Based NavLink */}
      <div className="my-[60px] flex flex-col gap-2 text-gray-400">
        <NavLink to="/" className="flex items-center text-base font-bold gap-1">
          <IoIosHome className="text-xl" />
          <p className="mt-1">Home</p>
        </NavLink>

        {/* Student Routes */}
        {role === "student" && (
          <>
            <NavLink
              to="student-booked-sessions"
              className="flex items-center text-base font-bold gap-1"
            >
              <TbBrandBooking className="text-xl" />
              <p className="">Booked Sessions</p>
            </NavLink>
            <NavLink
              to="student-create-note"
              className="flex items-center text-base font-bold gap-1"
            >
              <MdEventNote className="text-xl" />
              <p className="">Create Note</p>
            </NavLink>
            <NavLink
              to="student-manage-notes"
              className="flex items-center text-base font-bold gap-1"
            >
              <MdNoteAlt className="text-xl" />
              <p className="">Manage Notes</p>
            </NavLink>
            <NavLink
              to="student-view-study-materials"
              className="flex items-center text-base font-bold gap-1"
            >
              <SiMaterialformkdocs className="text-xl" />
              <p className="">View Study Materials</p>
            </NavLink>
          </>
        )}

        {/* Tutor Routes */}
        {role === "tutor" && (
          <>
            <NavLink
              to="tutor-create-session"
              className="flex items-center text-base font-bold gap-1"
            >
              <MdAddChart className="text-xl" />
              <p className="">Create Session</p>
            </NavLink>
            <NavLink
              to="tutor-manage-sessions"
              className="flex items-center text-base font-bold gap-1"
            >
              <MdOutlineManageAccounts className="text-xl" />
              <p className="">My Sessions</p>
            </NavLink>
            <NavLink
              to="tutor-upload-materials"
              className="flex items-center text-base font-bold gap-1"
            >
              <MdOutlineCloudUpload className="text-xl" />
              <p className="">Upload Material</p>
            </NavLink>
            <NavLink
              to="tutor-manage-materials"
              className="flex items-center text-base font-bold gap-1"
            >
              <SiMaterialformkdocs className="text-xl" />
              <p className="">Manage Materials</p>
            </NavLink>
          </>
        )}

        {/* Admin Routes */}
        {role === "admin" && (
          <>
            <NavLink
              to="admin-manage-users"
              className="flex items-center text-base font-bold gap-1"
            >
              <FaUsersGear className="text-xl" />
              <p className="">Manage Users</p>
            </NavLink>
            <NavLink
              to="admin-manage-sessions"
              className="flex items-center text-base font-bold gap-1"
            >
              <GiNotebook className="text-xl" />
              <p className="">Manage Sessions</p>
            </NavLink>
            <NavLink
              to="admin-manage-study-materials"
              className="flex items-center text-base font-bold gap-1"
            >
              <GiMaterialsScience className="text-xl" />
              <p className="">Manage Study Materials</p>
            </NavLink>
          </>
        )}
      </div>

      <div className="">
        <button
          onClick={signOut}
          className="py-1 px-20 text-white bg-red-500 uppercase rounded-lg font-black transition-colors duration-300 transform hover:bg-gray-500 focus:outline-none text-sm"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
