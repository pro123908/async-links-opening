import React from "react";
import { Redirect, Route } from "react-router-dom";
import store from "../store";

const PrivateRoute = ({ component: OriginalComponent, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        true ? <OriginalComponent {...props} /> : <Redirect to="login" />
      }
    />
  );
};

export default PrivateRoute;
