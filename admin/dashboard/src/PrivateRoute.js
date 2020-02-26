import React from "react"
import { Route, Redirect } from "react-router-dom"
import jwt from "jsonwebtoken"
import Cookie from "js-cookie"

// Global varible
let token = Cookie.get("token")
let user = jwt.decode(token)

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLogin = () => {
    if (user) {
      return true
    }
    return false
  }
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  )
}

export default PrivateRoute
