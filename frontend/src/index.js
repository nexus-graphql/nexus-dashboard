import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Dashboard from "./Dashboard.js";
// import DataSources from "components/DataSources.js";
import Graphiql from "components/Graphiql";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      {/* <Route path="/data-sources" component={DataSources} /> */}
      <Route path="/graphiql" component={Graphiql} />
      <Redirect from="/" to="/dashboard" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
