// import React from "react";
// import { NavLink, Link } from "react-router-dom";
// const Navbar = () => {
//   return (
//     <div className="ui secondary  menu">
//       <div className="ui container">
//         <center>
//           <Link to="/">
//             <img
//               src="img/koompi-logo-w-01.svg"
//               height="35px"
//               alt="koompi"
//               className="mobile hidden"
//             />
//             <img
//               src="img/koompi-logo-w-02.svg"
//               height="35px"
//               alt="koompi"
//               className="mobile only marginLogo"
//             />
//           </Link>
//         </center>
//         <div className="menu right">
//           <NavLink
//             className="item navbarTop menuFadeIn"
//             to="/feature"
//             activeClassName="active"
//           >
//             Feature
//           </NavLink>
//           <NavLink
//             className="item navbarTop menuFadeIn"
//             to="/about-us"
//             activeClassName="active"
//           >
//             About
//           </NavLink>
//           <NavLink
//             className="item navbarTop menuFadeIn"
//             to="/retailers"
//             activeClassName="active"
//           >
//             Retailers
//           </NavLink>
//           <NavLink
//             className="item navbarTop menuFadeIn"
//             to="/news-and-events"
//             activeClassName="active"
//           >
//             News
//           </NavLink>
//           <NavLink
//             className="item navbarTop menuFadeIn"
//             to="/preoder"
//             activeClassName="active"
//           >
//             Order
//           </NavLink>
//           <div className="item mobile only">
//             {/* <i className="fas fa-times btnAnimationClose"></i> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



import React,{Component} from "react";
import { NavLink, Link } from "react-router-dom";
export class Navbar extends Component {

  state = {
    toggleclick: false
  };
  setTogglestate = () => {
    this.setState({
      toggleclick: !this.state.toggleclick
    });
  };
  render() {
  return (
    <React.Fragment>

<div
          className={this.state.toggleclick ? "phone-background-navbar" : ""}
        >
          <div
            className={
              this.state.toggleclick
                ? "ui left  vertical inverted labeled icon sidebar menu overlay visible mobile only slideIn sidebar-style"
                : "ui left  vertical inverted labeled icon sidebar menu overlay  mobile only slideOut"
            }
            style={{}}
          >
            {/* <Link to="/" className="item">
              <center>
                <img
                  className="ui tiny image"
                  src=".img/koompi-logo-w-01.svg"
                  alt=""
                />
              </center>
            </Link> */}
            <Link to="/" className="item">
              Feature
            </Link>
            <Link to="/about-us" className="item">
              About
            </Link>
            <Link to="/retailers" className="item">
              Retailer
            </Link>
            <NavLink to="/news-and-events" className="item">
              News
            </NavLink>
            <Link to="/preorder" className="item">
             Pre-Order
            </Link>
          </div>
        </div>
        <div className="navbar-menu">
          <div className="ui secondary  container menu mobile only mobile-menu">
            <div className="left menu">
              <Link to="/home">
                <img
                  className="menu-logo"
                  src="img/koompi-logo-w-02.svg"
                  alt=""
                />
              </Link>
            </div>
            <div className="right menu">
              <div className="image">
                <img
                  className="toggleicon"
                  style={{ position: "relative", zIndex: "2" }}
                  src={
                    this.state.toggleclick
                      ? "./img/white-cross-icon-2.png"
                      : "./img/hamburgerWhite.png"
                  }
                  alt="Toogle icon"
                  onClick={this.setTogglestate}
                />
              </div>
            </div>
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
            to="/preorder"
            activeClassName="active"
          >
            Pre-Order
          </NavLink>
          <div className="item mobile only">
            {/* <i className="fas fa-times btnAnimationClose"></i> */}
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
};
};

export default Navbar;
