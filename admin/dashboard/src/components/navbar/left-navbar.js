import React, { useState, useContext, useEffect } from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";

const { Sider } = Layout;
const { SubMenu } = Menu;

function LeftNavbar(props) {
  const userData = useContext(UserContext);
  const [collapsed, setcollapsed] = useState(false);
  const onCollapse = () => {
    setcollapsed(!collapsed);
  };

  const pathname = window.location.pathname;

  const { fullname, email, isAdmin } = userData.user;
  if (fullname === "") {
    return null;
  }

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <Menu
        theme="dark"
        defaultSelectedKeys={[pathname]}
        defaultOpenKeys={[pathname]}
        mode="inline"
      >
        {/* ========= Dashboard Section ========= */}
        <Menu.Item key="/admin/dashboard">
          <Link to="/admin/dashboard" className="nav-text">
            <Icon type="pie-chart" />
            <span>Dashboard</span>
          </Link>
        </Menu.Item>

        {/* ========= Posts Section ========= */}
        <SubMenu
          key={
            pathname === "/admin/new-post"
              ? "/admin/new-post"
              : pathname === "/admin/all-posts"
              ? "/admin/all-posts"
              : ""
          }
          title={
            <span>
              <Icon type="form" />
              <span>Posts</span>
            </span>
          }
        >
          <Menu.Item key="/admin/new-post">
            <Link to="/admin/new-post">New Post</Link>
          </Menu.Item>
          <Menu.Item key="/admin/all-posts">
            <Link to="/admin/all-posts">All Posts</Link>
          </Menu.Item>
        </SubMenu>

        {/* ========= Pages Section ========= */}

        <SubMenu
          key={
            pathname === "/admin/new-page"
              ? "/admin/new-page"
              : pathname === "/admin/all-pages"
              ? "/admin/all-pages"
              : ""
          }
          title={
            <span>
              <Icon type="copy" />
              <span>Pages</span>
            </span>
          }
        >
          <Menu.Item key="/admin/new-page">
            <Link to="/admin/new-page">New Page</Link>
          </Menu.Item>
          <Menu.Item key="/admin/all-pages">
            <Link to="/admin/all-pages">All Pages</Link>
          </Menu.Item>
        </SubMenu>

        {/* ========= Category Section ========= */}

        <SubMenu
          key={
            pathname === "/admin/new-category"
              ? "/admin/new-category"
              : pathname === "/admin/all-categories"
              ? "/admin/all-categories"
              : ""
          }
          title={
            <span>
              <Icon type="appstore" />
              <span>Categories</span>
            </span>
          }
        >
          <Menu.Item key="/admin/new-category">
            <Link to="/admin/new-category">New Category</Link>
          </Menu.Item>
          <Menu.Item key="/admin/all-categories">
            <Link to="/admin/all-categories">All Categories</Link>
          </Menu.Item>
        </SubMenu>

        {/* ========= Member Section ========= */}
        <SubMenu
          key={"/admin/new-member" && "/admin/all-members"}
          title={
            <span>
              <Icon type="team" />
              <span>Members</span>
            </span>
          }
        >
          <Menu.Item key="/admin/new-member">
            <Link to="/admin/new-member">New Member</Link>
          </Menu.Item>
          <Menu.Item key="/admin/all-members">
            <Link to="/admin/all-members">All Members</Link>
          </Menu.Item>
        </SubMenu>

        {/* ========= Retailer Section ========= */}
        <SubMenu
          key={"/admin/new-member" && "/admin/all-members"}
          title={
            <span>
              <Icon type="carry-out" />
              <span>Retailers</span>
            </span>
          }
        >
          <Menu.Item key="/admin/new-member">
            <Link to="/admin/new-member">New Retailer</Link>
          </Menu.Item>
          <Menu.Item key="/admin/all-members">
            <Link to="/admin/all-members">All Retailers</Link>
          </Menu.Item>
        </SubMenu>

        {/* ========= Social Media Section ========= */}
        <SubMenu
          key={"/admin/new-member" && "/admin/all-members"}
          title={
            <span>
              <Icon type="deployment-unit" />
              <span>Social Media</span>
            </span>
          }
        >
          <Menu.Item key="/admin/new-member">
            <Link to="/admin/new-member">Add Social Media</Link>
          </Menu.Item>
          <Menu.Item key="/admin/all-members">
            <Link to="/admin/all-members">All Social Media</Link>
          </Menu.Item>
        </SubMenu>

        {/* ========= Payment Section ========= */}
        {isAdmin && (
          <Menu.Item key="/user">
            <Link to="/user" className="nav-text">
              <Icon type="dollar" />
              <span>User Payment</span>
            </Link>
          </Menu.Item>
        )}

        {/* ========= Mail Sender Section ========= */}
        {isAdmin && (
          <Menu.Item key="/user">
            <Link to="/user" className="nav-text">
              <Icon type="mail" />
              <span>Mail Sender</span>
            </Link>
          </Menu.Item>
        )}
        {/* ========= Mail Sender Section ========= */}
        <Menu.Item key="/user">
          <Link to="/admin/users" className="nav-text">
            <Icon type="user" />
            <span>Users</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default LeftNavbar;
