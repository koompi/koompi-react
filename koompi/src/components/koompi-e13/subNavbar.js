import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { Menu, Affix } from "antd"

function SubNavbar({ title }) {
  const [sticky, setSticky] = useState(false)

  return (
    <div>
      <Affix offsetTop={0} onChange={(affixed) => setSticky(affixed)}>
        <div
          className={sticky ? "subNavbarPosition sticky" : "subNavbarPosition"}
          style={{ background: "white" }}
        >
          <Menu
            style={{ borderBottom: "none" }}
            className="container"
            theme="white"
            mode="horizontal"
            onClick={() => window.scrollTo(0, 0)}
          >
            {sticky ? (
              <Menu.Item>
                <h2 className="subnavbar-logo">{title}</h2>
              </Menu.Item>
            ) : null}
            <Menu.Item className="sub-navbar-a">
              <NavLink
                exact
                activeStyle={{ color: "#1890ff" }}
                to="/koompi-e13/specs"
              >
                <span>Specifications</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item className="sub-navbar-a">
              <NavLink exact activeStyle={{ color: "#1890ff" }} to="/koompi-e13">
                <span>Overview</span>
              </NavLink>
            </Menu.Item>
          </Menu>
        </div>
      </Affix>
    </div>
  )
}

export default SubNavbar
