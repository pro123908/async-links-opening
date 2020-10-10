import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import "./App.scss";
import Home from "./containers/Home/Home";
import Login from "./containers/Update/Update";

import { Provider } from "react-redux";

import store from "./store";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";
import Update from "./containers/Update/Update";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <PrivateRoute component={Home} path="/" exact />
          <PrivateRoute component={Update} path="/update" restricted={true} />
          <PublicRoute to="*" component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
