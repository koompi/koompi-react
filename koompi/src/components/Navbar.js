import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
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
              <img className="logo" src="./img/Koompi-White.png" />
              <Link to="/"></Link>
            </Menu.Item>

            {/* ===== Navbar ===== */}
            <Menu.Item className="koompi" key="4">
              <Link to="/shop/bag">
                <Badge>
                  <Icon type="shopping-cart" className="shopping-cart-icon" />
                </Badge>
              </Link>
            </Menu.Item>
            <Menu.Item className="koompi" key="1">
              <Link to="/KoompiB">
                <span>KOOMPI B</span>
              </Link>
            </Menu.Item>
            <Menu.Item className="koompi" key="/koompi-e">
              <Link to="/koompi-e">
                <span>KOOMPI E</span>
              </Link>
            </Menu.Item>
            <Menu.Item className="koompi" key="4">
              <span>KOOMPI OS</span>
            </Menu.Item>
          </Menu>
        </div>
      </Header>
    </React.Fragment>
  );
}

export default Navbar;
