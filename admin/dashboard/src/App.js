import React, { useState } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Layout } from "antd";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from "./components/users/login";
import SignupForm from "./components/users/signup";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

// Call Component
import Admin from "./components/admin";
import NewPost from "./components/posts/new-post";
import AllPosts from "./components/posts/all-post";
import NewPage from "./components/pages/new-page";
import AllPages from "./components/pages/all-pages";
import Users from "./components/users";
import Logout from "./components/users/logout";
import { UserProvider } from "./context/userContext";
import Category from "./components/categories/category";
import "nprogress/nprogress.css";
import editCategory from "./components/categories/edit-category";
import editPost from "./components/posts/edit-post";
import editPage from "./components/pages/edit-page";
import newMember from "./components/members/new-member";
import Members from "./components/members/members";
import editMember from "./components/members/edit-member";
import newRetailer from "./components/retailers/new-retailer";
import Retailers from "./components/retailers/retailers";
import editRetailer from "./components/retailers/edit-retailer";
import newSocialMedia from "./components/socialmedia/new-social-media";
import SocialMedia from "./components/socialmedia/social-media";
import editSocialMedia from "./components/socialmedia/edit-social-media";
import Settings from "./components/settings";

const { Content } = Layout;

function App() {
  const [isLogin] = useState(true);

  return (
    <UserProvider>
      <Router>
        <Switch>
          <PublicRoute
            restricted={true}
            exact
            path="/login"
            component={LoginForm}
          />
          <PublicRoute exact path="/" restricted={true} component={LoginForm} />
          <PublicRoute exact path="/logout" component={Logout} />
          <PublicRoute exact path="/register" component={SignupForm} />
          <PrivateRoute exact path="/admin/dashboard" component={Admin} />
          <PrivateRoute exact path="/admin/users" component={Users} />
          <PrivateRoute
            exact
            path="/admin/user/settings"
            component={Settings}
          />
          {/* ===== Post Route Section ===== */}
          <PrivateRoute exact path="/admin/new-post" component={NewPost} />
          <PrivateRoute exact path="/admin/all-posts" component={AllPosts} />
          <PrivateRoute
            exact
            path="/admin/post/edit/:id"
            component={editPost}
          />
          {/* ===== Page Route Section ===== */}
          <PrivateRoute exact path="/admin/new-page" component={NewPage} />
          <PrivateRoute exact path="/admin/all-pages" component={AllPages} />
          <PrivateRoute
            exact
            path="/admin/page/edit/:id"
            component={editPage}
          />
          {/* ===== Category Route Section ===== */}
          <PrivateRoute exact path="/admin/categories" component={Category} />
          <PrivateRoute
            exact
            path="/admin/category/edit/:id"
            component={editCategory}
          />
          {/* ===== Member Route Section ===== */}
          <PrivateRoute exact path="/admin/new-member" component={newMember} />
          <PrivateRoute exact path="/admin/members" component={Members} />
          <PrivateRoute
            exact
            path="/admin/member/edit/:id"
            component={editMember}
          />
          {/* ===== Retailer Route Section ===== */}
          <PrivateRoute
            exact
            path="/admin/new-retailer"
            component={newRetailer}
          />
          <PrivateRoute exact path="/admin/retailers" component={Retailers} />
          <PrivateRoute
            exact
            path="/admin/retailer/edit/:id"
            component={editRetailer}
          />
          {/* ===== Social Media Route Section ===== */}
          <PrivateRoute
            exact
            path="/admin/add-social-media"
            component={newSocialMedia}
          />
          <PrivateRoute
            exact
            path="/admin/social-media"
            component={SocialMedia}
          />
          <PrivateRoute
            exact
            path="/admin/social-media/edit/:id"
            component={editSocialMedia}
          />
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
