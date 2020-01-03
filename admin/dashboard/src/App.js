import React, { useState } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Layout } from "antd";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from "./components/users/login";
import SignupForm from "./components/users/signup";
import PrivateRoute from "./PrivateRoute";

// Call Component
import NewPost from "./components/new-post";
import AllPosts from "./components/all-post";
import NewPage from "./components/new-page";
import Admin from "./components/admin";
import AllPages from "./components/all-pages";
import Users from "./components/users";
import Logout from "./components/users/logout";
import { UserProvider } from "./context/userContext";
import Category from "./components/category";

const { Content } = Layout;

function App() {
  const [isLogin] = useState(true);

  return (
    <UserProvider>
      <Router>
        <Switch>
          <div className="App">
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/register" component={SignupForm} />
            <PrivateRoute exact path="/admin/dashboard" component={Admin} />
            <PrivateRoute exact path="/admin/new-post" component={NewPost} />
            <PrivateRoute exact path="/admin/all-posts" component={AllPosts} />
            <PrivateRoute exact path="/admin/new-page" component={NewPage} />
            <PrivateRoute exact path="/admin/all-pages" component={AllPages} />
            <PrivateRoute exact path="/admin/users" component={Users} />
            <PrivateRoute
              exact
              path="/admin/new-category"
              component={Category}
            />
          </div>
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
