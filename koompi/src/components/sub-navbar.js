import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Layout, Menu, Badge, Icon, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;

function Sub_Navbar_Koompi_B() {
  return (
    // <div className="background-color">
    //   <div style={{ backgroundColor: "#19191f" }}>
    //     <Menu
    //       className="container"
    //       style={{
    //         backgroundColor: "#19191f",
    //         borderBottom: "none"
    //       }}
    //       mode="horizontal"
    //     >
    //       {/* <Menu.Item key="/">
    //         <Link to="/koompi-b">KOOMPI B</Link>
    //       </Menu.Item> */}

    //       {/* ===== Navbar ===== */}

    //       <Menu.Item className="sub-navbar-a-koompi-b" key="1">
    //         <NavLink
    //           exact
    //           activeStyle={{ color: "#1890ff" }}
    //           to="/koompi-b-specs"
    //         >
    //           <span>Spec</span>
    //         </NavLink>
    //       </Menu.Item>
    //       <Menu.Item className="sub-navbar-a-koompi-b" key="/koompi-e">
    //         <NavLink exact activeStyle={{ color: "#1890ff" }} to="/koompi-b">
    //           <span>Overview</span>
    //         </NavLink>
    //       </Menu.Item>
    //     </Menu>
    //   </div>
    // </div>
    <div style={{ backgroundColor: "#121217" }}>
      <Menu
        style={{ borderBottom: "1px solid white" }}
        className="container"
        theme="dark"
        mode="horizontal"
      >
        {/* ===== Navbar ===== */}

        <Menu.Item className="sub-navbar-a-koompi-b" key="1">
          <NavLink exact activeStyle={{ color: "white" }} to="/koompi-b-specs">
            <span>Spec</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item className="sub-navbar-a-koompi-b" key="/koompi-e">
          <NavLink exact activeStyle={{ color: "white" }} to="/koompi-b">
            <span>Overview</span>
          </NavLink>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Sub_Navbar_Koompi_B;
