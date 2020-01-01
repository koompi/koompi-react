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

const { Content } = Layout;

function App() {
  const [isLogin] = useState(true);

  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/register" component={SignupForm} />
          <PrivateRoute exact path="/admin/new-post" component={NewPost} />
          <PrivateRoute exact path="/admin/all-posts" component={AllPosts} />
          <PrivateRoute exact path="/admin/new-page" component={NewPage} />
          <PrivateRoute exact path="/admin/all-pages" component={AllPages} />
          <PrivateRoute exact path="/admin" component={Admin} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
