import { ChartLine, Home, Timer } from "lucide-react";
import React from "react";
import { Link } from "react-router";
const Navbar = () => {
  return (
    <div className="w-full py-3 bg-base-100 shadow-sm sticky top-0 z-50 backdrop-blur-lg">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2"
            >
              <Link to={'/'} className="flex gap-2 text-lg">
                <Home /> Home
              </Link>

              <Link to={'/timeline'} className="flex gap-2 text-lg">
                <Timer /> TimeLine
              </Link>

              <Link to={'States'} className="flex gap-2 text-lg">
                <ChartLine /> States
              </Link>
            </ul>
          </div>

          <a className="btn btn-ghost text-xl">KeenKeeper</a>
        </div>

        {/* Button */}
        <div className="navbar-end hidden lg:flex gap-4">
          <Link to={'/'} className="btn btn-soft btn-success">
            <Home /> Home
          </Link>

          <Link to={'/timeline'} className="btn btn-soft btn-success">
            <Timer /> TimeLine
          </Link>

          <Link to={'/States'} className="btn btn-soft btn-success">
            <ChartLine /> States
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
