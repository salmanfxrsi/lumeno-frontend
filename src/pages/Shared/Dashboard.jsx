import { FaUsersGear } from "react-icons/fa6";
import { GiMaterialsScience, GiNotebook } from "react-icons/gi";
import { IoIosHome } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import useRole from "../../hooks/useRole";
import Loading from "../../components/Loading";

const Dashboard = () => {
  const [isLoading, role] = useRole();

  if (isLoading) return <Loading></Loading>;

  return (
    <div className="mt-[50px] ml-[35px]">
      {/* Dashboard Heading */}
      <Link to="/">
        <h1 className="uppercase font-black text-[#151515] text-2xl">
          Lumenooo
        </h1>
        <p className="text-[#151515] uppercase font-bold text-lg">
          Learning Platform
        </p>
      </Link>
      {/* Home NavLink */}
      <div className="my-[60px] flex flex-col gap-2">
        <NavLink to="/" className="flex items-center text-base font-bold gap-1">
          <IoIosHome className="text-xl" />
          <p className="mt-1">Home</p>
        </NavLink>

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
              to="all-users"
              className="flex items-center text-base font-bold gap-1"
            >
              <GiMaterialsScience className="text-xl" />
              <p className="">Manage Study Materials</p>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
