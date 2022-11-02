import React from "react";
import Navbar from "./components/Navbar.js";
import Sidebar from "./components/Sidebar.js";
import DataSources from "./components/DataSources.js";
import { useState, useEffect } from "react";
import { getIP, getStatus } from "./services/api.js";

export default function Dashboard() {
  const [ip, setIp] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    getIP().then((result) => {
      setIp(result);
    });
    getStatus().then((result) => {
      setStatus(result);
    });
  }, []);

  let statusObj;
  if (status) {
    if (status === "RUNNING") {
      statusObj = {
        text: ["Active", "Deployment Successful"],
        textClass: "text-emerald-500 mr-2",
        icon: "fas fa-check",
      };
    } else if (status === "STOPPED") {
      statusObj = {
        text: ["Inactive", "Deployment Unsuccessful"],
        textClass: "text-red-500 mr-2",
        icon: "fas fa-angry",
      };
    }
  } else {
    statusObj = {
      text: ["Checking..."],
      textClass: "text-gray-500 mr-2",
      icon: "fas fa-clock",
    };
  }

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <Navbar name="Deployment" />
        {/* Header */}
        <div className="relative bg-white-600 md:pt-32 pb-32 pt-12">
          <div className="px-4 md:px-10 mx-auto w-full">
            <div>
              {/* Card stats */}
              <div className="flex justify-center flex-wrap">
                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                    <div className="flex-auto p-4">
                      <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                          <h5 className="text-blueGray-400 uppercase font-bold text-lg">
                            Status
                          </h5>
                        </div>
                        <div className="relative w-auto pl-4 flex-initial">
                          <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-green-500">
                            <i className="far fa-chart-bar"></i>
                          </div>
                        </div>
                      </div>
                      <p className="text-md text-blueGray-400 mt-4">
                        <span className={statusObj.textClass}>
                          <i className={statusObj.icon}></i>
                          {statusObj.text[0]}
                        </span>
                        <span className="whitespace-nowrap">
                          {statusObj.text[1]}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                    <div className="flex-auto p-4">
                      <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                          <h5 className="text-blueGray-400 uppercase font-bold text-lg">
                            API Endpoint
                          </h5>
                        </div>
                        <div className="relative w-auto pl-4 flex-initial">
                          <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-green-500">
                            <i className="fas fa-chart-pie"></i>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-blueGray-400 mt-4 text-lg">
                        <span className="text-green-500 mr-2">
                          <i className="fas fa"></i> Endpoint:
                        </span>
                        <span className="whitespace-nowrap">
                          {ip ? `${ip}:4000/graphql` : "Endpoint Unavailable"}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DataSources />
    </>
  );
}
