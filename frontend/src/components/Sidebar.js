import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";

import NotificationDropdown from "./NotificationDropdown.js";
// import UserDropdown from "./UserDropdown.js";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className="md:left-0 md:block bg-gray-800 md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Brand */}
          <div class="flex items-center justify-center flex-wrap mt-8">
            <div class="w-1/2">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
          </div>
          {/* User */}
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative m-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className="text-white hover:text-white text-lg uppercase py-3 font-bold block"
                  to="/dashboard"
                >
                  <i className="fas fa-rocket text-white opacity-100 mr-2 text-sm"></i>{" "}
                  Dashboard
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="text-white hover:text-white text-lg uppercase py-3 font-bold block"
                  to="/graphiql"
                >
                  <i className="fas fa-book text-white opacity-100 mr-2 text-sm"></i>{" "}
                  GraphiQL
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
