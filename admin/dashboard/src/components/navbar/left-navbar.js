import React, { useState, useContext, useEffect } from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";

const { Sider } = Layout;
const { SubMenu } = Menu;

function LeftNavbar(props) {
  const userData = useContext(UserContext);
  const [collapsed, setcollapsed] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const onCollapse = () => {
    setcollapsed(!collapsed);
  };

  const pathname = window.location.pathname;

  const { fullname, email, isAdmin } = userData.user;
  if (fullname === "") {
    return null;
  }

  const isDay = () => {
    const hours = new Date().getHours();
    return hours >= 6 && hours < 18;
  };

  const sessionValue = window.sessionStorage.getItem("isLight") === "true";

  return (
    <Sider
      // collapsible
      // collapsed={collapsed}
      // onCollapse={onCollapse}
      style={
        isDay()
          ? sessionValue
            ? { backgroundColor: "#fff" }
            : { backgroundColor: "rgb(30, 39, 46)" }
          : sessionValue
          ? { backgroundColor: "#fff" }
          : { backgroundColor: "rgb(30, 39, 46)" }
      }
    >
      <div>
        <center>
          <img
            src={
              isDay()
                ? sessionValue
                  ? "/images/KOOMPI_Logo_dark.svg"
                  : "/images/KOOMPI_Logo.svg"
                : sessionValue
                ? "/images/KOOMPI_Logo_dark.svg"
                : "/images/KOOMPI_Logo.svg"
            }
            alt=""
            className="KOOMPI_LOGO"
          />
        </center>
        <div
          className="themeChange"
          onClick={() => {
            setIsLight(!isLight);
            window.sessionStorage.setItem("isLight", isLight);
          }}
        >
          {sessionValue ? (
            <img src="/images/night.svg" alt="koompi night" height="25px" />
          ) : (
            <img src="/images/day.svg" alt="koompi day" height="25px" />
          )}
        </div>
      </div>
      <Menu
        theme={
          isDay()
            ? sessionValue
              ? "light"
              : "dark"
            : sessionValue
            ? "light"
            : "dark"
        }
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
              : "/admin/all-posts"
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
              : "/admin/all-pages"
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

        {/* ========= Categories Section ========= */}

        <Menu.Item key="/admin/categories">
          <Link to="/admin/categories">
            <Icon type="appstore" />
            <span>Categories</span>
          </Link>
        </Menu.Item>

        {/* ========= Member Section ========= */}
        <SubMenu
          key={
            pathname === "/admin/new-member"
              ? "/admin/new-member"
              : "/admin/members"
              ? "/admin/members"
              : ""
          }
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
          <Menu.Item key="/admin/members">
            <Link to="/admin/members">All Members</Link>
          </Menu.Item>
        </SubMenu>

        {/* ========= Retailer Section ========= */}
        <SubMenu
          key={
            pathname === "/admin/new-retailer"
              ? "/admin/new-retailer"
              : "/admin/retailers"
              ? "/admin/retailers"
              : ""
          }
          title={
            <span>
              <Icon type="carry-out" />
              <span>Retailers</span>
            </span>
          }
        >
          <Menu.Item key="/admin/new-retailer">
            <Link to="/admin/new-retailer">New Retailer</Link>
          </Menu.Item>
          <Menu.Item key="/admin/retailers">
            <Link to="/admin/retailers">All Retailers</Link>
          </Menu.Item>
        </SubMenu>

        {/* ========= Social Media Section ========= */}
        <SubMenu
          key={
            pathname === "/admin/add-social-media"
              ? "/admin/add-social-media"
              : "/admin/social-media"
              ? "/admin/social-media"
              : ""
          }
          title={
            <span>
              <Icon type="deployment-unit" />
              <span>Social Media</span>
            </span>
          }
        >
          <Menu.Item key="/admin/add-social-media">
            <Link to="/admin/add-social-media">Add Social Media</Link>
          </Menu.Item>
          <Menu.Item key="/admin/social-media">
            <Link to="/admin/social-media">Social Media</Link>
          </Menu.Item>
        </SubMenu>

        {/* ========= Payment Section ========= */}
        {isAdmin && (
          <Menu.Item key="/admin/user/payment">
            <Link to="/admin/user/payment" className="nav-text">
              <Icon type="dollar" />
              <span>User Payment</span>
            </Link>
          </Menu.Item>
        )}

        {/* ========= Mail Sender Section ========= */}
        {isAdmin && (
          <Menu.Item key="/admin/send-mail">
            <Link to="/user/send-mail" className="nav-text">
              <Icon type="mail" />
              <span>Mail Sender</span>
            </Link>
          </Menu.Item>
        )}
        {/* ========= Users Section ========= */}
        <Menu.Item key="/admin/users">
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
