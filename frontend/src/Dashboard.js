import React from "react";
import Navbar from "./components/Navbar.js";
import Sidebar from "./components/Sidebar.js";
import DataSources from "./components/DataSources.js";
import { useState, useEffect } from "react";
import { getLocalChanges, updateLocalChanges } from "./services/api.js";

import StatusCard from "./components/StatusCard.js";
import IpCard from "./components/IpCard.js";
import AuthKeyCard from "components/AuthKeyCard.js";
import DeployButton from "components/DeployButton.js";
import ChangeAlert from "components/ChangeAlert.js";

export default function Dashboard({
  ip,
  status,
  auth,
  onDeploy,
  onRedeploy,
  schemaData,
  fieldConnections,
  setFieldConnections,
}) {
  const [localChanges, setLocalChanges] = useState(false);

  useEffect(() => {
    getLocalChanges().then((result) => {
      setLocalChanges(result);
    });
  }, []);

  const getButtonType = () => {
    if (status === "No deployments") {
      return "deploy-enabled";
    } else if (status === "") {
      return "deploy-disabled";
    } else if (localChanges === true && status === "RUNNING") {
      return "redeploy-enabled";
    } else if (localChanges === false && status === "RUNNING") {
      return "redeploy-disabled";
    } else if (status === "deploying") {
      return "deploying";
    } else if (status === "destroying") {
      return "destroying";
    }
  };

  const handleLocalChanges = async (bool) => {
    await updateLocalChanges(bool);
    setLocalChanges(bool);
  };

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
        text: ["Inactive", " Deployment Unsuccessful"],
        textClass: "text-red-500 mr-2",
        icon: "fas fa-times-circle",
      };
    } else if (status === "No deployments") {
      statusObj = {
        text: [" Inactive", status],
        textClass: "text-red-500 mr-2",
        icon: "fas fa-times-circle",
      };
    } else if (status === "deploying") {
      statusObj = {
        text: ["Deployment...", "in progress"],
        textClass: "text-pink-500 mr-2",
        icon: "fas fa-arrow-circle-up",
      };
    } else {
      statusObj = {
        text: ["Testing....", "in progress"],
        textClass: "text-red-500 mr-2",
        icon: "fas fa-trash-alt",
      };
    }
  } else {
    statusObj = {
      text: [" Checking..."],
      textClass: "text-gray-500 mr-2",
      icon: "fas fa-clock",
    };
  }

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <Navbar name="Deployment" />
        <div className="relative bg-white-600 md:pt-32 pb-32 pt-12">
          <div className="px-4 md:px-10 mx-auto w-full">
            {localChanges && status === "RUNNING" ? <ChangeAlert /> : null}
            <div>
              <div className="flex justify-center flex-wrap">
                <StatusCard statusObj={statusObj} />
                <IpCard ip={ip} />
                <AuthKeyCard auth={auth} />
              </div>

              <DeployButton
                type={getButtonType()}
                onLocalChanges={handleLocalChanges}
                onDeploy={onDeploy}
                onRedeploy={onRedeploy}
              />
            </div>
          </div>
        </div>
      </div>
      <DataSources
        schemaData={schemaData}
        onLocalChanges={handleLocalChanges}
        fieldConnections={fieldConnections}
        setFieldConnections={setFieldConnections}
      />
    </>
  );
}
