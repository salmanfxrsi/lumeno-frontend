import { IoLogIn } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
// import logo from  '../../assets/logo.png'

const Navbar = () => {
  // NavLinks
  const navbar_links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/sessions">Sessions</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
    </>
  );

  return (
    <div className="bg-black text-white py-1 sticky top-0 z-50">
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
            <h1 className="text-xl font-black uppercase hidden lg:block">
              Lumeno - Learning Platform
            </h1>
          </Link>
          <div></div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal flex gap-6 font-semibold">
            {navbar_links}
          </div>
        </div>
        <div className="navbar-end">
          <button className="flex items-center gap-1 bg-[#ABEF5F] font-black uppercase w-[144px] px-5 py-3 text-sm text-black transition-colors duration-300 transform rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500">
            <h1>Login Now</h1>
            <IoLogIn className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
