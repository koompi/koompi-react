import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLogin = () => {
    return true;
  };
  return (
    <Route
      {...rest}
      render={props =>
        isLogin() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
