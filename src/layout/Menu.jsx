import { useState } from "react";
import {  NavLink, Outlet } from "react-router-dom";

const Menu = () => {
  const [active, setActive] = useState("");
  return (
    <div>
      {/* -----------------------------  */}
      <nav className="w-full flex items-center py-3 fixed top-0 z-20 bg-gray-800 px-6 md:px-16 lg:px-24 font-mono">
        <div className="w-full flex justify-between items-center max-w-screen mx-auto">
          <ul className="list-none hidden sm:flex flex-row gap-8 text-white">
            <li
              className={`${
                active === "/" ? "text-green-300" : "text-white"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive("/")}
            >
              <NavLink to="/">
                <button className="">Home</button>
              </NavLink>
            </li>

            <li
              className={`${
                active === "/menu/reportLoss" ? "text-green-300" : "text-white"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive("/menu/reportLoss")}
            >
              <NavLink to="/menu/reportLoss">
                <button className="">Report Loss</button>
              </NavLink>
            </li>


            <li
              className={`${
                active === "/menu/runReport" ? "text-green-300" : "text-white"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive("/menu/runReport")}
            >
              <NavLink to="/menu/runReport">
                <button className="">Run Report</button>
              </NavLink>
            </li>
            <li
              className={`${
                active === "menu/manageProduct"
                  ? "text-green-300"
                  : "text-white"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive("menu/manageProduct")}
            >
              <NavLink to="/menu/manageProduct">
                <button className="">Manage Product</button>
              </NavLink>
            </li>

            {/* login  */}
          </ul>
        </div>
      </nav>
      {/* -------------------------------------------  */}
      <Outlet />
    </div>
  );
};

export default Menu;
