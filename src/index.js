import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { Router, Route, Switch } from "react-router-dom";
import history from "./components/History";
import About from "./components/About";
import Contact from "./components/Contact";
const Main = () => (
  <div>
    <Router history={history}>
      <Switch>
        <Route exact path="/About" component={About} />
        <Route exact path="/" component={App} />
        <Route exact path="/Contact" component={Contact} />
      </Switch>
    </Router>
  </div>
);

ReactDOM.render(<Main />, document.getElementById("root"));
//https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css
