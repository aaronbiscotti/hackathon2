import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";

const Footer = () => {
  return (
    <div className="h-[180px] flex items-center justify-center">
      <Layout>
        <div className="flex justify-center items-center font-bold text-lg mb-3">
          Discover
        </div>
        <div className="flex justify-center items-center font-bold text-lg">
          <ul className="space-x-10 font-normal">
            <Link to="/temperature">
              <li
                className="ease-in-out duration-100 inline-block"
                id="footerlist"
              >
                Temperature
              </li>
            </Link>
            <Link to="/energy">
              <li
                className="ease-in-out duration-100 inline-block"
                id="footerlist"
              >
                Energy
              </li>
            </Link>
            <Link to="/ecosystem">
              <li
                className="ease-in-out duration-100 inline-block"
                id="footerlist"
              >
                Ecosystem
              </li>
            </Link>
            <Link to="/people">
              <li
                className="ease-in-out duration-100 inline-block"
                id="footerlist"
              >
                People
              </li>
            </Link>
            <Link to="/solutions">
              <li
                className="ease-in-out duration-100 inline-block"
                id="footerlist"
              >
                Solutions
              </li>
            </Link>
          </ul>
        </div>
        <div className="w-full h-5 flex justify-center mt-5">
          Atmos, 2022. All rights reserved.
        </div>
      </Layout>
    </div>
  );
};

export default Footer;
