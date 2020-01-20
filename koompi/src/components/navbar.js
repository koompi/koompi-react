import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "antd";
import { Layout, Menu, Breadcrumb, Badge, Icon } from "antd";

const { Header, Content, Footer } = Layout;

function Navbar(props) {
  return (
    <React.Fragment>
      <Header className="header">
        <div className="container">
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["/"]}
            selectedKeys={["/"]}
          >
            <Menu.Item key="/">
              <img className="logo" src="./img/koompi-sym-01.png" />
              <NavLink exact activeStyle={{ color: "white" }} to="/"></NavLink>
            </Menu.Item>

            {/* ===== Navbar ===== */}
            <Menu.Item className="koompi" key="4">
              <NavLink exact activeStyle={{ color: "white" }} to="/shop/bag">
                <Badge>
                  <Icon type="shopping-cart" className="shopping-cart-icon" />
                </Badge>
              </NavLink>
            </Menu.Item>
            <Menu.Item className="koompi" key="1">
              <NavLink exact activeStyle={{ color: "white" }} to="/Koompi-b">
                <span>KOOMPI B</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item className="koompi" key="/koompi-e">
              <NavLink exact activeStyle={{ color: "white" }} to="/koompi-e">
                <span>KOOMPI E</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item className="koompi">
              <NavLink exact activeStyle={{ color: "white" }} to="/koompi-os">
                <span>KOOMPI OS</span>
              </NavLink>
            </Menu.Item>
          </Menu>
        </div>
      </Header>
    </React.Fragment>
  );
}

export default Navbar;
