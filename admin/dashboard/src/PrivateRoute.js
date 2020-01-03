import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import jwt from "jsonwebtoken";

// Global varible
let token = localStorage.getItem("token");
let user = jwt.decode(token);

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLogin = () => {
    if (user) {
      return true;
    }
    return false;
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
