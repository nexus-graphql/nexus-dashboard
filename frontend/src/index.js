import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App.js";

ReactDOM.render(
  <App />,
  // <BrowserRouter>
  //   <Switch>
  //     <Route path="/dashboard" component={Dashboard} />
  //     <Route path="/graphiql" component={Graphiql} />
  //     <Redirect from="/" to="/dashboard" />
  //   </Switch>
  // </BrowserRouter>,
  document.getElementById("root")
);
