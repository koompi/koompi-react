import React, { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

function Navbar() {
  const [toggleClick, setTogglestate] = useState(false)

  const { i18n } = useTranslation()

  const handleClick = (lang) => {
    i18n.changeLanguage(lang)
    if (lang === "kh") {
      console.log("Khmer")
    } else {
      console.log("English")
    }
  }

  return (
    <>
      <div className={toggleClick ? "phone-background-navbar" : ""}>
        <div
          role="presentation"
          className={toggleClick ? "mobile_background" : ""}
          onClick={() => {
            this.setState({ toggleClick: false })
          }}
        />

        <div
          className={
            toggleClick
              ? "ui left vertical inverted labeled icon sidebar menu overlay visible mobile only sidebar-style"
              : "ui left vertical inverted labeled icon sidebar menu overlay visible hidden mobile only sidebar-style"
          }
          style={{}}
        >
          <div className="navbar_slider">
            <Link to="/home" className="item">
              <img
                src="/img/icons/home.png"
                alt="koompi-home"
                className="mobile_navbar_icon"
              />
              Home
            </Link>
            <Link to="/feature" className="item">
              <img
                src="/img/icons/feature.png"
                alt="koompi-home"
                className="mobile_navbar_icon"
              />
              Feature
            </Link>
            <Link to="/about-us" className="item">
              <img
                src="/img/icons/about.png"
                alt="koompi-home"
                className="mobile_navbar_icon"
              />
              About
            </Link>
            <Link to="/retailers" className="item">
              <img
                src="/img/icons/retailer.png"
                alt="koompi-home"
                className="mobile_navbar_icon"
              />
              Retailer
            </Link>
            <NavLink to="/news-and-events" className="item">
              <img
                src="/img/icons/news.png"
                alt="koompi-home"
                className="mobile_navbar_icon"
              />
              News
            </NavLink>
            <Link to="/order" className="item">
              <img
                src="/img/icons/order.png"
                alt="koompi-home"
                className="mobile_navbar_icon"
              />
              Pre-Order
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar-menu">
        <div className="ui secondary  container menu mobile only mobile-menu">
          <div className="image">
            <img
              role="presentation"
              className="toggleicon"
              src="/img/menu.png"
              alt="Toogle icon"
              onClick={() => setTogglestate(!toggleClick)}
            />
          </div>
          <Link to="/home">
            <center>
              <img className="menu-logo" src="img/koompi-logo-w-01.svg" alt="" />
            </center>
          </Link>
          {/* <div className="left menu">
              <div className="image">
                <img
                  className="toggleicon"
                  src="/img/menu.png"
                  alt="Toogle icon"
                  onClick={this.setTogglestate}
                />
              </div>
            </div> */}
        </div>
      </div>

      <div className="ui secondary  menu big-navbar-menu">
        <div className="ui container">
          <center>
            <Link to="/">
              <img
                src="img/koompi-logo-w-01.svg"
                height="35px"
                alt="koompi"
                className="mobile hidden"
              />
              <img
                src="img/koompi-logo-w-02.svg"
                height="35px"
                alt="koompi"
                className="mobile only marginLogo"
              />
            </Link>
          </center>
          <div className="menu right">
            <NavLink
              className="item navbarTop menuFadeIn"
              to="/feature"
              activeClassName="active"
            >
              Feature
            </NavLink>
            <NavLink
              className="item navbarTop menuFadeIn"
              to="/about-us"
              activeClassName="active"
            >
              About
            </NavLink>
            <NavLink
              className="item navbarTop menuFadeIn"
              to="/retailers"
              activeClassName="active"
            >
              Retailers
            </NavLink>
            <NavLink
              className="item navbarTop menuFadeIn"
              to="/news-and-events"
              activeClassName="active"
            >
              News
            </NavLink>
            <NavLink
              className="item navbarTop menuFadeIn"
              to="/order"
              activeClassName="active"
            >
              Pre-Order
            </NavLink>

            {window.localStorage.getItem("i18nextLng") === "kh" ? (
              <img
                onClick={() => handleClick("en")}
                src="/img/icons/kh.svg"
                alt=""
                srcset=""
              />
            ) : (
              <img
                onClick={() => handleClick("kh")}
                src="/img/icons/en.svg"
                alt=""
                srcset=""
              />
            )}
            <div className="item mobile only">
              {/* <i className="fas fa-times btnAnimationClose"></i> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { Navbar }
