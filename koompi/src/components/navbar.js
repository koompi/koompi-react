import React, { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import { Layout, Menu, Badge, Drawer } from "antd"
import { FiAlignLeft } from "react-icons/fi"
import { FiShoppingCart } from "react-icons/fi"

const { Header } = Layout

function RightNavbar() {
  const [data] = useState(0)

  return (
    <div className="rightNavbarHidden">
      <Menu theme="dark" mode="horizontal">
        <Menu.Item>
          <NavLink activeClassName="koompi-active" to="/koompi-e11">
            <span>KOOMPI E11</span>
          </NavLink>
        </Menu.Item>

        <Menu.Item key="/koompi-e">
          <NavLink exact activeClassName="koompi-active" to="/koompi-e13">
            <span>KOOMPI E13</span>
          </NavLink>
        </Menu.Item>

        <Menu.Item key="/koompi-os">
          <a
            href="https://www.koompi.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>KOOMPI OS</span>
          </a>
        </Menu.Item>

        <Menu.Item>
          <a
            href="https://academy.koompi.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>KOOMPI ACADEMY</span>
          </a>
        </Menu.Item>
        {/* JSON.parse(laptop).length */}
        <Menu.Item>
          <NavLink exact activeStyle={{ color: "white" }} to="/shop/bag">
            <Badge count={data.length}>
              <FiShoppingCart className="shopping-cart-icon" />
            </Badge>
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <button style={{ height: "50px", color: "#333", lineHeight: "0px" }}>
            En
          </button>
        </Menu.Item>
        <Menu.Item>
          <button style={{ height: "50px", color: "#333", lineHeight: "0px" }}>
            Kh
          </button>
        </Menu.Item>
      </Menu>
    </div>
  )
}

function Navbar() {
  const [visible, setVisible] = useState(false)

  const handleChange = () => {
    setVisible(!visible)
  }
  return (
    <React.Fragment>
      <Header className="header">
        <div className="container">
          <FiAlignLeft className="mobileMenu" onClick={handleChange} />
          <Link to="/">
            <img className="logo" src="/img/koompi-sym-01.png" alt="koompi" />
          </Link>
          <div className="koompi">
            <RightNavbar />
            <Drawer
              title={false}
              placement="left"
              closable={false}
              onClose={handleChange}
              visible={visible}
            >
              <Menu>
                <Menu.Item className="menuNavbarLogo" onClick={handleChange}>
                  <Link to="/">
                    <img
                      className="logo"
                      src="/img/koompi-sym-01.png"
                      alt="koompi"
                    />
                  </Link>
                </Menu.Item>
                <Menu.Item onClick={handleChange}>
                  <NavLink activeClassName="koompi-active" to="/koompi-e11">
                    <span>KOOMPI E11</span>
                  </NavLink>
                </Menu.Item>

                <Menu.Item key="/koompi-e" onClick={handleChange}>
                  <NavLink exact activeClassName="koompi-active" to="/koompi-e13">
                    <span>KOOMPI E13</span>
                  </NavLink>
                </Menu.Item>

                <Menu.Item key="/koompi-os" onClick={handleChange}>
                  <a
                    href="https://www.koompi.org/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>KOOMPI OS</span>
                  </a>
                </Menu.Item>

                <Menu.Item onClick={handleChange}>
                  <a
                    href="https://academy.koompi.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>KOOMPI ACADEMY</span>
                  </a>
                </Menu.Item>

                <Menu.Item key="/shop/bag" onClick={handleChange}>
                  <NavLink exact activeClassName="koompi-active" to="/shop/bag">
                    <span>KOOMPI SHOP</span>
                  </NavLink>
                </Menu.Item>
              </Menu>
            </Drawer>
          </div>
        </div>
      </Header>
    </React.Fragment>
  )
}

export default Navbar
