import React from "react";
import Navbar from "./components/Navbar.js";
import Sidebar from "./components/Sidebar.js";
import DataSources from "./components/DataSources.js";
import { useState, useEffect } from "react";
import { getIP, getStatus, getAuth } from "./services/api.js";
import StatusCard from "./components/StatusCard.js";
import IpCard from "./components/IpCard.js";
import AuthKeyCard from "components/AuthKeyCard.js";

export default function Dashboard() {
  const [ip, setIp] = useState("");
  const [status, setStatus] = useState("");
  const [auth, setAuth] = useState("");

  useEffect(() => {
    getIP().then((result) => {
      setIp(result);
    });
    getStatus().then((result) => {
      setStatus(result);
    });
    getAuth().then((result) => {
      setAuth(result);
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
    } else if (status === "No deployments") {
      statusObj = {
        text: ["Inactive", status],
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
                <StatusCard statusObj={statusObj} />
                <IpCard ip={ip} />
                <AuthKeyCard auth={auth} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <DataSources />
    </>
  );
}
