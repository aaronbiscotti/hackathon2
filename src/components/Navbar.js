import React, { useState } from "react";
import HamburgerIcon from "../assets/icons/hamburger.svg";
import Logo from "../assets/icons/logo.svg";
import Close from "../assets/icons/close.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Navbar */}
      <div className="h-20 shadow w-full flex items-center justify-between px-[300px]">
        <div></div>
        <Link to="/home">
          <img src={Logo} className="logo-hover absolute left-0 h-8 top-6" />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center space-x-2 bg-[#1c101e] text-white w-[100px] h-8"
        >
          <p className="text-sm font-Messina font-bold">Index</p>
          <img src={HamburgerIcon} />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`bg-white top-0 z-10 right-0 fixed w-[17vw] h-full p-8 shadow ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-300`}
      >
        <div className="relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-0 right-0 z-10"
          >
            <img src={Close} />
          </button>
        </div>
        <h2 className="text-xl text-black mt-10 font-Messina">
          <ul>
            <Link to="/temperature">
              <li className="ease-in-out duration-100" id="nav-link">
                Temperature
              </li>
            </Link>
            <Link to="/energy">
              <li className="ease-in-out duration-100" id="nav-link">
                Energy
              </li>
            </Link>
            <Link to="/ecosystem">
              <li className="ease-in-out duration-100" id="nav-link">
                Ecosystem
              </li>
            </Link>
            <Link to="/people">
              <li className="ease-in-out duration-100" id="nav-link">
                People
              </li>
            </Link>
            <Link to="/solutions">
              <li
                className="ease-in-out duration-100 text-[#8a2dff]"
                id="nav-link"
              >
                Solutions
              </li>
            </Link>
          </ul>
        </h2>
      </div>
    </>
  );
};

export default Navbar;
