import React from "react";
import { Redirect, Route } from "react-router-dom";
import store from "../store";

const PublicRoute = ({ component: OriginalComponent, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        true ? <Redirect to="home" /> : <OriginalComponent {...props} />
      }
    />
  );
};

export default PublicRoute;
