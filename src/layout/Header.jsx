import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState("");
  return (
    <nav className="w-full flex items-center py-3 fixed top-0 z-20 bg-gray-800 px-6 md:px-16 lg:px-24 font-mono">
      <div className="w-full flex justify-between items-center max-w-screen mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white font-mono font-extrabold flex justify-center text-3xl">
            Valley Hatchery
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-8 text-white">
          <li
            className={`${
              active === "/login" ? "text-green-300" : "text-white"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive("/login")}
          >
            <NavLink to="/login">
              <button className="">Login</button>
            </NavLink>
          </li>

          <li
            className={`${
              active === "/reportLoss" ? "text-green-300" : "text-white"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive("/reportLoss")}
          >
            <NavLink to="/reportLoss">
              <button className="">Report Loss</button>
            </NavLink>
          </li>
          <li
            className={`${
              active === "/runReport" ? "text-green-300" : "text-white"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive("/runReport")}
          >
            <NavLink to="/runReport">
              <button className="">Run Report</button>
            </NavLink>
          </li>
          <li
            className={`${
              active === "/manageProduct" ? "text-green-300" : "text-white"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive("/manageProduct")}
          >
            <NavLink to="/manageProduct">
              <button className="">Manage Product</button>
            </NavLink>
          </li>


          {/* login  */}
        </ul>

        
      </div>
    </nav>
  );
};

export default Header;
