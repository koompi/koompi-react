import React, { useState, useContext } from "react"
import { NavLink, Link } from "react-router-dom"
import { Layout, Menu, Badge, Drawer, Row, Col } from "antd"
import { FiAlignLeft } from "react-icons/fi"
import { FiShoppingCart } from "react-icons/fi"
import { useTranslation } from "react-i18next"
import { CartContext } from "../CartContext"

const { Header } = Layout

function Navbar() {
  const { i18n } = useTranslation()
  const [visible, setVisible] = useState(false)

  // Cart Context
  const cartContext = useContext(CartContext)
  const cart = cartContext.state

  // Language Context
  const lang = i18n.language

  // Change Language
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  const handleChange = () => {
    setVisible(!visible)
  }
  return (
    <React.Fragment>
      <center>
        {/* <h3>
          The site is under development. We will have an official launch at 1st
          August.
        </h3> */}
      </center>
      {/* <div className="mobileNavbar">
        <Row gutter={[12, 12]}>
          <Col span={4}>
            <img src="/img/koompi-sym-01.png" alt="" height="30px" />
          </Col>
          <Col span={4}>
            <Link to="/koompi/e11">E11</Link>
          </Col>
          <Col span={4}>
            <Link to="/koompi/e13">E13</Link>
          </Col>
          <Col span={4}>
            <Link to="/koompi/ask-my-anythings">AMA</Link>
          </Col>
          <Col span={4}>OS</Col>
          <Col span={4}>ACADEMY</Col>
        </Row>
      </div> */}
      <Header className="header">
        <div className="container">
          <FiAlignLeft className="mobileMenu" onClick={handleChange} />
          <Link to="/">
            <img className="logo" src="/img/koompi-sym-01.png" alt="koompi" />
          </Link>
          <div className="displayOnMobile">
            <NavLink exact to="/shop/bag" className="cartBadge">
              <Badge count={cart === undefined ? 0 : cart.length}>
                <FiShoppingCart className="shopping-cart-icon" />
              </Badge>
            </NavLink>
            <div className="flag">
              {lang === "en" ? (
                <img
                  src={"/img/cambodia-flag.png"}
                  alt="kh flag"
                  onClick={async () => {
                    await changeLanguage("kh")
                    window.location.reload()
                  }}
                />
              ) : (
                <img
                  src={"/img/en-flag.png"}
                  alt="en flag"
                  onClick={async () => {
                    await changeLanguage("en")
                    window.location.reload()
                  }}
                />
              )}
            </div>
          </div>
          {/* Desktop View */}
          <div className="koompi">
            <div className="rightNavbarHidden">
              <Menu theme="dark" mode="horizontal">
                <Menu.Item>
                  <NavLink activeClassName="koompi-active" to="/koompi/e11">
                    <span> KOOMPI E11</span>
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="/koompi-e">
                  <NavLink exact activeClassName="koompi-active" to="/koompi/e13">
                    <span>KOOMPI E13</span>
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="/koompi/ask-my-anythings">
                  <NavLink
                    activeClassName="koompi-active"
                    to="/koompi/ask-my-anythings"
                  >
                    <span>AMA</span>
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

                <Menu.Item>
                  <NavLink exact activeStyle={{ color: "white" }} to="/shop/bag">
                    <Badge
                      count={cart === undefined ? 0 : cart.length}
                      className="myBadge"
                    >
                      <FiShoppingCart className="shopping-cart-icon" />
                    </Badge>
                  </NavLink>
                </Menu.Item>
                <Menu.Item>
                  <div className="flag">
                    {lang === "en" ? (
                      <img
                        src={"/img/cambodia-flag.png"}
                        alt="kh flag"
                        onClick={async () => {
                          await changeLanguage("kh")
                          window.location.reload()
                        }}
                      />
                    ) : (
                      <img
                        src={"/img/en-flag.png"}
                        alt="en flag"
                        onClick={async () => {
                          await changeLanguage("en")
                          window.location.reload()
                        }}
                      />
                    )}
                  </div>
                </Menu.Item>
              </Menu>
            </div>
            {/* Mobile Navbar */}
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
                  <NavLink activeClassName="koompi-active" to="/koompi/e11">
                    <span>KOOMPI E11</span>
                  </NavLink>
                </Menu.Item>

                <Menu.Item key="/koompi-e" onClick={handleChange}>
                  <NavLink exact activeClassName="koompi-active" to="/koompi/e13">
                    <span>KOOMPI E13</span>
                  </NavLink>
                </Menu.Item>

                <Menu.Item key="/koompi/ask-my-anythings" onClick={handleChange}>
                  <Link
                    activeClassName="koompi-active"
                    to="/koompi/ask-my-anythings"
                  >
                    <span>AMA</span>
                  </Link>
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
              </Menu>
            </Drawer>
          </div>
        </div>
      </Header>
    </React.Fragment>
  )
}

export default Navbar
