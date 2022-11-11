import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import Dashboard from "./Dashboard.js";
import Graphiql from "components/Graphiql";
import { getIP, getStatus, getAuth, getSchemaData } from "./services/api.js";

const App = () => {
  const [ip, setIp] = useState("");
  const [status, setStatus] = useState("");
  const [auth, setAuth] = useState("");
  const [schemaData, setSchemaData] = useState({});

  useEffect(() => {
    getAuth().then((result) => {
      setAuth(result);
    });
    getIP().then((result) => {
      setIp(result);
    });
    getStatus().then((result) => {
      setStatus(result);
    });
    getSchemaData().then((result) => {
      setSchemaData(result);
    });
  }, []);

  const handleDeploy = () => {
    setStatus("deploying");
    setTimeout(() => {
      const interval = setInterval(async () => {
        const response = await getStatus();
        if (response === "RUNNING") {
          clearInterval(interval);
          setStatus(response);
          setIp(await getIP());
        }
      }, 5000);
    }, 5000);
  };

  const handleRedeploy = () => {
    setStatus("deploying");
    setTimeout(() => {
      const interval = setInterval(async () => {
        const newIP = await getIP();
        const newStatus = await getStatus();
        if (newIP !== ip && newStatus === "RUNNING") {
          clearInterval(interval);
          setStatus(newStatus);
          setIp(newIP);
        }
      }, 5000);
    }, 5000);
  };

  return (
    <BrowserRouter>
      <Route path="/dashboard">
        <Dashboard
          ip={ip}
          status={status}
          auth={auth}
          onDeploy={handleDeploy}
          onRedeploy={handleRedeploy}
          schemaData={schemaData}
        />
      </Route>
      <Route path="/graphiql">
        <Graphiql />
      </Route>
      <Redirect from="/" to="/dashboard" />
    </BrowserRouter>
  );
};

export default App;
