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
                  await cartCtx.addToCart({
                    name: "KOOMPI E13",
                    price: 369,
                    image: [
                      {
                        color: "gray",
                        image: "http://localhost:3000/img/koompi-e/koompi-gray.png"
                      },
                      {
                        color: "pink",
                        image:
                          "http://localhost:3000/img/koompi-e/koompi-rose-gold.png"
                      }
                    ]
                  })
                  setLoading(true)
                  window.setTimeout(() => {
                    history.push("/shop/bag")
                  }, 1000)
                }}
              >
                <span className={loading ? "buyBtnLoading" : "buyBtn"}>
                  {loading ? "Loading ..." : "Buy"}
                </span>
              </div>
            </Menu.Item>
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
