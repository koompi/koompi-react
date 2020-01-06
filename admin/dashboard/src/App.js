import React, { useState } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Layout } from "antd";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from "./components/users/login";
import SignupForm from "./components/users/signup";
import PrivateRoute from "./PrivateRoute";

// Call Component
import NewPost from "./components/posts/new-post";
import AllPosts from "./components/posts/all-post";
import NewPage from "./components/new-page";
import Admin from "./components/admin";
import AllPages from "./components/all-pages";
import Users from "./components/users";
import Logout from "./components/users/logout";
import { UserProvider } from "./context/userContext";
import Category from "./components/categories/category";
import "nprogress/nprogress.css";
import editCategory from "./components/categories/edit-category";
import editPost from "./components/posts/edit-post";
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
            <PrivateRoute
              exact
              path="/admin/post/edit/:id"
              component={editPost}
            />
            <PrivateRoute exact path="/admin/all-posts" component={AllPosts} />
            <PrivateRoute exact path="/admin/new-page" component={NewPage} />
            <PrivateRoute exact path="/admin/all-pages" component={AllPages} />
            <PrivateRoute exact path="/admin/users" component={Users} />
            <PrivateRoute exact path="/admin/categories" component={Category} />
            <PrivateRoute
              exact
              path="/admin/category/edit/:id"
              component={editCategory}
            />
          </div>
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
