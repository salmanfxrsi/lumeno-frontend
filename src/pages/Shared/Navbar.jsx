import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate("/");

  // NavLinks
  const navbar_links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/sessions">Sessions</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
    </>
  );

  return (
    <div className=" shadow-xl bg-black text-white py-2 sticky top-0 z-50">
      <div className="navbar w-11/12 mx-auto py-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
            >
              {navbar_links}
            </div>
          </div>
          {/* Logo and BrandName */}
          <Link className="flex items-center gap-1">
            {/* <img className="w-9 lg:hidden" src={logo} alt="" /> */}
            <h1 className="text-2xl font-black uppercase hidden lg:block font-serif">
              Lumeno
            </h1>
          </Link>
          <div></div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal flex gap-6 font-semibold">
            {navbar_links}
          </div>
        </div>
        <div className="navbar-end flex gap-6">
          {/* avatar */}
          {user && (
            <Link to="dashboard" className="avatar online">
              <div className="w-11 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </Link>
          )}
          {/* login button */}
          {!user && (
            <Link
              to="login"
              className="flex items-center shadow-2xl border-2 border-black gap-1 bg-[#ABEF5F] font-black uppercase w-[144px] px-5 py-3 text-sm text-black transition-colors duration-300 transform rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none"
            >
              <h1>Login Now</h1>
            </Link>
          )}
          {/* logout button */}
          {user && (
            <button
              onClick={() => {
                signOut();
                toast.success("Logout Successful");
                navigate("/");
              }}
              to="login"
              className="flex items-center gap-1 bg-[#EF4444] font-black uppercase w-[144px] px-5 py-3 text-sm text-white transition-colors duration-300 transform rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none"
            >
              <h1>Sign Out</h1>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
