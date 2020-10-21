import React, { useState, useContext } from "react"
import { Layout, Menu } from "antd"
import { Link } from "react-router-dom"
import { UserContext } from "../../context/userContext"
import {
  FiBarChart,
  FiFileText,
  FiFile,
  FiList,
  FiUsers,
  FiMapPin,
  FiShare2,
  FiDollarSign,
  FiSend,
  FiUserCheck,
  FiUser,
  FiLayers,
} from "react-icons/fi"

const { Sider } = Layout
const { SubMenu } = Menu

function LeftNavbar() {
  const userData = useContext(UserContext)
  const [isLight, setIsLight] = useState(true)

  // const isDay = () => {
  //   const hours = new Date().getHours();
  //   return hours >= 6 && hours < 18;
  // };

  const pathname = window.location.pathname

  const { fullname, isAdmin } = userData.user
  if (fullname === "") {
    return null
  }

  const handleIsLight = () => {
    setIsLight(!isLight)
    localStorage.setItem("isLight", !isLight)
  }

  const sessionIsLight = JSON.parse(localStorage.getItem("isLight"))

  return (
    <Sider
      // collapsible
      // collapsed={collapsed}
      // onCollapse={onCollapse}
      style={
        sessionIsLight
          ? { backgroundColor: "rgb(30, 39, 46)" }
          : { backgroundColor: "#fff" }
      }
    >
      <div>
        <center>
          <img
            src={
              sessionIsLight
                ? "/images/KOOMPI_Logo.svg"
                : "/images/KOOMPI_Logo_dark.svg"
            }
            alt=""
            className="KOOMPI_LOGO"
          />
        </center>
        <div className="themeChange" onClick={handleIsLight}>
          {sessionIsLight ? (
            <img src="/images/day.svg" alt="koompi day" height="25px" />
          ) : (
            <img src="/images/night.svg" alt="koompi night" height="25px" />
          )}
        </div>
      </div>
      <Menu
        theme={sessionIsLight ? "dark" : "light"}
        defaultSelectedKeys={[pathname]}
        defaultOpenKeys={[pathname]}
        mode="inline"
      >
        {/* ========= Dashboard Section ========= */}
        <Menu.Item key="/admin/dashboard">
          <Link to="/admin/dashboard" className="nav-text">
            <FiBarChart />
            <span>Dashboard</span>
          </Link>
        </Menu.Item>
        <Menu.ItemGroup key="site-management" title="Site Management">
          {/* ========= AMA Section ========= */}
          <SubMenu
            key={
              pathname === "/admin/add-ama"
                ? "/admin/add-ama"
                : "/admin/all-amas"
                ? "/admin/all-amas"
                : ""
            }
            title={
              <div className="nav-text">
                <FiFileText />
                <span>AMA</span>
              </div>
            }
          >
            <Menu.Item key="/admin/add-ama">
              <Link to="/admin/add-ama">Add AMA</Link>
            </Menu.Item>
            <Menu.Item key="/admin/all-amas">
              <Link to="/admin/all-amas">All AMA</Link>
            </Menu.Item>
          </SubMenu>
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
              <div className="nav-text">
                <FiFileText />
                <span>Posts</span>
              </div>
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
              <div className="nav-text">
                <FiFile />
                <span>Pages</span>
              </div>
            }
          >
            <Menu.Item key="/admin/new-page">
              <Link to="/admin/new-page">New Page</Link>
            </Menu.Item>
            <Menu.Item key="/admin/all-pages">
              <Link to="/admin/all-pages">All Pages</Link>
            </Menu.Item>
          </SubMenu>

          {/* ========= Software Section ========= */}
          {/* <SubMenu
            key={
              pathname === "/admin/add-software"
                ? "/admin/add-software"
                : "/admin/all-softwares"
                ? "/admin/all-softwares"
                : ""
            }
            title={
              <div className="nav-text">
                <FiLayers />
                <span>Softwares</span>
              </div>
            }
          >
            <Menu.Item key="/admin/add-software">
              <Link to="/admin/add-software">Add Software</Link>
            </Menu.Item>
            <Menu.Item key="/admin/all-softwares">
              <Link to="/admin/all-softwares">All Software</Link>
            </Menu.Item>
          </SubMenu> */}

          {/* ========= Categories Section ========= */}

          <Menu.Item key="/admin/categories">
            <Link to="/admin/categories" className="nav-text">
              <FiList />
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
              <div className="nav-text">
                <FiUsers />
                <span>Members</span>
              </div>
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
          {/* <SubMenu
            key={
              pathname === "/admin/new-retailer"
                ? "/admin/new-retailer"
                : "/admin/retailers"
                ? "/admin/retailers"
                : ""
            }
            title={
              <div className="nav-text">
                <FiMapPin />
                <span>Retailers</span>
              </div>
            }
          >
            <Menu.Item key="/admin/new-retailer">
              <Link to="/admin/new-retailer">New Retailer</Link>
            </Menu.Item>
            <Menu.Item key="/admin/retailers">
              <Link to="/admin/retailers">All Retailers</Link>
            </Menu.Item>
          </SubMenu> */}

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
              <div className="nav-text">
                <FiShare2 />
                <span>Socail media</span>
              </div>
            }
          >
            <Menu.Item key="/admin/add-social-media">
              <Link to="/admin/add-social-media">Add Social Media</Link>
            </Menu.Item>
            <Menu.Item key="/admin/social-media">
              <Link to="/admin/social-media">Social Media</Link>
            </Menu.Item>
          </SubMenu>

          {/* ========= PreOrder Section ========= */}
          {/* {isAdmin && (
          <Menu.Item key="/admin/user/pre-order">
            <Link to="/admin/user/pre-order" className="nav-text">
              <FiDollarSign />
              <span>Pre-Order</span>
            </Link>
          </Menu.Item>
        )} */}

          {/* ========= Mail Sender Section ========= */}
          {/* {isAdmin && (
          <Menu.Item key="/admin/send-mail">
            <Link to="/user/send-mail" className="nav-text">
              <Icon type="mail" />
              <span>Mail Sender</span>
            </Link>
          </Menu.Item>
        )} */}

          {/* ========= Mail Sender Section ========= */}
          {isAdmin && (
            <SubMenu
              key={
                pathname === "/admin/new-legal"
                  ? "/admin/new-legal"
                  : "/admin/all-legals"
                  ? "/admin/all-legals"
                  : ""
              }
              title={
                <div className="nav-text">
                  <FiUserCheck />
                  <span>Legals</span>
                </div>
              }
            >
              <Menu.Item key="/admin/new-legal">
                <Link to="/admin/new-legal">New Legal</Link>
              </Menu.Item>
              <Menu.Item key="/admin/all-legals">
                <Link to="/admin/all-legals">All Legals</Link>
              </Menu.Item>
            </SubMenu>
          )}

          {/* ========= Users Section ========= */}
          <Menu.Item key="/admin/users">
            <Link to="/admin/users" className="nav-text">
              <FiUser />
              <span>Users</span>
            </Link>
          </Menu.Item>
        </Menu.ItemGroup>

        <Menu.ItemGroup key="payment-management" title="Payment Management">
          {/* ========= Payment Section ========= */}
          {isAdmin && (
            <Menu.Item key="/admin/user/payments">
              <Link to="/admin/user/payments" className="nav-text">
                <FiDollarSign />
                <span>User Payment</span>
              </Link>
            </Menu.Item>
          )}
        </Menu.ItemGroup>

        <Menu.ItemGroup key="telegram-bot" title="Bot System">
          {/* ========= Mail Sender Section ========= */}
          {isAdmin && (
            <Menu.Item key="/admin/telegram-bot">
              <Link to="/admin/telegram-bot" className="nav-text">
                <FiSend />
                <span>Telegram</span>
              </Link>
            </Menu.Item>
          )}
        </Menu.ItemGroup>
      </Menu>
    </Sider>
  )
}

export default LeftNavbar
