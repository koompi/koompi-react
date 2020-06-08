import React, { useState, useContext } from "react"
import { NavLink } from "react-router-dom"
import { Menu, Affix } from "antd"
import { CartContext } from "../../CartContext"

function SubNavbar({ title, history }) {
  const [sticky, setSticky] = useState(false)
  const cartCtx = useContext(CartContext)
  const [loading, setLoading] = useState(false)

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
              <div
                onClick={async () => {
                  await cartCtx.addToCart("koompi-e11", 1)
                  setLoading(true)
                  window.setTimeout(() => {
                    history.push("/shop/bag")
                  }, 1000)
                }}
              >
                <span className={loading ? "buyBtnLoading" : "buyBtn"}>
                  {loading ? "Loading ..." : "Pre-Order"}
                </span>
              </div>
            </Menu.Item>
            <Menu.Item className="sub-navbar-a">
              <NavLink
                exact
                activeStyle={{ color: "#1890ff" }}
                to="/koompi-e11/specs"
              >
                <span>Specifications</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item className="sub-navbar-a">
              <NavLink exact activeStyle={{ color: "#1890ff" }} to="/koompi-e11">
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
