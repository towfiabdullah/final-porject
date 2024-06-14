import { NavLink } from "react-router-dom";

const Nav = () => {
  const links = (
    <>
      <div className="flex gap-3">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-btn" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/listBook"
            className={({ isActive }) => (isActive ? "active-btn" : "")}
          >
            Listed Books
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/readBook"
            className={({ isActive }) => (isActive ? "active-btn" : "")}
          >
            Pages to Read
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mostRead"
            className={({ isActive }) => (isActive ? "active-btn" : "")}
          >
            Most Read
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/review"
            className={({ isActive }) => (isActive ? "active-btn" : "")}
          >
            Review
          </NavLink>
        </li>
      </div>
    </>
  );

  return (
    <div className="navbar bg-base-100">
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <h1 className="text-black font-bold text-2xl lg:text-3xl">Book Vibe</h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end space-x-3">
        <a className="btn px-4 lg:px-6 py-2 lg:py-4 nav-btn1 text-white font-semibold">
          Sign In
        </a>
        <a className="btn px-4 lg:px-6 py-2 lg:py-4 hidden lg:block font-semibold text-white nav-btn2">
          {" "}
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Nav;
