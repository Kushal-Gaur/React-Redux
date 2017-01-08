import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import App from "./Components/App";
import Settings from "./Components/Settings/Settings";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="about(/:article)" name="about" component={About}></Route>
      <Route path="settings" name="settings" component={Settings}></Route>
    </Route>
  </Router>,
app);
