import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Layout from "../components/Layout";

const Temperature = () => {
  return (
    <>
      <div className="h-[250px] w-full flex justify-center items-center border-b-2">
        <Layout>
          <p className="font-Messina">01</p>
          <h1 className="text-[50px] header">Temperature</h1>
        </Layout>
      </div>
      <div className="h-[120px] flex justify-center font-Messina">
        <NavLink
          to="atmosphere"
          className={({ isActive }) =>
            isActive
              ? "w-[200px] h-[120px] flex justify-center items-center font-bold box-hover-temp flex-col"
              : "w-[200px] h-[120px] flex justify-center items-center font-bold box-hover-temp flex-col text-[#777077]"
          }
        >
          <div>
            <p className="mb-2" id="volnum">
              1.1
            </p>
            <p>Atmosphere</p>
          </div>
        </NavLink>
        <NavLink
          to="ocean"
          className={({ isActive }) =>
            isActive
              ? "w-[200px] h-[120px] flex justify-center items-center font-bold box-hover-temp flex-col"
              : "w-[200px] h-[120px] flex justify-center items-center font-bold box-hover-temp flex-col text-[#777077]"
          }
        >
          <div>
            <p className="mb-2" id="volnum">
              1.2
            </p>
            <p>Ocean</p>
          </div>
        </NavLink>
        <NavLink
          to="land"
          className={({ isActive }) =>
            isActive
              ? "w-[200px] h-[120px] flex justify-center items-center font-bold box-hover-temp flex-col"
              : "w-[200px] h-[120px] flex justify-center items-center font-bold box-hover-temp flex-col text-[#777077]"
          }
        >
          <div>
            <p className="mb-2" id="volnum">
              1.3
            </p>
            <p>Land</p>
          </div>
        </NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Temperature;
