import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  // NavLinks
  const navbar_links = (
    <>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/dashboard'>Dashboard</NavLink>
    </>
  );

  return (
    <div className="bg-black text-white">
      <div className="navbar container mx-auto">
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
            <img className="w-10" src="" alt="" />
            <h1 className="text-2xl font-bold uppercase">Lumeno</h1>
          </Link>
          <div></div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal flex gap-6 font-semibold">
           {navbar_links}
          </div>
        </div>
        <div className="navbar-end">
          <a className="btn">Login Now</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
